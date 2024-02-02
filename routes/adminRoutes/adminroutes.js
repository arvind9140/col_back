import express from "express";
const router = express.Router();

import fileupload from "../../controllers/adminControllers/fileUploadController/fileuploadController.js";
import quotation from "../../controllers/adminControllers/quotationController/quotationController.js";
import getQuotation from "../../controllers/adminControllers/quotationController/getQuotationController.js";
import getFileData from "../../controllers/adminControllers/fileUploadController/getFileController.js";
import getSingleFileData from "../../controllers/adminControllers/fileUploadController/getSingleFileController.js";

import { createmom, getAllMom, getSingleMom } from "../../controllers/adminControllers/momControllers/mom.controller.js";
import { createLead, getAllLead, getSingleLead, updateLead } from "../../controllers/adminControllers/leadController/lead.controller.js";
import { createProject, getAllProject, getSingleProject, updateProjectDetails } from "../../controllers/adminControllers/projectController/project.controller.js";


router.post("/fileupload/",fileupload);
router.get("/getfile/", getFileData);
router.get("/get/onefile/", getSingleFileData)


router.post("/quotation/",quotation)
router.get("/get/quotation/", getQuotation);

router.post("/create/project/",createProject);
router.get("/getall/project/", getAllProject);
router.get("/getsingle/project/", getSingleProject);
router.put("/update/project/",updateProjectDetails);



router.post("/create/lead/", createLead);
router.get("/getall/lead/", getAllLead);
router.get("/getsingle/lead/", getSingleLead);
router.put("/update/lead/", updateLead);

router.post("/create/mom/",createmom);
router.get("/getall/mom/",getAllMom);
router.get("/getsingle/mom/",getSingleMom);









export default router;