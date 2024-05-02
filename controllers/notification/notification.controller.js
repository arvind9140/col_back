import Notification from "../../models/adminModels/notification.model.js";
import projectModel from "../../models/adminModels/project.model.js";
import leadModel from "../../models/adminModels/leadModel.js";
import { responseData } from "../../utils/respounse.js";

import notificationModel from "../../models/adminModels/notification.model.js";
import cron from "node-cron";
import registerModel from "../../models/usersModels/register.model.js";

function generatedigitnumber() {
  const length = 6;
  const charset = "0123456789";
  let password = "";
  for (let i = 0; i < length; ++i) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}



export const notificationForUser = async (req, res, user_name) => {
  try {
    const find_user = await registerModel.findOne({ username: user_name, status: true });
    if (find_user) {
      for (const item of find_user.data[0].projectData) {
        let find_notification = await notificationModel.find({ itemId: item.project_id });

        if (find_notification.length > 0) {

          for (let i = 0; i < find_notification.length; i++) {
            const add_notification_in_user = await registerModel.findOneAndUpdate(
              { username: user_name },
              {
                $push: {
                  "data.$[outer].notificationData": find_notification[i]
                }
              },
              {
                arrayFilters: [{ "outer.notificationData": { $exists: true } }],
                new: true // Return the modified document
              }
            );

          }

        }


      }
      delete_notification_for_user(req, res, user_name)
    }

  }
  catch (error) {

  }

}

const delete_notification_for_user = async (req, res, user_name) => {
  try {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const deletionResults = await registerModel.updateOne(
      { username: user_name },
      {
        $pull: {
          "data.$[outer].notificationData": {
            status: true,
            createdAt: { $lt: fourteenDaysAgo }
          }
        }
      },
      {
        arrayFilters: [{ "outer.notificationData.status": true }]
      }
    );
    // console.log(`${deletionResults.deletedCount} notifications deleted successfully.`);
  } catch (err) {
    console.log("Error deleting notifications:", err);
    // responseData(res, "", 500, false, "Error deleting notifications");
  }
}







const notification = async (req, res) => {
  try {
    const currentDate = new Date();

    const projects = await projectModel.find({});

    const notificationData = {
      approachingProjects: [],
      overdueProjects: [],
      outdatedLeads: [],
    };

    projects.forEach((project) => {
      const projectEndDate = new Date(project.project_end_date);
      const daysRemaining = Math.ceil(
        (projectEndDate - currentDate) / (1000 * 60 * 60 * 24)
      );

      // Only process projects whose status is not completed
      if (project.project_status !== "completed") {
        if (projectEndDate >= currentDate) {
          // Project end date is today or in the future
          if (daysRemaining <= 7 && daysRemaining > 0) {
            // Project end date is approaching
            const approachingProjectNotification = new Notification({
              type: "project",
              itemId: project.project_id,
              notification_id:generatedigitnumber(),
              message: `Approaching project deadline: ${project.project_name} (${daysRemaining} days remaining until project completion)`,
              status: false,
            });
            notificationData.approachingProjects.push(
              approachingProjectNotification
            );
          }
          else if (daysRemaining == 0) {
            const approachingProjectNotification = new Notification({
              type: "project",
              itemId: project.project_id,
              notification_id: generatedigitnumber(),
              message: `Approaching project: ${project.project_name} ( project end date today. Please check )`,
              status: false,
            });
            notificationData.approachingProjects.push(
              approachingProjectNotification
            );


          }
        } else if (projectEndDate < currentDate) {

          // Project end date is in the past (overdue)
          const daysExceeded = Math.ceil(
            (currentDate - projectEndDate) / (1000 * 60 * 60 * 24)
          );
          const overdueProjectNotification = new Notification({
            type: "project",
            itemId: project.project_id,
            notification_id: generatedigitnumber(),
            message: `Overdue project: ${project.project_name} (Exceeded by ${daysExceeded} days)`,
            status: false,
          });
          notificationData.overdueProjects.push(overdueProjectNotification);
        }
      }
    });

    const leads = await leadModel.find({}); // Fetch all leads

    const outdatedLeads = leads.filter((lead) => {
      // Check if lead date is not updated after seven days
      const lastUpdated = new Date(lead.updated_date);
      const currentDate = new Date();
      const daysRemaining = Math.ceil(
        (lastUpdated - currentDate) / (1000 * 60 * 60 * 24)
      );

      if (lead.status === "followUp" || lead.status === "interested") {
        if (daysRemaining == 1) {
          const outdatedLeadNotification = new Notification({
            type: "lead",
            itemId: lead.lead_id,
            notification_id: generatedigitnumber(),
            message: `Please check this lead named ${lead.name} for the next update. Only 1 day left.`,
            status: false,
          });
          notificationData.outdatedLeads.push(outdatedLeadNotification);
        }
        if (daysRemaining == 0) {
          const outdatedLeadNotification = new Notification({
            type: "lead",
            itemId: lead.lead_id,
            notification_id: generatedigitnumber(),
            message: `Please check this lead named ${lead.name} for the next update. Today is the meeting date.`,
            status: false,
          });
          notificationData.outdatedLeads.push(outdatedLeadNotification);
        }
      }

    });

    // Save notifications in the database
    const savedNotifications = await Notification.insertMany([
      ...notificationData.approachingProjects,
      ...notificationData.overdueProjects,
      ...notificationData.outdatedLeads,
    ]);






  } catch (error) {
    console.error("Error fetching notification data:", error);
    responseData(res, "", 500, false, "Error fetching notification data");
  }
};

