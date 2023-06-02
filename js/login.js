
import UserManager from './user.js';

const userManager =  UserManager(Users);

function Login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    userManager.login(username, password);
  }