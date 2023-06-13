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
        username: "user2",
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
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        //登入后记录登入用户的信息
        localStorage.setItem("UserInfo", JSON.stringify(this.users[i]));

        //记入登入用户的名字
        localStorage.setItem("UserLogado", this.users[i].nome);
        
        //记录所有在class里的用户名字
        const nomelista = this.users.map(user => user.nome);
        localStorage.setItem("usersLista", JSON.stringify(nomelista));

        alert("Login successful!");
        location.href = "../html/homepage.html";
        return;
      }
    }
    alert("Invalid username or password. Please try again.");
  }

  addUser(user) {
    this.users.push(user);
    alert("register successful!");
  }

  removeUser(username) {
    const index = this.users.findIndex((user) => user.username === username);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${username} removed successfully.`);
    } else {
      console.log(`User ${username} not found.`);
    }
  }
}


function Login(){
  UserManager.login()
}