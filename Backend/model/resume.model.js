const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    content: {
        type: String,      // Resume text or extracted structured data
        required: true,
    },

    atsScore: {
        type: Number,
        default: null,
    },

    feedback: {
        type: String,      // AI-generated resume feedback
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

// Auto-update `updatedAt` on update
resumeSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Resume", resumeSchema);
