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

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },

});

// Auto-update timestamp on save
coverLetterSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("CoverLetter", coverLetterSchema);
