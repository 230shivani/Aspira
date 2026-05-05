require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const server_config = require("./config/server.config");

const app = express();

// CORS Configuration - Allow specific origins only
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate Limiting - Prevent abuse
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login attempts per 15 minutes
  message: "Too many login attempts, please try again later.",
  skipSuccessfulRequests: true
});

const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit to 10 AI requests per minute per IP
  message: "Too many AI requests, please wait before trying again."
});

// Apply rate limiters
app.use(generalLimiter);

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });

const mongooseOptions = {
  maxPoolSize: 10,
  minPoolSize: 2,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 5000,
  retryWrites: true,
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    startServer();
  })
  .catch(err => {
    console.error("MongoDB Connection Error:", err.message);
    startServer();
  });

const interviewRoutes = require("./routes/interview.routes");
const userRoutes = require("./routes/user.routes");
const jobRoutes = require("./routes/job.routes");
const coverLetterRoutes = require("./routes/coverletter.routes");

// Routes
app.use("/api/interview", aiLimiter, interviewRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", generalLimiter, jobRoutes);
app.use("/api/coverletter", generalLimiter, coverLetterRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// 404 error handler
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  
  // CORS error
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS policy violation" });
  }
  
  // Multer errors
  if (err.name === "MulterError") {
    return res.status(400).json({ message: `File upload error: ${err.message}` });
  }
  
  // Default error
  res.status(500).json({ 
    message: "Server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
});
app.use("/api/coverletter", coverLetterRoutes);


// Start server after or in parallel with MongoDB
function startServer() {
  const PORT = server_config.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
}

// Server initialized
