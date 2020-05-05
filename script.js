// 設定球的座標變量
var ball_x = 0;
var ball_y = 0;

// 設定滑鼠的座標變量
var mouse_x = 0;
var mouse_y = 0;

//設定速度的變量
var vel_x = 0;
var vel_y = 0;


//設定常量 - 整個網頁．網頁元素．CSS的樣式
const docStyle = document.documentElement.style;
const strength = 0.15;
const drag = 0.15;

//設定觀察器 - 追蹤滑鼠座標．追蹤後要執行的動作 (取得滑鼠的XY座標)
document.addEventListener("mousemove", (event) => {

  mouse_x = event.clientX;
  mouse_y = event.clientY;

})

//設定方法 球座標 = 滑鼠座標
function followMotion() {

  //設定 距離 = 滑鼠座標 - 球座標
  var distance_x = mouse_x - ball_x;
  distance_x *= strength;
  vel_x *= drag;
  vel_x += distance_x

  ball_x += vel_x;

  // console.log("distance_x:", distance_x);
  // console.log("mouse_x:", mouse_x);
  // console.log("ball_x:", ball_x);


  var distance_y = mouse_y - ball_y;
  distance_y *= strength;
  vel_y *= drag;
  vel_y += distance_y;

  ball_y += vel_y;

  //設定 球座標 = CSS裡的滑鼠座標變量
  docStyle.setProperty("--mouse_x", ball_x);
  docStyle.setProperty("--mouse_y", ball_y);

  docStyle.setProperty("--scale", (vel_x + vel_y) * strength);



  //設定持續更新座標的方法
  requestAnimationFrame(followMotion);

}

//執行跟隨方法
followMotion();
