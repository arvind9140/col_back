import loginModel from "../../models/usersModels/login.model.js";
import registerModel from "../../models/usersModels/register.model.js";
import { responseData } from "../../utils/respounse.js";
import bcrypt from "bcrypt";
import validator from "validator";
import Jwt from "jsonwebtoken";

const insertLogInData = async (res, user) => {
  // console.log("hello from the usertype1",userType)
  const token = Jwt.sign(
    { email: user[0].email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
  res.cookie("auth", token, { maxAge: 604800000, httpOnly: true });
  // res.cookie("role", user[0].role);
  const loginUserData = new loginModel({
    userID: user[0]._id,
    token: token,
    logInDate: new Date(),
  });

  loginUserData
    .save()
    .then((_result) => {
      responseData(res, "", 200, true, "login successfully", {
        userID: user[0]._id,
        token,
        role: user[0].role,
      });
    })
    .catch((_err) => {
      responseData(res, "", 500, false, "Something is wrong please try again");
    });
};
export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirmpassword;
  if (!email) {
    responseData(res, "", 400, false, "Email is required");
  } else if (!validator.isEmail(email)) {
    responseData(res, "", 400, false, "Invalid email");
  } else if (!password) {
    responseData(res, "", 400, false, "Password is required");
  } else if (!confirm_password) {
    responseData(res, "", 400, false, "Confirm password is required");
  } else if (password != confirm_password) {
    responseData(
      res,
      "",
      400,
      false,
      "Password and confirm password does not match"
    );
  } else {
    try {
      const user = await registerModel.find({ email: email });
      if (user.length < 1) {
        responseData(res, "", 400, false, "User not found");
      }
      if (user.length > 0) {
        bcrypt.compare(password, user[0].password, (_err, result) => {
          if (!result) {
            responseData(res, "", 401, false, "Password not match");
          }
          if (result) {
            ///////Get here all logintoken becausse maxx 5 token are store in one account//////
            loginModel
              .find({ userId: user[0]._id })
              .then((GetlogToken) => {
                if (GetlogToken.length < 5) {
                  insertLogInData(res, user);
                } else {
                  const firstObjGet = GetlogToken[0]._id;
                  const deleteObj = loginModel
                    .deleteOne({ _id: firstObjGet })
                    .then(() => {
                      insertLogInData(res, user);
                    })
                    .catch(() => {
                      responseData(
                        res,
                        "",
                        500,
                        false,
                        "Something is wrong token object not delete"
                      );
                    });
                }
              })
              .catch((_e) => {
                responseData(
                  res,
                  "",
                  500,
                  false,
                  "Something is wrong tokens not get."
                );
              });
          }
        });
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};
