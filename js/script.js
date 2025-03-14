var students = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro@abutua.com",
        tel: "(15) 9999-9999",
        course: 1,
        shift: 2
    },
];

var categories = [
    { id: 1, name: "Angular" },
    { id: 2, name: "MySQL" },
    { id: 3, name: "C#" },
    { id: 4, name: "React" }
];

var shiftCategories = [
    { id: 1, name: "Manhã"},
    { id: 2, name: "Tarde"},
    { id: 3, name: "Noite"}
]

//onLoad
loadStudents();

//Load all students
function loadStudents(){
    for(let student of students){
        addNewRow(student);
    }
}

//Add new row
function addNewRow(student){
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow();

    //Insert student id
    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    //Insert student name
    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert student email
    var emailNode = document.createTextNode(student.email);
    newRow.insertCell().appendChild(emailNode);

    //Insert student tel
    var telNode = document.createTextNode(student.tel);
    newRow.insertCell().appendChild(telNode);

    //Insert student course
    var courseNode = document.createTextNode(categories[student.course - 1].name); //-1, pois é um array
    newRow.insertCell().appendChild(courseNode);

    //Insert student shift
    var shiftNode = document.createTextNode(shiftCategories[student.shift - 1].name);
    newRow.insertCell().appendChild(shiftNode);
}