const deleteNotification = async (req, res) => {
  try {

    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    // Find notifications that meet the specified conditions
    const notificationsToDelete = await Notification.find({
      status: true,
      createdAt: { $lt: fourteenDaysAgo },
    }).lean();

    const deletionResults = await Notification.deleteMany({
      _id: { $in: notificationsToDelete.map(notification => notification._id) },
    });



    console.log(`${deletionResults.deletedCount} notifications deleted successfully.`);

  } catch (error) {

    console.error("Error deleting notifications:", error);
    responseData(res, "", 500, false, "Error deleting notifications");
  }
};

cron.schedule(" 0 0 * * *", async () => {
  // This cron pattern runs the job at 00:00 every day
  try {

    await notification();
    console.log("Notification cron job executed successfully");
  } catch (error) {
    console.error("Error executing notification cron job:", error);
  }
});
cron.schedule(" 0 0 */14 * *", async () => {
  // This cron pattern runs the job at 00:00 every  14 days
  try {
    await deleteNotification();
    console.log("Notification cron job executed successfully");
  } catch (error) {
    console.error("Error executing notification cron job:", error);
  }
});





export const getNotification = async (req, res) => {


  try {
    const userId = req.query.userId;
    const find_user = await registerModel.findOne({ _id: userId })
    if (find_user) {

      if (find_user.role === "ADMIN" || find_user.role === "Senior Architect") {
        const find_notification = await notificationModel.find({})
        if (find_notification.length > 0) {
          const response = {
            NotificationData: find_notification.reverse()
          }
          responseData(res, "notification Data", 200, true, "", response)
        }
        else {
          responseData(res, "", 404, false, "No notification found")
        }
      }
    }
    else {
      responseData(res, "", 404, false, "User not found")
    }

  }
  catch (error) {
    console.error("Error fetching notification data:", error);
    responseData(
      res,
      "",
      500,
      false,
      "Error fetching notification data"
    );
  }

}

export const updateNotification = async (req, res) => {
  try {
    const userId = req.body.userId;
    const notification_id = req.body.notification_id;
    const type = req.body.type;


    if (!userId) {
      return responseData(res, "", 400, false, "User Id is required");
    }
    else {
      const find_user = await registerModel.findById(userId);
      if (!find_user) {
        return responseData(res, "", 404, false, "User not found");
      }
      else {
        if (find_user.role === "ADMIN" || find_user.role === "SENIOR ARCHITECT") {
          if (type === "One") {
            const notification = await Notification.findOneAndUpdate(
            {notification_id:notification_id},
              { status: true },
              { new: true }
            );
           

            if (!notification) {

              const notification1 = await registerModel.findOneAndUpdate(
                { _id: userId, "data.notificationData.notification_id": notification_id },
                { $set: { "data.$[elem].notificationData.$[inner].status": true } },
                {
                  arrayFilters: [
                    { "elem.notificationData": { $exists: true } },
                    { "inner.notification_id": notification_id }
                  ],
                  new: true
                }
              );
             
              if (!notification1) {
                return responseData(res, "", 404, false, "Notification not found");
              }
              else {
                // Respond with the updated notification
                responseData(res, "Notification updated successfully", 200, true, "");
              }


            }
            else {
              // Respond with the updated notification
              responseData(res, "Notification updated successfully", 200, true, "");
            }


          } else if (type === "All") {
            // Update status for all notifications
            const { nModified } = await Notification.updateMany(
              {},
              { status: true }
            );

            if (nModified === 0) {
              return responseData(res, "", 404, false, "No notifications found");
            }

            // Respond with success message
            responseData(
              res,
              "All notifications updated successfully",
              200,
              true,
              ""
            );
          } else {
            responseData(res, "", 400, false, "Invalid type");
          }
        }


        else {

          if (type === "One") {
            
            try {
              const result = await registerModel.findOneAndUpdate(
                { _id: userId, "data.notificationData.notification_id": notification_id },
                { $set: { "data.$[elem].notificationData.$[inner].status": true } },
                {
                  arrayFilters: [
                    { "elem.notificationData": { $exists: true } },
                    { "inner.notification_id": notification_id }
                  ]
                }
              );
              if(result)
              {
                responseData(res, "", 200, true, "Notification updated successfully");  
              }

              
            } catch (error) {
              console.error(`An error occurred: ${error}`);
            }



          } else if (type === "All") {
            const notification = await registerModel.findOneAndUpdate(
              { "_id": userId },
              { "$set": { "data.$[elem].notificationData.$[inner].status": true } },
              {
                arrayFilters: [
                  { "elem.notificationData": { $exists: true } },
                  { "inner.status": false }
                ],
                new: true // return the updated document
              }
            );

            if (!notification) {
              return responseData(res, "", 404, false, "Notification not found");
            }

            responseData(res, "All notifications updated successfully", 200, true, "");
          } else {
            responseData(res, "", 400, false, "Invalid type");
          }
        }
      }
    }
  } catch (error) {
    console.error("Error updating notifications:", error);
    responseData(res, "", 500, false, "Error updating notifications");
  }
}
