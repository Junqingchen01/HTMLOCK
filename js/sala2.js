// 题目
const questions = [
    {
      text: "Qual a tag que define a table CELL em HTML?",
      answers: ["td", "tr", "th"],
      solution: 0
    },
    {
      text: "Qual a tag que define uma table ROW em HTML?",
      answers: ["td", "tr", "th"],
      solution: 1
    },
    {
      text: "Qual a tag que define uma table HEADER em HTML?",
      answers: ["td", "tr", "th"],
      solution: 2
    }
  ];
  

let question
let OpenDoor = false;
console.log("opendoor :"+OpenDoor);
let NumeroKey = 0;
console.log("key" + NumeroKey);
let timeLeft = 200;

// Get all the necessary elements
const sala1 = document.querySelector(".sala1");

const key = document.querySelector(".key");
const dialog = document.querySelector(".modal");

const book = document.querySelector(".book");
const book2 = document.querySelector(".book2");
const book3 = document.querySelector(".book3");

const dica = document.querySelector(".dica");

// count times
var x = setInterval(function() {
    let left = --timeLeft;
  
    document.querySelector(".time").innerHTML = left + "s ";
    if (left < 0) {
      clearInterval(x);
      document.querySelector(".time").innerHTML = "0s";
      alert("ACABOU O TEU TEMPO! TENTA DE NOVO!!");
      location.href='homepage.html';
    }
  }, 1000);
  

  book.addEventListener("click", handleBookClick1);
  book2.addEventListener("click", handleBookClick2);
  book3.addEventListener("click", handleBookClick3);
  
  dica.addEventListener("click", creatTutorial);
  
  key.addEventListener("click",checkKeys)

// Add event listener to the door
sala1.addEventListener("click", () => {
    // Check if the door is open
    const Openedsala2 = localStorage.getItem("Openedsala2");
    if (Openedsala2 === "true"  || OpenDoor === true) {
      sala1.style.backgroundColor = "green";
      alert("Vai entrar sala1...");
      location.href='sala1.html'
    } else {
      alert("NAO PODES SEGUIR PARA A SEGUINTE SALA AINDA!");
    }
});

function creatTutorial() {
    // Create a new dialog element
    alert("Isto vai te ajudar, secalhar...")
    const newDialog = document.createElement("dialog");
    newDialog.classList.add("modal2");
    newDialog.innerHTML = `
      <p id="title">Dica</p><br>
      <p id="closeDialog">X</p>
      <p id="text2">
      HTML tables allow web developers to arrange data into rows and columns.<br>
      A table in HTML consists of table cells inside rows and columns.<br>
      Each table cell is defined by a "td" and a "/td" tag.<br>
      Each table row starts with a "tr" and ends with a "/tr" tag.<br>
      You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.<br>
      Sometimes you want your cells to be table header cells. In those cases use the "th" tag instead of the "td" tag<br>
      
      
      </p>
      <br>
    `;
    document.body.appendChild(newDialog);
  
    // Add event listener to the close button
    const closeButton = newDialog.querySelector("#closeDialog");
    closeButton.addEventListener("click", ()=>{newDialog.open = false}
    //closeDialog()
    );
  
    // Open the new dialog
    newDialog.open = true;
  }

  
  let clickbook
  function handleBookClick1() { 
  clickbook = book
  let Openedsala2 = localStorage.getItem("Openedsala2")
  if(Openedsala2 === "true"){
    dialog.open = false;
    alert("This book is done, I have to find others...");
}else{
  renderDialog();
}
  }
  function handleBookClick2() { 
  clickbook = book2
  let Openedsala2 = localStorage.getItem("Openedsala2")
  if(Openedsala2 === "true"){
    dialog.open = false;
    alert("This book is done, I have to find others...");
}else{
  renderDialog();
}
  }
  function handleBookClick3() { 
  clickbook = book3
  let Openedsala2 = localStorage.getItem("Openedsala2")
  if(Openedsala2 === "true"){
    dialog.open = false;
    alert("This book is done, I have to find others...");
}else{
  renderDialog();
}
  }
  
  function renderDialog() {
    const index = Math.floor(Math.random() * questions.length);
    question = questions[index];
    
    dialog.open = true;
    dialog.querySelector("#text").innerHTML = question.text;
    dialog.querySelector("#answer1").innerHTML = question.answers[0];
    dialog.querySelector("#answer2").innerHTML = question.answers[1];
    dialog.querySelector("#answer3").innerHTML = question.answers[2];
    
    const answers = dialog.querySelectorAll("[name='answers']");
    for (const answer of answers) {
      answer.addEventListener("click", checkSuccess);
    }
    }
    
    function checkSuccess(event) {
    if (event.target.value == question.solution) {
      alert("You win a key!");
      NumeroKey++;
      checkKeys()
      console.log("key" + NumeroKey);
      document.querySelector(".key").innerHTML = "Keys: " + NumeroKey;
      clickbook.style.backgroundImage = "url('../imgs/bookafter.png')"
      //da para melhorar
      clickbook.removeEventListener("click", handleBookClick1);
      clickbook.removeEventListener("click", handleBookClick2);
      clickbook.removeEventListener("click", handleBookClick3);
    
      clickbook.addEventListener("click", () => {
        alert("Nao e preciso tanto");
      });
    
    } else {
      alert("Tenta de novo!");
    }
    dialog.querySelector("form").reset();
    dialog.close();
    }
    


    function checkKeys(){
    if(NumeroKey === questions.length){

      let timewin2 = 0;
      timewin2+= timeLeft;
      console.log("Tempo gasto na sala2:"+timewin2)
      localStorage.setItem("timeWin2", timewin2);

      clearInterval(x);
      alert("Estas de livre de escolher...")
      sala1.style.backgroundColor = "green";
      OpenDoor = true;
      localStorage.setItem("Openedsala2",true);
      
    }else if(NumeroKey === 0){
      alert("Pelos vistos ainda precisas de explorar...")
    }else{
      alert("Achamos que ainda precisas de algo para sair...")
    }
    }
    
    const close = document.querySelector("#closeDialog");
    close.addEventListener("click",closeDialog);
    
    
    function closeDialog(){
    dialog.open = false
    }

    function welcome(){
      let Opened = localStorage.getItem("Openedsala2");
      if(Opened === "true"){
        sala1.style.backgroundColor = "green";
        
        clearInterval(x);
        alert('Bem vindo de novo! Acho que andaste por aqui!')
      }
      else{
        alert('Bem vindo a sala 2! Tenta encontrar as chaves e escapar da sala!')
      }
    }
    
    welcome()
  