// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate } = require("../middleware/auth.middleware"); 
const multer = require("multer");

// Simple local storage for dev. In production, use S3/GCS/Cloudinary.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Public
router.post("/register", userController.register);
router.post("/login", userController.login);

// Protected (requires authenticate middleware)
router.get("/me", authenticate, userController.getUserById);
router.get("/:id", authenticate, userController.getUserById);

router.patch("/:id", authenticate, userController.updateUser); // partial update
router.delete("/:id", authenticate, userController.deleteUser);

// Uploads (expects multipart/form-data with field name "resume" / "coverletter")
router.post("/:id/upload/resume", authenticate, upload.single("resume"), userController.uploadResume);
router.post("/:id/upload/coverletter", authenticate, upload.single("coverletter"), userController.uploadCoverLetter);

module.exports = router;
