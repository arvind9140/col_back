import mongoose from "mongoose";

const emailVerified = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("emailVerified", emailVerified, "emailVerified");
