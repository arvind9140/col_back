// import { AvailableUserRoles } from "../constants.js";
// import { User } from "../models/userModels/users.model.js";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// import { responseData } from "../utils/respounse.js";

// dotenv.config();

// export const verifyJWT = async (req, res, next) => {
//   const token =
//     req.cookies?.accessToken ||
//     req.header("Authorization")?.replace("Bearer", "").trim();

//   if (!token) {
//     console.log("No token found.");
//     responseData(res, "", 401, false, "Unauthorized request");
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//     const user = await User.findById(decodedToken?._id).select(
//       "-password -refreshToken"
//     );

//     if (!user) {
//       console.log("Invalid user.");
//       responseData(res, "", 401, false, "Invalid access token");
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("Error:", error);
//     responseData(res, "", 401, false, error?.message || "Invalid access token");
//   }
// };

// /**
//  *
//  * @description Middleware to check logged in users for unprotected routes. The function will set the logged in user to the request object and, if no user is logged in, it will silently fail.
//  *
//  * `NOTE: THIS MIDDLEWARE IS ONLY TO BE USED FOR UNPROTECTED ROUTES IN WHICH THE LOGGED IN USER'S INFORMATION IS NEEDED`
//  */
// export const getLoggedInUserOrIgnore = async (req, res, next) => {
//   const token =
//     req.cookies?.accessToken ||
//     req.header("Authorization")?.replace("Bearer ", "");
//   console.log("Hello");

//   try {
//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const user = await User.findById(decodedToken?._id).select(
//       "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
//     );
//     req.user = user;
//     next();
//   } catch (error) {
//     // Fail silently with req.user being falsy
//     next();
//   }
// };

// /**
//  * @param {AvailableUserRoles} roles
//  * @description
//  * * This middleware is responsible for validating multiple user role permissions at a time.
//  * * So, in future if we have a route which can be accessible by multiple roles, we can achieve that with this middleware
//  */
// export const verifyPermission =
//   (roles = []) =>
//   async (req, res, next) => {
//     if (!req.user?._id) {
//       //   throw new ApiError(401, "Unauthorized request");
//       responseData(res, "", 401, false, "Unauthorized request");
//     }
//     if (roles.includes(req.user?.role)) {
//       next();
//     } else {
//       responseData(
//         res,
//         "",
//         403,
//         false,
//         "You are not allowed to perform this action"
//       );
//     }
//   };

// export const avoidInProduction = async (req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     next();
//   } else {
//     // throw new ApiError(
//     //   403,
//     //   "This service is only available in the local environment. For more details visit: https://github.com/hiteshchoudhary/apihub/#readme"
//     // );
//     responseData(
//       res,
//       "",
//       403,
//       false,
//       "This service is only available in the local environment."
//     );
//   }
// };
// import jwt from "jsonwebtoken";

// export const verifyJWT = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   console.log(authHeader)
//   const token = authHeader && authHeader.split(" ")[1];
//   console.log(token)

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized - Missing token" });
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Forbidden - Invalid token" });
//     }

//     req.user = user;
//     next();
//   });
// };

import jwt from "jsonwebtoken";
import { responseData } from "../utils/respounse.js";
import registerModel from "../models/usersModels/register.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.auth;
    if (!token) {
      return responseData(
        res,
        "",
        401,
        false,
        "Unauthorized: No token provided"
      );
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Add the decoded user information to the request object for further use
    req.user = decoded;
    // Check if the user exists in the database
    const user = await registerModel.find({ email: decoded.email });
    console.log("User from database:", user);

    if (!user) {
      return responseData(res, "", 401, false, "Unauthorized: User not found");
    }

    next(); // Proceed to the next middleware
  } catch (err) {
    console.error("JWT Verification Error:", err);
    return responseData(res, "", 401, false, "Unauthorized: Invalid token");
  }
};
