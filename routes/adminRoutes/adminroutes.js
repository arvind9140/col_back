import { Router } from "express";
const router = Router();

import fileupload from "../../controllers/adminControllers/fileUploadController/fileuploadController.js";
import quotation from "../../controllers/adminControllers/quotationController/quotationController.js";
import getQuotation from "../../controllers/adminControllers/quotationController/getQuotationController.js";
import getFileData from "../../controllers/adminControllers/fileUploadController/getFileController.js";
import getSingleFileData from "../../controllers/adminControllers/fileUploadController/getSingleFileController.js";

import {
  createmom,
  generatePdf,
  getAllMom,
  getSingleMom,
} from "../../controllers/adminControllers/momControllers/mom.controller.js";
import {
  createLead,
  getAllLead,
  getSingleLead,
  updateLead,
} from "../../controllers/adminControllers/leadController/lead.controller.js";
import {
  createProject,
  getAllProject,
  getSingleProject,
  updateProjectDetails,
} from "../../controllers/adminControllers/projectController/project.controller.js";

router.route("/fileupload").post(fileupload);
router.route("/getfile").get(getFileData);
router.route("/get/onefile").get(getSingleFileData);

router.post("/quotation", quotation);
router.get("/get/quotation", getQuotation);

router.route("/create/project").post(createProject);
router.route("/getall/project").get( getAllProject);
router.route("/getsingle/project").get(getSingleProject);
router.route("/update/project").put(updateProjectDetails);

router.route("/create/lead").post(createLead);
router.route("/getall/lead").get(getAllLead);
router.route("/getsingle/lead").get(getSingleLead);
router.route("/update/lead").put(updateLead);

router.route("/create/mom").post(createmom);
router.route("/getall/mom").get(getAllMom);
router.route("/getsingle/mom").get(getSingleMom);
router.route("/generate/pdf").get(generatePdf)


export default router;
