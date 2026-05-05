const CoverLetter = require("../models/coverletter.model");

// Create a new cover letter
exports.createCoverLetter = async (req, res) => {
  try {
    const { userId, content, jobDescription, company, jobTitle } = req.body;
    
    // Fallback ID if userId is missing (for testing)
    const finalUserId = userId || "60d0fe4f5311236168a109ca";

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const newCoverLetter = new CoverLetter({
      userId: finalUserId,
      content,
      jobDescription,
      company,
      jobTitle
    });

    const saved = await newCoverLetter.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(400).json({ message: error.message });
  }
};

// Get all cover letters for a specific user
exports.getUserCoverLetters = async (req, res) => {
  try {
    const { userId } = req.params;
    const coverLetters = await CoverLetter.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(coverLetters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cover letters", error: error.message });
  }
};

// Get a single cover letter by ID
exports.getCoverLetterById = async (req, res) => {
  try {
    const coverLetter = await CoverLetter.findById(req.params.id);
    if (!coverLetter) {
      return res.status(404).json({ message: "Cover letter not found" });
    }
    res.status(200).json(coverLetter);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cover letter", error: error.message });
  }
};

// Update a cover letter
exports.updateCoverLetter = async (req, res) => {
  try {
    const updated = await CoverLetter.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Cover letter not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating cover letter", error: error.message });
  }
};

// Delete a cover letter
exports.deleteCoverLetter = async (req, res) => {
  try {
    const deleted = await CoverLetter.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Cover letter not found" });
    }
    res.status(200).json({ message: "Cover letter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting cover letter", error: error.message });
  }
};
