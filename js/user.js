export class UserManager {
  #nome;#username;#password;#dataNascimento;#sexo;#localidade;#email;#tempofalta;

  constructor(nome,username,password,dataNascimento,sexo,localidade,email,tempofalta) {
    this.nome=nome;
    this.username=username;
    this.password=password;
    this.dataNascimento=dataNascimento;
    this.sexo=sexo;
    this.localidade=localidade;
    this.email=email;
    this.tempofalta=tempofalta;

    this.users = [
      {
        nome: "Chen",
        username: "User",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 5,
      },
      {
        nome: "Admin",
        username: "Admin",
        password: "admin",
        dataNascimento: "2000-0-0",
        sexo: "M",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 1,
      },
      {
        nome: "Manu",
        username: "user2",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 2,
      },
    ];
  }

  login(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        
        localStorage.setItem("UserInfo", JSON.stringify(this.users[i]));
        localStorage.setItem("UserLogado", this.users[i].nome);

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