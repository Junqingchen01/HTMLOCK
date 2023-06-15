//结束页面，计算用户赢了多少时间

let timewin1 = localStorage.getItem("timeWin1");
let timewin2 = localStorage.getItem("timeWin2");
let timewin3 = localStorage.getItem("timeWin3");

console.log(timewin1, timewin2, timewin3);

//如果记录里没有第二个房间的时间，那么说明用户没有进入第二个房间，直接选择了第三个房间。那么第二个房间赢的时间直接设置为200.
if (!timewin2) {
  const timesala2 = 200;
  //localStorage里记录的值转换为数字模式
  timewin2 = parseInt(timesala2);
  console.log(timewin2);}

const alltimewin = parseInt(timewin1) + parseInt(timewin2) + parseInt(timewin3);
console.log(alltimewin);

//在登入的用户资料里修改 胜利的时间
const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
userInfo.timewin = alltimewin;
localStorage.setItem("UserInfo", JSON.stringify(userInfo));
alert(`Congratulations on passing! your grades ${alltimewin} is credit to profile!`)

//按钮，用来检查个人资料里的时间是否被修改
const perfilbtn = document.getElementById('goPerfil');
perfilbtn.addEventListener("click",()=>{
    location.href='perfil.html';
});