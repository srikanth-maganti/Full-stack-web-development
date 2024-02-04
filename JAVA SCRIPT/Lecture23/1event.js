let btn1=document.querySelector("button");
function sayhello()
{
    alert("hello");
}
btn1.onclick=sayhello;
function sayname()
{
    alert("sayname");
}
let btns=document.querySelectorAll("button"); 
for(btn of btns)
{
    /*btn.onclick=sayhello;
    btn.onmouseenter=function()
    {
        console.log("mouse entered");
    };*/

    /*btn.onclick=sayhello;
    btn.onclick=sayname;*/

  /*  btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);
*/
    btn.addEventListener("dblclick",function()
    {
        console.log("double clicked");
    });

}


//event listener for elements
let p=document.querySelector("p");
p.addEventListener("click",()=>
{
    console.log("hello");
});

let div=document.querySelector("div");
div.addEventListener("mouseenter",function(){
    div.style.backgroundColor="yellow";
})




