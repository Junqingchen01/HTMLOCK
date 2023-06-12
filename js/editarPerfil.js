// 修改用户资料。
function save() {
    //获取html里用户输入的value
    const nome = document.getElementById("nome").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;
    const localidade = document.getElementById("localidade").value;
    const email = document.getElementById("email").value;

    //从LocalStoringe里获取登入的用户资料并且设置对应的value
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    userInfo.nome = nome;
    userInfo.username = username;
    userInfo.password = password;
    userInfo.dataNascimento = dataNascimento;
    userInfo.sexo = sexo;
    userInfo.localidade = localidade;
    userInfo.email = email;
    
    //如果用户输入了所有的资料，就可以更改。
    if(nome,username,password,dataNascimento,sexo,localidade,email){
        //新资料保存在localStrage里。
        localStorage.setItem("UserInfo", JSON.stringify(userInfo));
        alert("save succes!!");
    }else{
        //如果没有输入所有的资料，就不能修改
        alert('save insucces!')
        return
    }
    
}