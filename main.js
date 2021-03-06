canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouse_event = "Empty" ;
var last_position_x,last_position_y;

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
    
 color = document.getElementById("color").value;
 width_of_line = document.getElementById("width").value;
 radius = document.getElementById("radiu").value;
 mouse_event = "mousedown";
}
canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
current_position_of_x = e.clientX - canvas.offsetLeft;
current_position_of_y = e.clientY - canvas.offsetTop;
 
if (mouse_event == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_x,current_position_of_y, 40 , 0 ,2 * Math.PI);

ctx.stroke();
}
canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
mouse_event = "mouseleave";
}

}
