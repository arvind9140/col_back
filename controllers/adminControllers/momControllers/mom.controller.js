import { responseData } from "../../../utils/respounse.js";
import projectModel from "../../../models/adminModels/projectModel.js";
import AWS from "aws-sdk";

function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const uploadFile = async (file, fileName, project_id, mom_id) => {
  return s3
    .upload({
      Bucket: `interior-design1/${project_id}/${mom_id}`,
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};

export const createmom = async (req, res) => {
  try {
    const project_id = req.body.project_id;
    const meetingDate = req.body.meetingdate;
    const source = req.body.source;
    const client_name = req.body.client_name;
    const architech = req.body.architech;
    const organiser = req.body.organiser;
    const consultant_name = req.body.consultant_name;
    const remark = req.body.remark;
    const imaportant_note = req.body.imaportant_note;

    // write here validation ///

    const check_project = await projectModel.find({ project_id: project_id });
    if (check_project.length > 0) {
      const mom_id = `COl-M-${generateSixDigitNumber()}`; // generate meeting id
      let mom_data;
      const files = Array.isArray(req.files.files)
        ? req.files.files
        : [req.files.files]; // Assuming the client sends an array of files with the key 'files'
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
        fileUploadPromises.push(uploadFile(file, fileName, project_id, mom_id));
      }

      const responses = await Promise.all(fileUploadPromises);

      const fileUploadResults = responses.map((response) => ({
        status: response.Location ? true : false,
        data: response ? response : response.err,
      }));

      const successfullyUploadedFiles = fileUploadResults.filter(
        async (result) => result.data
      );
      let file = [];
      if (successfullyUploadedFiles.length > 0) {
        const newfileuploads = successfullyUploadedFiles.map((result, index) =>
          file.push(result.data.Location)
        );
        await Promise.all(newfileuploads);

        const update_mom = await projectModel.findOneAndUpdate(
          { project_id: project_id },
          {
            $push: {
              mom: {
                mom_id: mom_id,
                meetingdate: meetingDate,
                source: source,
                attendees: {
                  client_name: client_name,
                  organiser: organiser,
                  architech: architech,
                  consultant_name: consultant_name,
                },
                remark: remark,
                imaportant_note: imaportant_note,
                files: file,
              },
            },
          },
          { new: true }
        );
        responseData(
          res,
          "Document updated successfully:",
          200,
          true,
          "",
          update_mom
        );
      } else {
        responseData(res, "", 500, false, "Error uploading files", []);
      }
    }
    if (check_project < 1) {
      responseData(res, "", 404, false, "Project Not Found.");
    }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};

export const getAllMom = async (req, res) => {
  try {
    const project_id = req.query.project_id;
    const check_project = await projectModel.find({
      project_id: project_id,
    });

    if (check_project.length > 0) {
      responseData(res, "MOM Found", 200, true, "", check_project[0].mom);
    }
    if (check_project.length < 1) {
      responseData(res, "", 404, false, "Project Not Found.");
    }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};

export const getSingleMom = async (req, res) => {
  try {
    const project_id = req.query.project_id;
    const mom_id = req.query.mom_id;

    const check_project = await projectModel.find({ project_id: project_id });
    if (check_project.length > 0) {
      const check_mom = check_project[0].mom.filter(
        (mom) => mom.mom_id.toString() === mom_id
      );
      if (check_mom.length > 0) {
        responseData(res, "MOM Found", 200, true, "", check_mom);
      } else {
        responseData(res, "", 404, false, "MOM Not Found");
      }
    }
    if (check_project.length < 1) {
      responseData(res, "", 404, false, "Project Not Found");
    }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};
