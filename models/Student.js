import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First Name"],
    minLength: [3, "First Name must be at least 4 characters"],
    maxLength: [20, "First Name can't exceed 80 characters"],
  },

  lastName: {
    type: String,
    maxLength: [20, "Last Name can't exceed 80 characters"],
  },

  age: {
    type: Number,
    required: [true, "Please enter Age"],
  },

  position: {
    type: String,
    required: [true, "Please enter Post"],
  },

  exprience: {
    type: Number,
   required: [true, "Please enter experience"],
  },

  salary: {
    type: Number,
  },

  skills: {
    type: [String],
   default:[]
  },

  favSkill: {
    type: String,
  },

  address: {
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    country: {
      type: String,
    }
  },

  rollNo: {
    type: Number,
   required: [true, "Please enter Roll No."],
  },

  qualification:{
    type:String,
  },

  percentage:{
    type:Number,
  },

  createdBy: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Student = mongoose.model("Student", schema);
