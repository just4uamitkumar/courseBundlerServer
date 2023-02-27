import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Student } from "../models/Student.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";

export const getAllStudents = catchAsyncError(async (req, res, next) => {
   const keyword = req.query.keyword || "";
   const qualification = req.query.qualification || "";

    const students = await Student.find({
        firstName: {
            $regex: keyword,
            $options: "i",
        },
        qualification: {
            $regex: qualification,
            $options: "i",
        }
    });

    res.status(200).json({
        success: true,
        students,
    });
});


export const addStudent = catchAsyncError(async (req, res, next) => {
    const { firstName, lastName, age, position, exprience, salary, skills,
       favSkill, rollNo, qualification, percentage } = req.body;

    if (!firstName || !age || !position || !exprience || !rollNo )
        return next(new ErrorHandler("Please add all fields", 400));

    await Student.create({
      firstName, lastName, age, position, exprience, salary, skills, favSkill,
      rollNo, qualification, percentage
    });

    res.status(201).json({
        success: true,
        message: "Student Added Successfully.",
    });
});

export const updateStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const { firstName, lastName, age, position, exprience, salary, skills,
     favSkill, qualification, percentage } = req.body;

  const student = await Student.findById(id);

  if (!student) return next(new ErrorHandler("Student not found", 404));

  if (firstName) student.firstName = firstName;
  if (lastName) student.lastName = lastName;
  if (age) student.age = age;
  if (position) student.position = position;
  if (exprience) student.exprience = exprience;
  if (salary) student.salary = salary;
  if (skills) student.skills = skills;
  if (favSkill) student.favSkill = favSkill;
  if (qualification) student.qualification = qualification;
  if (percentage) student.percentage = percentage;

  await student.save();

  res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
  });
});

export const deleteStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const student = await Student.findById(id);

  if (!student) return next(new ErrorHandler("Student not found", 404));

  await student.remove();

  res.status(200).json({
      success: true,
      message: "Student Deleted Successfully",
  });
});
