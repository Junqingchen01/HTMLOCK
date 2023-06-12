const questions = [
    {
      text: "What tags do HTML elements start and end with?",
      answers: ['start, /end', 'start, /stop', 'start, /start'],
      solution: 2
    },
    {
      text: "O que constitui um documento HTML?",
      answers: ['Elementos HTML aninhados uns nos outros', 'Estilos CSS independentes', 'Elementos HTML separados'],
      solution: 0
    },
    {
      text: "As tags HTML diferenciam maiúsculas de minúsculas?",
      answers: ['Sim', 'Nao sei', 'Não'],
      solution: 2
    }
  ];
  
  
  let question
  console.log("Number of questions: "+questions.length)
  
  // Get all the necessary elements
  const OutDoor = document.querySelector(".OutDoor");

  
  const key = document.querySelector(".key");
  const dialog = document.querySelector(".modal");
  
  const book = document.querySelector(".book");
  const book2 = document.querySelector(".book2");
  const book3 = document.querySelector(".book3");
  
  const dica = document.querySelector(".dica");
  
  let OpenDoor = false;
  
  // count keys 
  let NumeroKey = 0;
  
  
  //count time W3S
  let timeLeft = 200;
  
  
  var x = setInterval(function() {
    let left = --timeLeft;
    // console.log(timeLeft)
    document.querySelector(".time").innerHTML = left + "s ";
    if (left < 0) {
      clearInterval(x);
      document.querySelector(".time").innerHTML = "0s";
      alert("TIME UP! PLEASE TRY AGAIN !");
      location.href='homepage.html';
    }
  }, 1000);
  
  
  OutDoor.addEventListener("click", () => {
    // Check if the door is open
    const Openedsala3 = localStorage.getItem("Openedsala3");
    if (Openedsala3 === "true"  || OpenDoor === true) {
        OutDoor.style.backgroundColor = "green";
        alert("WIN!");
        location.href='win.html';

        // final page
    //   location.href='sala1.html'
    } else {
      alert("Find the keys!!");
    }
});

  
  // Add event listener to the book,  melhorar
  book.addEventListener("click", handleBookClick1);
  book2.addEventListener("click", handleBookClick2);
  book3.addEventListener("click", handleBookClick3);
  
  dica.addEventListener("click", creatTutorial);
  
  key.addEventListener("click",checkKeys)
  
  function creatTutorial() {
    // Create a new dialog element
    alert("This weill be helpful maybe..")
    const newDialog = document.createElement("dialog");
    newDialog.classList.add("modal2");
    newDialog.innerHTML = `
      <p id="title">Dica</p><br>
      <p id="closeDialog">X</p>
      <p id="text2">
  
      Please note that HTML stands for HyperText Markup Language and is used for building web pages.<br>
      HTML elements are surrounded by start tags and end tags.<br>
      HTML tags are enclosed in angle brackets.<br>
      HTML documents consist of nested HTML elements.<br>
      HTML elements can be nested, meaning that an element can contain other elements.<br>
      Tags are not case-sensitive.<br>
      HTML tags can define the structure and style of text, such as headings, paragraphs, and links.<br>
      HTML also supports the use of CSS styles and JavaScript scripts to enhance the functionality and appearance of web pages.<br>
  
      Is may be helpful<br>
      
      </p>
      <br>
    `;
    document.body.appendChild(newDialog);
    const closeButton = newDialog.querySelector("#closeDialog");
    closeButton.addEventListener("click", ()=>{newDialog.open = false}
    );
    newDialog.open = true;
  }
  
  let clickbook
  function handleBookClick1() { 
  clickbook = book
  let Openedsala3 = localStorage.getItem("Openedsala3")
  if(Openedsala3 === "true"){
    dialog.open = false;
    alert("This book is done, I have to find others...");
}else{
  renderDialog();
}
}
  function handleBookClick2() { 
  clickbook = book2
  let Openedsala3 = localStorage.getItem("Openedsala3")
  if(Openedsala3 === "true"){
    dialog.open = false;
    alert("This book is done, I have to find others...");
}else{
  renderDialog();
}
  }
  function handleBookClick3() { 
  clickbook = book3
  let Openedsala3 = localStorage.getItem("Openedsala3")
  if(Openedsala3 === "true"){
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
    alert("Good! you get a key !");
    NumeroKey++;
    checkKeys()
    document.querySelector(".key").innerHTML = "Keys: " + NumeroKey;
    clickbook.style.backgroundImage = "url('../imgs/bookafter.png')"

    clickbook.removeEventListener("click", handleBookClick1);
    clickbook.removeEventListener("click", handleBookClick2);
    clickbook.removeEventListener("click", handleBookClick3);
  
    clickbook.addEventListener("click", () => {
      alert("This book is done, i have to find others... ");
    });
  
  } else {
    alert("False, try again !");
  }
  dialog.querySelector("form").reset();
  dialog.close();
  }
  
  function checkKeys(){
  if(NumeroKey === questions.length){
  
    // marcar o resto tempo para registar no perfil de user para entrar o rank
    let timewin3 = 0;
      timewin3+= timeLeft;
      console.log("time win in sala3:"+timewin3)
      localStorage.setItem("timeWin3", timewin3);
  
    clearInterval(x);
  
    alert("Looks like I can get out of this room now..which door should i go ....")
    OutDoor.style.backgroundColor = "green";

  
    OpenDoor = true;
    localStorage.setItem("Openedsala3",true);
    // console.log("Opendoor: "+ OpenDoor)
    
  }else if(NumeroKey === 0){
    alert("Looks like I need to keep exploring this room...  ")
  }else{
    alert("Looks like i need more keys to get out this room...")
  }
  }
  
  const close = document.querySelector("#closeDialog");
  close.addEventListener("click",closeDialog);
  
  function closeDialog(){
  dialog.open = false
  }
  function welcome(){
    let Openedsala3 = localStorage.getItem("Openedsala3");
    if(Openedsala3 === "true"){
      OutDoor.style.backgroundColor = "green";
      clearInterval(x);
      
    }
    else{
        alert('welcome to 3º room, that is last room! find keys and try leave the room before the time up!!')
    }
  }
  
  welcome()