import { UserManager } from './user.js';

const userManager = new UserManager();

const Loginbtn = document.getElementById('Loginbtn')
Loginbtn.onclick = Login;

function Login() {
  const username = document.getElementById("usernamelogin").value;
  const password = document.getElementById("passwordlogin").value;
  userManager.login(username, password);
}

function register(){

}