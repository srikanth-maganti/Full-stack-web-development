var http=require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("hello world");
    res.write("i am  srikanth");
    res.end();  //to tell browser that there is nothing to write more
    
}).listen(8080);
