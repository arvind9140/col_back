
import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";
import loginModel from "../models/usersModels/login.model.js";


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



