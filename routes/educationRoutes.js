import express from "express";
import { getEducations, addEducation } from "../controllers/educationController.js";

const router = express.Router();

// Get All students
router.route("/getEducations").get(getEducations);
router.route("/addEducation").post(addEducation);

export default router;
