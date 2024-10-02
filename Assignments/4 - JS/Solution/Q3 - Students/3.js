const displayCoeffs = {
    mathematics: document.getElementById("coeff-mathematics"),
    physics: document.getElementById("coeff-physics"),
    chemistry: document.getElementById("coeff-chemistry")
}

const addSection = document.getElementById("sec-add");
const addForm = document.getElementById("add-form");
const formFields = {
    name: addForm.querySelector("input[name='name']"),
    mathematics: addForm.querySelector("input[name='mathematics']"),
    physics: addForm.querySelector("input[name='physics']"),
    chemistry: addForm.querySelector("input[name='chemistry']")
}
const finishBtn = document.getElementById("btn-finish");
const counter = document.getElementById("count");

const resSection = document.getElementById("sec-results");
const winnerName = document.getElementById("winner");
const resList = document.getElementById("result-list");
const resetBtn = document.getElementById("btn-reset");

class Student {
    static coeffs = {
        mathematics: 3,
        physics: 2,
        chemistry: 1
    }

    constructor(name, mathematics, physics, chemistry) {
        this.name = name;
        this.mathematics = mathematics;
        this.physics = physics;
        this.chemistry = chemistry;
    }

    getGpa() {
        const sumCoeffs = Object.values(Student.coeffs).reduce((a, b) => a + b, 0);
        return (this.mathematics * Student.coeffs.mathematics +
            this.physics * Student.coeffs.physics +
            this.chemistry * Student.coeffs.chemistry) / sumCoeffs;
    }
}

let studentList = []

function setCoeffs() {
    displayCoeffs.mathematics.textContent = Student.coeffs.mathematics;
    displayCoeffs.physics.textContent = Student.coeffs.physics;
    displayCoeffs.chemistry.textContent = Student.coeffs.chemistry;
}

function addStudent() {
    let newStudent = new Student(
        formFields.name.value,
        formFields.mathematics.value,
        formFields.physics.value,
        formFields.chemistry.value
    )
    studentList.push(newStudent);
    addForm.reset();
    counter.textContent = studentList.length;
}

function finish() {
    if (studentList.length == 0) {
        alert("No students are added.")
        return;
    }
    if (!confirm("Are all students entered?")) return;

    studentList.sort((a, b) => a.getGpa() < b.getGpa());
    winnerName.textContent = studentList[0].name;

    for (const student of studentList) {
        const htmlTemplate = `
            <h3>${student.name} <span class="gpa">(${student.getGpa().toFixed(2)})</span></h3>
            <div class="result-item-flex">
                <p>Mathematics: ${student.mathematics}</p>
                <p>Physics: ${student.physics}</p>
                <p>Chemistry: ${student.chemistry}</p>
            </div>
        `
        let li = document.createElement("li");
        li.innerHTML = htmlTemplate;
        resList.appendChild(li);
    }

    addSection.style.display = "none";
    resSection.style.display = "block";
}

function reset() {
    studentList = []
    counter.textContent = "0";
    resList.replaceChildren();
    resSection.style.display = "none";
    addSection.style.display = "block";
}

addForm.addEventListener("submit", event => {
    event.preventDefault();
    addStudent();
});
finishBtn.addEventListener("click", event => finish());
resetBtn.addEventListener("click", event => reset());

setCoeffs();
