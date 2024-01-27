//this keyword
const student={
    name:"srikanth",
    id:201081,
    java:98,
    c:99,
    python:80,
    getavg()
    {   console.log(this);
        console.log((this.java+this.c+this.python)/3);

    }
}

student.getavg();

function get()
{
    console.log(this);
}

get();

window.alert("hello");
