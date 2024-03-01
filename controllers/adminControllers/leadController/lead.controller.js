import leadModel from "../../../models/adminModels/leadModel.js";
import projectModel from "../../../models/adminModels/project.model.js";
import Notification from "../../../models/adminModels/notification.model.js";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";
import {
  onlyAlphabetsValidation,
  onlyEmailValidation,
  onlyPhoneNumberValidation,
} from "../../../utils/validation.js";
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
  const folder_name = req.body.folder_name;

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
  else if (!folder_name)
  {
    responseData(res, "", 401, false, "folder name is required.")
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
        const uploadfileName = [];
         let successfullyUploadedFiles = [];

         if (files) {
           const filesToUpload = Array.isArray(files)
             ? files.slice(0, 5)
             : [files];

           for (const file of filesToUpload) {
             const fileName = Date.now() + file.name;
             uploadfileName.push(file.name);
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
         if (successfullyUploadedFiles.length > 0) {
           let fileUrls = uploadfileName.map(async (data) => {
             successfullyUploadedFiles.map((result) => ({
               fileUrl: result.data.Location,
               fileName: data,
               fileId: `FL-${generateSixDigitNumber()}`,
               date: new Date()
             }));

           })
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
          files: fileUrls,
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
        const fileUploadData =  new fileuploadModel({
          lead_id:lead_id,
          lead_name:name,
          
          files:{
            folder_name:folder_name,
            files:fileUrls
          }

        })
           
       await fileUploadData.save()
        responseData(
          res,
          "lead created successfully.",
          200,
          true,
          "",
          lead_data
        );
         }
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
      const utcDate = new Date(update);

      const istDate = new Date(utcDate.getTime()); // IST is UTC+5.5

// Format the IST date as a string
const formattedISTDate = istDate.toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',

})
      const find_lead = await leadModel.find({ lead_id: lead_id });
      if (find_lead.length > 0) {
        const update_Lead = await leadModel.findOneAndUpdate(
          { lead_id: lead_id },
          {
            $set: {
              status: status,
              updated_date: formattedISTDate,
            },
            $push: {
              notes: {
                content: content,
                createdBy: createdBy,
                date: formattedISTDate,
                status: status,
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
             message: `Lead status updated: Lead name ${find_lead[0].name} status changed to ${status} on  ${formattedISTDate}.`,
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
const projectID = `COL\P-${project_ID}`;
        const project_data = await projectModel.create({
          project_name: project_name,
          project_type: project_type,
          project_id: projectID,
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
        const lead_find_in_fileupload = await fileuploadModel.find({lead_id:lead_id});
        if(lead_find_in_fileupload.length>0)
        {
          const lead_update_in_fileupload = await fileuploadModel.updateOne({lead_id:lead_id},{$set:{project_id:projectID, project_name:project_name}});

        }
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
