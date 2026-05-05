const express = require("express");
const router = express.Router();
const coverLetterController = require("../controllers/coverletter.controller");
const authenticate = require("../middleware/auth.middleware");
const validation = require("../middleware/validation.middleware");

// Public routes
router.get("/:id", coverLetterController.getCoverLetterById);
router.get("/user/:userId", coverLetterController.getUserCoverLetters);

// Protected routes (requires authentication)
router.post("/", authenticate, validation.validateCoverLetter, coverLetterController.createCoverLetter);
router.put("/:id", authenticate, validation.validateCoverLetter, coverLetterController.updateCoverLetter);
router.delete("/:id", authenticate, coverLetterController.deleteCoverLetter);

module.exports = router;
