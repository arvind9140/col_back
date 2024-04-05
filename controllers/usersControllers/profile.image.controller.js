import AWS from "aws-sdk";
import registerModel from "../../models/usersModels/register.model.js";
import { responseData } from "../../utils/respounse.js";

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const uploadImage = async (req, fileName, userId, key) => {
  let response = s3
    .upload({
      Bucket: `collegemanage/${userId}`,
      Key: fileName,
      Body: req.files[key].data,
      ContentType: req.files[key].mimetype,
      //   ACL: "public-read",
    })
    .promise();
  return response
    .then((data) => {
      return { status: true, data };
    })
    .catch((err) => {
      return { status: false, err };
    });
};

const setProfileUrlInDB = async (res, response, userId) => {
  registerModel
    .find({ _id: userId })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        responseData(res, "", 404, false, "user not exist");
      }
      if (result.length > 0) {
        registerModel.findByIdAndUpdate(
          result[0]._id,
          { $set: { userProfile: response.data.Location } },
          (err, docs) => {
            if (err) {
              console.log(err);
            } else {
              console.log("profile url update successfull");
              responseData(
                res,
                "profile  photo upload successfully",
                200,
                true,
                "",
                response.data.Location
              );
            }
          }
        );
      }
    })
    .catch((err) => {
      responseData(res, "", 401, false, "server problem");
    });
};

export const profileupload = async (req, res) => {
  const userId = req.body.userId;
  if (!userId) {
    responseData(res, "", 400, false, "userId is required");
  } else {
    try {
      //   console.log(req.files);
      let fileName = Date.now() + req.files.file.name;
      let response = await uploadImage(req, fileName, userId, "file");
      if (response.status) {
        //  res.send({response})
        setProfileUrlInDB(res, response, userId);
        //  console.log("data",response.data.Location)
      } else {
        //  res.send({ response });
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
