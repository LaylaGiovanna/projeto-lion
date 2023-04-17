'use stric'

import { fetchApiDataStudentRegistration } from "./api.js"


const defaultScreen = function(){

  let screenInfoStudent = document.createElement("div")
  screenInfoStudent.id = "overal_content_student_info"
  screenInfoStudent.className = "overal_content_student_info"
  content2.appendChild(screenInfoStudent)

  console.log("a")
}

const studentCardInfo = function(){

  let studentCardBox = document.createElement("div")
  studentCardBox.className = "student_card_info"
  studentCardBox.id = "student_card_info"
  overal_content_student_info.appendChild(studentCardBox)

//  //the card shape

 let studentCard = document.createElement("div")
 studentCard.className = "student_card"
 studentCard.id = "student_card"
 student_card_info.appendChild(studentCard)

//  //card img
 
 let studentCardBoxImg = document.createElement("div")
 studentCardBoxImg.className = "student_img"
 studentCardBoxImg.id = "student_card_img"
 student_card.appendChild(studentCardBoxImg)
//  //card name

  let studentCardBoxName = document.createElement("div")
 studentCardBoxName.className = "student_name"
 studentCardBoxName.id = "student_card_name"
 student_card.appendChild(studentCardBoxName)

}


// //Student graphyc info
const studentGraphycInfo = function(){
  
  let studentGraphycBox = document.createElement("div")
  studentGraphycBox.id = "student_graphyc_box"
  studentGraphycBox.className = "student_box"
  overal_content_student_info.appendChild(studentGraphycBox )
 
  let studentCard = document.createElement("div")
  studentCard.className = "student_card"
  studentCard.id = "student_card_graphyc"
  student_graphyc_box.appendChild(studentCard)

  let graphycContent = document.createElement("div")
  graphycContent.className = "graphyc_content"
  graphycContent.id = "graphyc_content"
  student_card_graphyc.appendChild(graphycContent)

 
 }
 
 
const createStudentInfoScreen = function(){

  defaultScreen()
  studentCardInfo()
  studentGraphycInfo()
}

// //Student card
// 

const student =  async (registration)=> {

  let dataStudent = registration
  const studentData = await fetchApiDataStudentRegistration(dataStudent)  

  studentData.student.map(element => {

    let studentimage = document.createElement("img")
    studentimage.src = element.foto
    studentimage.className ="student_image_info"
    student_card_img.appendChild(studentimage)

    let studentName = document.createElement("div")
    studentName.classList = "student_name_info"
    studentName.id = "student_name_info"
    studentName.textContent = element.nome
    student_card_name.appendChild(studentName)
    
  });

  
  //console.log(studentData.student[0].curso[0].disciplinas)

  studentData.student[0].curso[0].disciplinas.map(curso => {

   //console.log("a")

    let studentGradesContainer = document.createElement("div")
    studentGradesContainer.id = "student_grades_container"
    studentGradesContainer.className = "student_grades_container"
    console.log(curso)
    let grade = curso.media
    let sigla = curso.nome
    let content = grade += '<div id="defaultGrade">JS DOM</div>' + sigla
    studentGradesContainer.innerHTML = content
    graphyc_content.appendChild(studentGradesContainer)
    

    let gradeInFact = document.getElementById("defaultGrade")
    let graphycGrade = document.createElement("div")
    graphycGrade.className= "graphyc_grade"
    graphycGrade.id = "graphyc_grade"
    gradeInFact.appendChild(graphycGrade)
  });

 
}


// //_________________________________________________________________________________________


export{createStudentInfoScreen,student}
