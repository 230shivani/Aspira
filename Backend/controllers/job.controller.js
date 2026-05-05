const Job = require("../models/job.model");
const axios = require("axios");

// Get all jobs with optional filtering
exports.getAllJobs = async (req, res) => {
  try {
    const { category, type, search } = req.query;
    let query = {};

    if (category && category !== "All Jobs") {
      query.category = category;
    }

    if (type) {
      query.type = type;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    const jobs = await Job.find(query).sort({ postedAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error: error.message });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job", error: error.message });
  }
};

// Create a new job (Admin/Company role placeholder)
exports.createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: "Error creating job", error: error.message });
  }
};

// Delete a job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error: error.message });
  }
};

// Fetch real-time jobs from external API (Arbeitnow)
exports.fetchLiveJobs = async (req, res) => {
  try {
    const response = await axios.get("https://www.arbeitnow.com/api/job-board-api");
    const externalJobs = response.data.data.map(job => ({
      _id: job.slug, 
      title: job.title,
      company: job.company_name,
      location: job.location,
      type: job.remote ? "Remote" : "Full-time",
      salary: "Competitive",
      category: "Software",
      description: job.description.replace(/<[^>]*>/g, '').substring(0, 200) + "...", 
      match: Math.floor(Math.random() * (99 - 85 + 1)) + 85,
      posted: "Live",
      isLive: true
    }));

    res.status(200).json(externalJobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching live jobs", error: error.message });
  }
};
