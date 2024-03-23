const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connection established");
})
.catch((err)=>{
    console.log("error occured while connecting to the database");
})
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo")
}


let customerschema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"order",
        }
    ],
})
let orderschema=new mongoose.Schema({
    item:String,
    price:Number,
})
// customerschema.pre("findOneAndDelete",async ()=>{
//     console.log("pre middleware");
// })

customerschema.post("findOneAndDelete",async (customer)=>{
    if(customer.orders.length)
    {
        let res=await order.deleteMany({_id : {$in:customer.orders}});
        console.log(res);
    }
})

const order=mongoose.model("order",orderschema);
const customer=mongoose.model("customer",customerschema);




const addorders=async ()=>{
    let res=await order.insertMany([
        {item:"puri",price:30},
        {
            item:"chips",price:20,
        },
        {item:"chocolate",price:25},
    ])
    console.log(res);
}


const addcustomer=async ()=>{
    let cus1=new customer({
        name:"srikanth",
    })

    let order1=await order.findOne({item:"chips"});
    let order2=await order.findOne({item:"chocolate"});

    cus1.orders.push(order1);
    cus1.orders.push(order2);

    await cus1.save();

}


async function allcustomers()
{
    let result=await customer.find().populate("orders");
    console.log(result[0]);
}
//allcustomers();
//addcustomer();

//addorders();




//add user

let addcust=async ()=>{
    let cust1=new customer({
        name:"sravan",
    });

    let ord1=new order({
        item:"burger",
        price:45,
    });

    cust1.orders.push(ord1);

    await ord1.save();
    await cust1.save();
}

// addcust();


let delcust=async ()=>{
    let result=await customer.findByIdAndDelete('65f47f73104430f2d3cc0af5');
    console.log("dleted suuceees");
}
delcust();

