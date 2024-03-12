
import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";
import loginModel from "../models/usersModels/login.model.js";
import projectModel from "../models/adminModels/project.model.js";
import fileuploadModel from "../models/adminModels/fileuploadModel.js";
import notificationModel from "../models/adminModels/notification.model.js";


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
      responseData(res,"",401,false,"You are not admin")
    }
  }
  catch(err)
  {
    console.log(err)
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }

}

export const checkAvailableUserIsNotAdmin = async (req, res, next) => {
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
    
    if (user.role !== 'ADMIN') {
      let userData = [];
      let ProjectData =[];
      let FileData =[];
      let NotificationData=[];

      for (const item of user.data[0].projectData) {
        let find_project = await projectModel.findOne({ project_id: item.project_id });
        if(find_project)
        {
          let find_file = await fileuploadModel.findOne({ project_id: item.project_id });
          if(find_file)
          {
            FileData.push(find_file);
          }
          let find_notification = await notificationModel.findOne({ itemId: item.project_id });
          if(find_notification)
          {
            NotificationData.push(find_notification);
          }
          ProjectData.push(find_project);
          
        
        }
       
      }
      let notification_push = await user.data[0].notificationData.forEach(element => {
        NotificationData.push(element)
        
      });

      userData.push({ ProjectData, FileData,NotificationData });
      // console.log(userData)
      responseData(res, "user data found", 200, true,"", userData)


    }
    else {
     next();
    }
  }
  catch (err) {
    console.log(err)
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }

}





