//Square and sum the array elements using the arrow function and then find the
//average of the array

let a=[1,2,3,4];
let square=a.map((el)=>el*el);

let sum=square.reduce((acc,el)=>acc+el);

let avg=sum/a.length;
console.log(avg);

//create a new array using the map function whose each element is equal to the original element plus 5
let plus5=a.map((el)=>el+5);
console.log(plus5);


//create a new arry whose elements are in uppercase of words present in the original array
let s=["srikanth","maganti"];
let upp=s.map((el)=>el.toUpperCase());
console.log(upp);


//write a function called doubleandreturnargs which accpets an arry and a variable number of arguments.the functin should return a nre array eith the original array values anf all og the additional argumants doubled
function doubleandreturnargs(arr,...args)
{   let a=args.map((el)=>el*2);
    return [...arr,...a];
}
console.log(doubleandreturnargs([1,2,3],4,5,6));


//write a funtion called mergeobjects that accepts two objects and returns a new object which contains all the keys and values of thr first object and second object

let obj1={
    name:"srikanth",
    rollno:60

};

let obj2={
    name1:"sravn",
    rollno2:45
};
function mergeobjects(obj1,obj2)
{
    return {...obj1,...obj2};
}


console.log(mergeobjects(obj1,obj2));


