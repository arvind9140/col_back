import AWS from "aws-sdk";
import dotenv from "dotenv";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const uploadFile = async (file, fileName) => {
  return s3
    .upload({
      Bucket: "interior-design1",
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};

const fileupload = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  if (!title && !description) {
    res.send({
      message: "",
      statuscode: 400,
      status: false,
      errormessage: "Please provide the fields",
      data: [],
    });
  } else {
    try {
      const files = Array.isArray(req.files.files)
        ? req.files.files
        : [req.files.files];// Assuming the client sends an array of files with the key 'files'
      const fileUploadPromises = [];

      if (!files || files.length === 0) {
        return res.send({
          message: "",
          statuscode: 400,
          status: false,
          errormessage: "No files provided",
          data: [],
        });
      }

      // Limit the number of files to upload to at most 5
      const filesToUpload = files.slice(0, 5);

      for (const file of filesToUpload) {
        const fileName = Date.now() + file.name;
        fileUploadPromises.push(uploadFile(file, fileName));
      }

      const responses = await Promise.all(fileUploadPromises);
// console.log(responses)
      const fileUploadResults = responses.map((response) => ({
        status: response.Location ? true : false,
        data: response? response : response.err,
      }));
// console.log(fileUploadResults)
      const successfullyUploadedFiles = fileUploadResults.filter(
        (result) => result.data
      );

      if (successfullyUploadedFiles.length > 0) {
        const newfileuploads = successfullyUploadedFiles.map((result, index) =>
          fileuploadModel.create({
            title: title,
            description: description,
            fileUrl: result.data.Location,
            fileID: generateSixDigitNumber(),
          })
        );

        await Promise.all(newfileuploads);

        res.send({
          message: "Data insert successfully!",
          statuscode: 200,
          status: true,
          errormessage: "",
          data: [],
        });
      } else {
        res.send({
          message: "Failed to upload files",
          statuscode: 500,
          status: false,
          errormessage: "Error uploading files",
          data: [],
        });
      }
    } catch (err) {
      res.send({
        message: "",
        statuscode: 500,
        status: false,
        errormessage: err.message,
        data: [],
      });
    }
  }
};

export default fileupload;
