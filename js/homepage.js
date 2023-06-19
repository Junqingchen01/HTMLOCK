//读取登入的用户休息
let Userlogado = localStorage.getItem("UserLogado");

//确认登入的用户是否是admin
function ifAdmin(){
    if (Userlogado === 'Admin'){
        const GerirAluno = document.querySelector("#GerirAluno");
        const GerirER = document.querySelector("#GerirER");
        GerirAluno.style.display = "block";
        GerirER.style.display = "block";
    }
}

//确认登入了没有
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

//按钮
function start(){
    location.href = "../html/sala1.html";
}

function sair(){
    //用户退出后会将localstorege里 已登入 的记录移除，变为没有登入状态。
    localStorage.clear()
    alert("You are offline now !");
    ifLogin();
}

function toRank(){
    const rankbtn = document.getElementById('rank');
    rankbtn.onclick = location.href = "../html/rank.html";
}

function toPerfil(){
    location.href = "../html/perfil.html";
}

function toGerir(){
    location.href = "../html/gerirAluno.html";
}



ifAdmin()
ifLogin()