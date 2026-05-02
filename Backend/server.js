require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server_config = require("./config/server.config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

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

app.use("/api/interview", interviewRoutes);

// Start server after or in parallel with MongoDB
function startServer() {
  const PORT = server_config.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
}
