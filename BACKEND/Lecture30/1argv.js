console.log("hello");
console.log(process.argv);
let args=process.argv;
for(let i=2;i<args.length;i++)
{
    console.log("hello welcome",args[i]);
}