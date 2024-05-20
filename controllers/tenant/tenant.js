import tenantModel from "../../models/tenant/tenant.model.js";
import { responseData } from "../../utils/respounse.js";
export const tenant = async(req,res)=>{
    const Organization_Name = req.body.Organization_Name;
    const email = req.body.email;
    const password = req.body.password;
    try{

    }
    catch(error)
    {
responseData(res,"",false,)
    }



}