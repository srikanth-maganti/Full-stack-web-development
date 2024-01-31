let a=[1,2,44,5];
let result=a.reduce((acc,el)=>{
    console.log(acc);
    return acc+el;
});
console.log(result); 


//maximum in an array
let max=a.reduce((acc,el)=>{
    if(acc<el)
    {
        return el;
    }
    return acc;
});
console.log(max);



//practice question
//to find minimum number from an array
let min=a.reduce((min,el)=>
{
    if(min<el)
    {
        return min;
    }
    else{
        return el;
    }
});
console.log(min);



