import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { responseData } from "../../../utils/respounse.js";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
// import projectModel from "../../../models/adminModels/project.model.js";
import leadModel from "../../../models/adminModels/leadModel.js";
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

const storeOrUpdateContract = async (res, existingContractData, isFirst = false) => {
    try {
        if (isFirst) {
            const updatedLead = await leadModel.findOneAndUpdate(
                { lead_id: existingContractData.lead_id },
                {
                    $push: { "contract": existingContractData.contractData }
                },
                { new: true } // Return the updated document
            );
            return responseData(res, `Contract shared successfully`, 200, true, "");

        }
        else {
            const check_lead = await leadModel.findOne({ lead_id: existingContractData.lead_id });
            if (check_lead) {
                const updatedLead = await leadModel.findOneAndUpdate(
                    { lead_id: existingContractData.lead_id },
                    {
                        $push: {
                            "contract": existingContractData.contractData
                        }
                    }
                )
                return responseData(res, `Contract shared successfully`, 200, true, "");
            }
        }
    }
    catch (err) {
        return responseData(res, "", 401, false, "Error occured while storing contract");
    }

}


export const shareContract = async (req, res) => {
    try {
        const folder_name = req.body.folder_name;
        const fileId = req.body.file_id;
        const lead_id = req.body.lead_id;
        const user_name = req.body.user_name;
        const type = req.body.type;
        const client_email = req.body.email;
        const client_name = req.body.client_name;


        if (!folder_name || !fileId || !lead_id ) {
            return responseData(res, "", 400, false, "Please enter all fields");
        }
        else {
            if (type === 'Internal') {
                if (!user_name)
                {
                    return responseData(res, "", 400, false, "Please enter all fields");
                }
                const check_user = await registerModel.findOne({ username: user_name });
                if (!check_user) {
                    return responseData(res, "", 400, false, "User not found");
                }
                else {
                    const check_lead = await leadModel.findOne({ lead_id: lead_id });
                    if (!check_lead) {
                        return responseData(res, "", 400, false, "Lead not found");
                    }
                    else {
                        // const check_file_in_lead = await leadModel.findOne({ lead_id: lead_id, "contract.itemId": fileId });
                        // if (check_file_in_lead) {
                        //     return responseData(res, "", 400, false, "File already exists in lead");
                        // }
                        const check_status1 = await leadModel.findOne({ lead_id: lead_id, "contract.itemId": fileId, "contract.admin_status": "pending" });
                        if (check_status1) {
                            return responseData(res, "", 400, false, "This Contract not  closed yet");
                        }
                        const check_status2 = await leadModel.findOne({ lead_id: lead_id, "contract.itemId": fileId, "contract.admin_status": "rejected" });
                        if (check_status2) {
                            return responseData(res, "", 400, false, "This Contract rejected");
                        }
                        const check_status3 = await leadModel.findOne({ lead_id: lead_id, "contract.itemId": fileId, "contracts.admin_status": "approved" });
                        if (check_status3) {
                            return responseData(res, "", 400, false, "This Contract approved");
                        }



                        const check_file = await fileuploadModel.findOne({ "files.files.fileId": fileId });

                        if (!check_file) {
                            return responseData(res, "", 400, false, "File not found");
                        }
                        else {


                            const file_url = check_file.files.find(x => x.folder_name === folder_name)?.files.find(file => file.fileId === fileId);


                            const mailOptions = {
                                from: "a72302492@gmail.com",
                                to: check_user.email,
                                subject: "Contract Share Notification",
                                html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contract Share Notification</title>
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
                <h2>Contract Share Notification</h2>
                <p>Hello ${user_name},</p>
                <p>A new contract has been shared with you. Please review it and take necessary actions.</p>
                <p>Lead Name: <strong>${check_lead.name}</strong></p>
                <p>Contract File ID: <strong>${fileId}</strong></p>
                <p>File URL: <a href="${file_url.fileUrl}">View File</a></p>
                  <p >
                 <a href="${approvalLinkAdmin(lead_id, fileId, 'approved')}">Approve</a> |
            <a href="${approvalLinkAdmin(lead_id, fileId, 'rejected')}">Reject</a>
            
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
                                                    lead_id: lead_id,
                                                    contract_file_id: fileId,
                                                    file_url: file_url.fileUrl,
                                                    approval_status: "pending"
                                                },
                                                "data.$[elem].notificationData": {
                                                    _id: new mongoose.Types.ObjectId(),
                                                    itemId: lead_id,
                                                    notification_id: generatedigitnumber(),
                                                    type: "contract",
                                                    status: false,
                                                    message: `Contract file shared with you for review in ${check_lead.name}  . Please check`,
                                                    createdAt: new Date()
                                                }
                                            }
                                        },
                                        { arrayFilters: [{ "elem.projectData": { $exists: true } }] }
                                    );

                                    const contractData = {
                                        itemId: fileId,
                                        admin_status: "pending",
                                        file_name: file_url.fileName,
                                        files: file_url,
                                        remark: "",

                                    };

                                    if (check_lead.contract.length < 1) {

                                        const createObj = {
                                            lead_id,
                                            contractData,
                                        }

                                        await storeOrUpdateContract(res, createObj, true);
                                    }
                                    else {
                                        const createObj = {
                                            lead_id,
                                            contractData,


                                        }
                                        await storeOrUpdateContract(res, createObj);

                                    }
                                }
                            });


                        }

                    }
                }

            }
           else if(type  === 'Client')
            {
               
                if(!onlyEmailValidation(client_email) && !client_email)
                {
                    return responseData(res, "", 400, false, "Please enter client email");
                }
                else if(!client_name || client_name.length<3)
                {
                    return responseData(res, "", 400, false, "Please enter client name");
                }

                else{
                    const check_lead = await leadModel.find({lead_id:lead_id})
                    if(!check_lead)
                    {
                        return responseData(res, "", 400, false, "Invalid lead id");
                    }
                   
                    const check_file = await fileuploadModel.findOne({ "files.files.fileId": fileId });

                    if (!check_file) {
                        return responseData(res, "", 400, false, "File not found");
                    }
                    const file_url = check_file.files.find(x => x.folder_name === folder_name)?.files.find(file => file.fileId === fileId);


                    const mailOptions = {
                        from: "a72302492@gmail.com",
                        to: client_email,
                        subject: "Contract Share Notification",
                        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contract Share Notification</title>
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
                <h2>Contract Share Notification</h2>
                <p>Hello ${client_name},</p>
                <p>A  contract has been shared with you. Please review it and take necessary actions.</p>
                <p>File URL: <a href="${file_url.fileUrl}">View File</a></p>
                
               
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
                            return responseData(res, "Email sent successfully", 200, true, "");

                        }
                    })

                    
                }

            }
            else{
                return responseData(res, "", 400, false, "Invalid Type");
            }
        }


    }
    catch (err) {

    }
}


