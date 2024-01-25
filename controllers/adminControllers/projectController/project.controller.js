import projectModel from "../../../models/adminModels/projectModel.js";
import adminLoginModel from "../../../models/adminModels/adminLoginModel.js";
import { responseData } from "../../../utils/respounse.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";
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

const uploadFile = async (req, fileName, key) => {
  let response = s3
    .upload({
      Bucket: "interior-design1",
      Key: fileName,
      Body: req.files[key].data,
      ContentType: req.files[key].mimetype,
      // ACL: 'public-read'
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

export const createProject = async (req, res) => {
  const project_name = req.body.project_name;
  const project_type = req.body.project_type;
  const description = req.body.description;
  const leadmanager = req.body.leadmanager;
  const junior_designer = req.body.junior_designer;
  const senior_designer = req.body.senior_designer;
  const superviser = req.body.superviser;
  const visualizer = req.body.visualizer;
  const role = req.body.role;
  const project_status = req.body.project_status;
  const project_start_date = req.body.project_start_date;
  const timeline_date = req.body.timeline_date;
  const project_budget = req.body.project_budget;
  const project_location = req.body.project_location;
  const fileName = Date.now() + req.files.file.name;
  const project_ID = generateSixDigitNumber();

  // here we validate all fields

  try {
    
    const check_role = await adminLoginModel.find({role:role});
    
    if (check_role.length>0) {
      const response = await uploadFile(req, fileName, "file");
      if (response.status) {
        const project_data = await projectModel.create({
          project_name: project_name,
          project_id: project_ID,
          project_type: project_type,
          description: description,
          leadmanager: leadmanager,
          designers: [
            {
              junior_designer: [{
                name: junior_designer,
                status: "working",
                id: generateSixDigitNumber(),
              }],
              senior_designer: [{
                name: senior_designer,
                status: "working",
                id: generateSixDigitNumber(),
              }],
            },
          ],
          superviser: superviser,
          visualizer: visualizer,
          project_status: project_status,
          project_start_date: project_start_date,
          timeline_date: timeline_date,
          project_end_date: timeline_date,
          project_budget: `${project_budget} ₹`,
          project_location: project_location,
          files: [
            {
              fileUrl: response.data.Location,
              fileID: generateSixDigitNumber(),
            },
          ],
        });
        responseData(res, "Project Create Successfully!", 200, true, "");
      } else {
        res.send({ response });
      }
    }
    if(check_role.length <1){
      responseData(res, "", 404, false, " Your are not admin.", []);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};



 export const getAllProject = async (req, res) => {
  try {
    const projects = await projectModel.find({});
    responseData(res, "projects fetched successfully", 200, true, "", projects);
  } catch (error) {
    responseData(res, "", 500, false, "error in fetching projects", err);
  }
};


export const getSingleProject = async (req, res) => {
  const project_ID = req.query.project_id;

  //  validattion here ..

  try {
    const find_project = await projectModel.find({ project_id: project_ID });
    if (find_project.length > 0) {
      responseData(res, "project found", 200, true, "", find_project);
    }
    if (find_project < 1) {
      responseData(res, "", 404, false, "project not found", []);
    }
  } catch (err) {
    responseData(res, "", 500, false, "error in fetching projects", err);
    console.log(err);
  }
};

 export const updateProjectDetails = async (req, res) => {
  const project_ID = req.body.project_id;
  const leadmanager = req.body.leadmanager;
  const timeline_date = req.body.timeline_date;
  const project_budget = req.body.project_budget;

  // validation for project_ID...

  try {
    const project_find = await projectModel.find({ project_id: project_ID });
    if (project_find.length > 0) {
      const project_update = await projectModel.findOneAndUpdate(
        { project_id: project_ID },
        {
          $set: {
            project_budget: `${project_budget} ₹`,
            leadmanager: leadmanager,
            timeline_date: timeline_date,
          },
        },
        { new: true, useFindAndModify: false }
      );

      responseData(res, "Project Data Updated", 200, true, "", project_update);
    }
    if (project_find.length < 1) {
      responseData(res, "", 404, false, "Project Data Not Found", []);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};