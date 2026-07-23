const taskRepository = require("./src/repositories/taskRepository");
const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: 'Assignment 2',
        version: '1.0.0',
        endpoints: ["/tasks"]
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
    });
});

app.get("/tasks", async (req, res) => {
    const tasks = await taskRepository.getAllTasks();
    res.json(tasks);
});

app.get("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    const task = await taskRepository.getTaskById(id);

    if (!task) {
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    res.json(task);
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = taskRepository.createTask(title);

    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = taskRepository.getTaskById(id);

    if (!task) {
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    const { title, done } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' });
    }

    const updatedTask = taskRepository.updateTask(id, title, done);

    res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const deleted = taskRepository.deleteTask(id);

    if (!deleted) {
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    res.json({ message: `Task ${id} deleted` });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;