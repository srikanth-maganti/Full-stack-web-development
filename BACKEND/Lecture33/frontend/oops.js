//prototype
console.log(Array.prototype);

let arr1=[1,2,3];
let arr2=[1,2,3];

arr1.push(2);
arr2.push(3);

arr1.hello=()=>{
    console.log("hello");
};

arr2.hello=()=>{
    console.log("hello");
}
console.log(arr1);
console.log(arr2);

console.log(arr1.push===arr2.push);
console.log(arr1.hello===arr2.hello);


//factory functions
function student(name,marks)
{
    let s={
        name:name,
        marks:marks,
        talk()
        {
            console.log("hello",this.name);
        }
    };
    return s;
}

let s1=student("srikanth",100);
let s2=student("sravan",100);

console.log(s1);
console.log(s2);

console.log(s1.talk===s2.talk);


