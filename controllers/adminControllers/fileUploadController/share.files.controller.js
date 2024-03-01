import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { responseData } from "../../../utils/respounse.js";

export const shareFile = async (req, res) => {
    try {
        const fileId = req.body.file_id;
        const leadId = req.body.lead_id;
        const projectId = req.body.project_id;
        const to = 'a72302492@gmail.com';
        const subject = 'Subject of the email';
        const body = 'Body of the email';

        // Validate required parameters
        if (!fileId) {
            return responseData(res, "", 400, false, "File ID, Lead ID, and Project ID are required", null);
        }

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
                    attachments.push(findFiles.files[i].files[j].fileUrl);
                }
            }
        }

      
        // const bodyWithAttachments = `${body}\n\nAttachments:\n${attachments.map(url => url).join('\n')}`;

       
        // const mailtoURI = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyWithAttachments)}`;

      
        responseData(res, "success", 200, true, "", attachments);
    } catch (err) {
        responseData(res, "", 500, false, "Internal Server Error", err);
    }
};
