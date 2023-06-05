import { UserManager } from './user.js';

const userManager = new UserManager();
const users = userManager.users;

users.sort((a, b) => b.tempofalta - a.tempofalta);

const rankList = document.getElementById('rankList');

users.forEach(user => {
  const li = document.createElement('li');
  li.textContent = `NOME:  ${user.nome},    TEMPO FALTA: ${user.tempofalta}`;
  rankList.appendChild(li);
});