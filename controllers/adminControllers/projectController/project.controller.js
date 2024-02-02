import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import registerModel from "../../../models/registerModels/register.model.js";

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

const uploadFile = async (file, fileName, project_ID) => {
  return s3
    .upload({
      Bucket: `interior-design1/${project_ID}`,
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};


export const createProject = async (req, res) => {
  const id = req.body.id;
  const project_name = req.body.project_name;
  const project_type = req.body.project_type;
  const client_name = req.body.client_name;
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
  const client_contact = req.body.client_contact;
  const project_ID = generateSixDigitNumber();

  // here we validate all fields

  try {
    const check_role = await registerModel.find({ _id: id });
    if (check_role.length > 0) {
      if (check_role[0].role == "ADMIN") {
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
          fileUploadPromises.push(uploadFile(file, fileName, project_ID));
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
          const newfileuploads = successfullyUploadedFiles.map(
            (result, index) => file.push(result.data.Location)
          );
          await Promise.all(newfileuploads);

          const project_data = await projectModel.create({
            project_name: project_name,
            client_name: client_name,
            project_id: `COL\P-${project_ID}`,
            project_type: project_type,
            description: description,
            leadmanager: leadmanager,
            designers: [
              {
                junior_designer: [
                  {
                    name: junior_designer,
                    status: "working",
                    id: generateSixDigitNumber(),
                  },
                ],
                senior_designer: [
                  {
                    name: senior_designer,
                    status: "working",
                    id: generateSixDigitNumber(),
                  },
                ],
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
            files: file,
            client_contact: client_contact,
          });
          responseData(
            res,
            "Project Create Successfully!",
            200,
            true,
            "",
            project_data
          );
        } else {
          responseData(res, "", 404, false, " You are not admin!", []);
        }
      }
      if (check_role.length < 1) {
        responseData(res, "", 404, false, " User not found.", []);
      }
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

export const getAllProject = async (req, res) => {
  try {
  
   const id = req.query.id;


   const check_role = await  registerModel.find({_id:id})
   if(check_role.length >0)
   {
    if(check_role[0].role == "ADMIN")
    {
  let execution = [];
  let design = [];
  let completed=[];
  const projects = await projectModel.find({});
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].project_status == "execution") {
      execution.push(projects[i]);
    }
    if (projects[i].project_status == "design") {
      design.push(projects[i]);
    }
      if (projects[i].project_status == "completed") {
        completed.push(projects[i]);
      }
  }
  
  const response = {
    total_Project:projects.length,
    Execution_Phase: execution.length,
    Design_Phase: design.length,
    completed:completed.length,
    projects,
  };
  responseData(res, "projects fetched successfully", 200, true, "", response);
    }
    else
    {
      responseData(res, "", 404, false, " You are not admin!", []);
    }
   }
  if (check_role.length < 1) {
    responseData(res, "", 404, false, " User not found.", []);
  }
  
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




