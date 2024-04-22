import leadModel from "../../../models/adminModels/leadModel.js";
import registerModel from "../../../models/usersModels/register.model.js";
import { responseData } from "../../../utils/respounse.js";
import  Mongoose  from "mongoose";
function generatedigitnumber() {
    const length = 6;
    const charset = "0123456789";
    let password = "";
    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

export const AddMemberInLead = async(req,res) =>{
    
        const id = req.body.id;
        const lead_id = req.body.lead_id;
        const user_name = req.body.user_name;
        const role = req.body.role;

        if (!id) {
            responseData(res, "", 400, false, "Please provide Id");
        } else if (!lead_id) {
            responseData(res, "", 400, false, "Please provide lead Id");
        } else if (!user_name) {
            responseData(res, "", 400, false, "Please provide user name");
        } else {
            try {
                const find_user = await registerModel.findOne({ _id: id });
                if (find_user) {
                    if (find_user.role === "ADMIN") {
                        const find_lead = await leadModel.findOne({ lead_id: lead_id});
                        if (find_lead) {
                            const find_user_name = await registerModel.findOne({ username: user_name });
                            if (find_user_name) {
                                let leadDataIndex = find_user_name.data.findIndex(item => item.leadData);
                                if (leadDataIndex === -1) {
                                    find_user_name.data.push({ leadData: [] });
                                    leadDataIndex = find_user_name.data.length - 1;
                                }
                                const find_data = find_user_name.data[leadDataIndex].leadData.find(proj => proj.lead_id === lead_id);
                                if (find_data) {
                                    responseData(res, "", 400, false, "User already exists in this lead");
                                } else {
                                    // Add new project details to projectData array
                                    const add_project_in_user = await registerModel.findOneAndUpdate(
                                        { username: user_name },
                                        {
                                            $push: {
                                                "data.$[outer].leadData": {
                                                    lead_id: lead_id,
                                                    role: role,
                                                }
                                            }
                                        },
                                        {
                                            arrayFilters: [{ "outer.leadData": { $exists: true } }]
                                        }
                                    );
                                    await registerModel.updateOne(
                                        { username: user_name },
                                        {
                                            $push: {
                                                "data.$[elem].notificationData": {
                                                    _id: new Mongoose.Types.ObjectId(),
                                                    itemId: lead_id,
                                                    notification_id: generatedigitnumber(),
                                                    type: "lead",
                                                    status: false,
                                                    message: `You are added in lead ${find_lead.name}`,
                                                    createdAt: new Date()
                                                }
                                            }
                                        },
                                        { arrayFilters: [{ "elem.leadData": { $exists: true } }] }
                                    );
                                    responseData(res, "Member added successfully", 200, true, "");
                                }
                            } else {
                                responseData(res, "", 404, false, "User Name not found");
                            }
                        } else {
                            responseData(res, "", 404, false, "Project not found");
                        }
                    } else {
                        responseData(res, "", 400, false, "You are not admin");
                    }
                } else {
                    responseData(res, "", 404, false, "User not found");
                }
    }

    catch(err)
    {
        console.log(err)
        responseData(res, "", 500, false, "Invernal  Server Error", err)
    }

        }
    }