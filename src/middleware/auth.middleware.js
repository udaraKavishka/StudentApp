// const jwt= require("jsonwebtoken");
// const secretkey = "localhostkey@local";




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
//     verifyToken
// }