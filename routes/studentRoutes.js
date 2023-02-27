import express from "express";
import { getAllStudents, addStudent, deleteStudent, updateStudent } from "../controllers/studentController.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/auth.js";

const router = express.Router();

// Get All students
router.route("/students").get(getAllStudents);

// add new student - only admin
router.route("/addstudent").post(addStudent);

// Delete Exist student - only admin
router.route("/student/:id").delete(deleteStudent).put(updateStudent);

export default router;
