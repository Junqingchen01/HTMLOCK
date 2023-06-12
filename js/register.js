import { UserManager } from './user.js';

const userManager = new UserManager();

const registerbtn = document.getElementById('registerbtn');
registerbtn.onclick = register;

function register() {
  //获取html里用户输入的value
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("DataNascimento").value;
  const sexo = document.getElementById("sexo").value;
  const localidade = document.getElementById("localidade").value;
  const email = document.getElementById("email").value;
  const timewin = 0;

  const user = {
    nome: nome,
    username: username,
    password: password,
    dataNascimento: dataNascimento,
    sexo: sexo,
    localidade: localidade,
    email: email,
    timewin: timewin,
};
  //用localStorage列出所有用户，当新用户注册成功后，新用户的名字会添加到localStorage里
  userManager.addUser(user);
  console.log(userManager.users.map(user => user.nome));
  
  const nomelista = userManager.users.map(user => user.nome);
  localStorage.setItem("usersLista", JSON.stringify(nomelista));
}
