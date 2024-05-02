
import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";
import projectModel from "../models/adminModels/project.model.js";
import fileuploadModel from "../models/adminModels/fileuploadModel.js";
import { notificationForUser ,getNotification} from "../controllers/notification/notification.controller.js";
import cron from "node-cron";
import leadModel from "../models/adminModels/leadModel.js";


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
    if (user.role === 'ADMIN' || user.role ==='Senior Architect')
    {
      next();
    }
    else if (user.role ==='Jr. Executive HR & Marketing')
    {
      try{
        let templateData = []

        const fileData = await fileuploadModel.find({ type:"template"})
        if(fileData)
        {
          const template= fileData.find((item) => item.files.find((file) =>file.folder_name === "miscellaneous" && file.sub_folder_name_first === "miscellaneous"))
          templateData.push(template)
          const response ={
            templateData
          }
          responseData(res, "user data found", 200, true, "", response)
        }

      }
      catch(err)
      {
        return responseData(res, "", 401, false, "Unauthorized: Invalid token");
      }

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
        let leadData = [];
        let leads =[];
        let execution = [];
        let design = [];
        let completed = [];
        let archive = [];
        let MomData = [];


       
        



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
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].project_status == "executing") {
          execution.push(projects[i]);
        }
        if (projects[i].project_status === "designing") {
          design.push(projects[i]);
          // console.log(design)
        }
        if (projects[i].project_status == "completed") {
          completed.push(projects[i]);
        }
      }
     
      
        let notification_push = await user.data[0].notificationData.forEach(element => {
          NotificationData.push(element)

        });

        for(const item of user.data[0].leadData)
        {
          const find_lead = await leadModel.findOne({ lead_id: item.lead_id })
          if (find_lead){
            const find_files = await fileuploadModel.findOne({ lead_id: item.lead_id })
            if(find_files)
            {
              leadData.push(find_files)
            }
            leads.push(find_lead)


          }
        }

       
        const response = {
          total_Project: projects.length,
          Execution_Phase: execution.length,
          Design_Phase: design.length,
          completed: completed.length,
          active_Project: projects.length - completed.length,
          projects,
          projectData,
          NotificationData,
          MomData,
          leadData,
          leads,

        };
        // console.log(userData)
        
        responseData(res, "user data found", 200, true, "", response)
    
    }
  }
  catch(err)
  {

    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }

};

export const isAdmin = async(req,res,next) =>{

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

    if (user.role === "ADMIN" || user.role ==="Senior Architect")
  {
    next(); // Proceed to the next 
  }
  else{
    return responseData(res, "", 401, false, "Unauthorized: You are not an admin");
  }
   
  } catch (err) {
   
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }
}















