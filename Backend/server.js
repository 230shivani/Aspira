require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server_config = require("./config/server.config");

const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads")); // serve uploaded files (dev only)

app.use("/api/users", userRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Error:", err));



app.listen(server_config.PORT, () => {
  console.log("Server running on port", server_config.PORT);
});
