const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task name is required"], // Validation
        trim: true,
        
    },
    completed: {
        type: Boolean,
        default: false // Default value
    }
}, { timestamps: true }); // Adds createdAt & updatedAt fields automatically

module.exports = mongoose.model("Task", taskSchema); // Capitalized model name
