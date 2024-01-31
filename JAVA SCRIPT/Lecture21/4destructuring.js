//destructureing
let names=["srikanth","maganti","sravan","kumar"];
let [winner,runner,...others]=names;
console.log(winner);
console.log(runner);
console.log(others);


//destructuring for objects
let student={
    name:"srikanth",
    age:20,
    class:14,
    username:"sri143",
    password:1432,
    city:"mumbai",
};

let {username,password}=student;
console.log(username,password);

let {username:user,password:pass,city:place="hyd"}=student;
console.log(user,pass,place);

