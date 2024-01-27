let student={
    name:"srikanth",
    marks:2010181,
    prop:this,//this this represents window object since it is global scope
    getname:function(){
        //console.log(this.name);
       // console.log(this);//this this represents calling object student

    },
    getmarks:()=>
    {
        console.log(this.marks);
        console.log(this);//this this represents this of its parent object
    },

    getinfo1:function()
    {
        setTimeout(()=>
        {
            console.log(this);//student
        },2000);
    }
    ,
    getinfo2:function()
    {
        setTimeout(function()
        {
            console.log(this);//window
        },2000);
    }
};
student.getname();
student.getmarks();



//practice question
//arrow function that returns square of given n
let sqr=(n)=>(
    n*n
);
console.log(sqr(5));

//function that prints hello world five times with interval of 2sec
let id=setInterval(()=>
{
    console.log("hello world");
},2000);

setTimeout(()=>{clearInterval(id);
console.log("done");},10000);

