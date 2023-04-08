import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
});
