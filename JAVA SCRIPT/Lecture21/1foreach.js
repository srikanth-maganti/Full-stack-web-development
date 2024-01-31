let arr=[1,2,3,4];
function display(el)
{
    console.log(el);
}
arr.forEach(display);

//for each by arrow function

console.log(arr.forEach((el)=>{console.log(el)}));

//foreach with objects
let a=[
    {name:"srikanth",
    marks:94
},
{
    name:"sravan",
    marks:99
},
{
    name:"ram",
    marks:89
}
];

a.forEach((student)=>{
    console.log(student.marks);
});



//map method
let square=arr.map(function(el){
    return el*el;
});
square.forEach((el)=>
{
    console.log(el);
});


let double=arr.map(function(){});//undefined


let gpa=a.map((student)=>
{
    return student.marks/10;
})
console.log(gpa);


//filter

let x=[1,3,4,55,32,4,22,8];
let even=x.filter(function(el){
    return el%2==0;

});
let odd=x.filter((el)=>el%2!=0);
console.log(even);
console.log(odd);


//every 
let r=[1,4,3].every((el)=>el%2==0);
console.log(r);

//some

r=[1,4,3].some((e)=>e%2==0);
console.log(r);


//practice question
//to checck all number in an array are multiple of 10 or not
let arr1=[10,20,30,40];
let res1=arr1.every((el)=>el%10==0);
console.log(res1);