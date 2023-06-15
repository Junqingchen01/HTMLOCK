import { UserManager } from './user.js';

const userManager = new UserManager();

const registerbtn = document.getElementById('registerbtn');
registerbtn.onclick = register;

function register() {
  // 获取html里用户输入的value
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

  // 检查用户是否已经存在
  const userExists = userManager.users.some(ExistUser => ExistUser.username === username);
  if (userExists) {
    alert("Neste username ja exist!!");
    return;
  } else {
    // 获取已存在的NewUser组数据
    let ExistNewUser = localStorage.getItem("NewUser");
    if (ExistNewUser) {
      ExistNewUser = JSON.parse(ExistNewUser);
      // 检查NewUser组是否存在具有相同用户名的用户
      const newUserExists = ExistNewUser.some(ExistUser => ExistUser.username === username);
      if (newUserExists) {
        alert("Neste username ja exist!!");
        return;
      }
    } else {
      ExistNewUser = [];
    }

    // 将新用户添加到NewUser组中
    ExistNewUser.push(user);
    localStorage.setItem("NewUser", JSON.stringify(ExistNewUser));

  

    userManager.addUser(user);
  }
}
