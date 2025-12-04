// controllers/userController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // adjust path if needed

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Register a new user
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password, bio, experience = 0 } = req.body;
    if (!name || !email || !password || !bio) {
      return res.status(400).json({ message: "name, email, password and bio are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email already in use" });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      name,
      email,
      password: hashed,
      bio,
      experience,
      ImageUrl: req.body.ImageUrl || null,
      resume: req.body.resume || null,
      coverletter: req.body.coverletter || null,
    });

    await user.save();

    const safeUser = user.toObject();
    delete safeUser.password;

    return res.status(201).json({ message: "User created", user: safeUser });
  } catch (err) {
    console.error("register error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Login - returns JWT
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    const safeUser = user.toObject();
    delete safeUser.password;

    return res.json({ message: "Logged in", token, user: safeUser });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get user by id (safe)
 */
exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id || req.user?.id;
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ user });
  } catch (err) {
    console.error("getUserById error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Update user (partial)
 */
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id || req.user.id;
    const updates = { ...req.body };

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, SALT_ROUNDS);
    }

    updates.updatedAt = Date.now();

    const user = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "User updated", user });
  } catch (err) {
    console.error("updateUser error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Delete user
 */
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id || req.user.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ message: "User deleted" });
  } catch (err) {
    console.error("deleteUser error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Upload resume (expects multer single file at req.file)
 */
exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const userId = req.params.id || req.user.id;
    const resumeUrl = req.file.path; // change to cloud URL if using S3/GCS

    const user = await User.findByIdAndUpdate(
      userId,
      { resume: resumeUrl, updatedAt: Date.now() },
      { new: true }
    ).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "Resume uploaded", user });
  } catch (err) {
    console.error("uploadResume error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Upload cover letter (expects multer single file at req.file)
 */
exports.uploadCoverLetter = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const userId = req.params.id || req.user.id;
    const url = req.file.path;

    const user = await User.findByIdAndUpdate(
      userId,
      { coverletter: url, updatedAt: Date.now() },
      { new: true }
    ).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ message: "Cover letter uploaded", user });
  } catch (err) {
    console.error("uploadCoverLetter error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
