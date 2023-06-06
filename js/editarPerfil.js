function save() {
    const nome = document.getElementById("nome").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;
    const localidade = document.getElementById("localidade").value;
    const email = document.getElementById("email").value;


    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    userInfo.nome = nome;
    userInfo.username = username;
    userInfo.password = password;
    userInfo.dataNascimento = dataNascimento;
    userInfo.sexo = sexo;
    userInfo.localidade = localidade;
    userInfo.email = email;
    
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
  
    alert("save succes!!");
}