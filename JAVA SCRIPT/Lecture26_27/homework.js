let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let inp=document.querySelector("input");
   let clgs=await getcolleges(inp.value);
   show(clgs);
});

let url="http://universities.hipolabs.com/search?name=middle&country=india&";
async function getcollege(colleges)
{
    try{
        let res=await axios.get(url,);
        
        return res.data;
    }
    catch(err)
    {
        console.log(err);
    }
}
