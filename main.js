let studentArray = []
let elTable = document.getElementById('table')
let elForm = document.getElementById('form')

//Making a Constructor function
let Students = function(name, codeClass, languageSkills){
    this.studentName = name
    this.codeClass = codeClass
    this.languageSkills = languageSkills
}

//Instatiating some constructor properties
if(localStorage.length > 0){
    let getData = localStorage.getItem('studentStorage')
    studentArray = JSON.parse(getData)
}else{
    let studentOne = new Students('Adrian', 'Code Partners', 'HTML, CSS, JS')
    let studentTwo = new Students('Ana', 'Code Partners', 'HTML, CSS, JS')
    let studentThree = new Students('Paul', 'Code Partners', 'HTML, CSS, JS')
    let studentFour = new Students('Janae', 'Code Partners', 'HTML, CSS, JS')
    let studentFive = new Students('Jourdane', 'Code Partners', 'HTML, CSS, JS')
    let studentSix = new Students('Joseph', 'Code Partners', 'HTML, CSS, JS')

    //Pushing the instances to the Constructor
    studentArray.push(studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix)
}

//Making Table Headers
function displayTableHeader(){
    let elRow = document.createElement('tr')
    elTable.appendChild(elRow);
    let elNameHeader = document.createElement('th')
    elRow.appendChild(elNameHeader)
    elNameHeader.innerHTML = 'Student Name'

    let elSchoolHeader = document.createElement('th')
    elRow.appendChild(elSchoolHeader)
    elSchoolHeader.innerHTML = 'School Name'

    let elLanguageHeader = document.createElement('th')
    elRow.appendChild(elLanguageHeader)
    elLanguageHeader.innerHTML = 'Language Skills'
}

//Function to populate the table
function displayTableInfo(developer){
    let elRow = document.createElement('tr')
    elTable.appendChild(elRow)

    let elRowHeader = document.createElement('th')
    elRow.appendChild(elRowHeader)
    elRowHeader.innerHTML = developer.studentName

    let elSchoolHeader = document.createElement('th')
    elRow.appendChild(elSchoolHeader)
    elSchoolHeader.innerHTML = developer.codeClass

    let elProgramHeader = document.createElement('th')
    elRow.appendChild(elProgramHeader)
    elProgramHeader.innerHTML = developer.languageSkills
}

let studentName = elForm.studentName
let codeClass = elForm.codeClass
let languageSkills = elForm.languageSkills

function createNewStudent(event){
    event.preventDefault()
    let newStudent = new Students(studentName.value, codeClass.value, languageSkills.value)
    console.log(newStudent)
    studentArray.push(newStudent)
    displayTableInfo(newStudent)
    localStorage.setItem('studentStorage', JSON.stringify(studentArray))
}
elForm.addEventListener('submit', createNewStudent)

function populateTable(){
    displayTableHeader()
    for(let i=0; i < 6; i++){
        displayTableInfo(studentArray[i])
    }
}
populateTable()

