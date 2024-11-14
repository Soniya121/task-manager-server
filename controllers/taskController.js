const Task = require("../models/Task");

exports.addTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const status = await Task.findByIdAndDelete(id);
    if (!status) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(201).json({ message: "Task deleted successfully", status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};