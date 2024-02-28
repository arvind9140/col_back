import  mongoose from"mongoose";

const fileuploadSchema = new mongoose.Schema({
 lead_id:{
  type:String,
  // required:true
 },
  files:[],
  
  project_id:{
  type:String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("file", fileuploadSchema, "file");


