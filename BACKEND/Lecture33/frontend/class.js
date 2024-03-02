//constructor
/*
function student(name,marks)
{
    this.name=name;
    this.marks=marks;
}
student.prototype.talk=()=>{
    console.log("hello",this.name);
}

let s1=new student("srikanth",100);
let s2=new student("sravan",100);

console.log(s1.talk===s2.talk);
*/

//classes
class student{
    constructor(name,marks)
    {
        this.name=name;
        this.marks=marks;
    }
    talk()
    {
        console.log("hello",this.name);
    }
}

let s1=new student("srikanth",123);
console.log(s1.talk());
