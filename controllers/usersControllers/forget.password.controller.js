import {
  onlyEmailValidation,
  onlyPasswordPatternValidation,
} from "../../utils/validation.js";
import { responseData } from "../../utils/respounse.js";
import registerModel from "../../models/usersModels/register.model.js";
import Randomstring from "randomstring";
import otpForForgetpassModel from "../../models/usersModels/otp.forget.password.model.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import Jwt from "jsonwebtoken";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "a72302492@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

export const sendotpforgetpassword = async (req, res) => {
  const email = req.body.email;


  if (!onlyEmailValidation(email)) {
    responseData(res, "", 401, false, "Invalid email address");
  }

  try {
    
    //checking email is registered or not
    const user = await registerModel.find({ email:email , status:true});
    if (user.length < 1) {
      return responseData(res,"", 404,false, "Email not registered");
    }
    if (user.length > 0) {
     const delete_otp = await otpForForgetpassModel.findOneAndDelete({ email:email });
      const OTP = Randomstring.generate({
        length: 6,
        charset: "numeric",
      });
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(OTP, salt, function (err, hash) {
          /////// Add here code Otp valid only for 30 mins
          const otpData = new otpForForgetpassModel({
            email: req.body.email,
            otp: hash,
            token: "",
            status: false,
          });
          otpData.save().catch((error) => {
            responseData(
              res,
              "",
              401,
              false,
              "Something is wrong OTP hash not generate.Try after sometime."
            );
          });
        });
      });
      const mailOptions = {
        from: "a72302492@gmail.com",
        to: email,
        subject: "Email Verification",
        html: `<p>  Your verification code is :-  ${OTP}</p>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          responseData(res, "", 400, false, "Failed to send email");
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
  } catch (err) {
    responseData(res, "", 500, false, err.message);
  }
};

export const otpVerification = async (req, res) => {
  const getOtp = req.body.otp;
  const getEmail = req.body.email;
  if (!onlyEmailValidation(getEmail)) {
    responseData(res, "", 401, false, "Invalid email address");
  } else if (getOtp.length != 6) {
    responseData(res, "", 401, false, "Please enter six digit OTP.");
  } else {
    otpForForgetpassModel
      .find({ email: getEmail })
      .exec()
      .then((data) => {
        if (data.length < 1) {
          responseData(res, "", 404, false, "Otp not found in database");
        }
        if (data.length > 0) {
          if (data[0].status === false) {
            bcrypt.compare(getOtp, data[0].otp, (err, result) => {
              if (!result) {
                responseData(res, "", 401, false, "OTP not matched");
              }
              if (result) {
                const Token = Jwt.sign(
                  {
                    email: data[0].email,
                  },
                  process.env.ACCESS_TOKEN_SECRET,
                  {
                    expiresIn: "24h",
                  }
                );
                otpForForgetpassModel.findByIdAndUpdate(
                  data[0]._id,
                  { status: true, token: Token },
                  (err, docs) => {
                    if (err) {
                      console.log("after otp match status not change,", err);
                    }
                  }
                );
                responseData(res, "otp matched", 200, true, "", {
                  token: Token,
                });
              }
            });
          } else {
            responseData(res, "", 401, false, "enter valid otp");
          }
        }
      })
      .catch((err) => {
        responseData(
          res,
          "",
          500,
          false,
          "Something is wrong verifyed data not inserted"
        );
      });
  }
};

const compareTwoToken = (token1, token2) => {
  if (token1 == token2) return true;
  else return false;
};
///////// function for reset password /////////////
async function resetPassword(res, email, token, newPassword, userId) {
  try {
    const data = await otpForForgetpassModel.find({ email: email }).exec();

    if (data.length < 1) {
      return responseData(
        res,
        "",
        401,
        false,
        "OTP not present in DB for matching"
      );
    }

    if (
      data.length > 0 &&
      data[0].status === true &&
      compareTwoToken(token, data[0].token)
    ) {
      if (onlyPasswordPatternValidation(newPassword)) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await registerModel.findByIdAndUpdate(userId, {
          password: hashedPassword,
        });

        await otpForForgetpassModel.findByIdAndDelete(data[0]._id);

        return responseData(
          res,
          "Password updated successfully",
          200,
          true,
          ""
        );
      } else {
        return responseData(res, "", 401, false, "Enter a strong password");
      }
    } else {
      return responseData(
        res,
        "",
        401,
        false,
        "OTP verification status and token not matched"
      );
    }
  } catch (err) {
    console.error(err);
    return responseData(
      res,
      "",
      401,
      false,
      "Server problem, OTP matching failed"
    );
  }
}

export const changePassController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const token = req.body.token;
  if (onlyEmailValidation(email)) {
    registerModel
      .find({ email: email })
      .exec()
      .then((result) => {
        if (result.length < 1) {
          responseData(res, "", 401, false, "user not exist");
        }
        if (result.length > 0) {
          //// call function for reset password /////////

          resetPassword(res, email, token, password, result[0]._id);
        }
      })
      .catch((err) => {
        responseData(res, "", 401, false, err);
      });
  } else {
    responseData(res, "", 401, false, "Invalid email");
  }
};
