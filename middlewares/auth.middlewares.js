
import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";
import loginModel from "../models/usersModels/login.model.js";
import projectModel from "../models/adminModels/project.model.js";
import fileuploadModel from "../models/adminModels/fileuploadModel.js";


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
      let projectData =[];
      let fileData =[];

      for (const item of user.data) {
        let find_project = await projectModel.findOne({ project_id: item.project_id });
        let find_file = await fileuploadModel.findOne({project_id:item.project_id});
        projectData.push(find_project);
        fileData.push(find_file);
      }

      userData.push({ projectData, fileData });
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





