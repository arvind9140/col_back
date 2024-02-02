import registerModel from "../../models/registerModels/register.model.js";
import { responseData } from "../../utils/respounse.js";
import bcrypt from "bcrypt";
import validator from "validator";


export const login  = async(req,res) =>{
const email = req.body.email;
const password = req.body.password;
const confirm_password = req.body.confirmpassword;
if (!email) {
    responseData(res, "", 400, false, "Email is required");
}
else if( !validator.isEmail(email))
{
    responseData(res, "", 400, false, "Invalid email");
}
else if (!password) {
    responseData(res, "", 400, false, "Password is required");
}
else if (!confirm_password) {
    responseData(res, "", 400, false, "Confirm password is required");
}
else if (password !== confirm_password) {
    responseData(res, "", 400, false, "Password and confirm password does not match");
}
else {
    try{
const user = await registerModel.findOne({email:email})
if(user.length<1)
{
    responseData(res, "", 400, false, "User not found");
}
if(user.length>0)
{
    const isMatch = await bcrypt.compare(password, user[0].password);
    if(isMatch)
    {
        responseData(res, user, 200, true, "Login Successfully");
        }
    else{
        responseData(res, "", 400, false, "Invalid password");
    }
    
}


    }
    catch(err)
    {
        res.send(err);
        console.log(err);
    }



}









  


}