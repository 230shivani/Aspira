require("dotenv").config();
const mongoose = require("mongoose");
const InterviewQuestion = require("./models/interviewQuestion.model");

const checkDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    const count = await InterviewQuestion.countDocuments();
    console.log("Number of questions in DB:", count);
    mongoose.connection.close();
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

checkDB();
