
import mongoose from "mongoose";

const notification = new mongoose.Schema({
  type: String, 
  itemId: String,
  notification_id: String,
  message: String, 
  status: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Notification", notification);
