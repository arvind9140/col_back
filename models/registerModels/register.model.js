import mongoose from "mongoose";

const signUp = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  //   token:{
  //     type:String,

  //   },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },

  confirm_password: {
    type: String,
    require: true,
  },
  userProfile:{
    type:String,
    // required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("signUp", signUp, "signUp");
