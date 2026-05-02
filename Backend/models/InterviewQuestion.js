const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    userAnswer: {
      type: String,
      default: "",
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    note: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InterviewQuestion", questionSchema);
