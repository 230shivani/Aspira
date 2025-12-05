const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { authenticate } = require("../middleware/auth.middleware");
const multer = require("multer");

// file upload setup
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

router.patch("/:id", authenticate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);

router.post("/change-password", authenticate, userController.changePassword);

// Uploads
router.post(
  "/:id/upload/resume",
  authenticate,
  upload.single("resume"),
  userController.uploadResume
);

module.exports = router;  // VERY IMPORTANT
