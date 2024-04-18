const express = require('express');
const app = express();
const stuRoute= require('../StudentApp/src/routes/student.route.js');
// const authRoute= require('../StudentApp/src/routes/auth.route.js');
const jwt= require("jsonwebtoken");
const secretkey = "localhostkey@local";


app.use(express.json());

app.use('/student', stuRoute);
// app.use('/',authRoute);

app.listen(8080,() =>{
    console.log('Server is running on port 8080');
});

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.get("/students",verifyToken,(req,res)=>{
    res.status(200).send("welcome to student DB");
});

const users = [
    { username: "user1", password: "abc123" },
    { username: "user2", password: "pass12" },
  ];

app.post("login", (req,res)=>{
    const {usr, pwd}= req.body;

    const user= users.find((user)=> user.username === usr && user.password===pwd);

    if (user){
        const toke = jwt.sign({username:user.username}, secretkey);
        res.json({token});
    }else{
        res.status(401).send("Please Check you login credentials");
    }
});



function verifyToken(req,res,next){
    const token= req.headers.authorization.split(" ")[1];
    // console.log(token);

    if(!token){
        return res.status(403).send("Token not available");
    }

    jwt.verify(token, secretkey,(err,decoded)=>{
        if(err){
            return res.status(401).send("Invalid Token");
        }
        req.user = decoded;
        next();
    });
}