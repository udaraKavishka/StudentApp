const express= require('express');
const router= express.Router();
const studentModule= require('../modules/student.module.js');
//const { getStudents } = require('../controllers/student.controller.js');

router.get('/', (req,res) =>{
    res.json(studentModule.getALlStudents())
})

//retrieve data with try and catch  not working
router.get('/:id',(req,res)=>{
    try {
        const id = req.params.id;
        //const student = studentModule.getStudentById(id);
       // console.log(student);
        res.json(studentModules.getStudentById(id))
        
    } catch (error) {
        res.status(400).json({message:'Error Retrieving Data'});
    } 
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    res.json(studentModules.getStudentById(id))
})


//retreive data using course name not working
router.get('/:course',(req,res)=>{
    const course= req.params.course;
    res.json(studentModule.getStudentByCourse(course))
})




router.post('/',(req,res)=>{
    const {id,name,course,age}=req.body;
    if (!id || !name || !course || !age) {
        res.status(400).send("Please provide the required fields");
    }
    else{
        const student = {id,name,course,age};
        studentModules.addStudent(student);
        res.status(200).json({
            student,
            message: "Student added successfully"
        });
    }
})



module.exports= router;