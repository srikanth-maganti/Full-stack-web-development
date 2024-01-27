//arrow fucntion

const sum=(a,b)=>
{
    console.log(a+b);
}

sum(2,3);

const sqr=n=>{return n*n;};
console.log(sqr(4));


let hello=()=>{
    console.log("helllo");
};

hello();


//implicit return
const fun=(a,b)=>(a*b);
console.log(fun(3,4));



let cube=n=>n*n*n;
console.log(cube(7));




