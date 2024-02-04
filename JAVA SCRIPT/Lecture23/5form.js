/*let form=document.querySelector("form");
form.addEventListener("submit",function(event)
{   event.preventDefault();
    alert("form sumitted successfully");
});*/

let form=document.querySelector('form');
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let user=this.elements[0];
    let pass=document.querySelector('#pass');
    console.log(user.value);
    console.log(pass.value);
});