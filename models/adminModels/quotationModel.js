import mongoose from"mongoose";

const quotationSchema = new mongoose.Schema({
  CustomerID: {
    type: String,
    required: true,
  },
  CustomerName: {
    type: String,
    required: true,
  },

  items: [],

  TotalAmount: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Quotation", quotationSchema, "Quotation");


