let inp=document.querySelector("input");

//change event
inp.addEventListener("change",function(){
    console.log(inp.value);
    console.log("change event triggerd");
});


//input event
inp.addEventListener("input",function()
{
    console.log("input event triggered");
    console.log(inp.value);
});


let text=document.querySelector("#text");
let p=document.querySelector("p");

text.addEventListener("input",function()
{
    console.log(text.value);
    p.innerText=text.value;
})