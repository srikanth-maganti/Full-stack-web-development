

//including modules from file
let math=require('./math');
console.log(math.sum(4,5));
console.log(math.pi);


//including module from directory
let fruit=require("./fruits");
console.log(fruit[0].name);