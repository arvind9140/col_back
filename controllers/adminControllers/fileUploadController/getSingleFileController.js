import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

const getSingleFileData = async (req, res) => {
  const lead_id = req.query.lead_id;
  const project_id = req.query.project_id;
  const folder_name = req.query.folder_name;
  const fileId = req.query.file_id;
  if (!fileId) {
    return responseData(res, "", 400, false, "Please Enter FileId");
  } else if (!folder_name) {
    return responseData(res, "", 400, false, "Please Enter Folder Name");
  }
   else {
    try {
      const data = await fileuploadModel.find({
        $or: [
          { project_id: project_id }, 
          { lead_id: lead_id },
        ],
      });
      if (data.length > 0) {
        const folder = data[0].files.find(
          (folder) => folder.folder_name === folder_name
        );
        
        if (folder) {
          const file = folder.files.find((file) => file.fileId === fileId);
          if (file) {
            responseData(res, "", 200, true, "", file);
          } else {
            responseData(res, "", 404, false, "File Not Found! ");
          }
        } else {
          responseData(res, "", 404, false, "Folder Not Found! ");
        }
      }
      if (data.length < 1) {
        responseData(res, "", 404, false, "Data Not Found! ");
      }
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
};
export default getSingleFileData;
