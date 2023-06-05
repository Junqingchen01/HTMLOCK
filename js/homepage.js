let Userlogado = localStorage.getItem("UserLogado");

function ifAdmin(){
    if (Userlogado === 'Admin'){
        const GerirAluno = document.querySelector("#GerirAluno");
        // const GerirER = document.querySelector("#GerirER");
        GerirAluno.style.display = "block";
        GerirER.style.display = "block";
    }
}


function ifLogin(){
    let Userlogado = localStorage.getItem("UserLogado");
    if(!Userlogado){
        alert("You should login frist !");
        location.href = "../html/login.html";
    }
    else{
        alert("Welcome to HTMLOCK "+Userlogado+" !")
        const Sair = document.querySelector("#sair");
        Sair.style.display ="block";
    }
}

function start(){
    location.href = "../html/sala1.html";
}

function sair(){
    localStorage.removeItem("UserLogado");
    alert("You are offline now !");
    ifLogin();
}

function toRank(){
    const rankbtn = document.getElementById('rank');
    rankbtn.onclick = location.href = "../html/rank.html";
}

ifAdmin()
ifLogin()