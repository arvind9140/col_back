
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";
import nodemailer from "nodemailer";
import { onlyEmailValidation } from "../../../utils/validation.js";

function validateEmailArray(emailArray) {
    for (let i = 0; i < emailArray.length; i++) {
        if (!onlyEmailValidation(emailArray[i])) {
            return false;
        }
    }
    return true;
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

export const shareFile = async (req, res) => {
    try {
        const fileId = req.body.file_id;
        const leadId = req.body.lead_id;
        const projectId = req.body.project_id;
        const folderId = req.body.folder_id;
        const email = req.body.email;
        const subject = req.body.subject;
        const body = req.body.body;
        const type = req.body.type;

        const isValid = validateEmailArray(email);

        // Validate required parameters
        if (!fileId) {
            return responseData(res, "", 400, false, "File ID is required", null);
        } else if (!isValid) {
            return responseData(res, "", 400, false, "Invalid email address", null);
        } else {
            let findfiles;
            let attachments = [];

            if (type === 'template') {
                findfiles = await fileuploadModel.findOne({
                    "files.folder_id": folderId,
                });
                for (let i = 0; i < findfiles.files.length; i++) {
                    for (let j = 0; j < findfiles.files[i].files.length; j++) {
                        if (fileId.includes(findfiles.files[i].files[j].fileId)) {
                            attachments.push({ path: findfiles.files[i].files[j].fileUrl });
                        }
                    }
                }
            } else {
                findfiles = await fileuploadModel.findOne({
                    $or: [
                        { project_id: projectId },
                        { lead_id: leadId },
                    ]
                });
                if (findfiles && findfiles.files) {
                    for (let i = 0; i < findfiles.files.length; i++) {
                        if (findfiles.files[i].files) {
                            for (let j = 0; j < findfiles.files[i].files.length; j++) {
                                if (fileId.includes(findfiles.files[i].files[j].fileId)) {
                                    attachments.push({ path: findfiles.files[i].files[j].fileUrl });
                                }
                            }
                        }
                    }
                }
            }


            if (!findfiles) {
                return responseData(res, "", 404, false, "Data Not Found", null);
            }
           
          
            const mailOptions = {
                from: "a72302492@gmail.com",
                to: email,
                subject: subject,
                html: body,
                attachments: attachments
            };

          
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    responseData(res, "", 400, false, "Failed to send email");
                } else {
                    responseData(
                        res,
                        `Email has been sent successfully`,
                        200,
                        true,
                        ""
                    );
                }
            });
        }
    } catch (err) {
        console.log(err)
        responseData(res, "", 500, false, "Internal Server Error", err);
    }
};

