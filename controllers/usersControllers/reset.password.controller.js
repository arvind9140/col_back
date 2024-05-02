import registerModel from "../../models/usersModels/register.model.js";
import { responseData } from "../../utils/respounse.js";
import bcrypt from "bcrypt";


export const resetPassword = async(req,res) =>{
    try{
        const oldPassword = req.body.old_password;
        const newPassword = req.body.new_password;
        const userId = req.body.userId;
        const confirmNewPassword = req.body.confirm_new_password;

        if(!userId)
        {
            return responseData(res,"",400,false, "user id is required")
        }
else if(!oldPassword)
{
    return responseData(res,"", 400,false,"old password is required")
}
else if(!newPassword)
{
    return responseData(res,"",400,false,"new password is required")
}
else if(!confirmNewPassword)
{
    return responseData(res,"",400,false,"confirm new password is required")
}

else if(newPassword !== confirmNewPassword)
{
    return responseData(res,"",400,false,"new password and confirm new password does not match")
}
else{
    const user = await registerModel.findById(userId);
    if(!user)
    {
        return responseData(res,"",404, false, "user not found")
    }
    else{
        const isMatch = await bcrypt.compare(oldPassword,user.password);
        if(!isMatch)
        {
            return responseData(res,"",400,false, "old password does not match")
        }
        else{
            const isSamePassword = await bcrypt.compare(newPassword,user.password);
           if(isSamePassword)
           {
               return responseData(res,"",400,false,"new password and old password cannot be same")   

           }
           else{
               const hashedPassword = await bcrypt.hash(newPassword,10);
               const updatedUser = await registerModel.findByIdAndUpdate(userId,{password:hashedPassword},{new:true});
               return responseData(res,"password updated successfully",200,true,"")
           }
        }
}
}
    }
    catch(err)
    {
        res.status(500).json({message:err.message})
    }
}