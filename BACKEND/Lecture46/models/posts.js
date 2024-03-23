const mongoose=require("mongoose");

async function main()
{
   
   await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");

}

main()
    .then((res)=>{
        console.log("connection successful");
    })
    .catch((err)=>{
        console.log("error while connecting");
    })



const userschema=new mongoose.Schema({
    username:String,
    email:String,
})

const postschema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
})

const user=mongoose.model("user",userschema);
const posts=mongoose.model("posts",postschema);

let adddata=async ()=>{
    // let user1=new user({
    //     username:"srikatnh",
    //     email:"magantisrikanth45@gmail.com",
    // })

    let u=await user.findOne({email:"magantisrikanth45@gmail.com"});
    // let post1=new posts({
    //     content:"hello world",
    //     likes:45,
    //     user:user1,

    // })

    let post2=new posts({
        content:"bye frnds ",
        likes:444,
        user:u,
    })

    // console.log(await user1.save());
    console.log(await post2.save());

}

async function getdata()
{
    let usr=await posts.findOne({}).populate("user","username");
    console.log(usr);
}
getdata();

//adddata();