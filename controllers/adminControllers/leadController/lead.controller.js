import adminLoginModel from "../../../models/adminModels/adminLoginModel.js";
import leadModel from "../../../models/adminModels/leadModel.js";
import { responseData } from "../../../utils/respounse.js";

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

  // vaalidation all input

  try {
    const check_role = await adminLoginModel.find({ role: role });
    if (check_role.length < 1) {
      responseData(res, "", 401, false, "you are not admin.");
    }
    if (check_role.length > 0) {
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
          notes: [
            {
              content: content,
              createdBy: createdBy,
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
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};



 export const getAllLead = async(req,res) =>{

    try {
        const leads = await leadModel.find({});

        responseData(res,"All Lead Data", 200,true, "", leads);
    } catch (error)
    {
        responseData(res,500,error.message);
    }
}


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
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const location = req.body.location;
  const status = req.body.status;
  const source = req.body.source;
  const content = req.body.content;
  const createdBy = req.body.createdBy;

  //////// Validation here ///////

  try {
    const find_lead = await leadModel.find({ lead_id: lead_id });
    if (find_lead.length > 0) {
      const update_Lead = await leadModel.findOneAndUpdate(
        { lead_id: lead_id },
        {
          $set: {
            status: status,
            name: name,
            email: email,
            phone: phone,
            location: location,
            source: source,
          },
          $push: {
            notes: {
              content: content,
              createdBy: createdBy,
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
};

