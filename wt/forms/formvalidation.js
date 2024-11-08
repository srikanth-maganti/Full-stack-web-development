
function checkname()
{
    let name=document.querySelector("#name");
    let  name1=name.value;
    let name_pattern=/[A-Z][a-z]*/g;
    let result=name1.match(name_pattern);
    if(result!=name1||name1.length<1)
    {  console.log("heloo");
        changecolor(name);
        name.value="";
    }

}

function checkpass()
{
    let pass1=document.querySelector("#pass");
let pass=pass1.value;
   let pass_pat1=/[A-Z]/;
   let pass_pat2=/[a-z]/;
   let pass_pat3=/\d/;
   let pass_pat4=/\w/;
   let pass_pat5=/\W/;
   let m1=pass.match(pass_pat1);
   let m2=pass.match(pass_pat2);
   let m3=pass.match(pass_pat3);
   let m4=pass.match(pass_pat4);
   let m5=pass.match(pass_pat5);
   if(pass.length<6||m1==null || m2==null ||m3==null|| m4==null|| m5==null)
   {
    changecolor(pass1);
    pass1.value="";


   }
}

function checkemail(){
  
   let email=document.querySelector("#email");
   let  email1=email.value;
   email_pattern=/[a-zA-Z]\w+@[a-zA-Z]+\.[A-z]+/;
   let result=email1.match(email_pattern);
   console.log(result);
   if(result!=email1|| email1.length<1)
   {
    changecolor(email);
    email.value='';
    
   }
}

function checkphno()
{
  
    let phno=document.querySelector("#phno");
    let phno1=phno.value;
   if((phno1.length!=10))
   
   {    
    changecolor(phno);
    phno.value="";
   }
  
}
function changecolor(x)
{    x.style.borderColor="red";
    
    setTimeout(() => {
        x.style.borderColor="black";
       
    },1000);
    
}

function checkdob()
{
    let dob=document.querySelector("#dob");
    let dob1=dob.value;
    let dob_patt=/\d\d\d\d-\d\d-\d\d/
}

let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    let name1=document.querySelector("#name").value;
    
    let pass1=document.querySelector("#pass").value;
    
    let email1=document.querySelector("#email").value;
    
    let phno1=document.querySelector("#phno").value;
    if(name1!=""&& pass1!=""&& email1!=""&& phno1!="")
    {
        document.write("name:"+name1+"\n"+"email:"+email1+"\n"+"phno:"+phno1);
    }
    else
    {   alert("some fields are missing");
        event.preventDefault();
    }
    
});
