//write an arrow functiin named arrayavearage that acceptsa an array of numbers returns ths aavearafaagae of those numbers
let arrayaverage=(arr)=>{
    sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum/arr.length;
}

console.log(arrayaverage([1,4,3,2]));

//write an arrow function named iseven() that takes a single numebre as argument and retaurns if it is even or not
let iseven=(n)=>{
    if(n%2==0)
    {
        return true;
    }
    return false;
}
console.log(iseven(5));

//
const object={
    meassage:"hello",
    logmessage(){
        console.log(this.message);
    }
};

setTimeout(object.logmessage,1000);


//

let length=4;
function callback()
{
    console.log(this.length);
};

const object1={
    length:5,
    method(callback)
    {
        callback();
    },
};
object1.method(callback,1,2);
console.log(window.length)
