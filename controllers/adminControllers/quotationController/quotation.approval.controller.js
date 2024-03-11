import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";

export const shareQuotation = async (req, res) => {
    try {
        const user_name = req.body.user_name;
        const fileId = req.body.file_id;
        const folder_name = req.body.folder_name;
        const project_id = req.body.project_id;
        if(!user_name)
        {
            responseData(res, "", 400, false, "User name is required");
        }
        else if(!fileId)
        {
            responseData(res, "", 400, false, "File id is required");
        }

else if(!project_id)
{
    responseData(res, "", 400, false, "Project id is required");
}
else{


        const user = await registerModel.find({ user_name: user_name });
        if (user.length < 1) {
            responseData(res, "", 401, false, "User not found");
        }
        if (user.length > 0) {
            const find_quotation = await fileuploadModel.findOne({
                "files.files.fileId": fileId
            })
            if (find_quotation) {
                const find_folder = find_quotation.files.find((folder) =>
                    folder.folder_name === folder_name
                )

                if (find_folder) {
                  const find_file = find_folder.files.find((file) =>
                    file.fileId === fileId)
                    const find_project = projectModel.findOne({ project_id: project_id })
                    if (find_project) {
                        const update_user = await registerModel.updateOne({ user_name: user_name }, {
                            $push: {
                                data: [{
                                    quotation: [{
                                        project_id: project_id,
                                        quotation_file_id: fileId,
                                        file_url: find_file,
                                        approval_status: false
                                    }]
                                }]
                            }
                        })
                        responseData(res, "File share successfully!", 200, true, "");


                    }
                    else {
                        responseData(res, "", 401, false, "Project not found");
                    }


                }
                else {
                    responseData(res, "", 401, false, " Folder not found");

                }

            }
            else {
                responseData(res, "", 401, false, "Quotation file not found");
            }


        }
    }

    }
    catch (err) {
        responseData(res, "", 500, false, "Something is wrong in shareQuotation function.");
    }
}