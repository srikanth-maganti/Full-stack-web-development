let inp=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("mouseout",function()
{
    console.log("mouse outt");
});

inp.addEventListener("keypress",function()
{
    console.log("keypressss");
});


//load
let p=document.querySelector("p");
window.addEventListener("load",()=>{
    p.innerText="html";
}
);


//scroll
document.addEventListener("scroll",()=>{
    console.log("scrolled");
});

//create a button on the page using javascript .add an event listerner ti the botton that changes the button's color to green when it is clicked
btn.addEventListener('click',function()
{
    btn.style.backgroundColor="green";
});


/*Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading*/

nam=document.querySelector("#name");
h2=document.querySelector('h2');
nam.addEventListener("input",function(event)
{   console.log(nam.value);
    if((nam.value>="a" && nam.value<="z") ||( nam.value>="A" && nam.value<="Z"))
    {
        h2.innerText=nam.value;
    }
});