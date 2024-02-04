let h1=document.querySelector("h1");
let p=document.querySelector("p");
let btn=document.querySelector("button");


function change()
{
    this.style.backgroundColor="blue";
}

 h1.addEventListener("click",change);
 p.addEventListener("click",change);
 btn.addEventListener("click",change);
