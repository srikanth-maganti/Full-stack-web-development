//object of objects
const student={
    srikanth:{
        grade:"a+",
        city:"hyd"

    },
    kala:
    {
        grade:'a',
        city:"kakinada"
    },
    son:
    {
        grade:'a',
        city:"hyd"
    }
}

console.log(student);
console.log(student.srikanth);
console.log(student.srikanth.city);
student.srikanth.city="kakinada";
console.log(student.srikanth);


