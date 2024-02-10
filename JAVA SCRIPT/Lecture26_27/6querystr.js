let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let inp=document.querySelector("input");
    let country=inp.value;
   let colleges= await searchcolleges(country);
   show(colleges);
});
let ul=document.querySelector("ul");
function show(colleges)
{  ul.innerHTML="";
    
   for(i of colleges)
   {
        let li=document.createElement("li");
        console.log(i);
        li.innerText=i.name+"-"+i.state-province;
        ul.appendChild(li);
   }
}





let url="http://universities.hipolabs.com/search?name=";

async function searchcolleges(country)
{
    try{
        let res=await axios.get(url + country);
        return res.data;
    }
    catch(err)
    {
        return [];
    }
}