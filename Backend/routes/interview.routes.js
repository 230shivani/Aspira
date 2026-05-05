const express = require("express");
const router = express.Router();
const resumeUpload = require("../middleware/resumeUploadMiddleware");
const interviewController = require("../controllers/interview.controller");

// Interview endpoints
router.get("/questions", interviewController.getQuestions);
router.post("/assessment", interviewController.saveAssessment);
router.get("/analytics/:userId", interviewController.getAnalytics);
router.post("/chat", interviewController.chatWithAI);
router.post("/analyze", interviewController.analyzeSession);
router.post("/generate-from-resume", resumeUpload.single("resumeFile"), interviewController.generateQuestionsFromResume);

module.exports = router;
