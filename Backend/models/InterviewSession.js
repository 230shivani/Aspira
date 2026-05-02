const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InterviewQuestion",
      },
    ],
    resumeFile: {
      type: String,
      default: "",
    },
    generatedAt: {
      type: Date,
      default: Date.now,
    },
    numberOfQuestions: {
      type: Number,
      default: 10,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InterviewSession", interviewSessionSchema);
