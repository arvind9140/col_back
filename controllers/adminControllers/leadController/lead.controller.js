import leadModel from "../../../models/adminModels/leadModel.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";
import {
  onlyAlphabetsValidation,
  onlyEmailValidation,
  onlyPhoneNumberValidation,
} from "../../../utils/validation.js";

function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

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
  } else {
    try {
      const check_email = await leadModel.find({ email: email });
      if (check_email.length > 0) {
        responseData(res, "", 401, false, "email already exist.");
      }
      if (check_email.length < 1) {
        const lead = new leadModel({
          name: name,
          lead_id: generateSixDigitNumber(),
          email: email,
          phone: phone,
          location: location,
          status: status,
          source: source,
          date:date,
          notes: [
            {
              content: content,
              createdBy: createdBy,
              date:date,
              status:status,
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
        const update_Lead = await leadModel.findOneAndUpdate(
          { lead_id: lead_id },
          {
            $set: {
              status: status,
            },
            $push: {
              notes: {
                content: content,
                createdBy: createdBy,
                date:update,
                status:status
              },
            },
          },

          {
            new: true,
            useFindAndModify: false,
          }
        );

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


export const leadToProject = async(req,res) =>{

  const lead_id = req.body.lead_id;
  const client_name = req.body.client_name;
  const client_email = req.body.client_email;
  const client_contact = req.body.client_contact;
  const location = req.body.location;
  const description = req.body.description;
  const project_type = req.body.project_type;
  const project_name = req.body.project_name;


  
  if(!lead_id)
  {
    responseData(res,"",400,false,"lead_id is required",[]);
  }
  else{
    try{
      const find_lead = await leadModel.find({lead_id:lead_id});
      if(find_lead.length > 0)
      {
        const project_ID = generateSixDigitNumber()
        
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
          project_budget: "",
          project_end_date: "",
          timeline_date: "",
          project_start_date: "",
          project_status: "",
          visualizer: "",
          superviser: "",
          leadmanager: "",
        });
        project_data.save()
        responseData(res,"",200,true,"project created successfully",project_data);
         
      }
      if(find_lead.length <1){
        responseData(res,"",404,false,"lead not found",[]);
      }
    }catch(err){
      responseData(res,"",500,false,"error",err.message);
      console.log(err);
      }
  }



}
