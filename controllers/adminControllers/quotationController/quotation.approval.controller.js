import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { responseData } from "../../../utils/respounse.js"; 
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { onlyEmailValidation } from "../../../utils/validation.js";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "a72302492@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});

function generateSixDigitNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const storeOrUpdateQuotations = async (res, projectId, quotationsData) => {
    try {
        const findProject = await projectModel.findOne({ project_id: projectId });
        if (findProject) {
            const findItem = await projectModel.findOne({
                project_id: projectId,
                "quotation.itemId": quotationsData.itemId
            });
            if (findItem) {
                const update_status = await findOneAndUpdate({
                    project_id: projectId,
                    "quotation.itemId": quotationsData.itemId},
                    {
                        set:{
                            "quotation.$.": quotationsData
                        }
                    })
            } else {
                await projectModel.findOneAndUpdate(
                    { project_id: projectId },
                    { $push: { "quotation": quotationsData } }
                );
            }
        } else {
           responseData(res,"", 404,false,"project not found" )
        }
    } catch (error) {
        console.error("Error storing or updating quotations:", error);
    }
};

export const shareQuotation = async (req, res) => {
    try {
        const { user_name, file_id, folder_name, project_id, client_email, client_name, type } = req.body;
        if (!type || !file_id || !project_id) {
            return responseData(res, "", 400, false, "Missing required fields");
        }
        if (type === "Client") {
            if (!onlyEmailValidation(client_email) || !client_name) {
                return responseData(res, "", 400, false, "Invalid client email or missing client name");
            }
            const findQuotation = await fileuploadModel.findOne({ "files.files.fileId": file_id });
            if (!findQuotation) {
                return responseData(res, "", 401, false, "Quotation file not found");
            }
            const findProject = await projectModel.findOne({ project_id: project_id });
            if (!findProject) {
                return responseData(res, "", 401, false, "Project not found");
            }
            const findFile = findQuotation.files.find(folder => folder.folder_name === folder_name)?.files.find(file => file.fileId === file_id);
            if (!findFile) {
                return responseData(res, "", 401, false, "File not found in the specified folder");
            }
            const mailOptions = {
                from: "a72302492@gmail.com",
                to: client_email,
                subject: "Quotation Approval Notification",
                html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quotation Approval Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
        }
        .notification {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .notification h2 {
            margin-top: 0;
            color: #333;
        }
        .notification p {
            margin-bottom: 10px;
            color: #555;
        }
        .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="notification">
            <h2>Quotation Approval Notification</h2>
            <p>Hello ${client_name},</p>
            <p>A new quotation file has been shared with you for approval. Please review it and take necessary actions.</p>
            <p>Project Name: <strong>${findProject.project_name}</strong></p>
            <p>Quotation File ID: <strong>${file_id}</strong></p>
            <p>File URL: <a href="${findFile.fileUrl}">View File</a></p>
            <p>Thank you!</p>
            
        </div>
    </div>
</body>
</html>
`
            };
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    return responseData(res, "", 400, false, "Failed to send email");
                } else {
                    const quotationsData = {
                        itemId: `CCPL/${generateSixDigitNumber()}`,
                        client_status:"pending",
                        file_name: findFile.fileName,
                        files: findFile,
                        remark: ""
                    };
                    await storeOrUpdateQuotations(project_id, quotationsData);
                    return responseData(res, `Quotation shared successfully`, 200, true, "");
                }
            });
        } else if (type === "Internal") {
            if (!user_name) {
                return responseData(res, "", 400, false, "User name is required");
            }
            const user = await registerModel.findOne({ username: user_name });
            if (!user) {
                return responseData(res, "", 401, false, "User not found");
            }
            const findQuotation = await fileuploadModel.findOne({ "files.files.fileId": file_id });
            if (!findQuotation) {
                return responseData(res, "", 401, false, "Quotation file not found");
            }
            const findProject = await projectModel.findOne({ project_id: project_id });
            if (!findProject) {
                return responseData(res, "", 401, false, "Project not found");
            }
            const checkApproval = await registerModel.findOne({
                username: user_name,
                "data.quotationData.project_id": project_id,
                "data.quotationData.approval_status": false
            });
            if (checkApproval) {
                return responseData(res, "", 401, false, "Previous quotation not approved");
            }
            const findFile = findQuotation.files.find(folder => folder.folder_name === folder_name)?.files.find(file => file.fileId === file_id);
            if (!findFile) {
                return responseData(res, "", 401, false, "File not found in the specified folder");
            }
            const mailOptions = {
                from: "a72302492@gmail.com",
                to: user.email,
                subject: "Quotation Approval Notification",
                html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quotation Approval Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
        }
        .notification {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .notification h2 {
            margin-top: 0;
            color: #333;
        }
        .notification p {
            margin-bottom: 10px;
            color: #555;
        }
        .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="notification">
            <h2>Quotation Approval Notification</h2>
            <p>Hello ${user_name},</p>
            <p>A new quotation file has been shared with you for approval. Please review it and take necessary actions.</p>
            <p>Project Name: <strong>${findProject.project_name}</strong></p>
            <p>Quotation File ID: <strong>${file_id}</strong></p>
            <p>File URL: <a href="${findFile.fileUrl}">View File</a></p>
            <p>Thank you!</p>
            
        </div>
    </div>
</body>
</html>

`,
            };
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    return responseData(res, "", 400, false, "Failed to send email");
                } else {
                    await registerModel.updateOne(
                        { username: user_name },
                        {
                            $push: {
                                "data.$[elem].quotationData": {
                                    project_id: project_id,
                                    quotation_file_id: file_id,
                                    file_url: findFile,
                                    approval_status: false
                                },
                                "data.$[elem].notificationData": {
                                    _id: new mongoose.Types.ObjectId(),
                                    itemId: project_id,
                                    type: "quotation",
                                    status: false,
                                    message: "Quotation file shared with you for approval. Please check",
                                    createdAt: new Date()
                                }
                            }
                        },
                        { arrayFilters: [{ "elem.projectData": { $exists: true } }] }
                    );
                    const quotationsData = {
                        itemId: `CCPL/${generateSixDigitNumber()}`,
                        admin_status: "pending",
                        file_name: findFile.fileName,
                        files: findFile,
                        remark: ""
                    };
                    await storeOrUpdateQuotations(project_id, quotationsData);
                    return responseData(res, `Quotation shared successfully`, 200, true, "");
                }
            });
        } else {
            return responseData(res, "", 400, false, "Invalid Type");
        }
    } catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while sharing the quotation");
    }
};


