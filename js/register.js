import { UserManager } from './user.js';

const userManager = new UserManager();

const registerbtn = document.getElementById('registerbtn');
registerbtn.onclick = register;

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("DataNascimento").value;
  const sexo = document.getElementById("sexo").value;
  const localidade = document.getElementById("localidade").value;
  const email = document.getElementById("email").value;
  const tempofalta = 0;

  const user = {
    nome: nome,
    username: username,
    password: password,
    dataNascimento: dataNascimento,
    sexo: sexo,
    localidade: localidade,
    email: email,
    tempofalta: tempofalta,
};

  userManager.addUser(user);
  console.log(userManager.users.map(user => user.nome));
  
  const nomelista = userManager.users.map(user => user.nome);
  localStorage.setItem("usersLista", JSON.stringify(nomelista));
}
