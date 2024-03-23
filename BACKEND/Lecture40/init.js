const mongoose=require("mongoose");
const chat=require("./models/chat.js");

main().then((res)=>{
    console.log("successful connection");
})
.catch((err)=>{
    console.log("error while connecting");
})
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


chat.insertMany([
    {
        from:"ram",
        to:"syam",
        msg:"hi how r u?",
         created_at:new Date()
    },
    {
        from:"suresh",
        to:"ramesh",
        msg:"hi rara",
         created_at:new Date()
    },
    {
        from:"rakesh",
        to:"naresh",
        msg:"pora r u?",
         created_at:new Date()
    },
    {
        from:"karan",
        to:"kiren",
        msg:"love u",
         created_at:new Date()
    },
    {
        from:"kamal",
        to:"raman",
        msg:"hilie u?",
         created_at:new Date()
    },
    {
        from:"das",
        to:"arjun",
        msg:"here r u?",
         created_at:new Date()
    }
]);


