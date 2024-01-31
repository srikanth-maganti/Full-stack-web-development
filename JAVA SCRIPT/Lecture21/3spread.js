//spread
console.log(..."apna college");

let arr=[1,2,3,4,42,2,444,2,-1,3,9];
console.log(Math.min(...arr));
console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]));


console.log(1,2,3,4);
console.log(...[1,2,3,4]);


//spread with array litterals
let a=[1,2,3,4];
let b=[...a];
console.log(...b);

let chars=[..."sriaktnh"];
console.log(...chars);


let even=[2,4,6];
let odd=[3,5,7];

let num=[...even,...odd];
console.log(num);


//spread with objects
let obj={
    name:"sriaknth",
    id:"2010181"
}

let total={
    ...obj,
    email:"magantisrikanth45@gmail.com",
};

console.log(total);


let obj1={..."sriaknth"};
console.log(obj1);

let obj2={...even};
console.log(obj2);


//rest

function min(...args)
{
   return args.reduce((min,el)=>{
    if(el<min)
    {
        return el;
    }
    else{
        return min;
    }
   });
}
console.log(min(1,3,4,22,-1));

