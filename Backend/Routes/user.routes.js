
// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate } = require("../middleware/auth");
const multer = require("multer");

// Simple local storage for example. In prod, use S3/Cloud storage.
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Public
router.post("/register", userController.register);
router.post("/login", userController.login);

// Protected
router.get("/me", authenticate, userController.getUserById);
router.get("/:id", authenticate, userController.getUserById);

router.patch("/:id", authenticate, userController.updateUser);      // partial update
router.delete("/:id", authenticate, userController.deleteUser);

router.post("/change-password", authenticate, userController.changePassword);

// Uploads (example)
router.post("/:id/upload/resume", authenticate, upload.single("resume"), userController.uploadResume);

module.exports = router;
