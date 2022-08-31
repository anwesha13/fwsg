canvas 
document.getElementById("my canvas");
ctx= canvas.getcontext("2d");

ctx.beginPath();
ctx.strokestyle= "red";
ctx.linewidth =1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "blue";
ctx.linewidth =5;
ctx.arc(150, 143, 430, 200);
ctx.stroke(250, 210, 40, 0, 2 * Math.PI);
