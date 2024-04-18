const express= require('express');
const router= express.Router();
const studentModule= require('../modules/student.module.js');
// const authRoute= require('../routes/auth.route.js');


router.get('/', (req,res) =>{
    res.json(studentModule.getALlStudents())
})



router.get('/:id',(req,res)=>{
    try {
        const id = req.params.id;
        // const student = studentModule.getStudentById(id);
        // console.log(student);
        res.json(studentModule.getStudentById(id))
        
    } catch (error) {
        res.status(400).json({error});
    } 
})

// router.get('/:id',(req,res)=>{
//     try {
//         const id = req.params.id;
//         res.json(studentModules.getStudentById(id))

//     } catch (error) {
//         res.status(400).json({error});
        
//     }
    
// })

// router.get('/:id',(req,res)=>{
//     const id=req.params.id
//     res.json(studentModule.getStudentById(id))
// })



router.get('/:course',(req,res)=>{
    try {
        const course= req.params.course;
    res.json(studentModule.getStudentByCourse(course))

    } catch (error) {
        res.status(400).json({error});
        
    }
    
})




router.post('/',(req,res)=>{
    try {
        const {id,name,course,age}=req.body;
    if (!id || !name || !course || !age) {
        res.status(400).send("Please provide the required fields");
    }
    else{
        const student = {id,name,course,age};
        studentModule.addStudent(student);
        res.status(200).json({
            student,
            message: "Student added successfully"
        });
    }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
})


router.put('/:id',(req,res)=>{
    try {
    const id=req.params.id;
    const newData = req.body;
    const result = studentModule.updateStudent(id,newData);
    if( result !== null){
        res.status(200).json(result);
    }
    else{
        res.status(404).send("Student Not Found");
    }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
})

router.delete('/:id',(req,res)=> {
    try {
        const id= req.params.id;
        const result= studentModule.deleteStudent(id);
        if(result !== null){
            res.status(200).json(result);
        }else{
            res.status(404).send("Student Deleted Successfully ");
        }
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


router.get('/:course/:age/:act',(req,res)=>{
    try {
        const course=req.params.course;
        const age= req.params.age;
        const act= req.params.act;
        res.status(200).json(studentModule.filterstudent(course,age,act));
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
});

router.get('/:id/skills',(req,res)=>{
    try {
        const id= req.params.id;
        res.status(200).json(studentModule.findskillById(id));
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

router.get('/skills/:sk',(req,res)=>{
    try {
        const sk= req.params.sk;
        res.status(200).json(studentModule.searchBySkill(sk));
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

module.exports= router;