function approvalLinkAdmin(lead_id, fileId, status) {
    
    return `https://col-back-2.onrender.com/v1/api/users/approval/contract/admin/${lead_id}/${fileId}/${status}`;
}


export const updateStatusAdmin = async (req, res) => {
    try {
        const file_id = req.params.fileId;
        const lead_id = req.params.lead_id;
        const status = req.params.status;
     
        const check_status = await leadModel.findOne({ lead_id: lead_id })
        if (check_status) {
           
            for (let i = 0; i < check_status.contract.length; i++) {
                if (check_status.contract[i].itemId == file_id) {
                    
                    if (check_status.contract[i].admin_status !== 'pending') {
                        return responseData(res, "", 404, false, "You already submit your response");
                    }
                    else {
                        try {
                           
                            const filter = { "data.quotationData.contract_file_id": file_id };
                            const update = {
                                $set: { "data.$[outerElem].quotationData.$[innerElem].approval_status": status }
                            };
                            const options = {
                                arrayFilters: [
                                    { "outerElem.quotationData": { $exists: true } },
                                    { "innerElem.contract_file_id": file_id }
                                ],
                                new: true
                            };

                            const userUpdate = await registerModel.findOneAndUpdate(filter, update, options);
console.log(userUpdate)

                        } catch (error) {
                            console.error("Error updating document:", error);
                        }
                        if (status == 'approved') {
                            await leadModel.findOneAndUpdate(
                                {
                                    lead_id: lead_id,
                                    "contract.$.itemId": file_id
                                },
                                {
                                    $set: {
                                        "contract.$[elem].admin_status": status,

                                    }
                                },
                                {
                                    arrayFilters: [{ "elem.itemId": file_id }],
                                    new: true
                                }

                            );
                            res.send('Quotation approved successfully!');

                        }
                        if (status === 'rejected') {
                            await leadModel.findOneAndUpdate(
                                {
                                    lead_id: lead_id,
                                    "contract.$.itemId": file_id
                                },
                                {
                                    $set: {
                                        "contract.$[elem].admin_status": status,

                                    }
                                },
                                {
                                    arrayFilters: [{ "elem.itemId": file_id }],
                                    new: true
                                }
                            );
                            res.send('Quotation rejected successfully!');
                        }
                    }
                }

            }
        }
        else {
            return responseData(res, "", 404, false, "No lead found with this lead_id");
        }

    }
    catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while approving the Contract");

    }





}


