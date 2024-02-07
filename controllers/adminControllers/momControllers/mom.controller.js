import { responseData } from "../../../utils/respounse.js";
import projectModel from "../../../models/adminModels/project.model.js";
import AWS from "aws-sdk";
import { onlyAlphabetsValidation } from "../../../utils/validation.js";
import pdf from "html-pdf";

function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const uploadFile = async (file, fileName, project_id, mom_id) => {
  return s3
    .upload({
      Bucket: `interior-design1/${project_id}/${mom_id}`,
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};

export const createmom = async (req, res) => {
  try {
    const project_id = req.body.project_id;
    const meetingDate = req.body.meetingdate;
    const source = req.body.source;
    const client_name = req.body.client_name;
    const architect = req.body.architect;
    const organisor = req.body.organisor;
    const consultant_name = req.body.consultant_name;
    const remark = req.body.remark;
    const imaportant_note = req.body.imaportant_note;

    // write here validation ///
    if(!project_id)
    {
      return res.status(400).send({status:false,message:"project_id is required"})
    }
   else if(!meetingDate)
    {
      return res.status(400).send({status:false,message:"meetingDate is required"})
    }
   else if(!source)
    {
      return res.status(400).send({status:false,message:"source is required"})
    }
   else if(!client_name && !onlyAlphabetsValidation(client_name))
    {
      return res.status(400).send({status:false,message:"client_name is required"})
    }
   else if(!architect && !onlyAlphabetsValidation(architect))
    {
      return res.status(400).send({status:false,message:"architech is required"})
    }
   else if(!organisor && !onlyAlphabetsValidation(organisor))
    {
      return res.status(400).send({status:false,message:"organiser is required"})
    }
   else if(!consultant_name && !onlyAlphabetsValidation(consultant_name))
   {
     return res.status(400).send({status:false,message:"consultant_name is required"})
   }
    else{

    

    const check_project = await projectModel.find({ project_id: project_id });
    if (check_project.length > 0) {
      const mom_id = `COl-M-${generateSixDigitNumber()}`; // generate meeting id
      let mom_data;
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
        const fileName = Date.now() + file.name;
        fileUploadPromises.push(uploadFile(file, fileName, project_id, mom_id));
      }

      const responses = await Promise.all(fileUploadPromises);

      const fileUploadResults = responses.map((response) => ({
        status: response.Location ? true : false,
        data: response ? response : response.err,
      }));

      const successfullyUploadedFiles = fileUploadResults.filter(
        async (result) => result.data
      );
      let file = [];
      if (successfullyUploadedFiles.length > 0) {
        const newfileuploads = successfullyUploadedFiles.map((result, index) =>
          file.push(result.data.Location)
        );
        await Promise.all(newfileuploads);

        const update_mom = await projectModel.findOneAndUpdate(
          { project_id: project_id },
          {
            $push: {
              mom: {
                mom_id: mom_id,
                meetingdate: meetingDate,
                source: source,
                attendees: {
                  client_name: client_name,
                  organisor: organisor,
                  architect: architect,
                  consultant_name: consultant_name,
                },
                remark: remark,
                imaportant_note: imaportant_note,
                files: file,
              },
            },
          },
          { new: true }
        );
        responseData(
          res,
          "Document updated successfully:",
          200,
          true,
          "",
          update_mom
        );
      } else {
        responseData(res, "", 500, false, "Error uploading files", []);
      }
    }
    if (check_project < 1) {
      responseData(res, "", 404, false, "Project Not Found.");
    }
  }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};

export const getAllMom = async (req, res) => {
  try {
    const project_id = req.query.project_id;
    const check_project = await projectModel.find({
      project_id: project_id,
    });

    if (check_project.length > 0) {
      responseData(res, "MOM Found", 200, true, "", check_project[0].mom);
    }
    if (check_project.length < 1) {
      responseData(res, "", 404, false, "Project Not Found.");
    }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};

export const getSingleMom = async (req, res) => {
  try {
    const project_id = req.query.project_id;
    const mom_id = req.query.mom_id;

    const check_project = await projectModel.find({ project_id: project_id });
    if (check_project.length > 0) {
      const check_mom = check_project[0].mom.filter(
        (mom) => mom.mom_id.toString() === mom_id
      );
      if (check_mom.length > 0) {
        responseData(res, "MOM Found", 200, true, "", check_mom);
      } else {
        responseData(res, "", 404, false, "MOM Not Found");
      }
    }
    if (check_project.length < 1) {
      responseData(res, "", 404, false, "Project Not Found");
    }
  } catch (error) {
    responseData(res, "", 400, false, error.message);
  }
};

export const generatePdf = async (req, res) => {
  try {
    const project_id = req.query.project_id;
    const mom_id = req.query.mom_id;

    const check_project = await projectModel.find({ project_id: project_id });

    if (check_project.length > 0) {
      const check_mom = check_project[0].mom.filter(
        (mom) => mom.mom_id.toString() === mom_id
      );

      if (check_mom.length > 0) {
        const momData = check_mom[0]; // Extracting the MOM data
        const momRemarkSplit = momData.remark.split(".").filter(Boolean); // Filter to remove empty strings
        const momRemarkHtml = momRemarkSplit
          .map((remark) => 
          `<li>${remark.trim()}</li>`)
          .join("");
          const momNoteSplit = momData.imaportant_note.split(".").filter(Boolean); // Filter to remove empty strings
          const momImportant_noteHtml = momNoteSplit
            .map((note) => `<li>${note.trim()}</li>`)
            .join("");

     const htmlTemplate = `
<html>
  <head>
    <title>MOM Data Report</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      .content {
        text-align: left; /* Align content to the left */
        max-width: 600px; /* Limit width to make content centered */
        margin: auto; /* Center content horizontally */
      }
      h1 {
        color: #333;
        text-align: center; /* Center the heading */
      }
      ul {
        list-style: none; /* Remove default list styles */
        padding: 0; /* Remove default padding */
      }
      li {
        margin-bottom: 10px; /* Add space between list items */
      }
      .label {
        font-weight: bold; /* Make labels bold */
        display: inline-block; /* Display labels inline */
        width: 150px; /* Set a fixed width for labels */
        margin-bottom: 10px;
      }
      a {
        color: blue;
      }
      .feedback {
        text-align: center; /* Center the feedback section */
        margin-top: 10px; /* Add space above the feedback section */
      }
    </style>
  </head>
  <body>
    <div class="content">
      <h1>MOM Data Report</h1>
      <ul>
        <li><span class="label">MOM_ID:</span> ${momData.mom_id}</li>
        <li><span class="label">MOM_Date:</span> ${momData.meetingdate}</li>
        <li><span class="label">MOM_Source:</span> ${momData.source}</li>
        <li><span class="label">Attendees:</span>
          <ul>
            <li><span class="label">Client Name:</span> ${
              momData.attendees.client_name
            }</li>
            <li><span class="label">Organisor:</span> ${
              momData.attendees.organisor
            }</li>
            <li><span class="label">Architect:</span> ${
              momData.attendees.architect
            }</li>
            <li><span class="label">Consultant Name:</span> ${
              momData.attendees.consultant_name
            }</li>
          </ul>
        </li>
        <li><span class="label">MOM_Remark:</span> 
        <br>
          <ul>
           <ol>
        ${momRemarkHtml}
      </ol>
          </ul>
        </li>
        <li><span class="label">MOM_Important_Notes:</span>
        <ol>
        ${momImportant_noteHtml}
      </ol></li>
        <li><span class="label">Files:</span>
          <ul>
            <ol>
        ${momData.files
          .map((file) => `<li><a href="${file}">${file}</a></li>`)
          .join("")}
      </ol>
          </ul>
        </li>
      </ul>
    </div>
        <div class="feedback">
      <p>Would you like to provide feedback on this MOM report?</p>
      <a href="/feedback?project_id=${project_id}&mom_id=${mom_id}">Submit Feedback</a>
    </div>

  </body>
</html>
`;

        const pdfOptions = {
          format: "Letter",
        };

        // Generate PDF
        pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.setHeader("Content-Type", "application/pdf");
            stream.pipe(res);
          }
        });
      } else {
        responseData(res, "", 404, false, "MOM Not Found");
      }
    } else {
      responseData(res, "", 404, false, "Project Not Found");
    }
  } catch (err) {
    console.log(err);
    responseData(res, "", 400, false, err.message);
  }
};

