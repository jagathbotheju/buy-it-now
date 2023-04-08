import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(process.env.MONGODB_URL);
};

export default dbConnect;
