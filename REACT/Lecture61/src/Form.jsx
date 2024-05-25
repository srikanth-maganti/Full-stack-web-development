import { useState } from "react"

export default function Form()
{   
    let [formdata,setformdata]=useState({fullname:"",username:""});

    function handleformdata(event)
    {
       let  fieldname=event.target.name;
       let  newvalue=event.target.value;
       
         setformdata((currdata)=>{
            return {...currdata,[fieldname]:newvalue};
         });
         
         console.log(formdata);
    }

    function handlesubmit(event)
    {
        event.preventDefault();
        setformdata((currdata)=>{
            return {...currdata,fullname:"",username:""};
        })
    }
    // let [fullname,setfullname]=useState("");
    // let [username,setusername]=useState("");
    // function handlenamechange(event){
    //     setfullname(event.target.value);
    // }
    // function handleuserchange(event){
    //     setusername(event.target.value);
    // }

    return (
        <form onSubmit={handlesubmit}>
            <label htmlFor="fullname">fullname</label>
            <input type="text" id="fullname" name="fullname" placeholder="enter ur full name" value={formdata.fullname} onChange={handleformdata} />
            <br />
            <label htmlFor="username">username</label>
            <input type="text" id="username" name="username" placeholder="enter ur username" value={formdata.username} onChange={handleformdata} />
            <button>submit</button>
        </form>
    )
}