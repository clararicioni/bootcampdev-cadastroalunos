var students = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro@abutua.com",
        tel: "(15) 99999-9999",
        course: 2,
        shift: 1
    },
    {
        id: 2,
        name: "Claudio Antonio",
        email: "claudio@abutua.com",
        tel: "(15) 99999-8888",
        course: 4,
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
//save a student
function save(){
    var selectedShift = document.querySelector('input[name="exampleRadios"]:checked');
    var student = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        tel: document.getElementById("inputPhone").value,
        course: document.getElementById("inputCat").value,
        shift: selectedShift ? parseInt(selectedShift.value) : 1
    };
    addNewRow(student);
    students.push(student);

    document.getElementById("studentForm").reset();
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
    var cell = newRow.insertCell()
    cell.className='nome'
    cell.appendChild(nameNode);

    //Insert student email
    var emailNode = document.createTextNode(student.email);
    newRow.insertCell().appendChild(emailNode);

    //Insert student tel
    var telNode = document.createTextNode(student.tel);
    var cell = newRow.insertCell()
    cell.className='d-none d-md-table-cell telefone'
    cell.appendChild(telNode);
    //Insert student course
    var courseNode = document.createTextNode(categories[student.course - 1].name);
    var cell = newRow.insertCell()
    cell.className='d-none d-md-table-cell'
    cell.appendChild(courseNode);

    //Insert student shift
    var shiftNode = document.createTextNode(shiftCategories[student.shift - 1].name);
    var cell = newRow.insertCell()
    cell.className='d-none d-md-table-cell'
    cell.appendChild(shiftNode);
}
//Telephone mask
$(document).ready(function () {
    $('#inputPhone').mask('(00) 00000-0000');
});