const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    ImageUrl: {
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

    bio: {
        type: String,
        required: true,
    },

    experience: {
        type: Number,        
        default: 0
    },

    resume: {
        type: String,        
        required: false,
    },

    coverletter: {
        type: String,        
        required: false,
    },
});

module.exports = mongoose.model("User", userSchema);
