const express = require('express');
const app = express();
const stuRoute= require('../StudentApp/src/routes/student.route.js');

app.use(express.json());

app.use('/student', stuRoute);

app.listen(8080,() =>{
    console.log('Server is running on port 8080');
});

app.get('/', (req,res)=>{
    res.send("Hello World");
});