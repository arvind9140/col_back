import Notification from "../../models/adminModels/notification.model.js";
import projectModel from "../../models/adminModels/project.model.js";
import leadModel from "../../models/adminModels/leadModel.js";
import { responseData } from "../../utils/respounse.js";

import notificationModel from "../../models/adminModels/notification.model.js";
import cron from "node-cron";
import registerModel from "../../models/usersModels/register.model.js";





export const notificationByUser = async (req, res, user_name) => {
  try {
    const find_user = await registerModel.findOne({ username: user_name });
    if(find_user)
    {
      console.log(find_user)
    }
    
  }
  catch (error) {
    
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
          if (daysRemaining <= 7 && daysRemaining >0) {
            // Project end date is approaching
            const approachingProjectNotification = new Notification({
              type: "project",
              itemId: project.project_id,
              message: `Approaching project: ${project.project_name} (${daysRemaining} days remaining from project end date)`,
              status: false,
            });
            notificationData.approachingProjects.push(
              approachingProjectNotification
            );
          }
          else if(daysRemaining ==0)
          {
             const approachingProjectNotification = new Notification({
               type: "project",
               itemId: project.project_id,
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

        if(lead.status === "followUp" || lead.status === "interested")
        {
             if (daysRemaining == 1) {
               const outdatedLeadNotification = new Notification({
                 type: "lead",
                 itemId: lead.lead_id,
                 message: `Please check this lead named ${lead.name} for the next update. Only 1 day left.`,
                 status: false,
               });
               notificationData.outdatedLeads.push(outdatedLeadNotification);
             }
             if (daysRemaining == 0) {
               const outdatedLeadNotification = new Notification({
                 type: "lead",
                 itemId: lead.lead_id,
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
cron.schedule("0 0 */14 * *", async () => {
  // This cron pattern runs the job at 00:00 every  14 days
  try {
    await deleteNotification();
    console.log("Notification cron job executed successfully");
  } catch (error) {
    console.error("Error executing notification cron job:", error);
  }
});





export const getNotification = async(req,res) =>{

    try{
        const find_notification = await notificationModel.find({})
        if(find_nitification.length>0)
        {
const response ={
  NotificationData:find_notification
}
            responseData(res,"notification Data", 200, true,"", response)
        }
        else
        {
            responseData(res,"", 404, false, "No notification found")
        }

    }
    catch(error)
    {
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
    const notification_id = req.body.notification_id;
    const type  = req.body.type;

    if (type === "One") {
      const notification = await Notification.findByIdAndUpdate(
        notification_id,
        { status: true },
        { new: true }
      );

      if (!notification) {
        return responseData(res, "", 404, false, "Notification not found");
      }

      // Respond with the updated notification
      responseData(res, "Notification updated successfully", 200, true, "");
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
  } catch (error) {
    console.error("Error updating notifications:", error);
    responseData(res, "", 500, false, "Error updating notifications");
  }
};
