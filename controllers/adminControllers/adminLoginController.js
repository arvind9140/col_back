import adminLoginModel from "../../models/adminModels/adminLoginModel.js";
import otpModel from "../../models/adminModels/otpModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Randomstring from "randomstring";
import { responseData } from "../../utils/respounse.js";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "a72302492@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

const adminLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.email;
  if (!email) {
    responseData(res, "", 400, false, "Email is required");
  }
  if (!password) {
    responseData(res, "", 400, false, "Password is required");
  }
  if (!validator.isEmail(email)) {
    responseData(res, "", 400, false, " Invalid email!");
  } else {
    try {
      const adminInfo = await adminLoginModel.findOne({ email: email });

      if (!adminInfo) {
        responseData(res, "", 200, false, "User does not exist!");
      } else {
        let passCheck = bcrypt.compare(password, adminInfo.password);
        if (passCheck) {
          // Generate OTP and send it to the registered Email ID
          const otpCheck = await otpModel.findOneAndDelete({ email: email });
          const otp = Randomstring.generate({ length: 6, charset: "numeric" });
          bcrypt.hash(otp, 10, async function (err, hash) {
            if (err) {
              responseData(
                res,
                "",
                400,
                false,
                "OTP hash not created try after sometime"
              );
            } else {
              const otpData = new otpModel({
                email: email,
                otp: hash,
                status: false,
              });
              otpData.save();
              const mailOptions = {
                from: "a72302492@gmail.com",
                to: email,
                subject: "email varification",
                html: `<p>  Your varrification code is :-  ${otp}</p>`,
              };
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return res.status(500).json({
                    error: "Failed to send email",
                    details: error.message,
                  });
                } else {
                  responseData(
                    res,
                    `Email has been sent successfully , Please check your email for verfication of account`,
                    200,
                    true,
                    ""
                  );
                }
              });
            }
          });
        }
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};
export default adminLogin;

export const verifyOtp = async (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;
  if (!validator.isEmail(email)) {
    responseData(res, "", 400, false, "Invalid email!");
  }
  if (otp.length != 6) {
    responseData(res, "", 400, false, "Invalid OTP!");
  } else {
    try {
      const otpdata = await otpModel.find({ email: email });
      //   console.log(otpdata[0].otp)
      if (!otpdata) {
        responseData(res, "", 404, false, "OTP not found");
      } else {
        let otpCheck = bcrypt.compare(otp, otpdata[0].otp);
        if (!otpCheck) {
          responseData(res, "", "401", false, "Wrong OTP!");
        } else {
          const otpCheck = await otpModel.findOneAndDelete({ email: email });

          responseData(res, `OTP Varify successfully !`, 200, true, "");
        }
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};
