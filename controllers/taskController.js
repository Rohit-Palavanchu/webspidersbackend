//where we write the api's
const Task = require("../models/task");
const Joi = require("joi");

// Validation Schema Using Joi
const validateTask = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().max(100),
    description: Joi.string().optional(),
    status: Joi.string().valid("TODO", "IN_PROGRESS", "COMPLETED").optional(),
    priority: Joi.string().valid("LOW", "MEDIUM", "HIGH").optional(),
    dueDate: Joi.date().optional(),
  });
  return schema.validate(data);
};

// Create a New Task
exports.createTask = async (req, res, next) => {
  try {
    const { error } = validateTask(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json({savedTask, message: "Task uploaded successfully"});
  } catch (err) {
    next(err);
  }
};

// Get All Tasks with Filtering & Pagination
exports.getTasks = async (req, res, next) => {
  try {
    const { status, priority, sort, limit = 10, skip = 0 } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter)
      .sort(sort ? { [sort]: 1 } : {}) // Sort by field (default ascending)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Get a Task by ID
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Update a Task
exports.updateTask = async (req, res, next) => {
  try {
    const { error } = validateTask(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true,
    });

    if (!updatedTask) return res.status(404).json({ message: "Task not found" });

    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
};

// Delete a Task
exports.deleteTask = async (req, res, next) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
          return res.status(404).json({ message: "Task not found" });
        }
    
        res.status(200).json({ message: "Task deleted successfully" });
      } catch (err) {
        next(err);
      }
};
