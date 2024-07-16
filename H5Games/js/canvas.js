// 导入元素
const  main = document.getElementsByTagName("main");
const canvas_study = document.getElementById("canvas_study");

// 建立画布
const ctx = canvas_study.getContext("2d");

// 获取画布高度和宽度
const canvas_width = canvas_study.width = main[0].clientWidth; // 获取与main一样的宽度
const canvas_height = canvas_study.height = main[0].clientHeight; // 获取与main一样的高度

// 获取动画图像
const playerImage = new Image();
playerImage.src = "./img/shadow_dog.png";

// 角色图片高度和宽度
const sprite_width = 575; // 角色在大图中的宽度
const sprite_height = 523; // 角色在大图中的高度

// 函数用变量
let count_x = 0; // 用于播放动画
let count_y = 3; // 决定角色动作
let sx = 0;
let sy = 0;
function  animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height); // 重置画布

    ctx.drawImage(playerImage, // 角色图片
        count_x * sprite_width,count_y * sprite_height,sprite_width,sprite_height, // source 图片源位置 也就是指当前要裁剪的矩形区域
        0,0,canvas_width,canvas_height); // destination 图片目标 大图片，用于裁剪

    count_x++;
    if(count_x == 9) count_x = 0;

    requestAnimationFrame(animate);
};
animate();
