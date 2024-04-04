import { response } from "express";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

 export const getFileData = async(req,res)=>{
        try {
          const data = await fileuploadModel.find({});
          if (data.length > 0) {

            // console.log(data[1].project_id)
            let projectData =[]
            let leadData = []
            let templateData =[]
            const filterData = data.forEach((element) => {
              if(element.project_id !=null)
              {
                projectData.push({
                  project_name:element.project_name,
                  project_id:element.project_id,
                  files:element.files

                })
              }
              if(element.lead_id !=null){
                leadData.push({

                  lead_id:element.lead_id,
                  lead_Name:element.lead_name,
                  files:element.files
                  
                })
                }
                if(element.lead_id ==null && element.project_id ==null)
                {
                  templateData.push({
                   type:element.type,
                    files:element.files

                  })
                }

              })
              const response  = {
                leadData:leadData,
                projectData:projectData,
                templateData:templateData
              }
            responseData(
              res,
              `Get File  Data Successfully !`,
              200,
              true,
              "",
              response
            );
          }
          if (data.length < 1) {
           
            responseData(
              res,
              "",
              404,
              false,
              "Data Not Found! ",
              
            );
          }
        } catch (err) {
          res.send(err);
          console.log(err);
        }

}

export const getleadData = async(req,res)=>{
        try {
           const lead_id = req.query.lead_id;
          const data = await fileuploadModel.find({lead_id:lead_id});
          if(data.length>0)
          {
            responseData(
              res,
              `Get File  Data Successfully !`,
              200,
              true,
              "",
              data
            );
          }
          if(data.length<1)
          {
            responseData(
              res,
              "",
              404,
              false,
              "Data Not Found! ",

            );
          }
          
        }
        catch(error)
        {
responseData(res,"",500,false,"Internal Server Error",error)
        }
}

export const getprojectData = async(req,res)=>{
try{
  const project_id = req.query.project_id;
  const data = await fileuploadModel.find({project_id:project_id});
  if(data.length>0)
  {
    responseData(
      res,
      `Get File  Data Successfully !`,
      200,
      true,
      "",
      data
    );
  }
  if(data.length<1)
  {
    responseData(
      res,
      "",
      404,
      false,
      "Data Not Found! ",

    );
  }

}
catch(error)
{
responseData(res,"",500,false,"Internal Server Error",error)
}

}




