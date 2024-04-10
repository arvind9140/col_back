import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { responseData } from "../../../utils/respounse.js";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { onlyEmailValidation } from "../../../utils/validation.js";


function generatedigitnumber() {
    const length = 6;
    const charset = "0123456789";
    let password = "";
    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "a72302492@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});




const storeOrUpdateQuotations = async (res, existingQuotationData, isFirst = false) => {
    try {
        let updatedQuotationData;

        if (isFirst) {
            // If it's the first entry, push the quotation data directly
            const updatedProject = await projectModel.findOneAndUpdate(
                { project_id: existingQuotationData.project_id },
                {
                    $push: { "quotation": existingQuotationData.quotationsData }
                },
                { new: true } // Return the updated document
            );
            return responseData(res, `Quotation shared successfully`, 200, true, "");

            updatedQuotationData = updatedProject.quotation;

        } else {
            // For subsequent entries, check if the item exists and update accordingly
            const findProject = await projectModel.findOne({ "quotation.itemId": existingQuotationData.quotationsData.itemId });

            if (findProject) {
                let findItem
                if (existingQuotationData.client === "client") {

                    findItem = await projectModel.findOneAndUpdate(
                        {
                            project_id: existingQuotationData.project_id,
                            "quotation.itemId": existingQuotationData.quotationsData.itemId
                        },
                        {
                            $set: {

                                "quotation.$[elem].client_status": "pending"
                            }
                        },
                        {
                            arrayFilters: [{ "elem.itemId": existingQuotationData.quotationsData.itemId }],
                            new: true // Return the updated document
                        }
                    );
                    return responseData(res, `Quotation shared successfully`, 200, true, "");
                }
                if (existingQuotationData.admin === "admin") {

                    findItem = await projectModel.findOneAndUpdate(
                        {
                            project_id: existingQuotationData.project_id,
                            "quotation.itemId": existingQuotationData.quotationsData.itemId
                        },
                        {
                            $set: {
                                "quotation.$[elem].admin_status": "pending",

                            }
                        },
                        {
                            arrayFilters: [{ "elem.itemId": existingQuotationData.quotationsData.itemId }],
                            new: true // Return the updated document
                        }
                    );
                    return responseData(res, `Quotation shared successfully`, 200, true, "");
                }


                if (findItem) {
                    updatedQuotationData = findItem.quotation;
                } else {
                    const updatedProject = await projectModel.findOneAndUpdate(
                        { project_id: existingQuotationData.project_id },
                        {
                            $push: { "quotation": existingQuotationData.quotationsData }
                        },
                        { new: true } // Return the updated document
                    );
                    return responseData(res, `Quotation shared successfully`, 200, true, "");
                    updatedQuotationData = updatedProject.quotation;
                }

            } else {
                const updatedProject = await projectModel.findOneAndUpdate(
                    { project_id: existingQuotationData.project_id },
                    {
                        $push: { "quotation": existingQuotationData.quotationsData }
                    },
                    { new: true } // Return the updated document
                );
                return responseData(res, `Quotation shared successfully`, 200, true, "");
                return; // Exit early if project not found
            }
        }

    } catch (error) {
        // Log and respond with error message
        console.error("Error storing or updating quotations:", error);
        responseData(res, "", 500, false, "Internal server error");
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
             <p >
                 <a href="${approvalLinkClient(project_id, file_id, 'approved')}">Approve</a> |
            <a href="${approvalLinkClient(project_id, file_id, 'rejected')}">Reject</a>
            
                    </p>
            <p>Thank you!</p>
            
        </div>
    </div>
</body>
</html>
`
            };
            let check_status = 0;
            const check_data = await projectModel.findOne({
                project_id: project_id,
                "quotation.$.itemId": file_id
            })
            if (check_data.quotation.length > 0) {
                for (let i = 0; i < check_data.quotation.length; i++) {

                    if (check_data.quotation[i].itemId == file_id) {

                        if (check_data.quotation[i].client_status == "pending") {

                            check_status++;
                        }
                    }

                }
                if (check_status == 0) {
                    transporter.sendMail(mailOptions, async (error, info) => {
                        if (error) {
                            console.log(error)
                            return responseData(res, "", 400, false, "Failed to send email");
                        } else {

                            const quotationsData = {
                                itemId: file_id,
                                client_status: "pending",
                                file_name: findFile.fileName,
                                files: findFile,
                                remark: "",
                                admin_status: "",
                                client_remark: ""

                            };


                            const createObj = {
                                project_id,
                                quotationsData,
                                client: "client"
                            }
                            await storeOrUpdateQuotations(res, createObj);

                        }
                    });

                }
                else {
                    responseData(res, "", 400, false, "Quotation already shared with client and client not response");
                }

            }
            if (check_data.quotation.length < 1) {
                transporter.sendMail(mailOptions, async (error, info) => {
                    if (error) {
                        console.log(error)
                        return responseData(res, "", 400, false, "Failed to send email");
                    } else {

                        const quotationsData = {
                            itemId: file_id,
                            client_status: "pending",
                            file_name: findFile.fileName,
                            files: findFile,
                            remark: "",
                            admin_status: "",
                            client_remark: ""
                        };


                        const createObj = {
                            project_id,
                            quotationsData,

                        }
                        await storeOrUpdateQuotations(res, createObj, true);

                    }
                });

            }


        } else if (type === "Internal") {
            if (!user_name) {
                return responseData(res, "", 400, false, "User name is required");
            }
            const check_status = await registerModel.findOne({
                "data.quotationData.project_id": project_id,
                "data.quotationData.quotation_file_id": file_id,


            });
            if (!check_status) {
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
                    "data.quotationData.approval_status": "pending"
                });
                if (checkApproval) {
                    return responseData(res, "", 401, false, "Previous quotation not approved or rejected");
                }
                const findFile = findQuotation.files.find(folder => folder.folder_name === folder_name)?.files.find(file => file.fileId === file_id);
                if (!findFile) {
                    return responseData(res, "", 401, false, "File not found in the specified folder");
                }



                const mailOptions = {
                    from: "a72302492@gmail.com",
                    to: user.email,
                    subject: "Quotation Approval Notification",
                    html: `
        <!DOCTYPE html>
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
            <div class="notification">
                <h2>Quotation Approval Notification</h2>
                <p>Hello ${user_name},</p>
                <p>A new quotation file has been shared with you for approval. Please review it and take necessary actions.</p>
                <p>Project Name: <strong>${findProject.project_name}</strong></p>
                <p>Quotation File ID: <strong>${file_id}</strong></p>
                <p>File URL: <a href="${findFile.fileUrl}">View File</a></p>
                
                <p > 
                 <a href="${approvalLink(project_id, file_id, 'approved')}">Approve</a> |
            <a href="${approvalLink(project_id, file_id, 'rejected')}">Reject</a>
            
                    </p>
                <p>Thank you!</p>
            </div>
        </body>
        </html>
    `
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
                                        approval_status: "pending"
                                    },
                                    "data.$[elem].notificationData": {
                                        _id: new mongoose.Types.ObjectId(),
                                        itemId: project_id,
                                        notification_id: generatedigitnumber(),
                                        type: "quotation",
                                        status: false,
                                        message: `Quotation file shared with you for approval in ${findProject.project_name}  . Please check`,
                                        createdAt: new Date()
                                    }
                                }
                            },
                            { arrayFilters: [{ "elem.projectData": { $exists: true } }] }
                        );
                        const quotationsData = {
                            itemId: file_id,
                            admin_status: "pending",
                            file_name: findFile.fileName,
                            files: findFile,
                            remark: "",
                            client_status: "",
                            client_remark: "",
                        };
                        if (findProject.quotation.length > 0) {
                            const createObj = {
                                project_id,
                                quotationsData,
                                admin: "admin"

                            }
                            await storeOrUpdateQuotations(res, createObj);
                            // return responseData(res, `Quotation shared successfully`, 200, true, "");
                        }
                        else {
                            const createObj = {
                                project_id,
                                quotationsData,
                            }
                            await storeOrUpdateQuotations(res, createObj, true);
                            // return responseData(res, `Quotation shared successfully`, 200, true, "");
                        }

                    }
                });
            }
            else {
                return responseData(res, "", 400, false, "Already share this file.");
            }
        } else {
            return responseData(res, "", 400, false, "Invalid Type");
        }
    } catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while sharing the quotation");
    }
};

function approvalLink(project_id, file_id, status) {
    return `https://col-back.onrender.com/v1/api/users/approval/admin/${project_id}/${file_id}/${status}`;
}

function approvalLinkClient(project_id, file_id, status) {
    return `https://col-back.onrender.com/v1/api/users/approval/client/${project_id}/${file_id}/${status}`;
}


export const updateStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const project_id = req.params.project_id;
        const itemId = req.params.file_id;
        const check_status = await projectModel.findOne({
            project_id: project_id,
            "quotation.$.itemId": itemId
        })
        for (let i = 0; i < check_status.quotation.length; i++) {
            if (check_status.quotation[i].itemId == itemId) {
                if (check_status.quotation[i].admin_status !== "pending") {
                    res.send('you are already submit your response')
                }
                else {
                    try {
                        const filter = { "data.quotationData.quotation_file_id": itemId };
                        const update = {
                            $set: { "data.$[outerElem].quotationData.$[innerElem].approval_status": status }
                        };
                        const options = {
                            arrayFilters: [
                                { "outerElem.quotationData": { $exists: true } },
                                { "innerElem.quotation_file_id": itemId }
                            ],
                            new: true
                        };

                        const userUpdate = await registerModel.findOneAndUpdate(filter, update, options);


                    } catch (error) {
                        console.error("Error updating document:", error);
                    }



                    if (status === 'approved') {
                        // If the item exists, update its admin_status and client_status
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].admin_status": status,

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }

                        );
                        res.send('Quotation approved successfully!');

                    } if (status === 'rejected') {
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].admin_status": status,

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }
                        );
                        res.send('Quotation rejected successfully!');
                    }
                }
            }

        }

    }
    catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while approving the quotation");
    }
}

