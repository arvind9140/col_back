import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

const getFileData = async(req,res)=>{
        try {
          const data = await fileuploadModel.find({});
          if (data.length > 0) {
            let jsonData = [];
            for (let i = 0; i < data.length; i++) {
              jsonData.push({
                title: data[i].title,
                description: data[i].description,
                fileUrl: data[i].fileUrl,
              });
            }
            responseData(
              res,
              `Get File  Data Successfully !`,
              200,
              true,
              "",
              jsonData
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
export default getFileData;