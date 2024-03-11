import emailverifyModel from "../../models/usersModels/emailverify.model.js";
import otpModel from "../../models/usersModels/otp.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Randomstring from "randomstring";
import jwt from "jsonwebtoken";
import { responseData } from "../../utils/respounse.js";
import registerModel from "../../models/usersModels/register.model.js";
import loginModel from "../../models/usersModels/login.model.js";
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

export const sendOtp = async (req, res) => {
  const user_name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirmpassword;
  const role = req.body.role;
  if (!email) {
    responseData(res, "", 400, false, "Email is required");
  }
  if (!validator.isEmail(email)) {
    responseData(res, "", 400, false, " Invalid email!");
  } else {
    try {
      const checkInfo = await registerModel.find({
        $and: [{ email: email }, { username: user_name }],
      });
      if (checkInfo.length > 0) {
        responseData(
          res,
          "",
          400,
          false,
          "This email  or username Already registered",
          []
        );
      }
      if (checkInfo.length < 1) {
        const checkVerifiedEmail = await emailverifyModel.find({
          $and: [{ email: email }, { status: true }],
        });
        if (checkVerifiedEmail.length > 0) {
          responseData(res, "", 400, false, "This email is already verified");
        }
        if (checkVerifiedEmail.length < 1) {
          await emailverifyModel.findOneAndDelete({
            $and: [{ email: email }, { status: false }],
          });
          await otpModel.findOneAndDelete({ email: email });

          const otp = Randomstring.generate({
            length: 6,
            charset: "numeric",
          });
          bcrypt.hash(otp, 10, async function (err, hash) {
            if (err) {
              responseData(res, "", 400, false, "Something went wrong", []);
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
                subject: "Email Verification",
                html: `<p>  Your verrification code is :-  ${otp}</p>`,
              };
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  responseData(res, "", 400, false, "Failed to send email");
                } else {
                  const emailverify = new emailverifyModel({
                    email: email,
                    status: false,
                  });
                  emailverify.save();
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
      if (otpdata.length < 1) {
        responseData(res, "", 404, false, "OTP not found");
      }
      if (otpdata.length > 0) {
        let otpCheck = bcrypt.compare(otp, otpdata[0].otp);
        if (!otpCheck) {
          responseData(res, "", 401, false, "Wrong OTP!");
        } else {
          const updatestatus = await emailverifyModel.find({ email: email });
          if (updatestatus.length > 0) {
            await emailverifyModel.findOneAndUpdate(
              { email: email },
              { $set: { status: true } }
            );
            await otpModel.findOneAndDelete({
              email: email,
            });

            responseData(res, `OTP Verify successfully !`, 200, true, "");
          }
          if (updatestatus.length < 1) {
            responseData(res, "", 404, false, "not found email");
          }
        }
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};

export const registerUser = async (req, res) => {
  const user_name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirmpassword;
  const role = req.body.role;

  if (user_name.length < 3) {
    responseData(res, "", 400, false, "User name must be 3 characters");
  } else if (email.length < 5 || !validator.isEmail(email)) {
    responseData(res, "", 400, false, "Invalid email");
  } else if (password.length < 6) {
    responseData(res, "", 400, false, "Password must be 6 characters");
  } else if (!confirm_password) {
    responseData(res, "", 400, false, "Confirm password is required");
  } else if (confirm_password !== password) {
    responseData(res, "", 400, false, "Password does not match");
  } else if (!role) {
    responseData(res, "", 400, false, "Please select a role");
  } else {
    try {
      const checkemail = await registerModel.find({ email: email });

      if (checkemail.length > 0) {
        responseData(res, "", 400, false, "Email already exists");
      }

      if (checkemail.length < 1) {
        const checkVerifiedEmail = await emailverifyModel.find({
          $and: [{ email: email }, { status: true }],
        });

        if (checkVerifiedEmail.length < 1) {
          responseData(res, "", 400, false, "Email not verified");
        }

        if (checkVerifiedEmail.length > 0) {
          bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
              responseData(res, "", 400, false, "Something went wrong");
            } else {
              const register = new registerModel({
                username: user_name,
                userProfile: "",
                email: email,
                password: hash,
                status: true,
                role: role,
              });

              const result = await register.save();

              if (result) {
                const token = jwt.sign(
                  { userId: result._id, email: result.email },
                  process.env.ACCESS_TOKEN_SECRET,
                  { expiresIn: "1d" } // You can adjust the expiration time
                );

                // Include the access token in the response headers
                res.header("Authorization", `Bearer ${token}`);

                // Store access token in cookies
                res.cookie("auth", token, {
                  httpOnly: true,
                  maxAge: 24 * 60 * 60 * 1000, // 1 day
                });

                // Store access token in the database (you can adjust this based on your database schema)
                const login = new loginModel({
                  userID: result._id,
                  token: token,
                  logInDate: new Date(),
                });
                login.save();

                responseData(
                  res,
                  "Registration successful",
                  200,
                  true,
                  "",
                  result
                );
              } else {
                responseData(res, "", 400, false, "Registration failed");
              }
            }
          });
        }
      }
    } catch (err) {
      responseData(res, "", 500, false, "Internal Server Error", err.message);
    }
  }
};
