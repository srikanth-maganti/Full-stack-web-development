let l=[];
let a=prompt("enter operation");
while(true)
{   if(a=="quit")
    {
    console.log("quitted");
    break;
      }
    else if(a=="list")
    {   console.log("---------------------------------");
        for(task of l)
        {
            console.log(task);
        }
     console.log("---------------------------------");

       
    }
    else if(a=="add")
    {
        let elmt=prompt("enter ur task");
        l.push(elmt);
        console.log("task added");
        
    }
    else if(a=="delete")
    {   let idx=prompt("enter index");
    
        console.log("elemnt is popped:",l.splice(idx,1));
       
    }
    else{
        console.log("wrong request");
    }
    a=prompt("enter operation");
}