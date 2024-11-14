const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
    expiry: { type: Date, required: true },
    status: { type: String, enum: ["Pending", "Expired"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
