import mongoose from "mongoose";

const adminLogin =new mongoose.Schema({

   email: {
        type: String,
        required: true,
      },
      status:{
        type:Boolean,
        required:true,
      },
    //   token:{
    //     type:String,

    //   },
    role:{
      type:String,
      required:true,

    },
    password:{
        type:String,
        require:true,

    } ,

        createdAt: {
        type: Date,
        default: Date.now,
      },


})
export default mongoose.model("adminLogin", adminLogin, "adminLogin");