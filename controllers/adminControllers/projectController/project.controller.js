import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import registerModel from "../../../models/usersModels/register.model.js";
import {
  onlyAlphabetsValidation,
  onlyEmailValidation,
  onlyPhoneNumberValidation,
} from "../../../utils/validation.js";
import notificationModel from "../../../models/adminModels/notification.model.js";
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});



function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

// Function to check if the project is older than 6 months
function isProjectOlderThan6Months(createdDate) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in months
  const diffMonths =
    (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdDate.getMonth());

  // Check if the difference is greater than or equal to 6 months
  return diffMonths >= 6;
}

// Example usage

export const getAllProject = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      responseData(res, "", 400, false, "user id is required");
    } else {
      const check_role = await registerModel.find({ _id: id });
      if (check_role.length > 0) {
       
          let execution = [];
          let design = [];
          let completed = [];
          let archive = [];
          const projects = await projectModel.find({}).sort({ createdAt: -1 });
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].project_status == "executing") {
              execution.push(projects[i]);
            }
            if (projects[i].project_status == "designing") {
              design.push(projects[i]);
            }
            if (projects[i].project_status == "completed") {
              completed.push(projects[i]);
              const createdDate = projects[i].project_end_date;
              const isOlderThan6Months = isProjectOlderThan6Months(createdDate);
              if (isOlderThan6Months) {
                archive.push(isOlderThan6Months);
              }
            }
          }

          const response = {
            total_Project: projects.length,
            Execution_Phase: execution.length,
            Design_Phase: design.length,
            completed: completed.length,
            archive: archive.length,
            active_Project: projects.length - completed.length,
            projects,
          };
          responseData(
            res,
            "projects fetched successfully",
            200,
            true,
            "",
            response
          );
      
      }
      if (check_role.length < 1) {
        responseData(res, "", 404, false, " User not found.", []);
      }
    }
  } catch (error) {
    responseData(res, "", 500, false, "error in fetching projects");
  }
};

export const getSingleProject = async (req, res) => {
  const project_ID = req.query.project_id;
  const id = req.query.id;

  if (!project_ID) {
    responseData(res, "", 404, false, " Project ID is required.", []);
  } else if (!id) {
    responseData(res, "", 404, false, " User ID is required.", []);
  } else {
    try {
      const check_role = await registerModel.find({ _id: id });
      if (check_role.length < 1) {
        responseData(res, "", 404, false, " User not found.", []);
      }
      if (check_role.length > 0) {
       
          const find_project = await projectModel.find({
            project_id: project_ID,
          });
          if (find_project.length > 0) {
            responseData(res, "project found", 200, true, "", find_project);
          }
          if (find_project < 1) {
            responseData(res, "", 404, false, "project not found", []);
          }
       
      }
    } catch (err) {
      responseData(res, "", 500, false, "error in fetching projects", err);
      console.log(err);
    }
  }
};

export const updateProjectDetails = async (req, res) => {
  const project_ID = req.body.project_id;
  const project_status = req.body.project_status;
  const timeline_date = req.body.timeline_date;
  const project_budget = req.body.project_budget;
  const description = req.body.description;
  const designer = req.body.designer;
  const user_name = req.body.user_name;

  if (!project_ID) {
    responseData(res, "", 400, false, " Project ID is required.", []);
  } else if (!timeline_date) {
    responseData(res, "", 400, false, " timeline_date is required.", []);
  } else if (!project_budget) {
    responseData(res, "", 400, false, " project_budget is required.", []);
  } else if (!project_status) {
    responseData(res, "", 400, false, "project status required.", []);
  }
  else if (!designer &&  onlyAlphabetsValidation(designer))
  {
    responseData(res, "", 400, false, "designer name is required.", []);
  }
  else if (!user_name &&  onlyAlphabetsValidation(user_name))
  {
    responseData(res, "", 400, false, "user name is required.", []);
  }

  //  *********** add other validation **********//
  else {
    try {
      const find_user = await registerModel.find
      ({username:user_name})
      if(!find_user)
      {
        responseData(res, "", 400, false, "user not found.", []);
     
      }
      const project_find = await projectModel.find({ project_id: project_ID });
      if (project_find.length > 0) {
        const project_update = await projectModel.findOneAndUpdate(
          { project_id: project_ID },
          {
            $set: {
              project_budget: project_budget,
              project_status: project_status,
              timeline_date: timeline_date,
              description: description,
              designer:designer
            },
          
            $push: {
              project_updated_by:{
                user_name: user_name,
                project_budget: project_budget,
                project_status: project_status,
                timeline_date: timeline_date,
                description: description,
                designer: designer,
                updated_date: new Date()

              }
            
            },

          },
         
          { new: true, useFindAndModify: false }
        );
        const newNotification = new notificationModel({
          type: "lead",
          notification_id: generateSixDigitNumber(),
          itemId: project_ID,
          message: `project  updated: Project name ${project_find[0].project_name}  update  on  ${new Date()}.`,
          status: false,
        });
        await newNotification.save();


        responseData(
          res,
          "Project Data Updated",
          200,
          true,
          "",
        );
      }
      if (project_find.length < 1) {
        responseData(res, "", 404, false, "Project Data Not Found", []);
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};


