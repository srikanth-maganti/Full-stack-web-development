async function hello()
{   throw "iloveu virus";
    return "hello";
}
hello()
.then((result)=>{
    console.log("promise fulfilled");
})
.catch((err)=>{
    console.log("promise rejected");
})


let x=async ()=>{
    return "bye";
}
