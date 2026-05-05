const mongoose = require("mongoose");

const coverLetterSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    content: {
        type: String,      // Full cover letter text
        required: true,
    },

    jobDescription: {
        type: String,      // JD text for matching & AI scoring
        default: null,
    },

    company: {
        type: String,      
        default: null,
    },

    jobTitle: {
        type: String,
        default: null,
    },

}, { timestamps: true });

module.exports = mongoose.model("CoverLetter", coverLetterSchema);
