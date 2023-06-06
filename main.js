

 var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",My_mousedown);


function My_mousedown(e)
{
   var color=document.getElementById("color");
    width_of_line=document.getElementById("width_of_line");

    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseleave",my_mouseleave);

    function my_mouseleave(e)    
{
    mouseEvent="mouseleave";

}
canvas.addEventListener("mouseup",my_mouseup);

    function my_mouseup(e)    
{
    mouseEvent="mouseUP"
    } 
    canvas.addEventListener("mousemove",my_mousemove);

    function my_mousemove(e)    
{
    current_position_of_mouse_x=e
}
