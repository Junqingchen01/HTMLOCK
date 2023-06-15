export class UserManager {
  #nome;#username;#password;#dataNascimento;#sexo;#localidade;#email;#timewin;

  constructor(nome,username,password,dataNascimento,sexo,localidade,email,timewin) {
    this.nome=nome;
    this.username=username;
    this.password=password;
    this.dataNascimento=dataNascimento;
    this.sexo=sexo;
    this.localidade=localidade;
    this.email=email;
    this.timewin=timewin;

    this.users = [
      {
        nome: "Chen",
        username: "User",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        timewin: 5,
      },
      {
        nome: "Admin",
        username: "Admin",
        password: "admin",
        dataNascimento: "2000-0-0",
        sexo: "M",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        timewin: 1,
      },
      {
        nome: "Manu",
        username: "User2",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        timewin: 2,
      },
    ];
  }

  login(username, password) {
    const userManager = new UserManager();
    //先检查localstrong的NewUser里面是否有该用户
    let ExistNewUser = localStorage.getItem("NewUser");
    if (ExistNewUser) {
      ExistNewUser = JSON.parse(ExistNewUser);
      const newUserExists = ExistNewUser.find((ExistUser) => ExistUser.username === username && ExistUser.password === password);
      if (newUserExists) {
        // 登录成功后记录用户信息
        localStorage.setItem("UserInfo", JSON.stringify(newUserExists));

        localStorage.setItem("UserLogado", newUserExists.nome);

         // 获取users类中所有用户的nome列表
        const userList = userManager.users.map(user => user.nome);

        // 获取NewUser组中所有用户的nome列表
        const newUsersList = ExistNewUser.map((newUserExists) => newUserExists.nome);

        // 合并users类和NewUser组的nome列表
        const usersLista = userList.concat(newUsersList);

        localStorage.setItem("usersLista", JSON.stringify(usersLista));

        alert("Login successful!");
        location.href = "../html/homepage.html";
        return;
      }
    }
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username && this.users[i].password === password
      ) {
        //登入后记录登入用户的信息
        localStorage.setItem("UserInfo", JSON.stringify(this.users[i]));

        //记入登入用户的名字
        localStorage.setItem("UserLogado", this.users[i].nome);
        // 获取users类中所有用户的nome列表
        const userList = userManager.users.map(user => user.nome);

        // 获取NewUser组中所有用户的nome列表
        let newUserExists = localStorage.getItem("NewUser");
        const newUsersList = newUserExists.map(newUser => newUser.nome);

        // 合并users类和NewUser组的nome列表
        const usersLista = userList.concat(newUsersList);

        localStorage.setItem("usersLista", JSON.stringify(usersLista));
        alert("Login successful!");
        location.href = "../html/homepage.html";
        return;
      }
    }
    alert("Erro no nome e na password, tenta de novo!");
  }

  addUser(user) {
    const username = user.username;
    // 检查是否存在具有相同用户名的用户
    const userExists = this.users.some((existingUser) => existingUser.username === username);
    if (userExists) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    // 用户名不存在，将新用户添加到用户数组中
    this.users.push(user);
    alert("Register successful!");
    location.href = "../html/login.html";
  }

  removeUser(username) {
    const index = this.users.findIndex((user) => user.username === username);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${username} removido.`);
    } else {
      console.log(`User ${username} nao encontrado.`);
    }
  }
}


function Login(){
  UserManager.login()
}