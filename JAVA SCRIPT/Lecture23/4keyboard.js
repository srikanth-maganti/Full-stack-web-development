let btn=document.querySelector("button");
/*btn.addEventListener("click",function(event){
    console.dir(event);
    console.log('clicked');
});*/



//keyboard events
let inp=document.querySelector("input");
/*inp.addEventListener("keydown",function()
{
    console.log("key downed");
});

inp.addEventListener("keyup",function()
{
    console.log("key up");
});*/


//event object

/*inp.addEventListener("keypress",function(event)
{   console.dir(event);
    console.log(event.key);
    console.log(event.code);
    console.log("key pressed");
});*/

inp.addEventListener("keydown",function(event)
{
    console.log(event.code);
    if(event.code=="ArrowUp")
    {
        console.log("char moved upwards");
    }
    else if(event.code=="ArrowDown")
    {
        console.log("char moved downwards");
    }
});


