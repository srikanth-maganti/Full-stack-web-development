//1.create a new input and button element on the pade using javascript only.set the text
let input=document.createElement("input");
let btn=document.createElement("button");

btn.innerText="clickme";
let body=document.querySelector("body");

body.append(input);
body.append(btn);



//add following atteributees to the element:
//  change placehoder value of input to username
//chanfe the id of button to btn

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");


//access the btn using the queryselector and button id.change the button background color to blue and the text color to white

let b=document.querySelector("#btn");
b.style.color="white";
b.style.backgroundColor="blue";


//create an h1 element on the page ab=nd set its text to domprac underlined.change its color to purple
let h1=document.createElement("h1");
body.append(h1);
h1.innerText="dom prac";
h1.style.color="purple";
h1.style.textDecoration="underline";


//create a p tag on the page and set its text to apna collegedelta practice whre delta is bold
let p=document.createElement("p");
p.innerHTML="apna college <b> delta </b> practice";
body.append(p);