export const contractStatus = async(req,res) =>{
    try {
        const status = req.body.status;
        const lead_id = req.body.lead_id;
        const itemId = req.body.file_id;
        const remark = req.body.remark;
        const check_status = await leadModel.findOne({
            lead_id: lead_id,
            "contract.$.itemId": itemId
        })
        for (let i = 0; i < check_status.contract.length; i++) {
            if (check_status.contract[i].itemId == itemId) {
                if (check_status.contract[i].admin_status !== "pending") {

                    return responseData(res, "", 400, false, "you are already submit your response");
                }
                else {
                    try {
                        const filter = { "data.quotationData.contract_file_id": itemId };
                        const update = {
                            $set: { "data.$[outerElem].quotationData.$[innerElem].approval_status": status }
                        };
                        const options = {
                            arrayFilters: [
                                { "outerElem.quotationData": { $exists: true } },
                                { "innerElem.contract_file_id": itemId }
                            ],
                            new: true
                        };

                        const userUpdate = await registerModel.findOneAndUpdate(filter, update, options);


                    } catch (error) {
                        console.error("Error updating document:", error);
                    }



                    if (status == 'approved') {
                        await leadModel.findOneAndUpdate(
                            {
                                lead_id: lead_id,
                                "contract.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "contract.$[elem].admin_status": status,

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }

                        );
                        responseData(res, "COntract  approved Successfully", 200, true, "");

                    }
                    if (status === 'rejected') {
                        await leadModel.findOneAndUpdate(
                            {
                                lead_id: lead_id,
                                "contract.$.itemId": itemId
                            },
                            {
                                $set: {
                                    "contract.$[elem].admin_status": status,
                                    "contract.$[elem].remark": remark

                                }
                            },
                            {
                                arrayFilters: [{ "elem.itemId": itemId }],
                                new: true
                            }
                        );
                        responseData(res, "COntract  rejected Successfully", 200,true,"");
                    }
                }
            }

        }

    }
    catch (err) {
        console.error(err);
        return responseData(res, "", 500, false, "Something went wrong while approving the contract");
    }
}


export const getContractData = async(req,res) =>{
    try{
        const lead_id = req.query.lead_id;

        if(!lead_id)
        {
            return responseData(res, "", 400, false, "Lead id is required");
        }
        else{
            const contractData  =  await leadModel.find({lead_id:lead_id})
            if (contractData)
            {
                
                return responseData(res, "Contract data fetched successfully", 200, true, "", contractData[0].contract);
            }
            else{
                return responseData(res, "", 400, false, "No contract found");
            }


        }
        

    }
    catch(err)
    {
        responseData(res, "", 500, false, "Something went wrong while getting the contract");
    }
}













