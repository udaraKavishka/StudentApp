
let students= [
    {'id':'IT1001','name':'Peter','course':'IT','age':23,'skills':['C++','JS','PhP']},
    {'id':'IT1002','name':'Gemini','course':'IT','age':24,'skills':['Java','JS','Python','MySQL']},
    {'id':'IT1003','name':'Anne','course':'IT','age':26,'skills':['MySQL','Python','Java']},
    {'id':'ASB2001','name':'Paul','course':'Bio','age':25,'skills':['water treatment','soil test']},
    {'id':'ASB2002','name':'Maaran','course':'Bio','age':23,'skills':['GIS','Plantology','Eco tourism']}
]

function getALlStudents(){
    return students;
}

function getStudentById(id){
    return students.find((student)=>student.id === id)
}

function getStudentByCourse(course){
    return students.find((student)=>student.course === course)
}



function addStudent(student){
    students.push(student);
}




module.exports= {
    getALlStudents,
    getStudentById,
    addStudent,
    getStudentByCourse,

}