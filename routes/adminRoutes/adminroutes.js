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
import { deleteFile, deleteFolder } from "../../controllers/adminControllers/fileUploadController/delete.file.controller.js";
import { shareQuotation, updateStatus, updateStatusAdmin } from "../../controllers/adminControllers/quotationController/quotation.approval.controller.js";
import { createUser, deleteUser, getUser } from "../../controllers/adminControllers/createuser.controllers/createuser.controller.js";
import { addMember } from "../../controllers/adminControllers/projectController/addmember.project.controller.js";
import { checkAvailableUserIsAdmin, isAdmin } from "../../middlewares/auth.middlewares.js";


import { verifyJWT } from "../../middlewares/auth.middlewares.js";
import { contractStatus, getContractData, shareContract } from "../../controllers/adminControllers/fileUploadController/contract.share.controller.js";
import { AddMemberInLead } from "../../controllers/adminControllers/leadController/addmemberinlead.controller.js";
// router.use(checkAvailableUserIsAdmin)


router.route("/create/user").post(verifyJWT, isAdmin, createUser);
router.route("/add/member").post(verifyJWT, isAdmin, addMember);
router.route("/get/alluser").get(verifyJWT, getUser);
router.route("/delete/user").delete(verifyJWT, isAdmin, deleteUser);


router.route("/fileupload").post(verifyJWT, fileupload);
router.route("/getfile").get(verifyJWT, checkAvailableUserIsAdmin, getFileData);
router.route("/get/onefile").get(verifyJWT, getSingleFileData);
router.route("/lead/getfile").get(verifyJWT, getleadData);
router.route("/project/getfile").get(verifyJWT, getprojectData);
router.route("/project/fileupload").post(verifyJWT, projectFileUpload);
router.route("/view/contract").post(verifyJWT, contractShare);
router.route("/share/file").post(verifyJWT, shareFile);
router.route("/template/fileupload").post(verifyJWT, templateFileUpload);
router.route("/template/single/file").get(verifyJWT, getSingleTemplateFile);
router.route("/delete/file").delete(verifyJWT, deleteFile);
router.route("/share/contract").post(verifyJWT, shareContract);
router.route("/contract/approval").post(verifyJWT, contractStatus);
router.route("/get/contractdata").get(verifyJWT, getContractData);
router.route("/delete/folder").delete(verifyJWT, deleteFolder);



router.route("/getall/project").get(verifyJWT, checkAvailableUserIsAdmin, getAllProject);
router.route("/getsingle/project").get(verifyJWT, getSingleProject);
router.route("/update/project").put(verifyJWT, updateProjectDetails);

router.route("/create/lead").post(verifyJWT, isAdmin, createLead);
router.route("/getall/lead").get(verifyJWT, isAdmin, getAllLead);
router.route("/getsingle/lead").get(verifyJWT, isAdmin, getSingleLead);
router.route("/update/lead").put(verifyJWT, isAdmin, updateLead);
router.route("/create/lead/project").post(verifyJWT, isAdmin, leadToProject);
router.route("/add/member/lead").post(verifyJWT, isAdmin, AddMemberInLead);

router.route("/create/mom").post(verifyJWT, createmom);
router.route("/getall/mom").get(verifyJWT, getAllMom);
router.route("/getsingle/mom").get(verifyJWT, getSingleMom);
router.route("/generate/pdf").get(generatePdf);
router.route("/getall/project/mom").get(verifyJWT, checkAvailableUserIsAdmin, getAllProjectMom);
router.route("/send/momdata").post(verifyJWT, sendPdf);


router.route("/share/quotation").post(verifyJWT, shareQuotation);
router.route("/get/quotationdata").get(verifyJWT, getQuotationData);
router.route("/quotation/approval").post(verifyJWT, updateStatusAdmin);




router.route("/get/notification").get(verifyJWT, checkAvailableUserIsAdmin, getNotification);
router.route("/update/notification").put(verifyJWT, updateNotification);





export default router;
