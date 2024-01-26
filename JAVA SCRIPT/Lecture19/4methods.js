let calculator={//creating object
    add:function(a,b)
    {
        return a+b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
};
console.log(calculator.add(2,3));



//shorthand

let calc={
    sum(a,b)
    {
        console.log(a+b);
    },
    diff(a,b)
    {
        console.log(a-b);
    }
};

calc.sum(2,3);