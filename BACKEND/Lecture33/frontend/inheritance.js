class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    eat()
    {
        console.log("person is eating");
    }
}

class student extends person{
    constructor(name,age,marks)
    {
        super(name,age);
        this.marks=marks;
    }
    listen()
    {
        console.log("student is listening");
    }
}
class teacher extends person{
    constructor(name,age,subject)
    {
        super(name,age);
        this.subject=subject;
    }
    /*
    eat()
        {
            console.log("teachet is eating");
        }*/

        teach()
        {
            console.log("teacher is teaching");
        }
}


let s1=new student("srik",23,1000);
let t1=new student("ram",34,"math");
console.log(s1.eat());
console.log(t1.eat());
