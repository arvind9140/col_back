
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
        const email = req.body.email;
        const subject = req.body.subject;
        const body = req.body.body;

        const isValid = validateEmailArray(email);
        // Validate required parameters
        if (!fileId) {
            return responseData(res, "", 400, false, "File ID, Lead ID, and Project ID are required", null);
        }
        else if (!isValid) {
            return responseData(res, "", 400, false, "Invalid email address", null);

        }
        else {
            // Find file data based on project ID or lead ID
            const findFiles = await fileuploadModel.findOne({
                $or: [
                    { project_id: projectId },
                    { lead_id: leadId },
                ]
            });

            if (!findFiles) {
                return responseData(res, "", 404, false, "Data Not Found", null);
            }

            // Find attachments corresponding to the given file IDs
            const attachments = [];
            for (let i = 0; i < findFiles.files.length; i++) {
                for (let j = 0; j < findFiles.files[i].files.length; j++) {
                    if (fileId.includes(findFiles.files[i].files[j].fileId)) {
                        attachments.push({ path: findFiles.files[i].files[j].fileUrl });
                    }
                }
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
        responseData(res, "", 500, false, "Internal Server Error", err);
    }
};
