import registerModel from "../../../models/usersModels/register.model.js";
import { responseData } from "../../../utils/respounse.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";


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
                    const check_email_or_user_name = await registerModel.findOne({ $or: [{ email: email }, { username: user_name }] })
                    
                    if (!check_email_or_user_name) {
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
                            password: hash
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
                    else {

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