// const Student= require('../modules/student.module.js');

// const getStudents= async(req,res)=>{
//     try {
//         const students= await Student.find({});
//         res.status(200).json(product);
        
//     } catch (error) {
//         res.status(500).json({
//             message:error.message
//         });
//     }
// }

// module.exports={
//     getStudents,
// }


// let student=studentModel.getStudentById(req.params.id);
//     if(student){
//         res.json(student);
//     }else{
//         res.status(404).send('Student not found');
//     }