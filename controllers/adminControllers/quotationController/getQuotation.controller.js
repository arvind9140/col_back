import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";

const getQuotation = async (req, res) => {
  const project_ID = req.query.project_id;
  if (!project_ID) {
    return responseData(res, "", 400, false, "Please provide the project ID");
  }

  try {
    const find_project = await projectModel.findOne({ project_id: project_ID });

    if (!find_project) {
      return responseData(res, "", 404, false, "No Project Found With this Id");
    }

    if (find_project.quotation && find_project.quotation.length > 0) {
      let total = 0;
      let total_price=0;
      let main_quotation =[]

      for(let i=0;i<find_project.quotation.length;i++)
      {
        
        for(let j=0;j<find_project.quotation[i].items.length;j++)
        {
          total += parseFloat(find_project.quotation[i].items[j].total_price);
        }
        main_quotation.push({
          qutation_id: find_project.quotation[i].quotation_id,
          type: find_project.quotation[i].type,
          total_price: total,
        });
        total =0;
      }
      for(let i=0;i<main_quotation.length;i++)
      {
         total_price+=main_quotation[i].total_price 
      }
      let gst = total_price * 18 / 100;

      const response = {
        main_quotation:main_quotation,
        total_price:total_price,
        gst:gst,
        total_price_with_gst:total_price+ gst
      }

      
      return responseData(
        res,
        "Quotation details retrieved successfully",
        200,
        true,
        "",
        response 
      );
    } else {
      return responseData(
        res,
        "No Quotations found for this project",
        404,
        false,
        "",
        []
      );
    }
  } catch (err) {
    console.error(err);
    return responseData(res, "", 500, false, err.message);
  }
};

export default getQuotation;



export const getSingleTypeQuotation = async (req, res) => {
  const project_ID = req.query.project_id;
  const quotation_id = req.query.quotation_id;
  const type = req.query.type; // Corrected from req.body.quotation_id to req.query.type

  try {
    const find_project = await projectModel.findOne({ project_id: project_ID });
    if (find_project.length < 1) {
      return responseData(res, "", 404, false, "No project found with this id");
    }

    const data = [];
   
     
      const quotationArray = find_project.quotation;
      for (let j = 0; j < quotationArray.length; j++) {
        // Check if quotation_id and type match
        if (
          quotationArray[j].quotation_id === quotation_id &&
          quotationArray[j].type === type
        ) {
          data.push(quotationArray[j]);
        }
      }
    

    if (data.length > 0) {
      let  total =0;
      for(let j=0;j<data.length;j++)
      {
         for (let i = 0; i < data[j].items.length; i++) {
           total += parseFloat(data[j].items[i].total_price);
         }
         

      }
      const response = {
        quotation: data,
        total_price: total,
      };
     


      responseData(res, "Quotation data found", 200, true, "", response);
    } else {
      responseData(res, "", 404, false, "No quotation found with this id");
    }
  } catch (err) {
    console.error(err);
    return responseData(res, "", 500, false, err.message);
  }
};

