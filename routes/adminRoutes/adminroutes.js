import { Router } from "express";
const router = Router();

import fileupload from "../../controllers/adminControllers/fileUploadController/fileuploadController.js";

import { getFileData, getleadData, getprojectData } from "../../controllers/adminControllers/fileUploadController/getFileController.js";
import getSingleFileData from "../../controllers/adminControllers/fileUploadController/getSingleFileController.js";

import {
  createmom,
  generatePdf,
  getAllMom,
  getAllProjectMom,
  getSingleMom,
  sendPdf,
} from "../../controllers/adminControllers/momControllers/mom.controller.js";
import {
  createLead,
  getAllLead,
  getSingleLead,
  leadToProject,
  updateLead,
} from "../../controllers/adminControllers/leadController/lead.controller.js";
import {
  getAllProject,
  getSingleProject,
  updateProjectDetails,
} from "../../controllers/adminControllers/projectController/project.controller.js";
import {
  getQuotationData,
 
} from "../../controllers/adminControllers/quotationController/getQuotation.controller.js";

import { contractShare } from "../../controllers/adminControllers/fileUploadController/contract.controller.js";
import { getNotification, updateNotification } from "../../controllers/notification/notification.controller.js";
import projectFileUpload from "../../controllers/adminControllers/fileUploadController/project.file.controller.js";
import { shareFile } from "../../controllers/adminControllers/fileUploadController/share.files.controller.js";
import { getSingleTemplateFile, templateFileUpload } from "../../controllers/adminControllers/fileUploadController/template.controller.js";
import { deleteFile } from "../../controllers/adminControllers/fileUploadController/delete.file.controller.js";
import { shareQuotation, updateStatus, updateStatusAdmin } from "../../controllers/adminControllers/quotationController/quotation.approval.controller.js";
import { createUser, deleteUser, getUser } from "../../controllers/adminControllers/createuser.controllers/createuser.controller.js";
import { addMember } from "../../controllers/adminControllers/projectController/addmember.project.controller.js";
import { checkAvailableUserIsAdmin, isAdmin } from "../../middlewares/auth.middlewares.js";


import { verifyJWT } from "../../middlewares/auth.middlewares.js";
import { contractStatus, getContractData, shareContract } from "../../controllers/adminControllers/fileUploadController/contract.share.controller.js";
import { AddMemberInLead } from "../../controllers/adminControllers/leadController/addmemberinlead.controller.js";
// router.use(checkAvailableUserIsAdmin)
router.use(verifyJWT)

router.route("/create/user").post(isAdmin, createUser);
router.route("/add/member").post(isAdmin, addMember);
router.route("/get/alluser").get(getUser);
router.route("/delete/user").delete(isAdmin, deleteUser);


router.route("/fileupload").post(fileupload);
router.route("/getfile").get(checkAvailableUserIsAdmin, getFileData);
router.route("/get/onefile").get(getSingleFileData);
router.route("/lead/getfile").get(getleadData);
router.route("/project/getfile").get(getprojectData);
router.route("/project/fileupload").post(projectFileUpload);
router.route("/view/contract").post(contractShare);
router.route("/share/file").post(shareFile);
router.route("/template/fileupload").post(templateFileUpload);
router.route("/template/single/file").get(getSingleTemplateFile);
router.route("/delete/file").delete(deleteFile);
router.route("/share/contract").post(shareContract);
router.route("/contract/approval").post(contractStatus);
router.route("/get/contractdata").get(getContractData);



router.route("/getall/project").get(checkAvailableUserIsAdmin, getAllProject);
router.route("/getsingle/project").get(getSingleProject);
router.route("/update/project").put(updateProjectDetails);

router.route("/create/lead").post(isAdmin, createLead);
router.route("/getall/lead").get(isAdmin, getAllLead);
router.route("/getsingle/lead").get(isAdmin, getSingleLead);
router.route("/update/lead").put(isAdmin, updateLead);
router.route("/create/lead/project").post(isAdmin, leadToProject);
router.route("/add/member/lead").post(isAdmin, AddMemberInLead);

router.route("/create/mom").post(createmom);
router.route("/getall/mom").get(getAllMom);
router.route("/getsingle/mom").get(getSingleMom);
router.route("/generate/pdf").get(generatePdf);
router.route("/getall/project/mom").get(checkAvailableUserIsAdmin, getAllProjectMom);
router.route("/send/momdata").get(sendPdf);


router.route("/share/quotation").post(shareQuotation);
router.route("/get/quotationdata").get(getQuotationData);
router.route("/quotation/approval").post(updateStatusAdmin);




router.route("/get/notification").get(checkAvailableUserIsAdmin, getNotification);
router.route("/update/notification").put(updateNotification);





export default router;
