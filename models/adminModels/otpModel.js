import mongoose from "mongoose";

const OTP = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  otp: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});
export default mongoose.model("OTP", OTP, "OTP");
