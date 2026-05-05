const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

// Public routes
router.get("/", jobController.getAllJobs);
router.get("/live", jobController.fetchLiveJobs);
router.get("/:id", jobController.getJobById);

// Protected routes (could add auth middleware later)
router.post("/", jobController.createJob);
router.delete("/:id", jobController.deleteJob);

module.exports = router;
