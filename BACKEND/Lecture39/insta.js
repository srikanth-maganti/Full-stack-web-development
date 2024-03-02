let mongoose=require("mongoose");

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

let bookschema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20,
        },
        price:{
            type:Number,
            min:[1,"price is too low"],
            
        },
        author:{
            type:String,
        },
        discount:{
            type:Number,
            default:0,
        },

        genre:[String],

        catalogue:
        {
            type:String,
            enum:["fiction","non-fiction"],
        }
        


    }
)


let book=mongoose.model("book",bookschema);


    
book.findByIdAndUpdate("65dae1d1d49edcf3bd33a892",{price:0},{runValidators:true}).then((res)=>{
    console.log(res);
})
.catch((Err)=>{
    console.log(Err.errors.price.properties.message);
})





// let book1=new book({
//     title:"python",
//     author:"srikanth",
//     price:100,
//     genre:["comics","cartoon"],
//     catalogue:"fiction",

// })
// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let book2=new book({
//     title:"machine learning",
//     //price:"aba",
//     price:2000,
//     author:"sravan",
//     rating:5
// });
// book2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

