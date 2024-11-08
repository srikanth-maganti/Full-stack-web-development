var fs=require("fs")

fs.readFile("calc.js","utf8",(err,data)=>{
    if(!err)
        {
            console.log(data);
        }
})

fs.writeFile("calc2.js","fxgfhjhgf",(err)=>{
        console.log("success");
})

fs.appendFile("calc.js","console.log(2)",(err)=>{
    console.log("appended");
})

fs.unlink("calc2.js",(err)=>{
    console.log("deleted successfully");
})