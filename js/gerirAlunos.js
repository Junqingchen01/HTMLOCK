import { UserManager } from './user.js';

const userManager = new UserManager();

// 获取所有用户信息
const users = userManager.users;

// 获取表格元素
const table = document.querySelector('table');

// 创建表格内容
const tbody = document.createElement('tbody');
users.forEach((user) => {
  
    //创建tr，
  const tr = document.createElement('tr');
    //创建内容命名
  const tdNome = document.createElement('td');
    //为命名插入内容
  tdNome.textContent = user.nome;
    //插入tr
  tr.appendChild(tdNome);

  const tdDataNascimento = document.createElement('td');
  tdDataNascimento.textContent = user.dataNascimento;
  tr.appendChild(tdDataNascimento);

  const tdSexo = document.createElement('td');
  tdSexo.textContent = user.sexo;
  tr.appendChild(tdSexo);

  const tdLocalidade = document.createElement('td');
  tdLocalidade.textContent = user.localidade;
  tr.appendChild(tdLocalidade);

  const tdEmail = document.createElement('td');
  tdEmail.textContent = user.email;
  tr.appendChild(tdEmail);

  //按钮
  const tdButton = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', () => {
    userManager.removeUser(user.username);
    tr.remove();

  const usersLista = JSON.parse(localStorage.getItem("usersLista"));
  const updatedUsersLista = usersLista.filter((nome) => nome !== user.nome);
  localStorage.setItem("usersLista", JSON.stringify(updatedUsersLista));
  
  });
  tdButton.appendChild(removeButton);
  tr.appendChild(tdButton);

  tbody.appendChild(tr);
});

// 将表格内容添加到表格中
table.appendChild(tbody);