const express = require("express");
const router = express.Router();
const resumeUpload = require("../middleware/resumeUploadMiddleware");
const {
  generateInterviewQuestions,
  generateInterviewQuestionsFromResume,
} = require("../controllers/interviewController");

router.post("/generate-from-resume", resumeUpload.single("resumeFile"), generateInterviewQuestionsFromResume);

router.post("/generate", generateInterviewQuestions);

module.exports = router;
