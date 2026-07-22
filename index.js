const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const app = express();
app.use(express.json());

const PORT = 3000;

const tasks=[
    { id: 1, title: 'Complete Assignment', done: false },
    { id: 2, title: 'Buy Plush Toy', done: false },
    { id: 3, title: 'Watch Movie', done: false }
];

app.get('/', (req,res)=> {
    res.json({
        name : 'Assignment 2',
        version : '1.0.0',
        endpoints: ["/tasks"]
    });
});

app.get('/health',(freq,res)=>{
    res.json({
        status : 'OK',
    });
});

app.get('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    const task= tasks.find(t=> t.id === id);

    if(!task){
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    res.json(task);
});

app.post('/tasks',(req,res)=>{
    const{title} =req.body;

    if(!title || title.trim() === ''){
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask={
        id: tasks.length +1, title: title, done: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if(!task){
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    const { title, done } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' });
    }

    task.title = title;
    task.done = done;

    res.json(task);
});

app.delete('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    const Index = tasks.findIndex(t => t.id === id);

    if(Index === -1){
        return res.status(404).json({ error: `Task ${id} not found` });
    }

    tasks.splice(Index, 1);
    res.json({ message: `Task ${id} deleted` });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});