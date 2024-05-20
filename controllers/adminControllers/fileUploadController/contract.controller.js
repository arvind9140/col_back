import { responseData } from "../../../utils/respounse.js";
import pdf from "html-pdf";
import nodemailer from "nodemailer";
import AWS from "aws-sdk";
import fs from "fs";
import { residentialContract, commercialContract } from "../../../utils/contract.js";
import fileuploadModel from "../../../models/adminModels/fileuploadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
function generateSixDigitNumber() {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
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

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const uploadImage = async (req, filePath, lead_id, fileName) => {

  if (typeof fileName !== 'string') {
    fileName = String(fileName);
  }
  let response = s3
    .upload({
      Bucket: `collegemanage/${lead_id}/contract`,
      Key: fileName,
      Body: fs.createReadStream(filePath),
      ContentType: 'application/pdf',
      // ACL: "public-read",
    })
    .promise();
  return response
    .then((data) => {
      return { status: true, data };
    })
    .catch((err) => {
      return { status: false, err };
    });
};

function numberToWords(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';

  const hundreds = Math.floor(number / 100);
  const tensAndUnits = number % 100;

  if (hundreds > 0) {
    result += units[hundreds] + ' hundred ';
  }

  if (tensAndUnits > 0) {
    if (tensAndUnits < 10) {
      result += units[tensAndUnits];
    } else if (tensAndUnits < 20) {
      result += teens[tensAndUnits - 10];
    } else {
      const tensDigit = Math.floor(tensAndUnits / 10);
      const unitsDigit = tensAndUnits % 10;
      result += tens[tensDigit];
      if (unitsDigit > 0) {
        result += ' ' + units[unitsDigit];
      }
    }
  }

  return result;
}

function numberToWordsString(number) {
  if (number === 0) {
    return 'zero';
  }

  let result = '';

  if (number < 0) {
    result += 'negative ';
    number = Math.abs(number);
  }

  const billion = Math.floor(number / 1000000000);
  const million = Math.floor((number % 1000000000) / 1000000);
  const thousand = Math.floor((number % 1000000) / 1000);
  const remainder = number % 1000;

  if (billion > 0) {
    result += numberToWords(billion) + ' billion ';
  }

  if (million > 0) {
    result += numberToWords(million) + ' million ';
  }

  if (thousand > 0) {
    result += numberToWords(thousand) + ' thousand ';
  }

  if (remainder > 0) {
    result += numberToWords(remainder);
  }

  return result.trim();
}



let fileSizeArray = [];

function addFileSize(sizeInBytes) {
  const sizeInKilobytes = sizeInBytes / 1024;
  fileSizeArray.push(sizeInKilobytes);
}

function getFileSizes() {
  return fileSizeArray;
}

const saveFileUploadData = async (
  res,
  existingFileUploadData,

) => {
  try {

    // Use update query to push data
    const updateResult = await fileuploadModel.updateOne(
      {
        lead_id: existingFileUploadData.lead_id,
        "files.folder_name": existingFileUploadData.folder_name,
      },
      {
        $set: {
          "files.$.updated_date": existingFileUploadData.updated_Date,
        },
        $push: {

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
        { lead_id: existingFileUploadData.lead_id },
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


export const contractShare = async (req, res) => {

  const lead_id = req.body.lead_id;
  const client_email = req.body.client_email;
  const client_phone = req.body.client_phone;
  const residential_type = req.body.contract_type;
  const site_address = req.body.site_address;
  const date = req.body.date;
  const city = req.body.city;
  const type = req.body.project_type;
  const quotation = req.body.quotation;
  const client_name = req.body.client_name;
  const userId = req.body.user_id;


  try {

    const find_user = await registerModel.findOne({ _id: userId });
    if (find_user.role === 'Senior Architect') {

      if (type === "commercial") {
        const client = req.body.client;
        const franchises = req.body.franchises;
        const cost = req.body.cost;
        const total_cost = parseFloat(cost);
        const cost_in_word = numberToWordsString(total_cost);
        const htmlTemplate = commercialContract(
          client,
          city,
          client_name,
          client_phone,
          client_email,
          site_address,
          date,
          quotation,
          cost,
          cost_in_word,
          franchises
        );

        const pdfOptions = {
          format: "A4",
          border: {
            top: "1cm",
            right: "1cm",
            bottom: "1cm",
            left: "1cm",
          },
        };
        const contract_name = generateSixDigitNumber();
        // Local file path


        pdf.create(htmlTemplate, pdfOptions).toStream(async (err, stream) => {
          if (err) {
            res.status(500).send(err);
          } else {
            // stream.pipe(res);
            // res.send(localFilePath)
            const localFilePath = `contract/${contract_name}${Date.now()}.pdf`;
            const fileWriteStream = fs.createWriteStream(localFilePath);

            // Pipe the PDF stream to the file write stream
            stream.pipe(fileWriteStream);

            // Handle events for when the stream finishes writing to the file
            fileWriteStream.on('finish', async () => {
              // Close the file write stream
              fileWriteStream.close();

              let response;
              try {

                response = await uploadImage(req, localFilePath, contract_name);
                if (response.status) {
                  responseData(res, "contract create successfully", 200, true, "", response.data.Location);
                  console.log(response.data.Location);
                  fs.unlink(localFilePath, (unlinkErr) => {
                    if (unlinkErr) {
                      console.error('Error deleting local PDF file:', unlinkErr);
                    } else {
                      console.log('Local PDF file deleted successfully');
                    }
                  });

                } else {
                  console.log(response)
                  responseData(res, "contract create failed", 400, false, "", "");
                }
              } catch (error) {
                console.error("Error uploading image:", error);
                responseData(res, "contract create failed", 500, false, "", "");
              }
            });

            // Handle errors during the file writing process
            fileWriteStream.on('error', (error) => {
              console.error("Error writing PDF to file:", error);
              responseData(res, "contract create failed", 500, false, "", "");
            });
          }
        });

      }

      else if (type === "residential") {

        const project = req.body.project_name;
        const design_stage = req.body.design_stage;
        const number = req.body.number;
        const design_charges = req.body.design_charges;
        const discount = req.body.discount;
        const design_charges_per_sft = req.body.design_charges_per_sft;
        const design_cover_area_in_sft = req.body.design_cover_area_in_sft;

        const balcony_charges_per_sft = req.body.balcony_charges_per_sft;
        const balcony_area_in_sft = req.body.balcony_area_in_sft;
        const terrace_covered_charges_per_sft = req.body.terrace_covered_charges_per_sft;
        const terrace_covered_area_in_sft = req.body.terrace_covered_area_in_sft;
        const terrace_open_charges_per_sft = req.body.terrace_open_charges_per_sft;
        const terrace_open_area_in_sft = req.body.terrace_open_area_in_sft;

        const design_total_charges = parseFloat(design_charges_per_sft) * parseFloat(design_cover_area_in_sft);
        const design_total_charges_in_words = numberToWordsString(design_total_charges)

        const balcony_total_charge = parseFloat(balcony_charges_per_sft) * parseFloat(balcony_area_in_sft);
        const balcony_total_charge_in_words = numberToWordsString(balcony_total_charge)

        const terrace_covered_total_charge = parseFloat(terrace_covered_charges_per_sft) * parseFloat(terrace_covered_area_in_sft);
        const terrace_covered_total_charge_in_words = numberToWordsString(terrace_covered_total_charge)

        const terrace_open_total_charge = parseFloat(terrace_open_charges_per_sft) * parseFloat(terrace_open_area_in_sft);
        const terrace_open_total_charge_in_words = numberToWordsString(terrace_open_total_charge)

        const total_design_charges = design_total_charges + balcony_total_charge + terrace_covered_total_charge + terrace_open_total_charge;

        const total_design_charges_in_words = numberToWordsString(total_design_charges)





        const htmlTemplate = residentialContract(
          residential_type,
          project,
          city,
          client_name,
          client_phone,
          client_email,
          site_address,
          date,
          quotation,
          design_stage,
          number,
          design_charges,
          discount,
          design_charges_per_sft,
          design_cover_area_in_sft,
          design_total_charges,
          design_total_charges_in_words,
          balcony_charges_per_sft,
          balcony_area_in_sft,
          balcony_total_charge,
          balcony_total_charge_in_words,
          terrace_covered_charges_per_sft,
          terrace_covered_area_in_sft,
          terrace_covered_total_charge,
          terrace_covered_total_charge_in_words,
          terrace_open_charges_per_sft,
          terrace_open_area_in_sft,
          terrace_open_total_charge,
          terrace_open_total_charge_in_words,
          total_design_charges,
          total_design_charges_in_words

        );

        const pdfOptions = {
          format: "A4",
          border: {
            top: "1cm",
            right: "1cm",
            bottom: "1cm",
            left: "1cm",
          },
        };
        const contract_name = generateSixDigitNumber();
        pdf.create(htmlTemplate, pdfOptions).toStream(async (err, stream) => {
          if (err) {
            res.status(500).send(err);
          } else {
            // stream.pipe(res);
            // res.send(localFilePath) 

            const localFilePath = `contract/residential_${contract_name}.pdf`;
            const fileWriteStream = fs.createWriteStream(localFilePath);

            // Pipe the PDF stream to the file write stream
            stream.pipe(fileWriteStream);

            // Handle events for when the stream finishes writing to the file
            fileWriteStream.on('finish', async () => {
              // Close the file write stream
              fs.stat(localFilePath, (statErr, stats) => {
                if (statErr) {
                  return res.status(500).send(statErr);
                }

                const fileSizeInBytes = stats.size; // File size in bytes
                addFileSize(fileSizeInBytes);


              });
              fileWriteStream.close();

              let response;
              try {

                response = await uploadImage(req, localFilePath, lead_id, contract_name);

                if (response.status) {


                  let fileUrls = [{
                    fileUrl: response.data.Location,
                    fileName: response.data.Location.split('/').pop(),
                    fileId: `FL-${generateSixDigitNumber()}`,
                    fileSize: `${getFileSizes()} KB`,
                    date: new Date()
                  }]


                  const existingFile = await fileuploadModel.findOne({
                    lead_id: lead_id,
                  });
                  const folder_name = `contract`;
                  const lead_Name = existingFile.name;

                  if (existingFile) {
                    await saveFileUploadData(res, {
                      lead_id,
                      lead_Name,
                      folder_name,
                      updated_date: new Date(),
                      files: fileUrls,
                    });
                  }

                  responseData(res, "contract create successfully", 200, true, "", response.data.Location);

                  fs.unlink(localFilePath, (unlinkErr) => {
                    if (unlinkErr) {
                      console.error('Error deleting local PDF file:', unlinkErr);
                    } else {
                      console.log('Local PDF file deleted successfully');
                    }
                  });

                } else {
                  console.log(response)
                  responseData(res, "contract create failed", 400, false, "", "");
                }
              } catch (error) {
                console.error("Error uploading image:", error);
                responseData(res, "contract create failed", 500, false, "", "");
              }
            });

            // Handle errors during the file writing process
            fileWriteStream.on('error', (error) => {
              console.error("Error writing PDF to file:", error);
              responseData(res, "contract create failed", 500, false, "", "");
            });
          }
        });



      } else {
        return responseData(res, "", 400, false, "Invalid type");
      }
    }
    else {
      return responseData(res, "", 400, false, "You are not a Senior Architect");
    }
  }
  catch (err) {
    console.log(err)
    return responseData(res, "", 500, false, "Internal Server Error");
  }
}

