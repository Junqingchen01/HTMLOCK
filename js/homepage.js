const Userlogado = localStorage.getItem("UserLogado");

function ifAdmin(){
    if (Userlogado === 'Admin'){
        const GerirAluno = document.querySelector("#GerirAluno");
        const GerirER = document.querySelector("#GerirER");
        GerirAluno.style.display = "block";
        GerirER.style.display = "block";
    }else{}
}


function ifLogin(){
    if(!Userlogado){
        alert("You should login frist !");
        location.href = "../html/login.html";
    }
    else{
        alert("Welcome to HTMLOCK!")
        const Sair = document.querySelector("#sair");
        Sair.style.display ="block";
    }
}

ifAdmin()
ifLogin()