import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

const uploadFile = async (
  file,
  fileName,
  project_ID,
  quotation_id,
  item_id
) => {
  return s3
    .upload({
      Bucket: `collegemanage/${project_ID}/${quotation_id}/${item_id}`,
      Key: fileName,
      Body: file.data,
      ContentType: file.mimetype,
      // ACL: 'public-read'
    })
    .promise();
};
const saveQuotationData = async (res, existingQuotationData) => {
  try {
    const updateResult = await projectModel.updateOne(
      {
        "quotation.type": existingQuotationData.type,
        "quotation.items.item_id": existingQuotationData.item_id,
      },
      {
        $set: {
          "quotation.$[quotationElem].items.$[itemElem].item":
            existingQuotationData.newQuotationItem.item,
          "quotation.$[quotationElem].items.$[itemElem].description":
            existingQuotationData.newQuotationItem.description,
          "quotation.$[quotationElem].items.$[itemElem].unit":
            existingQuotationData.newQuotationItem.unit,
          "quotation.$[quotationElem].items.$[itemElem].quantity":
            existingQuotationData.newQuotationItem.quantity,
          "quotation.$[quotationElem].items.$[itemElem].rate":
            existingQuotationData.newQuotationItem.rate,
          "quotation.$[quotationElem].items.$[itemElem].discount":
            existingQuotationData.newQuotationItem.discount,
          "quotation.$[quotationElem].items.$[itemElem].offer_price":
            existingQuotationData.newQuotationItem.offer_price,
          "quotation.$[quotationElem].items.$[itemElem].total_price":
            existingQuotationData.newQuotationItem.total_price,
          "quotation.$[quotationElem].items.$[itemElem].remark":
            existingQuotationData.newQuotationItem.remark,
          "quotation.$[quotationElem].items.$[itemElem].client_notes":
            existingQuotationData.newQuotationItem.client_notes,
          "quotation.$[quotationElem].items.$[itemElem].files":
            existingQuotationData.newQuotationItem.files,
        },
      },
      {
        arrayFilters: [
          { "quotationElem.quotation_id": existingQuotationData.quotation_id },
          { "itemElem.item_id": existingQuotationData.item_id },
        ],
      }
    );
    if (updateResult.modifiedCount === 1) {
      responseData(res, "Quotation data updated successfully", 200, true);
    } else {
      console.log("Quotation data not found or already updated");
      responseData(
        res,
        "",
        404,
        false,
        "Quotation data not found or already updated"
      );
    }
  } catch (error) {
    console.error("Error updating quotation data:", error);
    responseData(res, "", 500, false, "Error updating quotation data");
  }
};


export const updateQuotation = async (req, res) => {
  const project_id = req.body.project_id;
  const quotation_id = req.body.quotation_id;
  const type = req.body.type;
  const item_id = req.body.item_id;
  const item = req.body.item;
  const description = req.body.description;
  const unit = req.body.unit;
  const quantity = req.body.quantity;
  const rate = req.body.rate;
  const discount = req.body.discount;
  const offer_price = req.body.offer_price;
  const total_price = req.body.total_price;
  const remark = req.body.remark;
  const client_notes = req.body.client_notes;

  try {
    const find_project = await projectModel.find({ project_id: project_id });

    if (find_project.length < 1) {
      return responseData(res, "", 404, false, "Project not found");
    }
    if (find_project.length > 0) {


      if (find_project[0].quotation.length > 0) {
        const files = req.files?.files;
        const fileUploadPromises = [];
        let successfullyUploadedFiles = [];

        if (files) {
          const filesToUpload = Array.isArray(files)
            ? files.slice(0, 5)
            : [files];

          for (const file of filesToUpload) {
            const fileName = Date.now() + file.name;
            fileUploadPromises.push(
              uploadFile(file, fileName, project_id, quotation_id, item_id)
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
        if (successfullyUploadedFiles.length > 0) {
          const newfileuploads = successfullyUploadedFiles.map(
            (result, index) => file.push(result.data.Location)
          );
        }

        const existingQuotation = find_project[0].quotation.find(
          (q) => q.type === type
        );

        if (existingQuotation) {
          const existingItem = existingQuotation.items.find(
            (q) => q.item_id === item_id
          );

          if (existingItem) {
            const newQuotationItem = {
              item: item,
              description: description,
              unit: unit,
              quantity: quantity,
              rate: rate,
              discount: discount,
              offer_price: offer_price,
              total_price: total_price,
              files: file,
              remark: remark,
              client_notes: client_notes,
            };
            const createQuotationObj = {
              project_id,
              quotation_id,
              type,
              item_id,
              newQuotationItem,
            };
            await saveQuotationData(res, createQuotationObj);
          } else {
            responseData(res, "", 404, false, "item not found");
          }
        } else {
          responseData(res, "", 404, false, "Quotation type  not found");
        }
      }
      if (find_project[0].quotation.length < 1) {
        responseData(res, "", 404, false, "Quotation not found");
      }
    }
  } catch (err) {
    return responseData(res, "", 500, false, "Something went wrong", err);
  }
};
