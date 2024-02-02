import { Router } from "express";
import { registerUser, sendOtp, verifyOtp } from "../../controllers/registerControllers/register.controller.js";
const router = Router();

router.route("/send/otp").post(sendOtp);
router.route("/verify/otp").post(verifyOtp);
router.route("/register").post(registerUser);


export default router;
