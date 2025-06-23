import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL as string);
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    // process.exit(1);
  }
};
connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default connectDB;
