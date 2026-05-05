const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const validation = require("../middleware/validation.middleware");
const authenticate = require("../middleware/auth.middleware");

// Public routes
router.get("/", jobController.getAllJobs);
router.get("/live", jobController.fetchLiveJobs);
router.get("/:id", jobController.getJobById);

// Protected routes (requires authentication for POST/DELETE)
router.post("/", authenticate, validation.validateJobCreation, jobController.createJob);
router.delete("/:id", authenticate, jobController.deleteJob);

module.exports = router;
