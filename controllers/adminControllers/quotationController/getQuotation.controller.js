import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";



export const  getQuotationData = async(req,res) =>{
  try {
    const project_id = req.query.project_id;
    const find_project = await projectModel.findOne({ project_id: project_id });
    if(find_project)
    {
      responseData(res, "Quotation data found", 200, true, "", find_project.quotation);

    }
    else{
      return responseData(res, "", 404, false, "No project found with this id");
    }
    
  }
  catch(err)
  {
    console.error(err);
    return responseData(res, "", 500, false, err.message);
  }
}

