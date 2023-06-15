// 题目
const questions = [
  {
    text: "Quais sao as tags de começo e de finalizar?",
    answers: ['start, /end', 'start, /stop', 'start, /start'],
    solution: 2
  },
  {
    text: "O que constitui um documento HTML?",
    answers: ['Elementos HTML aninhados uns nos outros', 'Estilos CSS independentes', 'Elementos HTML separados'],
    solution: 0
  },
  {
    text: "As tags HTML diferenciam de maiúsculas ou minúsculas?",
    answers: ['Sim', 'Nao sei', 'Não'],
    solution: 2
  }
];


let question

// console.log("Number of questions: "+questions.length)

// Get all the necessary elements
const sala2 = document.querySelector(".sala2");
const sala3 = document.querySelector(".sala3");

const key = document.querySelector(".key");
const dialog = document.querySelector(".modal");

const book = document.querySelector(".book");
const book2 = document.querySelector(".book2");
const book3 = document.querySelector(".book3");

const dica = document.querySelector(".dica");

let OpenDoor = false;

// 记录获得的钥匙的数量
let NumeroKey = 0;

//倒计时效果，w3c里抄的
let timeLeft = 200;

var x = setInterval(function() {
  let left = --timeLeft;
  // console.log(timeLeft)
  document.querySelector(".time").innerHTML = left + "s ";
  if (left < 0) {
    clearInterval(x);
    document.querySelector(".time").innerHTML = "0s";
    alert("ACABOU O TEU TEMPO! TENTA DE NOVO!!");
    location.href='homepage.html';
  }
}, 1000);


// 门的点击效果
sala2.addEventListener("click", () => {
  // 去localStorage确认门是不是开着（用户有可能返回这个房间，如果出去之后返回的话，这个门就是开着的）。
  let Opened = localStorage.getItem("Opened");
  if (Opened === "true") {
    sala2.style.backgroundColor = "green";
    sala3.style.backgroundColor = "green";
    alert("Vai entrar na sala2...");
    location.href='sala2.html'
  } else {
    alert("NAO PODES SEGUIR PARA A SEGUINTE SALA AINDA!");
  }
});

sala3.addEventListener("click", () => {
  let Opened = localStorage.getItem("Opened");
  if (Opened === "true") {
    sala2.style.backgroundColor = "green";
    sala3.style.backgroundColor = "green";
    alert("Vai entrar na sala3...");
    location.href='sala3.html'
  } else {
    alert(" NAO PODES SEGUIR PARA A SEGUINTE SALA AINDA!");
  }
});


// 为房间里其他可以点击的物品添加点击效果
book.addEventListener("click", handleBookClick1);
book2.addEventListener("click", handleBookClick2);
book3.addEventListener("click", handleBookClick3);


dica.addEventListener("click", creatTutorial);

key.addEventListener("click",checkKeys)

//打开提示效果
function creatTutorial() {
  // 创建新的弹窗dialog内容
  alert("Isto vai de ajudar, secalhar...")
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

//书本的点击效果，我为每一本书都设置了一个function，名字不同但是功能一样。
let clickbook
function handleBookClick1() { 
clickbook = book

//用户通过这个房间之后，回到这个房间，里面的书无法被再次打开。和门一个道理。
let Opened = localStorage.getItem("Opened")
  if(Opened === "true"){
    dialog.open = false;
    alert("This book is done, You have to find others...");
}else{
  renderDialog();
}
}
function handleBookClick2() { 
clickbook = book2

let Opened = localStorage.getItem("Opened")
  if(Opened === "true"){
    dialog.open = false;
    alert("This book is done, You have to find others...");
}else{
  renderDialog();
}
}
function handleBookClick3() { 
clickbook = book3
let Opened = localStorage.getItem("Opened")
  if(Opened === "true"){
    dialog.open = false;
    alert("This book is done, You have to find others...");
}else{
  renderDialog();
}
}


// 打开弹窗效果。老师的exemplo
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

// 确认答案对错
function checkSuccess(event) {
if (event.target.value == question.solution) {
  alert("Boa! Recebeste uma chave");
  // 如果对了，获得钥匙，并且确认一下钥匙数量
  NumeroKey++;
  checkKeys()

  //在左上角更新钥匙的数量，并且把答对的书的图标换了
  document.querySelector(".key").innerHTML = "Keys: " + NumeroKey;
  clickbook.style.backgroundImage = "url('../imgs/bookafter.png')"
  //把这本书的点击效果去除。换上新的效果，告诉用户 已经读过这本书了（不知道怎么分辨点击的是那本书，这个方法比较笨比）
  clickbook.removeEventListener("click", handleBookClick1);
  clickbook.removeEventListener("click", handleBookClick2);
  clickbook.removeEventListener("click", handleBookClick3);

  clickbook.addEventListener("click", () => {
    alert("This book is done, You have to find others... ");
  });

} else {
  alert("Tenta de novo!");
}
dialog.querySelector("form").reset();
dialog.close();
}

//检查钥匙数量
function checkKeys(){
// 如果钥匙数量等于问题数量  
if(NumeroKey === questions.length){

  // 记录剩余的时间
  let timewin1 = 0;
  timewin1+= timeLeft;
  console.log("Tempo gasto na sala1:"+timewin1)
  localStorage.setItem("timeWin1", timewin1);

  //倒计时效果清楚
  clearInterval(x);

  alert("Estas livre de escolher...")
  sala2.style.backgroundColor = "green";
  sala3.style.backgroundColor = "green";
  //记录这个房间已经通过。
  OpenDoor = true;
  localStorage.setItem("Opened",true);
  // console.log("Opendoor: "+ OpenDoor)
  
}
//如果没有钥匙
else if(NumeroKey === 0){
  alert("Pelos vistos ainda precisas de explorar...")
}
//如果钥匙数量小于问题数量
else{
  alert("Achamos que ainda precisas de algo para sair...")
}
}

//关闭弹窗效果
const close = document.querySelector("#closeDialog");
close.addEventListener("click",closeDialog);

function closeDialog(){
dialog.open = false
}


//用户进入页面时候，如果localStorage的记录里有通关记录（回到这个房间），门会直接变绿打开
function welcome(){
  let Opened = localStorage.getItem("Opened");
  if(Opened === "true"){
    sala2.style.backgroundColor = "green";
    sala3.style.backgroundColor = "green";
    clearInterval(x);
    alert('Bem vindo de novo! Por onde devo ir?')
  }
  //其他情况，用户第一次进入这个房间
  else{
    alert('Bem vindo a sala 1! Tenta encontrar as chaves e escapar da sala!')
  }
}
welcome()