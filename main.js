var mouse_event = "empty";
var last_poz_of_x, last_poz_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var width_of_line = 2;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_poz_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_poz_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("x=" + last_poz_of_x + "y=" + last_poz_of_y);
        ctx.moveTo(last_poz_of_x, last_poz_of_y);
        console.log("x=" + current_poz_of_mouse_x + "y=" + current_poz_of_mouse_y);
        ctx.lineTo(current_poz_of_mouse_x, current_poz_of_mouse_y);
        ctx.stoke();
    }
    last_poz_of_x = current_poz_of_mouse_x;
    last_poz_of_y = current_poz_of_mouse_y;
}