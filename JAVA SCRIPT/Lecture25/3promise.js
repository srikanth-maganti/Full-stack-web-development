/*function savetodb(data)
{
    return new Promise((resolve,reject)=>{
        let internet=Math.floor(Math.random()*10)+1;
        if(internet>4)
        {
            resolve("success");
        }
        else{
            reject("failure");

        }
    });
}
*/
/*
let request=savetodb("srikanth");
request.then(()=>{
    console.log("data savd");
})
.catch(()=>{
    console.log("not saved");
})*/

/*
//promises chaining
savetodb("apnacollege")
    .then(()=>{
        console.log("data1 saved");
        return savetodb("maganti");
    })
    .then(()=>{
        console.log("data2 saved");
        return savetodb("srikath");

    })
    .then(()=>{
        console.log("data3 saved");
    })
    .catch(()=>{
        console.log("fialed");
    });

    */
   function savetodb(data)
   {
    return new Promise((resolve,reject)=>{
        let internet=Math.floor(Math.random()*10)+1;
        if(internet>4)
        {
            resolve("succesc");
        }
        else
        {
            resolve('failure');
        }
    });
   }

   savetodb("apna college")
        .then((result)=>
        {
            console.log("data1 saved");
            console.log(result);
            return savetodb("srikanth");

        })
        .then((result)=>{
            console.log("data2 saved");
            console.log(result);
            
        })
        .catch((error)=>{
            console.log("not saved");
            console.log(error);
        });