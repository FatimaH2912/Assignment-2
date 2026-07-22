const express = require('express');
const app = express();

const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});