const Task = require("../models/tasksSchema");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

// Get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

// Get a specific task
const getTasks = asyncHandler(async (req, res) => {
  const taskID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }
  const task = await Task.findById(taskID);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({ task });
});

// Create a new task
const createTasks = asyncHandler(async (req, res) => {
  const { name, completed = false } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Task name is required" });
  }
  const newTask = await Task.create({ name, completed });
  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
});

// Update a task
const updateTasks = asyncHandler(async (req, res) => {
  const taskID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }
  const updatedTask = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({
    message: "Task updated successfully",
    task: updatedTask,
  });
});

// Delete a task
const deleteTasks = asyncHandler(async (req, res) => {
  const taskID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }
  const deletedTask = await Task.findByIdAndDelete(taskID);
  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({ message: "Task deleted successfully" });
});

module.exports = {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  getTasks,
};
