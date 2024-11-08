let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let sym=document.getElementById("sym");



let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   
    let output=document.querySelector(".output");
    let result=eval(`${num1.value}${sym.value}${num2.value}`);
    output.innerHTML=`${num1.value} ${sym.value} ${num2.value} = ${result}`;


});


    /*
    if(sym.value=="+")
    {
        result=x+y;
    }
    else if(sym.value=="-")
    {
        result=x-y;
    }
    else if(sym.value=="*")
    {
        result=x*y;
    }
    else if(sym.value=='/')
    {
            result=x/y;
    }
    else if(sym.value=="**")
    {
        result=x**y;
    }
    output.innerHTML=`${num1.value} ${sym.value} ${num2.value} = ${result}`;
});*/