export const updateStatusClient = async (req, res) => {
    try {
        const status = req.params.status;
        const project_id = req.params.project_id;
        const itemId = req.params.file_id;

        const check_status = await projectModel.findOne({
            project_id: project_id,
            "quotation.$.itemId": itemId
        })
        for (let i = 0; i < check_status.quotation.length; i++) {
            if (check_status.quotation[i].itemId == itemId) {
                if (check_status.quotation[i].client_status !== "pending") {
                    res.send(`you are already submit your response`)
                }
                else {
                    if (status === 'approved') {
                        // If the item exists, update its admin_status and client_status
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].client_status": status,

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }

                        );
                        res.send('Quotation approved successfully!');
                    } if (status === 'rejected') {
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].client_status": status,

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }

                        );
                        res.send('Quotation rejected successfully!');
                    }
                }
            }
        }

    }
    catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while approving the quotation");
    }
}


export const updateStatusAdmin = async (req, res) => {
    try {
        const status = req.body.status;
        const project_id = req.body.project_id;
        const itemId = req.body.file_id;
        const remark = req.body.remark;
        const check_status = await projectModel.findOne({
            project_id: project_id,
            "quotation.$.itemId": itemId
        })
        for (let i = 0; i < check_status.quotation.length; i++) {
            if (check_status.quotation[i].itemId == itemId) {
                if (check_status.quotation[i].admin_status !== "pending") {

                    return responseData(res, "", 400, false, "you are already submit your response");
                }
                else {
                    try {
                        const filter = { "data.quotationData.quotation_file_id": itemId };
                        const update = {
                            $set: { "data.$[outerElem].quotationData.$[innerElem].approval_status": status }
                        };
                        const options = {
                            arrayFilters: [
                                { "outerElem.quotationData": { $exists: true } },
                                { "innerElem.quotation_file_id": itemId }
                            ],
                            new: true
                        };

                        const userUpdate = await registerModel.findOneAndUpdate(filter, update, options);


                    } catch (error) {
                        console.error("Error updating document:", error);
                    }



                    if (status === 'approved') {
                        // If the item exists, update its admin_status and client_status
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].admin_status": status


                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }

                        );
                        // res.send('Quotation approved successfully!');
                        responseData(res, "Quotation approved successfully!", 200, true, "")

                    } if (status === 'rejected') {
                        await projectModel.findOneAndUpdate(
                            {
                                project_id: project_id,
                                "quotation.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "quotation.$[elem].admin_status": status,
                                    "quotation.$[elem].remark": remark

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }
                        );
                        // res.send('Quotation rejected successfully!');
                        responseData(res, "Quotation rejected successfully!", 200, true, "")
                    }
                }
            }

        }

    }
    catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while approving the quotation");
    }
}