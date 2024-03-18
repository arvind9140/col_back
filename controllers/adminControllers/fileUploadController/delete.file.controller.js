import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

export const deleteFile = async (req, res) => {
    const lead_id = req.body.lead_id;
    const project_id = req.body.project_id;
    const folder_name = req.body.folder_name;
    const fileIds = req.body.file_id;
    const type = req.body.type;

    if (!fileIds || !Array.isArray(fileIds) || fileIds.length === 0) {
        return responseData(res, "", 400, false, "Please provide an array of fileIds");
    }

    if (!folder_name) {
        return responseData(res, "", 400, false, "Please Enter Folder Name");
    } else
    {
        try {

            let count =0;
            for(let i=0; i<fileIds.length; i++)
            {
               
                if (type === "template") {


                    const data = await fileuploadModel.findOneAndUpdate({
                        "files.sub_folder_name_second": folder_name,
                        "files.files.fileId": fileIds[i]
                    },
                        {
                            $pull: {
                                "files.$.files": { fileId: fileIds[i] }
                            }
                        }
                    )
                    if(data)
                    {
                        count++;
                    }
                }
                else {
                    const data = await fileuploadModel.findOneAndUpdate({
                        $or: [
                            { project_id: project_id },
                            { lead_id: lead_id },
                        ],
                        "files.folder_name": folder_name,
                        "files.files.fileId": fileIds[i]
                    }, {
                        $pull: {
                            "files.$.files": { fileId: fileIds[i] }
                        }
                    });
                    if (data) {
                        count++;
                    }

                }
            }

            if(count>0)
            {
                responseData(res, "Files deleted successfully", 200, true, "", []);
            }
            else{
                responseData(res, "No files found", 200, false, "", []);
            }
            
        } catch (error) {
            console.log(error);
            responseData(res, "", 500, false, "Something went wrong", []);
        }
    }
}


