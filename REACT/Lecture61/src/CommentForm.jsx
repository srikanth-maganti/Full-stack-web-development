import { useState } from "react"

export default function CommentForm()

{
    let[FormData,setformdata]=useState({username:"",remarks:"",rating:5});
    function handleformdata(event){
        setformdata((currdata)=>{
            return {...currdata,[event.target.name]:event.target.value};
        })
    }

    function handlesubmit(event)
    {
        console.log(FormData);
        event.preventDefault();
        setformdata((currdata)=>{
            return {...currdata,username:"",remarks:"",rating:5};
        })
    }
    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={FormData.username} onChange={handleformdata}/>
            <br /><br /><br /><br /><br />
            <label htmlFor="remarks">remarks</label>
            <textarea name="remarks" id="remarks" cols="30" rows="10" value={FormData.remarks} onChange={handleformdata}></textarea>
            <br /><br /><br /><br />
            <label htmlFor="rating">rating</label>
            <input type="number" name="rating" id="rating" value={FormData.rating} onChange={handleformdata}/>
            <br />
            <button>submit</button>
        </form>
    )
}