import mongoose from "mongoose";


const quotationSchema = new mongoose.Schema({
  admin_status:String,
  client_status:String,
  itemId: String,
  file_name: String,
  files: [],
  remark: String,
  client_remark:String
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
    // required: true,
  },
  mom: [],
  quotation: [quotationSchema],
  leadmanager: {
    type: String,
    require: true,
  },
  designer: {
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
  project_updated_by:[],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("project", projectSchema, "project");
