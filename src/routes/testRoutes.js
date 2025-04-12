const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');

//Test: Create User
router.post('/test/user', async (req, res) => {
    try{
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err){
        res.status(400).json({ error: err.message });
    }
});

//Test: Create Task
router.post('/test/task', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Get all tasks for verification
router.get('/test/tasks', async (req,res) => {
    try{
        const tasks = await Task.find().populate('user');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;