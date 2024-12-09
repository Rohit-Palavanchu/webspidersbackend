// creates schema using mongoose for tasks
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String },
    status: { 
      type: String, 
      enum: ["TODO", "IN_PROGRESS", "COMPLETED"], 
      default: "TODO" 
    },
    priority: { type: String, enum: ["LOW", "MEDIUM", "HIGH"], default: "LOW" },
    dueDate: { type: Date },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Task", taskSchema);
