// middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../model/user.model"); // <-- FIXED

const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";

exports.authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization required" });
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: "Invalid token" });

    req.user = { id: user._id, email: user.email };
    next();
  } catch (err) {
    console.error("authenticate error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
