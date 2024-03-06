import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "ap-south-1",
});
function generateSixDigitNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

const uploadFile = async (file, fileName, folder_name) => {
    return s3
        .upload({
            Bucket: `interior-design1/template/${folder_name}`,
            Key: fileName,
            Body: file.data,
            ContentType: file.mimetype,
            // ACL: 'public-read'
        })
        .promise();
};

const saveFileUploadData = async (
    res,
    existingFileUploadData,
    isFirst = false
) => {
    try {
        if (isFirst) {
            const firstFile = await fileuploadModel.create({
                type:existingFileUploadData.type,
                files: [
                    {
                        folder_name: existingFileUploadData.folder_name,
                        sub_folder_name_first:existingFileUploadData.sub_folder_name_first,
                        sub_folder_name_second:existingFileUploadData.sub_folder_name_second,
                        files: existingFileUploadData.files,
                    },
                ],
            });
            responseData(res, "First file created successfully", 200, true);
        } else {
            // Use update query to push data
            const updateResult = await fileuploadModel.updateOne(
                {
                    type:existingFileUploadData.type,
                    "files.sub_folder_name_second": existingFileUploadData.sub_folder_name_second,
                },
                {
                    $push: {
                        "files.$.files": { $each: existingFileUploadData.files },
                    },
                },
                {
                    arrayFilters: [
                        { "folder.sub_folder_name_second": existingFileUploadData.sub_folder_name_second },
                    ],
                }
            );

            if (updateResult.modifiedCount === 1) {
                responseData(res, "File data updated successfully", 200, true);
            }
               
                 else {
                    console.log("folder not found or file data already updated");
                    responseData(
                        res,
                        "",
                        404,
                        false,
                        "folder not found or file data already updated"
                    );
                }
            
        }
    } catch (error) {
        console.error("Error saving file upload data:", error);
        responseData(
            res,
            "",
            500,
            false,
            "Something went wrong. File data not updated"
        );
    }
};

export const templateFileUpload = async (req, res) => {
    const folder_name =  req.body.folder_name;
    const sub_folder_name_first = req.body.sub_folder_name_first;
    const sub_folder_name_second = req.body.sub_folder_name_second;
const type = req.body.type;

    if (!folder_name) {
    responseData(res, "", 401, false, "folder name required!", []);
}
else if(!sub_folder_name_first)
{
        responseData(res, "", 401, false, " sub folder name required!", []);
}
else if(!sub_folder_name_second)
{
        responseData(res, "", 401, false, "sub folder name required!", []);
}
else if(!type)
{
    responseData(res, "", 401, false, "type required!", []);
}
else {
    try {
        if(type !=="template")
        {
            responseData(res, "", 401, false, "type must be required!", []);
        }
        if(type==="template")
        {
            const files = Array.isArray(req.files.files)
                ? req.files.files
                : [req.files.files]; // Assuming the client sends an array of files with the key 'files'
            const fileUploadPromises = [];


            if (!files || files.length === 0) {
                return res.send({
                    message: "",
                    statuscode: 400,
                    status: false,
                    errormessage: "No files provided",
                    data: [],
                });
            }

            // Limit the number of files to upload to at most 5
            const filesToUpload = files.slice(0, 5);

            for (const file of filesToUpload) {
                const fileName = file.name;

                fileUploadPromises.push(uploadFile(file, fileName, folder_name));
            }

            const responses = await Promise.all(fileUploadPromises);
            // console.log(responses)

            const fileUploadResults = responses.map((response) => ({
                status: response.Location ? true : false,
                data: response ? response : response.err,
            }));
            // console.log(fileUploadResults)
            const successfullyUploadedFiles = fileUploadResults.filter(
                (result) => result.data
            );
            if (successfullyUploadedFiles.length > 0) {

                let fileUrls = successfullyUploadedFiles.map((result) => ({
                    fileUrl: result.data.Location,
                    fileName: result.data.Location.split('/').pop(),
                    fileId: `FL-${generateSixDigitNumber()}`,
                    date: new Date()

                }));
                if(folder_name ==="commercial" || folder_name ==="residential")
                {
                    if(sub_folder_name_first==="designing" || sub_folder_name_first==="executing")
                    {
                        const folder_Id = `FOL_ID${generateSixDigitNumber()}`
                        const check_type = await fileuploadModel.findOne({
                            type: type,
                            "files.folder_name": folder_name,
                            "files.sub_folder_name_second": sub_folder_name_second,
                            "files.sub_folder_name_first": sub_folder_name_first,
                            
                        });

                        if(check_type)
                        {
                            
                                await saveFileUploadData(res, {
                                    folder_name,
                                    folder_Id,
                                    sub_folder_name_first,
                                    sub_folder_name_second,
                                    type,
                                    files: fileUrls,

                              
                            })
                        }
                        else
                        {
                            await saveFileUploadData(
                                res,
                                {
                                    folder_name,
                                    folder_Id,
                                    sub_folder_name_first,
                                    sub_folder_name_second,
                                    type,
                                    files: fileUrls,
                                },
                                true
                            ); 
                        }
                        
                    }
                }


            


            } else {
                res.send({
                    message: "",
                    statuscode: 500,
                    status: false,
                    errormessage: "Error uploading files",
                    data: [],
                });
            }

        }
        
          
    
    } catch (err) {
        res.send({
            message: "",
            statuscode: 500,
            status: false,
            errormessage: err.message,
            data: [],
        });
    }
}


}


