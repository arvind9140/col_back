import { Router } from "express";
import {
  
  getCurrentUser,
  
  loginUser,
  
  refreshAccessToken,
  registerUser,
  
} from "../../controllers/userControllers/users.controller.js";
import {
  verifyJWT,
 
} from "../../middlewares/auth.middlewares.js";
import {

  userLoginValidator,
  userRegisterValidator,
  
} from "../../validators/apps/auth/user.validators.js";
import { validate } from "../../validators/validate.js";


const router = Router();

// Unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// Secured routes
// router
//   .route("/avatar")
//   .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/current-user").get(verifyJWT, getCurrentUser);




export default router;
