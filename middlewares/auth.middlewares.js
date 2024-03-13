
import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";
import projectModel from "../models/adminModels/project.model.js";
import fileuploadModel from "../models/adminModels/fileuploadModel.js";
import { notificationForUser } from "../controllers/notification/notification.controller.js";
import cron from "node-cron";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.auth ||
      req.header("Authorization")?.replace("Bearer", "").trim();
    ;
    if (!token) {
      return responseData(
        res,
        "",
        401,
        false,
        "Unauthorized: No token provided"
      );
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
 
   
    const user = await registerModel.findById(decodedToken?.id);


    if (!user) {
      return responseData(res, "", 401, false, "Unauthorized: User not found");
    }
req.user = user
    next(); // Proceed to the next 
  } catch (err) {
    console.error("JWT Verification Error:", err);
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }
};

export const checkAvailableUserIsAdmin = async(req,res,next) =>{
  try{
    const token = req.cookies?.auth ||
      req.header("Authorization")?.replace("Bearer", "").trim();
    ;
    if (!token) {
      return responseData(
        res,
        "",
        401,
        false,
        "Unauthorized: No token provided"
      );
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);


    const user = await registerModel.findById(decodedToken?.id);
    if(user.role ==='ADMIN')
    {
      next();
    }
    else{
      cron.schedule(" 0 0 * * *", async () => {
        // This cron pattern runs the job at 00:00 every day
        try {

          await notificationForUser(req, res, user.username)
          console.log("Notification cron job executed successfully");
        } catch (error) {
          console.error("Error executing notification cron job:", error);
        }
      });
    
      
        let userData = [];
        let projects = [];
        let projectData = [];
        let NotificationData = [];
        let execution = [];
        let design = [];
        let completed = [];
        let archive = [];
        let MomData = [];


        const Projects = await projectModel.find({}).sort({ createdAt: -1 });
        for (let i = 0; i < Projects.length; i++) {
          if (Projects[i].project_status == "executing") {
            execution.push(projects[i]);
          }
          if (Projects[i].project_status == "designing") {
            design.push(Projects[i]);
          }
          if (Projects[i].project_status == "completed") {
            completed.push(Projects[i]);
          }
        }



        for (const item of user.data[0].projectData) {
          let find_project = await projectModel.findOne({ project_id: item.project_id });
          if (find_project) {
            let find_file = await fileuploadModel.findOne({ project_id: item.project_id });
            if (find_file) {
              projectData.push(find_file);
            }
            if (find_project.mom.length !== 0) {
              // console.log(find_project.mom)
              for (let j = 0; j < find_project.mom.length; j++) {
                MomData.push({
                  project_id: find_project.project_id,
                  project_name: find_project.project_name,
                  mom_id: find_project.mom[j].mom_id,
                  client_name: find_project.client[0].client_name,
                  location: find_project.mom[j].location,
                  meetingDate: find_project.mom[j].meetingdate,
                })

              }
            }
            projects.push(find_project);


          }

        }
      
        let notification_push = await user.data[0].notificationData.forEach(element => {
          NotificationData.push(element)

        });

       
        const response = {
          total_Project: Projects.length,
          Execution_Phase: execution.length,
          Design_Phase: design.length,
          completed: completed.length,
          active_Project: Projects.length - completed.length,
          projects,
          projectData,
          NotificationData,
          MomData
        };
        // console.log(userData)
        
        responseData(res, "user data found", 200, true, "", response)
    
    }
  }
  catch(err)
  {
    console.log(err)
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }

}









