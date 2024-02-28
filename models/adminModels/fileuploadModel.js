import  mongoose from"mongoose";

const fileuploadSchema = new mongoose.Schema({
  lead_id: {
    type: String,
    // required:true
    default: null,
  },
  lead_name: {
    type: String,
    default: null,
  },
  files: [],

  project_id: {
    type: String,
    default: null,
  },
  project_name: {
    type: String,
    default: null,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("file", fileuploadSchema, "file");


