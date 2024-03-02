const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");


let getuser=()=>{
   return [
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
    
     faker.internet.password(),
     
     
   ];
 };


const connection=mysql.createConnection({
   user:"root",
   host:"localhost",
   database:"delta",
   password:"srikanth@143",
});






//inserting data into table
// let q="insert into user values ?";
// let user=[["103","srikth","mantisriaknth@gmailcom","insl"],
// ["102","srkath","maantisriaknth@gmailcom","inksl"]
// ];
// connection.query(q,[user],(err,result)=>{
//    console.log(result);
// });
//simple query


let q="insert into user values ?";
let data=[];
for(let i=1;i<=100;i++)
{
   data.push(getuser());
}

try
{
   connection.query(q,[data],(err,result)=>{
      if(err)throw err;
      console.log(result);
   });
}
catch(err)
{
   console.log("error");
}


// try{
// connection.query("show tables",function(err,result){
//    if(err)
//    {
//       throw err;
//    }
//    console.log(result);
// });
// }
// catch(err)
// {
//    console.log(err);
// }

connection.end();






