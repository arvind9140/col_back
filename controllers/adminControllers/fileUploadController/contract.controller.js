import { responseData } from "../../../utils/respounse.js";
import pdf from "html-pdf";
import nodemailer from "nodemailer";
import AWS from "aws-sdk";
import fs from "fs";
import { residentialContract, commercialContract } from "../../../utils/contract.js";
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

const uploadImage = async (filePath, fileName, quotation) => {
    let response = s3
      .upload({
        Bucket: `interior-design1/${quotation}`,
        Key: fileName,
        Body: filePath,
    
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

// Test
// console.log(numberToWordsString()); // Output: "one hundred twenty three"


export const contractShare = async (req, res) => {
 
  const client_email = req.body.client_email;
  const client_phone = req.body.client_phone;

  const site_address = req.body.site_address;
  const date = req.body.date;
  const city = req.body.city;
  const type = req.body.type;
  const quotation = req.body.quotation;
  const  client_name = req.body.client_name;
 



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

    
     pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
       if (err) {
         res.status(500).send(err);
       } else {
         res.setHeader("Content-Type", "application/pdf");
         stream.pipe(res);
       }
     });
 
        
        pdf
          .create(htmlTemplate, pdfOptions)
          .toFile(`contract/${contract_name}.pdf`, async (err, pdfPath) => {
            if (err) {
              res.status(500).send(err);
            } else {
                
                
                
              const filePath = `contract/${contract_name}.pdf`;
              const fileName =  `${contract_name}.pdf`;

      const response = await uploadImage(filePath, fileName, `CCPL/${quotation}`);
      if (response.status) {
         //  res.send({response})
         const mailOptions = {
           from: "a72302492@gmail.com",
           to: client_email[0],
           subject: "Contract  for your Designing",
           attachments: [
             {
               filename: `${contract_name}.pdf`,
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
       
         
      } else {
         res.send({ response })

      }   
            }
          });
   
  } 
  
  else if (type === "residential") {
      const project = req.body.project_name;
       const design_charges_per_sft = req.body.design_charges_per_sft;
       const cover_area_in_sft = req.body.cover_area_in_sft;
       const terrace_and_balcony_charges_per_sft = req.body.terrace_and_balcony_charges_per_sft;
       const terrace_and_balcony_area_in_sft =req.body.terrace_and_balcony_area_in_sft;

       const design_total_charges = parseFloat(design_charges_per_sft) * parseFloat(cover_area_in_sft);
       const design_total_charges_in_words = numberToWordsString(design_total_charges)

       const design_discount = (parseFloat(design_total_charges) * parseFloat(20)) / 100;

       const design_total_charges_after_discount = parseFloat(design_total_charges) - parseFloat(design_total_charges) * parseFloat(20) / 100;
       const design_total_charges_after_discount_in_words = numberToWordsString(design_total_charges_after_discount)

       const terrace_and_balcony_total_charges_discount = (parseFloat(terrace_and_balcony_charges_per_sft) * parseFloat(60) )/ 100;

const terrace_and_balcony_total_charges = parseFloat(terrace_and_balcony_total_charges_discount) * parseFloat(terrace_and_balcony_area_in_sft);
const terrace_and_balcony_total_charges_in_words = numberToWordsString(terrace_and_balcony_total_charges)


       const total_design_charges = parseFloat(design_total_charges) + parseFloat(terrace_and_balcony_total_charges);
       const total_design_charges_in_words = numberToWordsString(total_design_charges)

    


       




 const htmlTemplate = residentialContract(
   project,
   city,
   client_name,
   client_phone,
   client_email,
   site_address,
   date,
   quotation,
   design_charges_per_sft,
   cover_area_in_sft,
   design_total_charges,
   design_total_charges_in_words,
   design_discount,
   design_total_charges_after_discount,
   design_total_charges_after_discount_in_words,
   terrace_and_balcony_charges_per_sft,
   terrace_and_balcony_total_charges_discount,
   terrace_and_balcony_area_in_sft,
   terrace_and_balcony_total_charges,
   terrace_and_balcony_total_charges_in_words,
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


      pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.setHeader("Content-Type", "application/pdf");
          stream.pipe(res);
        }
      });
      
           pdf
             .create(htmlTemplate, pdfOptions)
             .toFile(`contract/${contract_name}.pdf`, async (err, pdfPath) => {
               if (err) {
                 res.status(500).send(err);
               } else {
                //  res.setHeader("Content-Type", "application/pdf");
                
                 const filePath = `contract/${contract_name}.pdf`;
                 const fileName = `${contract_name}.pdf`;

                 const response = await uploadImage(
                   filePath,
                   fileName,
                   `CCPL/${quotation}`
                 );
                 if (response.status) {
                   //  res.send({response})
                   const mailOptions = {
                     from: "a72302492@gmail.com",
                     to: client_email[0],
                     subject: "Contract  for your Designing",
                     attachments: [
                       {
                         filename: `${contract_name}.pdf`,
                         path: filePath, // Pass the file path directly
                       },
                     ],
                   };

                   transporter.sendMail(mailOptions, (error, info) => {
                     if (error) {
                       responseData(
                         res,
                         "",
                         400,
                         false,
                         "Failed to send email"
                       );
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
                 } else {
                   res.send({ response });
                 }
               }
             });
      
     
  } else {
    return responseData(res, "", 400, false, "Invalid type");
  }
}
