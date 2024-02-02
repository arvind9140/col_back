import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  client_name: {
    type: String,
    required: true,
  },
  client_contact: {
    type: String,
    required: true,
    },
  
  project_id: {
    type: String,
    required: true,
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
