import { responseData } from "../../../utils/respounse.js";
import projectModel from "../../../models/adminModels/project.model.js";
import AWS from "aws-sdk";
import { onlyAlphabetsValidation } from "../../../utils/validation.js";
import pdf from "html-pdf";
import nodemailer from "nodemailer";
import fs from "fs";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import { momPdfTemplate } from "../../../utils/mom.pdf.template.js";


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
      Bucket: `collegemanage/${project_id}/${mom_id}`,
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
        project_id: existingFileUploadData.project_id,
        project_name: existingFileUploadData.project_Name,
        files: [
          {
            folder_name: existingFileUploadData.folder_name,
            updated_date: existingFileUploadData.updated_date,
            files: existingFileUploadData.files,
          },
        ],
      });
      console.log("first File created");

    } else {
      // Use update query to push data
      const updateResult = await fileuploadModel.updateOne(
        {
          project_id: existingFileUploadData.project_id,
          "files.folder_name": existingFileUploadData.folder_name,
        },
        {
          $push: {
            "files.update_date": existingFileUploadData.updated_date,
            "files.$.files": { $each: existingFileUploadData.files },
          },
        },
        {
          arrayFilters: [
            { "folder.folder_name": existingFileUploadData.folder_name },
          ],
        }
      );

      if (updateResult.modifiedCount === 1) {
        console.log("File Upload Data Updated Successfully");
      } else {
        // If the folder does not exist, create a new folder object
        const updateNewFolderResult = await fileuploadModel.updateOne(
          { project_id: existingFileUploadData.project_id },
          {
            $push: {
              files: {
                folder_name: existingFileUploadData.folder_name,
                updated_date: existingFileUploadData.updated_date,
                files: existingFileUploadData.files,
              },
            },
          }
        );

        if (updateNewFolderResult.modifiedCount === 1) {
          console.log("New Folder Created and File Upload Data Updated Successfully");
        } else {
          console.log("Lead not found or file data already updated");
          responseData(
            res,
            "",
            404,
            false,
            "Lead not found or file data already updated"
          );
        }
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

export const getAllProjectMom = async (req, res) => {
  try {
    const find_project = await projectModel.find({}).sort({ createdAt: -1 });


    let MomData = [];
    for (let i = 0; i < find_project.length; i++) {
      if (find_project[i].mom.length !== 0) {
        for (let j = find_project[i].mom.length - 1; j >= 0; j--) {
          MomData.push({
            project_id: find_project[i].project_id,
            project_name: find_project[i].project_name,
            mom_id: find_project[i].mom[j].mom_id,
            client_name: find_project[i].client[0].client_name,
            location: find_project[i].mom[j].location,
            meetingDate: find_project[i].mom[j].meetingdate,
          });

          break;
        }

      }
    }
    const response = {
      MomData: MomData
    }

    responseData(res, "all project mom", 200, true, "", response);
  } catch (err) {
    responseData(res, "", 500, false, err.message);
    console.log(err.message);
  }
};

export const createmom = async (req, res) => {
  try {
    const project_id = req.body.project_id;
    const meetingDate = req.body.meetingdate;
    const location = req.body.location;
    // let client_name = req.body.client_name
    //   ? JSON.parse(req.body.client_name)
    //   : [];
    // let architect = req.body.architect ? JSON.parse(req.body.architect) : [];
    // let organisor = req.body.organisor ? JSON.parse(req.body.organisor) : [];
    // let consultant_name = req.body.consultant_name
    //   ? JSON.parse(req.body.consultant_name)
    //   : [];
    const client_name = req.body.client_name;
    const designer = req.body.designer;
    const organisor = req.body.organisor;
    const attendees = req.body.attendees;
    const remark = req.body.remark;


    // write here validation ///
    if (!project_id) {
      return res
        .status(400)
        .send({ status: false, message: "project_id is required" });
    } else if (!meetingDate) {
      return res
        .status(400)
        .send({ status: false, message: "meetingDate is required" });
    } else if (!location) {
      return res
        .status(400)
        .send({ status: false, message: "location is required" });
    } else if (!client_name && !onlyAlphabetsValidation(client_name)) {
    } else if (!designer && !onlyAlphabetsValidation(designer)) {
      return res
        .status(400)
        .send({ status: false, message: "designer is required" });
    } else if (!organisor && !onlyAlphabetsValidation(organisor)) {
      return res
        .status(400)
        .send({ status: false, message: "organiser is required" });
    } else {
      const check_project = await projectModel.find({ project_id: project_id });
      if (check_project.length > 0) {
        const mom_id = `COl-M-${generateSixDigitNumber()}`; // generate meeting id
        let mom_data;

        const files = req.files?.files;
        const fileUploadPromises = [];
        let successfullyUploadedFiles = [];
        let fileSize = [];

        if (files) {
          const filesToUpload = Array.isArray(files)
            ? files.slice(0, 5)
            : [files];


          for (const file of filesToUpload) {
            const fileName = file.name;
            const fileSizeInBytes = file.size;
            fileSize.push(fileSizeInBytes / 1024)
            fileUploadPromises.push(
              uploadFile(file, fileName, project_id, mom_id)
            );
          }

          const responses = await Promise.all(fileUploadPromises);

          const fileUploadResults = responses.map((response) => ({
            status: response.Location ? true : false,
            data: response ? response : response.err,
          }));

          successfullyUploadedFiles = fileUploadResults.filter(
            (result) => result.status
          );
        }
        let file = [];

        let fileUrls
        if (successfullyUploadedFiles.length > 0) {
          for (let i = 0; i < fileSize.length; i++) {
            fileUrls = successfullyUploadedFiles.map((result) => ({
              fileUrl: result.data.Location,
              fileName: result.data.Location.split('/').pop(),
              fileId: `FL-${generateSixDigitNumber()}`,
              fileSize: `${fileSize[i]} KB`,
              date: new Date()

            }));

          }

          const update_mom = await projectModel.findOneAndUpdate(
            { project_id: project_id },
            {
              $push: {
                mom: {
                  $each: [
                    {
                      mom_id: mom_id,
                      meetingdate: meetingDate,
                      location: location,
                      attendees: {
                        client_name: client_name,
                        organisor: organisor,
                        designer: designer,
                        attendees: attendees,
                      },
                      remark: remark,
                      files: fileUrls,
                    },
                  ],
                  $position: 0,
                },
              },
            },
            { new: true }
          );
          const existingFile = await fileuploadModel.findOne({
            project_id: project_id,
          });
          const folder_name = `mom`;
          const project_Name = existingFile.project_name;

          if (existingFile) {
            await saveFileUploadData(res, {
              project_id,
              project_Name,
              folder_name,
              updated_date: new Date(),
              files: fileUrls,
            });
          } else {
            await saveFileUploadData(
              res,
              {
                project_id,
                project_Name,
                folder_name,
                updated_date: new Date(),
                files: fileUrls,
              },
              true
            );
          }


          responseData(
            res,
            "Mom created  successfully:",
            200,
            true,
            "",
          );
        } else {
          const update_mom = await projectModel.findOneAndUpdate(
            { project_id: project_id },
            {
              $push: {
                mom: {
                  $each: [
                    {
                      mom_id: mom_id,
                      meetingdate: meetingDate,
                      location: location,
                      attendees: {
                        client_name: client_name,
                        organisor: organisor,
                        designer: designer,
                        attendees: attendees,
                      },
                      remark: remark,
                      files: file,
                    },
                  ],
                  $position: 0,
                },
              },
            },
            { new: true }
          );


          responseData(
            res,
            "Mom created successfully:",
            200,
            true,
            "",
          );
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
    const check_project = await projectModel
      .find({
        project_id: project_id,
      })
      .sort({ createdAt: -1 });



    if (check_project.length > 0) {
      const response = {
        client_name: check_project[0].client[0].client_name,
        mom_data: check_project[0].mom,
      };
      responseData(res, "MOM Found", 200, true, "", response);
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
        const momData = check_mom[0];
        // Extracting the MOM data


        const htmlTemplate = momPdfTemplate(momData, check_project[0].project_name)





        const pdfOptions = {
          format: "A4",
          border: {
            top: "0.1cm",
            right: "0.1cm",
            bottom: "0.1cm",
            left: "0.1cm",
          }
        };

        // Generate PDF  using html-pdf library and send it as an attachment in the email 
        pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
          if (err) {
            res.status(503).send(err);
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
    responseData(res, "", 500, false, err.message);
  }
};


export const sendPdf = async (req, res) => {
  try {
    const project_id = req.body.project_id;
    const mom_id = req.body.mom_id;

    const check_project = await projectModel.find({ project_id: project_id });

    if (check_project.length > 0) {
      const check_mom = check_project[0].mom.filter(
        (mom) => mom.mom_id.toString() === mom_id
      );

      if (check_mom.length > 0) {
        const momData = check_mom[0]; // Extracting the MOM data




        const htmlTemplate = momPdfTemplate(momData, check_project[0].project_name)

        const pdfOptions = {
          format: "A4",
          border: {
            top: "0.1cm",
            right: "0.1cm",
            bottom: "0.1cm",
            left: "0.1cm",
          }
        };


        // Generate PDF

        pdf
          .create(htmlTemplate, pdfOptions)
          .toFile(`momdata/${mom_id}.pdf`, (err, pdfPath) => {
            if (err) {
              res.status(500).send(err);
            } else {
              const filePath = `momdata/${mom_id}.pdf`;

              const mailOptions = {
                from: "a72302492@gmail.com",
                to: check_project[0].client[0].client_email,
                subject: "MOM Data",
                attachments: [
                  {
                    filename: `${mom_id}.pdf`,
                    path: filePath, // Pass the file path directly
                  },
                ],
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  responseData(res, "", 400, false, "Failed to send email");
                } else {
                  fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error("Error deleting file:", err);
                    } else {
                      console.log("File deleted successfully");
                    }
                  });
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

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "a72302492@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});
