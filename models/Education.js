import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name:{
    type: String,
  },
  value:{
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Education = mongoose.model("Education", schema);
