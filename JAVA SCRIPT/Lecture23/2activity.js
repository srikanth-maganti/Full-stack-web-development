 let btn=document.querySelector("button");
 btn.addEventListener("click",change);

 function getrandomcolor()
 {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
 }
 function change()
 {  let h1=document.querySelector("h1");
    let randomcolor=getrandomcolor();
    h1.innerText=randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
 }