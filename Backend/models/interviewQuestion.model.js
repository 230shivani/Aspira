const mongoose = require("mongoose");

const interviewQuestionSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["behavioral", "technical", "strategy", "tips"],
    required: true
  },
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Medium"
  },
  time: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("InterviewQuestion", interviewQuestionSchema);
