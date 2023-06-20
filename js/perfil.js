//获取登入用户的数据
const userInfo = JSON.parse(localStorage.getItem("UserInfo"));

const table = document.getElementById("perfilTable");

for (let i in userInfo) {
  //用for循环记录所有用户资料里的名称和对应的value（比如nome：chen 对应的是 名称：value）
  const tr = document.createElement("tr");

  const td = document.createElement("td");
  //i是当前名称
  td.textContent = i;
  tr.appendChild(td);
  //当前i对应的value
  const value = document.createElement("td");
  value.textContent = userInfo[i];
  tr.appendChild(value);
  //添加到table
  table.appendChild(tr);
}


// 按钮
const toEditarbtn = document.getElementById('editar');
toEditarbtn.addEventListener("click",()=>{
  location.href='editarPerfil.html'
})


const rankbtn = document.getElementById('rank');
rankbtn.addEventListener("click",()=>{
    location.href='rank.html';
});

const homepagebtn = document.getElementById('Homepage');
homepagebtn.addEventListener("click",()=>{
    location.href='homepage.html';
});