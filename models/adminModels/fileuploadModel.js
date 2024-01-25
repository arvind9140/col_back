import  mongoose from"mongoose";

const fileuploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
   fileID: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("file", fileuploadSchema, "file");


