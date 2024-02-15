import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";

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
      console.log(find_project[0].quotation);
    }
  } catch (err) {
    return responseData(res, "", 500, false, "Something went wrong", err);
  }
};
