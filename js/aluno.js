
const Users = [
    {
      nome:"Chen",
      username:"User",
      password:"user",
      dataNascimento:"2000-0-0",
      sex0:"F",
      locallidade:"vila do conde",
      emial:"123456789@gmail.com"
    },
    {
        nome:"Admin",
        username:"Admin",
        password:"admin",
        dataNascimento:"2000-0-0",
        sex0:"M",
        locallidade:"vila do conde",
        emial:"123456789@gmail.com"
    },
    {
        nome:"Manu",
        username:"user2",
        password:"user",
        dataNascimento:"2000-0-0",
        sex0:"F",
        locallidade:"vila do conde",
        emial:"123456789@gmail.com"
    }
  ];
  
  let User


  function Login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for (let i = 0; i < Users.length; i++) {
      if (Users[i].username === username && Users[i].password === password) {
        localStorage.setItem("UserLogado", Users[i].nome);
        alert("Login successful!");
        location.href='../html/homepage.html'
        return;
        
      }
    } alert("Invalid username or password. Please try again.");
  }