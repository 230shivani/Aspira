// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../middleware/auth.middleware");
const validation = require("../middleware/validation.middleware");
const multer = require("multer");
const rateLimit = require("express-rate-limit");

// Simple local storage for dev. In production, use S3/GCS/Cloudinary.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/resumes/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `resume-${uniqueSuffix}.pdf`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Auth rate limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many login attempts, please try again later.",
  skipSuccessfulRequests: true
});

// Public routes
router.post("/register", authLimiter, validation.validateRegister, userController.register);
router.post("/login", authLimiter, validation.validateLogin, userController.login);

// Protected routes (requires authentication)
router.get("/me", authenticate, userController.getUserById);
router.get("/:id", authenticate, userController.getUserById);
router.patch("/:id", authenticate, validation.validateUserUpdate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);

// File uploads
router.post("/:id/upload/resume", authenticate, upload.single("resume"), userController.uploadResume);
router.post("/:id/upload/coverletter", authenticate, upload.single("coverletter"), userController.uploadCoverLetter);

module.exports = router;
