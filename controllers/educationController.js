import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Education } from "../models/Education.js";

export const getEducations = catchAsyncError(async (req, res, next) => {
    const educations = await Education.find();
    res.status(200).json({
        success: true,
        educations,
    });
});


export const addEducation = catchAsyncError(async (req, res, next) => {
    const { name, value } = req.body;
    if (!name || !value )
        return next(new ErrorHandler("Please add all fields", 400));

    await Education.create({
      name, value
    });

    res.status(201).json({
        success: true,
        message: "Education Added Successfully.",
    });
});
