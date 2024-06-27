let div1=document.querySelector(".div1");
let div2=document.querySelector(".div2");
let div3=document.querySelector(".div3");
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
let p3=document.querySelector(".p3");


div1.addEventListener("click",()=>{
    changecolor(div1);
});
div2.addEventListener("click",()=>{
    changecolor(div2);
});
div3.addEventListener("click",()=>{
    changecolor(div3);
});

function changecolor(div)
{  
    let body=document.querySelector("body");
    
    body.style.backgroundColor=div.style.backgroundColor;
}


function randomcolor()
{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}


let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let color1=randomcolor();
    div1.style.backgroundColor=color1;
    p1.innerHTML=`<b>${color1}</b>`;

    let color2=randomcolor();
    div2.style.backgroundColor=color2;
    p2.innerHTML=`<b>${color2}</b>`;

    let color3=randomcolor();
    div3.style.backgroundColor=color3;
    p3.innerHTML=`<b>${color3}</b>`;

})