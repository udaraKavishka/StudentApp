// const jwt= require("jsonwebtoken");
// const express= require("express");
// const router= express.Router();
// const secretkey = "localhostkey@local";

// const users = [
//     { username: "user1", password: "abc123" },
//     { username: "user2", password: "pass12" },
//   ];

// router.post("login", (req,res)=>{
//     const {usr, pwd}= req.body;

//     const user= users.find((user)=> user.username === usr && user.password===pwd);

//     if (user){
//         const toke = jwt.sign({username:user.username}, secretkey);
//         res.json({token});
//     }else{
//         res.status(401).send("Please Check you login credentials");
//     }
// });



// function verifyToken(req,res,next){
//     const token= req.headers.authorization.split(" ")[1];
//     // console.log(token);

//     if(!token){
//         return res.status(403).send("Token not available");
//     }

//     jwt.verify(token, secretkey,(err,decoded)=>{
//         if(err){
//             return res.status(401).send("Invalid Token");
//         }
//         req.user = decoded;
//         next();
//     });
// }

// module.exports={
//     verifyToken,
//     router
// }

// // module.exports= router;