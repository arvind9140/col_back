import registerModel from "../../../models/usersModels/register.model.js";
import projectModel from "../../../models/adminModels/project.model.js";
import { responseData } from "../../../utils/respounse.js";


export const addMember = async (req, res) => {
    const id = req.body.id;
    const project_id = req.body.project_id;
    const user_name = req.body.user_name;
    const role = req.body.role;
    if(!id)
    {
       responseData(res, "", 400, false, "please provide Id");
    }
  else if(!project_id)
    {
         responseData(res, "", 400, false, "please provide project Id"); 
    }
    else if(!user_name)
    {
         responseData(res, "", 400, false, "please provide user name");
    }
    else{
    try {
        const find_user = await registerModel.findOne({_id:id});
        if(find_user)
        {
        if(find_user.role === "ADMIN")
        {
            const find_project = await  projectModel.findOne({project_id:project_id});
            if(find_project)
            {
                const find_user_name = await registerModel.findOne({username:user_name});
                if(find_user_name)
                {
                    const add_project_in_user = await registerModel.findOneAndUpdate(
                      { username:user_name},
                      {$push:{
                        data:{
                          project_id:project_id,
                          role:role,
                        }
                      }}
                    )

                    const add_member_in_project = await projectModel.findOneAndUpdate(
                        { project_id: project_id },
                         { $push: 
                            { data:{ 
                                name:user_name,
                                role:role,
                                id:find_user_name._id
                    
                    } } },{new:true});
                
                     responseData(res, "Member added successfully", 200, true, "");


                }
                else{
                     responseData(res, "", 404, false, "User Name not found");
                }

            }
            else{
               responseData(res, "", 404, false, "Project not found");
            }

        }
        else{
            responseData(res, "", 400, false, "You are not admin");
        }

        }
        else{
            responseData(res, "", 404, false, "User not found");
        }

        
    }
    catch (err) {
         responseData(res, "", 500, false, err.message);
    }

    }

}