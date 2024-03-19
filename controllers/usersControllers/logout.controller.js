import loginModel from "../../models/usersModels/login.model.js";
import { responseData } from "../../utils/respounse.js";

export const logout = async (req, res) => {
  const userId = req.body.userId;
  const token = req.body.token;

  try {
    await loginModel
      .find({ userID: userId })
      .exec()
      .then((result) => {
        if (result.length < 1) {
          responseData(res, "", 401, false, "User not exist");
        }
        if (result.length > 0) {
          let filterData = result.filter((d) => {
            return d.token == token;
          });
          loginModel.findByIdAndUpdate(
            filterData[0]._id,
            { token: " " },
            (err, res) => {
              if (err) {
                ////// Here add the respnse for error
                console.log(err);
              } else {
                console.log("logout successfull");
              }
            }
          );

          res.clearCookie("auth");
          responseData(res, "Logout successfully", 200, true, "");
        }
      });

  }
  catch (err) {
    console.log(err);
    responseData(res, "", 500, false, "Internal Server Error");
  }


};
