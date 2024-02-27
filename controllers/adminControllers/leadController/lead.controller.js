import leadModel from "../../../models/adminModels/leadModel.js";
import projectModel from "../../../models/adminModels/project.model.js";
import Notification from "../../../models/adminModels/notification.model.js";
import { responseData } from "../../../utils/respounse.js";
import {
  onlyAlphabetsValidation,
  onlyEmailValidation,
  onlyPhoneNumberValidation,
} from "../../../utils/validation.js";
import AWS from "aws-sdk";


function formatDate(date) {
  // Get day, month, and year components from the date
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  // Concatenate the components in the desired format
  return `${day}-${month}-${year}`;
}


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

const uploadFile = async (file, fileName, lead_id) => {
  return s3
    .upload({
      Bucket: `interior-design1/${lead_id}`,
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};

export const createLead = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const location = req.body.location;
  const status = req.body.status;
  const source = req.body.source;
  const content = req.body.content;
  const createdBy = req.body.createdBy;
  const role = req.body.role;
  const date = req.body.date;
  const lead_manager = req.body.lead_manager;

  // vaalidation all input
  if (!onlyAlphabetsValidation(name) && name.length >= 3) {
    responseData(
      res,
      "",
      401,
      false,
      "name should be greater than 3 characters."
    );
  } else if (!onlyEmailValidation(email) && email.length > 5) {
    responseData(res, "", 401, false, "email is invalid.");
  } else if (!onlyPhoneNumberValidation(phone)) {
    responseData(res, "", 401, false, "phone number  is  invalid.");
  } else if (!location) {
    responseData(res, "", 401, false, "location is required.");
  } else if (!status) {
    responseData(res, "", 401, false, "status is required.");
  } else if (!source) {
    responseData(res, "", 401, false, "source is required.");
  }
  else if (!onlyAlphabetsValidation(lead_manager) && lead_manager.length >= 3)
  {
    responseData(
      res,
      "",
      401,
      false,
      "lead manager should be greater than 3 characters."
    )
      
  }
   else {
    try {
      const check_email = await leadModel.find({ email: email });
      if (check_email.length > 0) {
        responseData(res, "", 401, false, "email already exist.");
      }
      if (check_email.length < 1) {
        const lead_id = generateSixDigitNumber();
         const files = req.files?.files;
         const fileUploadPromises = [];
         let successfullyUploadedFiles = [];

         if (files) {
           const filesToUpload = Array.isArray(files)
             ? files.slice(0, 5)
             : [files];

           for (const file of filesToUpload) {
             const fileName = Date.now() + file.name;
             fileUploadPromises.push(uploadFile(file, fileName, lead_id));
           }

           const responses = await Promise.all(fileUploadPromises);

           const fileUploadResults = responses.map((response) => ({
             status: response.Location ? true : false,
             data: response ? response : response.err,
           }));

           successfullyUploadedFiles = fileUploadResults.filter(
             (result) => result.status
           );
         }
         let file = [];
         if (successfullyUploadedFiles.length > 0) {
           const newfileuploads = successfullyUploadedFiles.map(
             (result, index) => file.push(result.data.Location)
           );
         }
        const lead = new leadModel({
          name: name,
          lead_id: lead_id,
          lead_manager:lead_manager,
          email: email,
          phone: phone,
          location: location,
          status: status,
          source: source,
          updated_date:date,
          files: {
            date:date,
            files:file
          },
          date: date,
          notes: [
            {
              content: content,
              createdBy: createdBy,
              date: date,
              status: status,
            },
          ],
        });
        const lead_data = await lead.save();
        responseData(
          res,
          "lead created successfully.",
          200,
          true,
          "",
          lead_data
        );
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
};

export const getAllLead = async (req, res) => {
  try {
    const leads = await leadModel.find({}).sort({ createdAt: -1 });

    responseData(res, "All Lead Data", 200, true, "", leads);
  } catch (error) {
    responseData(res, 500, error.message);
  }
};

export const getSingleLead = async (req, res) => {
  const lead_id = req.query.lead_id;

  try {
    const leads = await leadModel.find({ lead_id: lead_id });
    if (leads.length < 1) {
      responseData(res, "", 404, false, "Data not found", []);
    }
    if (leads.length > 0) {
      responseData(res, "Lead Data", 200, true, "", leads);
    }
  } catch (error) {
    responseData(res, "", 500, false, error.message);
  }
};

export const updateLead = async (req, res) => {
  const lead_id = req.body.lead_id;
  const status = req.body.status;
  const content = req.body.content;
  const createdBy = req.body.createdBy;
  const update = req.body.date;

  if (!lead_id) {
    responseData(res, "", 400, false, "lead_id is required", []);
  } else if (!status) {
    responseData(res, "", 400, false, "status is required", []);
  } else if (!createdBy) {
    responseData(res, "", 400, false, "createdBy is required", []);
  } else {
    try {
      const find_lead = await leadModel.find({ lead_id: lead_id });
      if (find_lead.length > 0) {
         const files = req.files?.files;
         const fileUploadPromises = [];
         let successfullyUploadedFiles = [];

         if (files) {
           const filesToUpload = Array.isArray(files)
             ? files.slice(0, 5)
             : [files];

           for (const file of filesToUpload) {
             const fileName = Date.now() + file.name;
             fileUploadPromises.push(
               uploadFile(file, fileName, lead_id)
             );
           }

           const responses = await Promise.all(fileUploadPromises);

           const fileUploadResults = responses.map((response) => ({
             status: response.Location ? true : false,
             data: response ? response : response.err,
           }));

           successfullyUploadedFiles = fileUploadResults.filter(
             (result) => result.status
           );
         }
         let file = [];
         if (successfullyUploadedFiles.length > 0) {
           const newfileuploads = successfullyUploadedFiles.map(
             (result, index) => file.push(result.data.Location)
           );
         }

        const update_Lead = await leadModel.findOneAndUpdate(
          { lead_id: lead_id },
          {
            $set: {
              status: status,
              updated_date:update,
            },
            $push: {
              notes: {
                content: content,
                createdBy: createdBy,
                date: update,
                status: status,
              },
              files: {
                date: update,
                files: file,
              },
            },
          },

          {
            new: true,
            useFindAndModify: false,
          }
        );
        
           const newNotification = new Notification({
             type: "lead",
             itemId: lead_id,
             message: `Lead status updated: Lead name ${
               find_lead[0].name
             } status changed to ${status} on  ${formatDate(update)}.`,
             status: false,
           });
           await newNotification.save();

        responseData(res, "Lead Data Updated", 200, true, "", update_Lead);
      }
      if (find_lead.length < 1) {
        responseData(res, "", 404, false, "lead not found");
      }
    } catch (err) {
      responseData(res, "", 500, false, "error", err.message);
      console.log(err);
    }
  }
};

export const leadToProject = async (req, res) => {
  const lead_id = req.body.lead_id;
  const client_name = req.body.client_name;
  const client_email = req.body.client_email;
  const client_contact = req.body.client_contact;
  const location = req.body.location;
  const description = req.body.description;
  const project_type = req.body.project_type;
  const project_name = req.body.project_name;
  const project_status = req.body.project_status;
  const timeline_date = req.body.timeline_date;
  const project_start_date = req.body.project_start_date;
  const project_budget = req.body.project_budget;

  if (!lead_id) {
    responseData(res, "", 400, false, "lead_id is required", []);
  } else {
    try {
      const find_lead = await leadModel.find({ lead_id: lead_id });
      if (find_lead.length > 0) {
        const project_ID = generateSixDigitNumber();

        const project_data = await projectModel.create({
          project_name: project_name,
          project_type: project_type,
          project_id: `COL\P-${project_ID}`,
          client: {
            client_name: client_name,
            client_email: client_email,
            client_contact: client_contact,
          },

          project_location: location,
          description: description,
          lead_id: lead_id,
          project_budget: project_budget,
          project_end_date: timeline_date,
          timeline_date: timeline_date,
          project_start_date: project_start_date,
          project_status: project_status,
          visualizer: "",
          superviser: "",
          leadmanager: "",
        });
        project_data.save();
        responseData(
          res,
          "",
          200,
          true,
          "project created successfully",
          project_data
        );
      }
      if (find_lead.length < 1) {
        responseData(res, "", 404, false, "lead not found", []);
      }
    } catch (err) {
      responseData(res, "", 500, false, "error", err.message);
      console.log(err);
    }
  }
};

export const shareFileLead = async (req, res) => {
  const lead_id = req.body.lead_id;

  if (!lead_id) {
    responseData(res, "", 400, false, "lead id is required");
  } else {
    try {
      const find_lead = await lead.find({ lead_id: lead_id });
      if (find_lead.length < 1) {
        responseData(res, "", 404, false, "lead not found");
      }
      if (find_lead.length > 0) {
        const files = Array.isArray(req.files?.files)
          ? req.files.files
          : [req.files.files];
        const fileUploadPromises = [];
        const filesToUpload = files.slice(0, 5);
        // Limit the number of files to upload to at most 5

        for (const file of filesToUpload) {
          const fileName = Date.now() + file.name;
          fileUploadPromises.push(
            uploadFile(file, fileName, project_id, mom_id)
          );
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
        }
        const update_Lead = await leadModel.updateOne({ lead_id: lead_id });
      }
    } catch (err) {
      responseData(res, "", 500, false, "error", err.message);
      console.log(err);
    }
  }
};
