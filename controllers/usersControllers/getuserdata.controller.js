import registerModel from "../../models/usersModels/register.model.js";
import { responseData } from "../../utils/respounse.js";

export const getUserData = async (req, res) => {
  const userId = req.query.userId;
  try {
    const userData = await registerModel.find({ _id: userId });
    if (userData.length < 1) {
      responseData(res, "", 404, false, "User not found");
    }
    if (userData.length > 0) {
      let dataobj = {
        username: userData[0].username,
        email: userData[0].email,
        avatar: userData[0].userProfile,
        title: userData[0].role,
      };
      responseData(res, "", 200, true, "User Details", dataobj);
    }
  } catch (error) {
    responseData(res, 500, error.message);
  }
};
