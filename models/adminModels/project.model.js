import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  item_id: String,
  item: String,
  description: String,
  unit: String,
  quantity: String,
  rate: String,
  discount: String,
  offer_price: String,
  total_price: String,
  files: [],
  remark: String,
  client_notes: String,
});

const quotationSchema = new mongoose.Schema({
  project_id: String,
  quotation_id: String,
  type: String,
  items: [itemSchema],
});

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  client: [],
  project_id: {
    type: String,
    required: true,
  },
  lead_id: {
    type: String,
  },

  project_type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  files: [],
  mom: [],
  quotation: [quotationSchema],
  leadmanager: {
    type: String,
    require: true,
  },
  designers: [],

  superviser: {
    type: String,
    require: true,
  },
  visualizer: {
    type: String,
    require: true,
  },
  project_status: {
    type: String,
    require: true,
  },
  project_start_date: {
    type: Date,
    require: true,
  },
  timeline_date: {
    type: Date,
    require: true,
  },
  project_end_date: {
    type: Date,
    require: true,
  },
  project_budget: {
    type: String,
    require: true,
  },
  project_location: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("project", projectSchema, "project");
