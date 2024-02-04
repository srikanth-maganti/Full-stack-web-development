let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
   let item=document.createElement("li");
   item.innerText=inp.value;
   let del=document.createElement("button");
   del.innerText="del";
   del.classList.add("del");
    item.appendChild(del);
   ul.appendChild(item); 
   // ul.innerHTML=`${ul.innerHTML}<li>${inp.value}</li>`;
    inp.value="";

});

//event delegation
ul.addEventListener("click",function(event)
{
    console.log(event.target);
    if(event.target.nodeName==="BUTTON")
    {
        let item=event.target.parentElement;
        item.remove();
    }
});
/*
let bb=document.querySelectorAll(".del");
for(b of bb)
{
    b.addEventListener("click",function()
    {
        let parent=this.parentElement;
        parent.remove();

    });
}*/


