const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connection is successfull");
})
.catch((Err)=>{
    console.log("error while connecting")
})

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo')
}

const userschema=new mongoose.Schema(
    {
        username:String,
        addresses:[
            {   _id:false,
                location:String,
                city:String,
            }
        ]
    }
)

const user=mongoose.model("user",userschema);

let addusers=async()=>{
    let user1=new user({
        username:"sriaknth",
        addresses:[
            {
                location:"a gokavaram",
                city:"eluru",
            }
        ]

    })

    user1.addresses.push({
        location:"kaikaram",
        city:"tadepalligudem",
    })

   let x= await user1.save();
    console.log(x);

}

addusers();