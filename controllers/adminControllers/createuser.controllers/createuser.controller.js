import registerModel from "../../../models/usersModels/register.model.js";
import { responseData } from "../../../utils/respounse.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import loginModel from "../../../models/usersModels/login.model.js";


function generateStrongPassword() {
    const length = 6;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "a72302492@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});



export const createUser = async (req, res) => {
    const id = req.body.id;
    const user_name = req.body.user_name;
    const email = req.body.email;
    const role = req.body.role;

    if (!id) {
        return responseData(res, "", 400, false, "Please provide id");
    }
    else if (!user_name) {
        return responseData(res, "", 400, false, "Please provide user name");
    }
    else {
        try {


            const user = await registerModel.findOne({ _id: id });
            if (!user) {
                return responseData(res, "", 404, false, "User not found");
            }
            else {
                if (user.role === 'ADMIN') {
                    const check_email_or_user_name = await registerModel.find({ $or: [{ email: email }, { username: user_name }] })
                    if (check_email_or_user_name.length < 1) {
                        const password = generateStrongPassword();
                       
                        bcrypt.hash(password, 10, async function (err, hash) {
                            if(err)
                            {
                                return responseData(res, "", 400, false, "Something went wrong");   
                            }
                            else{

                            
                        const newUser = new registerModel({
                            username: user_name,
                            email: email,
                            role: role,
                            status: true,
                            userProfile: "",
                            password: hash,
                            data:{
                                projectData:[],
                                quotationData:[],
                                notificationData:[],
                                leadData:[]
                            }
                        })
                        newUser.save();
                            const mailOptions = {
                                from: "a72302492@gmail.com",
                                to: email,
                                subject: "Login Credentials",
                                html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif;">

    <h2>Login Credentials</h2>
    
    <p>Hello ${user_name},</p>

    <p>Your login credentials for our system are as follows:</p>
    
    <p><strong>Username:  </strong>${user_name}</p>
    <p><strong>Password:  </strong>${password} </p>
    

     <p>Please click on the following link to login:</p>
    <p><a href="https://freeapi-app.vercel.app/sign-in">Login</a></p>

    <p>Please use the above credentials to log in to our system.</p>
    
    <p>If you have any questions or need assistance, feel free to contact us.</p>

    <p>Best regards,<br>
    COLONELZ</p>
    
</body>
</html>
`,
                            };
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    responseData(res, "", 400, false, "Failed to send email");
                                } else {
                                    responseData(
                                        res,
                                        `User Created And send credential successfully!`,
                                        200,
                                        true,
                                        ""
                                    );
                                }
                            });
                        }
                        })
                       
                    }
                    if(check_email_or_user_name.length >0) {

                        responseData(res, "", 400, false, "User Already Exist");
                    }

                }
                else {
                    return responseData(res, "", 400, false, "You are not allowed to perform this action");
                }


            }

        }
        catch (err) {
            return responseData(res, "", 500, false, err.message);
        }
    }

}


export const getUser = async(req, res) =>{
try{
    const users = await registerModel.find({status:true})
    if(users)
    {
        const filteredUsers = users.reduce((acc, user) => {
            if (user) {
                acc.push({ username: user.username, role: user.role, email:user.email,  UserId:user._id });
            }
            return acc;
        }, []);

       
        return responseData(res, "all user found", 200, true, "", filteredUsers);

    }
    else{
        return responseData(res, "", 404, false, "No User Found");
    }


}
catch(err)
{
    return responseData(res, "", 500, false, err.message);
}

}

export const deleteUser = async(req, res) =>{
    try{
        const user_id = req.query.userId;
        if(!user_id)
        {
            return responseData(res, "", 400, false, "User Id is required");
        }
        else{
            const user = await registerModel.findOne({_id: user_id, status:true})
            if(!user)
            {
                return responseData(res, "", 404, false, "User Not Found");
            }
            else{
                const deletedUser = await registerModel.findOneAndUpdate({_id: user_id}, {status:false}, {new: true})
                const deleteUserFormLongin = await loginModel.deleteMany({ userID:user_id})
                return responseData(res, "User Deleted Successfully", 200, true, "");
            }
        }
        
        
    }
    catch(err)
    {
        return responseData(res, "", 500, false, err.message);
    }
}