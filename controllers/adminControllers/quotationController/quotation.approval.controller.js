import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "a72302492@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});

export const shareQuotation = async (req, res) => {
    try {
        const user_name = req.body.user_name;
        const fileId = req.body.file_id;
        const folder_name = req.body.folder_name;
        const project_id = req.body.project_id;
        if (!user_name) {
            responseData(res, "", 400, false, "User name is required");
        }
        else if (!fileId) {
            responseData(res, "", 400, false, "File id is required");
        }

        else if (!project_id) {
            responseData(res, "", 400, false, "Project id is required");
        }
        else {


            const user = await registerModel.find({ username: user_name });
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

                        const find_project =await projectModel.findOne({ project_id: project_id })
                        if (find_project) {

                            const check_approval = await registerModel.findOne(
                                {
                                    username: user_name,
                                    "data.quotationData.project_id": project_id, // Querying the specific project_id
                                    "data.quotationData.approval_status": true // Checking approval status
                                }
                            );

                                
                            
                            if (check_approval) {
                                
                            
                            const update_user = await registerModel.updateOne(
                                { username: user_name },
                                {
                                    $push: {
                                        "data.$[elem].quotationData": {
                                            project_id: project_id,
                                            quotation_file_id: fileId,
                                            file_url: find_file,
                                            approval_status: false
                                        },
                                        "data.$[elem].notificationData": {
                                            _id: new mongoose.Types.ObjectId(),
                                            itemId: project_id,
                                            type: "quotation",
                                            status: false,
                                            message: "Quotation file shared with you for approval. Please check",
                                            createdAt:new Date()
                                        }
                                    }
                                },
                                { arrayFilters: [{ "elem.projectData": { $exists: true } }] }
                            );

                            console.log()
                            const mailOptions = {
                                from: "a72302492@gmail.com",
                                to: user[0].email,
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
            <p>Project Name: <strong>${find_project.project_name}</strong></p>
            <p>Quotation File ID: <strong>${fileId}</strong></p>
            <p>File URL: <a href="${find_file.fileUrl}">View File</a></p>
            <p>Thank you!</p>
            
        </div>
    </div>
</body>
</html>

`,
                            };
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    responseData(res, "", 400, false, "Failed to send email");
                                } else {
                                    responseData(
                                        res,
                                        `User Created And send credential successfully!`,
                                        200,
                                        true,
                                        ""
                                    );
                                }
                            });



                            responseData(res, "File share successfully!", 200, true, "");
                        }
                        else{
                            responseData(res, "", 401, false, "previous quotation not approved");
                        }
                        

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
        console.log(err);
        responseData(res, "", 500, false, "Something is wrong in share Quotation");
    }
}



