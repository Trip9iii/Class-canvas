var mouseEvent="empty";
lastpositionofx = 0;
lastpositionofy = 0;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseUP";
}
var color = "blue";
var width = 5;

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;


console.log("last position of x = "+ lastpositionofx);
console.log("last position of y =" + lastpositionofy);
ctx.moveTo( lastpositionofx, lastpositionofy );
console.log("current position of x = "+current_position_of_mouse_x );
console.log("current position of y =" + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y );
ctx.stroke();
}
lastpositionofx = current_position_of_mouse_x;
lastpositionofy = current_position_of_mouse_y;
}