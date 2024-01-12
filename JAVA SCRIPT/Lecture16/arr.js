//creation and acccessing
let arr=["srikanth","maganti","sravn"];
let a=[1,2,"sri",5.9];
let e=[];

console.log(arr);
console.log(arr[0]);

console.log(a.length);
console.log(a);
console.log(a[2][2]);

console.log(e.length);

//strings are immutable
let s="srikanth";
s[0]="k";
console.log(s);

//arrays are mutable
let fruits=["apple","mango"];
fruits[0]="banana";
console.log(fruits);
fruits[10]="orange";
console.log(fruits);
console.log(fruits.length);


//array methods
let cars=["audi","maruthi","bmw"];
cars.push("toyota");
console.log(cars);

let dummy=cars.pop();
console.log(dummy);

console.log(cars);

cars.unshift("xuv");
console.log(cars);

dummy=cars.shift();
console.log(dummy);

console.log(cars);

//example;
let followers=["a",'b','c','d'];
let blocked=followers.shift();
console.log(blocked);
console.log(followers);


//practise questoion
let start=["january","july","march","august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);




//array methods
let array=["yellow","orange","apple"];
console.log(array.indexOf("yellow"));
let array2=[1,3,4,5,8];
console.log(array2.indexOf(4));

//includes
console.log(array.includes("orange"));

//concat
console.log(array.concat(array2));
console.log(array);//immutable


//reverse
console.log(array.reverse());
console.log(array);//mutable

//slice
let colors=["yellow","pink","orange","red","green","blue"];
console.log(colors.slice(1,3));
console.log(colors.slice(-1));
console.log(colors.slice(4));


//splice
cars=["maruthi","bmw","xuv","ferari","honda"];
console.log(cars.splice(4));
console.log(cars);

console.log(cars.splice(0,1));
console.log(cars);

console.log(cars.splice(1,0,"rolls royce"));
console.log(cars);

console.log(cars.splice(1,1,"gwagon"));
console.log(cars);

//sort

cars.sort();
console.log(cars);

let marks=[100,34,2,45,2];
marks.sort();
console.log(marks);



//practie question
let month=["january","july","march",'august'];
month.splice(0,2,"july","june");
console.log(month);

let l=["c","c++","html","javascript","python","java","c#","sql"];
l.reverse();
console.log(l);
console.log(l.indexOf('javascript'));

//array references
let apple=[1,2];
let applecopy=apple;
console.log(apple);

applecopy.push(3);
console.log(apple);

console.log(apple===applecopy);




const brr=[1,2,3,5];
brr.push(1);
console.log(brr);
console.log(brr.pop());
console.log(brr);

/*brr=[2,4,5];*/

//nested arrys
let nest=[[1,2,3],[4,5,6]];
console.log(nest);
console.log(nest.length);
console.log(nest[0].length);
console.log(nest[0][0]);
console.log(nest[1][2]);



//practise question
let ttt=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(ttt);
ttt[0][1]="o";
console.log(ttt);