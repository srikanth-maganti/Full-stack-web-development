let jsondata='{"fact":"The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the\u00a0Proailurus, which means \u201cfirst cat\u201d in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.","length":226}';
console.log(jsondata);

let jsonvalid=JSON.parse(jsondata);
console.log(jsonvalid.fact);

let student=
{
    name:"srikanth",
    marks:100
};
let x=JSON.stringify(student);
console.log(x);