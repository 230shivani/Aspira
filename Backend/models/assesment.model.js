const mongoose = require("mongoose");

const assesmentSchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    score: {
        type: Number,
        required: true,
    },

    questions: [
        {
            question: { type: String, required: true },
            userAnswer: { type: String, required: true },
            correctAnswer: { type: String, required: false },
        }
    ],

    category: {                        // e.g. technical, management, hr
        type: String,
        enum: ["technical", "management", "hr"],
        required: true,
    },

    improvementTips: {                // Ai generated tips for improvent
        type: String,
        required: false,
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

module.exports = mongoose.model("Assessment", assesmentSchema);
