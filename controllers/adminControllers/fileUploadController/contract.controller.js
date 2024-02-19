import { responseData } from "../../../utils/respounse.js";
import pdf from "html-pdf";

export const contractShare = async (req, res) => {
  const client_name = req.body.client_name;
  const client_email = req.body.client_email;
  const client_phone = req.body.client_phone;
  const project = req.body.client;
  const designer = req.body.designer;
  const designer_phone = req.body.designer_phone;
  const designer_email = req.body.designer_email;
  const site_address = req.body.site_address;
  const date = req.body.date;
  const type = req.query.type;

  if (type === "commercial") {
    const pdfOptions = {
      format: "letter",
    };
    pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.setHeader("Content-Type", "application/pdf");
        stream.pipe(res);
      }
    });
  } else if (type === "residential") {
  } else {
    return responseData(res, "", 400, false, "Invalid type");
  }
};
