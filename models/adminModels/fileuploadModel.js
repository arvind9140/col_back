import  mongoose from"mongoose";



const fileuploadSchema = new mongoose.Schema({
  type:{
    type: String,
    // require:true,
  },
  lead_id: {
    type: String,
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


