
//selection

//getElementById
let x=document.getElementById("mainImg");
console.log(x.src);
x.src="Assets/Man.png";
console.log(x.src);

console.log(document.getElementById("abc"));//null

//getElementsByClassName

let y=document.getElementsByClassName("oldimg");
for(let i=0;i<y.length;i++)
{
    y[i].src="Assets/Man.png";
    console.log("image chnged")
}


//getElementsByTagName

let z=document.getElementsByTagName("p");
z[1].innerText="abc";


console.log(document.getElementsByTagName("span"));//empty collection


//querySelector

console.dir(document.querySelector("p"));

console.dir(document.querySelector(".description"));

console.dir(document.querySelectorAll("div a"));



//content properties

let para=document.getElementById("spidy");
console.log(para.innerText);//visible text

console.log(para.innerHTML);//entire markup

console.log(para.textContent);//text as index.html



para.innerText="srikanth";
para.innerHTML="<b>srikanth</b>";

let t=document.querySelector("h1");
t.innerHTML="SPiderman";

t.innerHTML=`<u>${t.innerText}</u>`;

//getAttribute and setAttribute
let img=document.querySelector("img");
console.log(img.getAttribute("id"));
console.log(img.getAttribute("class"));

img.setAttribute("id","spidy");
img.setAttribute("class","spidy");


console.log(img.getAttribute("src"));
img.setAttribute("src","Assets/Amazing_Fantasy.jpg"); 


//manipulating style
let a=document.querySelectorAll("a");
console.log(a);

for(link of a)
{
    link.style.color="pink";//inline mode

}


let heading=document.querySelector("h1");
heading.style.color="red";
heading.style.backgroundColor="black";


let head2=document.querySelector("h2");
console.log(head2.style);




//classlist

let h2=document.querySelector("#gre");
h2.classList.add("yellow");
h2.classList.add("underline");

h2.classList.remove("yellow");

console.log(h2.classList.contains("yellow"));
console.log(h2.classList.contains("underline"));


console.log(h2.classList.toggle("yellow"));
console.log(h2.classList.toggle("yellow"));

let box=document.getElementsByClassName("pubInfo");
box[0].classList.add("yellowbg");
console.log(box[0].classList);


//navigation
let h4=document.querySelector("h4");
console.log(h4.parent);

let div=document.querySelector("div");
console.log(div.children);

let ul=document.querySelector("ul");
console.log(ul.children[1].previousElementSibling);

console.log(ul.children[1].nextElementSibling);


let i=document.querySelector("img");
i.previousElementSibling.style.color="green";



//creating elements using javascript
let parag=document.createElement("p");
console.dir(parag);
parag.innerText="hello rgukt";
let body=document.querySelector("body");
let boxer=document.querySelector(".pubInfo");
body.appendChild(parag);


let para2=document.createElement("p");
para2.innerText="srikatnh";
boxer.appendChild(parag);

let btn=document.createElement("button");
btn.innerText="clickme";

parag.append(btn);
parag.append("dont click");

boxer.prepend(parag);


let newbtn=document.createElement("button");
let p=document.querySelector("p");
newbtn.append("hi");
p.insertAdjacentElement("beforebegin",newbtn);
p.insertAdjacentElement("afterbegin",newbtn);
p.insertAdjacentElement("beforeend",newbtn);
//p.insertAdjacentElement("afterend",newbtn);



//removing elements
boxer.removeChild(parag);

newbtn.remove();






