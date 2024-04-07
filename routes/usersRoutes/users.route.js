import { Router } from "express";
import { registerUser, sendOtp, verifyOtp } from "../../controllers/usersControllers/register.controller.js";
import {  checkAvailableUserIsAdmin, verifyJWT } from "../../middlewares/auth.middlewares.js";
import { login } from "../../controllers/usersControllers/login.controller.js";
import { logout } from "../../controllers/usersControllers/logout.controller.js";
import { changePassController, otpVerification, sendotpforgetpassword } from "../../controllers/usersControllers/forget.password.controller.js";
import { getUserData } from "../../controllers/usersControllers/getuserdata.controller.js";
import { profileupload } from "../../controllers/usersControllers/profile.image.controller.js";
import { updateStatus,  updateStatusClient } from "../../controllers/adminControllers/quotationController/quotation.approval.controller.js";
import { updateStatusAdmin } from "../../controllers/adminControllers/fileUploadController/contract.share.controller.js"
const router = Router();

router.route("/send/otp").post(sendOtp);
router.route("/verify/otp").post(verifyOtp);
router.route("/register").post(registerUser);

router.route("/login").post(login);
router.route("/logout").post(logout)

router.route("/sendotp/forget/password").post( sendotpforgetpassword);
router.route("/verifyotp/forget/password").post(otpVerification);
router.route("/reset/password").post(changePassController);


router.route("/getdata").get(getUserData)
router.route("/profileurl").post(profileupload)

// router.route("/").get(checkAvailableUserIsAdmin)
router.route("/approval/admin/:project_id/:file_id/:status").get(updateStatus)
router.route("/approval/client/:project_id/:file_id/:status").get(updateStatusClient)
router.route("/approval/contract/admin/:lead_id/:fileId/:status").get(updateStatusAdmin)

export default router;
