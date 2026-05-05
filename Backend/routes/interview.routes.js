const express = require("express");
const router = express.Router();
const resumeUpload = require("../middleware/resumeUploadMiddleware");

const interviewControllerOld = require("../controllers/interviewController");
const interviewControllerNew = require("../controllers/interview.controller");

// Old endpoints
router.post("/generate", interviewControllerOld.generateInterviewQuestions);

// New robust endpoints for Interview Lab
router.get("/questions", interviewControllerNew.getQuestions);
router.post("/assessment", interviewControllerNew.saveAssessment);
router.get("/analytics/:userId", interviewControllerNew.getAnalytics);
router.post("/chat", interviewControllerNew.chatWithAI);
router.post("/analyze", interviewControllerNew.analyzeSession);
router.post("/generate-from-resume", resumeUpload.single("resumeFile"), interviewControllerNew.generateQuestionsFromResume);

module.exports = router;
