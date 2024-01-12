
//string functions ,,,,,strings are immutable
//trim
let str="         hel lo     ";
console.log(str.trim());

console.log(str);
str="   hi";
console.log(str);

/*
let pass=prompt("enter ur passsword");
let pnew=pass.trim();
console.log(pnew);

console.log(pass);*/

//toLowerCase and toUpperCase
let a="Srikanth Maganti";
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a);



//indexof with argument
let x="iLovecoding";
console.log(x.indexOf("love"));
console.log(x.indexOf("Love"));
console.log(x.indexOf("o"));

//method chaining
let t="   hello  ";
let n=t.trim().toUpperCase();
console.log(n);


//slice 

let string="ilovecodimg";
console.log(string.slice(1,5));
console.log(string.slice(5));
console.log(string.slice(-6));


//replace,,,,first occurence only ,,in regualr expressions
console.log(string.replace("love","do"));
console.log(string.replace("o","wwww"));


//repeat
console.log(string.repeat(4));




//practice questions
let msg="help!";
console.log(msg.trim().toUpperCase());

let name="apnacollege";
let sep=name.slice(4);
console.log(sep.replace("l","t").replace("l","t"));
