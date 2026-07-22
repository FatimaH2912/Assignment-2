const express = require('express');
const app = express();

const PORT = 3000;

const tasks=[
    { id: 1, title: 'Complete Assignment', completed: false },
    { id: 2, title: 'Buy Plush Toy', completed: true },
    { id: 3, title: 'Watch Movie', completed: false }
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});