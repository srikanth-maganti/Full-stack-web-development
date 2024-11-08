// console.log("hello");
// function fun()
// {
//     console.log('apna');
// }
// setTimeout(fun,4000);
// console.log("welcome");


// let id=setInterval(()=>{console.log("bye bye");},2000);
// console.log(id);


console.log("hello");
let hello=()=>{
    console.log("apna");
}
setTimeout(hello,4000);
console.log("welcome");

const id=setInterval(hello,2000);
setTimeout(()=>{
    clearInterval(id);
},6000);