let p=document.createElement("p");
let body=document.querySelector("body");
body.appendChild(p);
p.append("HEy im red");
p.style.color="red";



let h3=document.createElement("h3");
body.appendChild(h3);
h3.innerText="i m a blue h3";
h3.style.color="blue";


let div=document.createElement("div");
body.appendChild(div);
div.classList.add("css");

let h1=document.createElement("h1");
let p2=document.createElement("p");

div.append(h1);
div.append(p2);

h1.innerText="im in a div";
p2.innerText="mee too"; 