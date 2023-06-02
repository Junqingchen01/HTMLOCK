class UserManager {
  constructor() {
    this.users = [
      {
        nome: "Chen",
        username: "User",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 0,
      },
      {
        nome: "Admin",
        username: "Admin",
        password: "admin",
        dataNascimento: "2000-0-0",
        sexo: "M",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 0,
      },
      {
        nome: "Manu",
        username: "user2",
        password: "user",
        dataNascimento: "2000-0-0",
        sexo: "F",
        localidade: "vila do conde",
        email: "123456789@gmail.com",
        tempofalta: 0,
      },
    ];
  }

  login(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        localStorage.setItem("UserLogado", this.users[i].nome);
        alert("Login successful!");
        location.href = "../html/homepage.html";
        return;
      }
    }
    alert("Invalid username or password. Please try again.");
  }

  addUser(user) {
    this.users.push(user);
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





