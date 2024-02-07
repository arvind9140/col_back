import mongoose from "mongoose";
mongoose.pluralize(null);

const otpForForgetPassModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  status: {
    type: Boolean,

    // required:true
  },
  token: {
    type: String,
    // required:true
  },
});
export default mongoose.model(
  "otpForForgetPassword",
  otpForForgetPassModel,
  "otpForForgetPassword"
);
