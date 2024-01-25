import mongoose from "mongoose";
import moment from "moment-timezone";
const lead = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lead_id: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  source: {
    type: String,
    // You can define specific sources based on your needs
  },
  notes: [
    {
      content: {
        type: String,
      },
      createdBy: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: () => moment().tz("Asia/Kolkata").toDate(),
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Lead", lead, "Lead");
