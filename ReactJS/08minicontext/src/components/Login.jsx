import React from 'react'
import {useState} from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import User from '../../../07reactRouter/src/components/User/User';
function Login()
{   const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const {setuser} =useContext(UserContext);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setuser({username,password});
    }

    return(
        <div>
            <h1>Login</h1>
            <input type="text"  value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <button onClick={handlesubmit}>submit</button>
        </div>
        
    )
}

export default Login