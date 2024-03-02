const mongoose=require("mongoose");
main()
    .then(()=>{
        console.log("success");
    })
    .catch((err)=>{
        console.log("error");
    })

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userschema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const user=mongoose.model("users",userschema);

//inserting single document 

// let user1=new user(
//     {
//         name:"srikanth",
//         email:"magantisrikanth45@gmail.com",
//         age:20
//     }
// )
// let user2=new user(
//     {
//         name:"ram",
//         email:"syam@gmail.com",
//         age:30
//     }
// )


// user1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


//inserting multiple documents
// user.insertMany([
//     {
//         name:"george",
//         email:"g@gmail.com",
//         age:22
//     },
//     {
//         name:"arjun",
//         email:"arjun@gmail.com",
//         age:34
//     }
// ]).then((res)=>{
//     console.log(res);
// });


//find

// user.find({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



// user.findOne({age:{$gt:30}}).then((Res)=>{
//     console.log(Res);
// })



// user.findById("65d9aeca30882615aa45c9dd").then((Res)=>{
//     console.log(Res);
// })


//update
// user.updateOne({name:"srikanth"},{age:21}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// user.updateMany({age:{$gt:30}},{age:55}).then((Res)=>{
//     console.log(Res);

// })
// .catch((err)=>{
//     console.log(err);
// })


//find and update

// user.findOneAndUpdate({name:"srikanth"},{age:99},{new:true}).then((res)=>{
//     console.log(res);
// })

// user.findByIdAndUpdate("65d9aeca30882615aa45c9dd",{name:"jill"},{new:true}).then((res)=>{
//     console.log(res);
// })


//delete 

// user.deleteOne({name:"jill"}).then((res)=>{
//     console.log(res);
// });

// user.deleteMany({age:{$ls:90}}).then((res)=>{
//     console.log(res);
// });

// user.findByIdAndDelete('65d9abfa7a5f4fe80b8828a0').then((res)=>{
//     console.log(res);
// })

user.findOneAndDelete({name:"ram"}).then((Res)=>{
    console.log(Res);
})
.catch(err)
{
    console.log(err);
}