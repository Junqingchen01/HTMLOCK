import { UserManager } from './user.js';

const userManager = new UserManager();
const users = userManager.users;

// 从localStorage获取当前用户的信息
const currentUser = JSON.parse(localStorage.getItem('UserInfo'));
const currentUserTimewin = currentUser ? currentUser.timewin : 0;

// 在 users 数组中更新用户的 timewin
users.forEach(user => {
  if (user.nome === currentUser.nome) {
    user.timewin = currentUserTimewin;
  }
});

// 根据timewin对用户进行降序排序
users.sort((a, b) => b.timewin - a.timewin);

const rankList = document.getElementById('rankList');
 // 清空之前的排行榜内容
rankList.innerHTML = '';

// 实现效果
users.forEach((user, index) => {
  const li = document.createElement('li');
  li.textContent = `Rank ${index + 1}: NOME: ${user.nome}, TEMPO GANHA: ${user.timewin} S.`;
  rankList.appendChild(li);
});