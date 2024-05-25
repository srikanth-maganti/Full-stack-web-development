const _=require("lodash");
let numbers=[1,2,3,4]
_.each(numbers,function(number,i){
    console.log(i,"",number);
})