const express = require("express");
const router = express.Router();
const coverLetterController = require("../controllers/coverletter.controller");

router.post("/", coverLetterController.createCoverLetter);
router.get("/user/:userId", coverLetterController.getUserCoverLetters);
router.get("/:id", coverLetterController.getCoverLetterById);
router.put("/:id", coverLetterController.updateCoverLetter);
router.delete("/:id", coverLetterController.deleteCoverLetter);

module.exports = router;
