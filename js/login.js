import { UserManager } from './user.js';
// 登入效果，具体在user，js里
const userManager =  new UserManager();

const Loginbtn = document.getElementById('Loginbtn')
Loginbtn.onclick = Login;

function Login() {
  const username = document.getElementById("usernamelogin").value;
  const password = document.getElementById("passwordlogin").value;
  userManager.login(username, password);
}

