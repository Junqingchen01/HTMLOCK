const userInfo = JSON.parse(localStorage.getItem("UserInfo"));

const table = document.getElementById("perfilTable");

for (let i in userInfo) {
  const row = document.createElement("tr");

  const info = document.createElement("td");
  info.textContent = i;
  row.appendChild(info);

  const value = document.createElement("td");
  value.textContent = userInfo[i];
  row.appendChild(value);

  table.appendChild(row);
}


const toEditarbtn = document.getElementById('editar');
toEditarbtn.onclick = toEditar

function toEditar(){
    location.href='editarPerfil.html'
}