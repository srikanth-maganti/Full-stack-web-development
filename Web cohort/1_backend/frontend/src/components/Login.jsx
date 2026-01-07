import {useState} from "react"
import React from "react"
import ApiClient from "../service/ApiClient.js";
import {useNavigate} from "react-router"

function Login()
{   let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [error,setError]=useState("");
    let navigate=useNavigate();
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const data= await ApiClient.login({email,password});
        

        if(data.success)
        {   
            navigate("/");
        }
        else
        {
            setError("Login failed");
        }
    }
    return(
        <div>
            <h1>Sign up page</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>

                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                <button type="submit">Submit</button>
            </form>
            {error && <h5>{error}</h5>}
        </div>
    )
}

export default Login