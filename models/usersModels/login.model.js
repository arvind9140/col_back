import mongoose from "mongoose";

const login = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    // required:true
  },

  logInDate: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: {
      expireAfterSeconds: new Date(new Date().getTime() + 30 * 24 * 60 * 60),
    },
  },
});
export default mongoose.model("login", login, "login");
