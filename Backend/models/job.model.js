const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  logoColor: {
    type: String,
    default: "bg-primary"
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Full-time", "Contract", "Remote", "Freelance"],
    default: "Full-time"
  },
  salary: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["Software", "Design", "Marketing", "Data Science", "Product"]
  },
  description: {
    type: String,
    required: true
  },
  match: {
    type: Number,
    default: 100
  },
  postedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
