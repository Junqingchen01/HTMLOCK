import { UserManager } from './user.js';

//从user里导入数据
const userManager = new UserManager();
let users = userManager.users;

//从localstrong里的NewUser里导入数据
let newUsers = JSON.parse(localStorage.getItem('NewUser'));
if (newUsers && newUsers.length > 0) {
  users = users.concat(newUsers);
}

// 从localStorage获取当前用户的信息
const Userlogado = JSON.parse(localStorage.getItem('UserInfo'));
const UserlogadoTimewin = Userlogado ? Userlogado.timewin : 0;

// 在 users 数组中更新用户的 timewin
users.forEach(user => {
  if (user.nome === Userlogado.nome) {
    user.timewin = UserlogadoTimewin;
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
  li.innerHTML = `Rank ${index + 1}: <span class="timewin"> ${user.nome}</span> PONTOS GANHOS: <span class="timewin">${user.timewin}</span> S.`;
  rankList.appendChild(li);
});