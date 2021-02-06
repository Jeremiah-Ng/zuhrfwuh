canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background="racing.jpg";
var roverio="car1.png";
var car2="yeet.png"
var x=20;
var y=20;
var rover_width=200;
var rover_height=100;
var car2h=200;
var car2w=100;
var x1=20
var y1=100
function add(){
    console.log("aedgs")
   bkobject=new Image();
   bkobject.onload=uploadBackground;
   bkobject.src=background;
   roverobject=new Image();
   roverobject.onload=uploadrover;
   roverobject.src=roverio;
     car2ob=new Image();
   car2ob.onload=carupload;
   car2ob.src=car2;
}
function uploadBackground(){
    ctx.drawImage(bkobject,0,0, canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverobject,x,y, rover_width,rover_height);
}
function carupload(){
    ctx.drawImage(car2ob,x1,y1, car2h, car2w)
}
window.addEventListener('keydown',keyd);
function keyd(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed==37){
        left();
    }
    if(keypressed==38){
        up();
    }
    if(keypressed==39){
        right();
    }
    if(keypressed==40){
        down();
    }
}
function left(){
   if(x>=0){
    x=x-10
    uploadBackground();
    uploadrover();
       carupload();
   }
}
function right(){
    if(x<=700){
     x=x+10
     uploadBackground();
     uploadrover();
        carupload();
    }
 }
 function up(){
    if(y>=0){
     y=y-10
     uploadBackground();
     uploadrover();
        carupload();
    }
 }
 function down(){
    if(y<=490){
     y=y+10
     uploadBackground();
     uploadrover();
        carupload();
    }
 }
window.addEventListener('keydown',keyd1);
function keyd1(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed==65){
        left1();
    }
    if(keypressed==87){
        up1();
    }
    if(keypressed==68){
        right1();
    }
    if(keypressed==83){
        down1();
    }
}
function left1(){
   if(x1>=0){
    x1=x1-10
    uploadBackground();
    carupload();
        uploadrover();
   }
}
function right1(){
    if(x1<=700){
     x1=x1+10
     uploadBackground();
     carupload();
         uploadrover();
    }
 }
 function up1(){
    if(y1>=0){
     y1=y1-10
     uploadBackground();
     carupload();
         uploadrover();
    }
 }
 function down1(){
    if(y1<=490){
     y1=y1+10
     uploadBackground();
     carupload();
         uploadrover();
    }
 }