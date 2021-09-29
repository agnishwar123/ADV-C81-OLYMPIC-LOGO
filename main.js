canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.rect(170, 170, 450, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 4;
ctx.arc(260, 260, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 4;
ctx.arc(390, 260, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4;
ctx.arc(520, 260, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "#ffbb00";
ctx.lineWidth= 4;
ctx.arc(325, 325, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 4;
ctx.arc(455, 325, 60, 0, 2 * Math.PI);
ctx.stroke();