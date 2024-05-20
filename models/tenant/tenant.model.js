import { Organizations } from "aws-sdk";
import mongoose from "mongoose";

const tenant = new mongoose.Schema({
    Organization_Name: {
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

   
    password: {
        type: String,
        require: true,
    },
   

    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export default mongoose.model("tenant", tenant, "tenant");
