let student={
    name:"srikanth",
    age:21,
    marks:100,
    city:"mumbai"

};
console.log(student);


//twitter post

const post={
    username:"srikanth45",
    content:"hello everyone",
    likes:223,
    reposts:45,
    tags:["abc","fgh"]
}
console.log(post);

console.log(post["tags"]);
console.log(post.likes);

let prop="username";
console.log(post[prop]);
console.log(post.prop);


//keys as string
let obj=
{
    1:'a',
    2:'b',
    true:"c",
    null:"d",
    anm:"e"
};
console.log(obj[1]);
console.log(obj["anm"]);

console.log(obj);
/*console.log(obj."1");*/  //error



//add /update

console.log(student);

student.city="hyderabd";
console.log(student);

student.gender="m";
console.log(student);

delete student.marks;
console.log(student); 