import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

export const deleteFile = async (req, res) => {
    const lead_id = req.body.lead_id;
    const project_id = req.body.project_id;
    const folder_name = req.body.folder_name;
    const fileId = req.body.file_id;
    const type = req.body.type;


    if (!fileId) {
        return responseData(res, "", 400, false, "Please Enter FileId");
    } 
    if (!folder_name) {
        return responseData(res, "", 400, false, "Please Enter Folder Name");
    } else
    {
        try {
          
            if (type ==="template")
            {
                
                
                    const data = await fileuploadModel.findOneAndUpdate({
                        "files.sub_folder_name_second": folder_name,
                        "files.files.fileId": fileId
                    },
                        {
                            $pull: {
                                "files.$.files": { fileId: fileId }
                            }
                        }
                    )


                    if (data) {
                        responseData(res, "File deleted successfully!", 200, true, "");
                    } else {
                        responseData(res, "", 404, false, "File or Folder Not Found!");
                    }
               
            }
            else{
                
                
                    const data = await fileuploadModel.findOneAndUpdate({
                        $or: [
                            { project_id: project_id },
                            { lead_id: lead_id },
                        ],
                        "files.folder_name": folder_name,
                        "files.files.fileId": fileId
                    }, {
                        $pull: {
                            "files.$.files": { fileId: fileId }
                        }
                    });

                    if (data) {
                        responseData(res, "File deleted successfully!", 200, true, "");
                    } else {
                        responseData(res, "", 404, false, "File or Folder Not Found!");
                    }

            
                

            }
            
        } catch (error) {
            console.log(error);
            responseData(res, "", 500, false, "Something went wrong", []);
        }
    }
}


