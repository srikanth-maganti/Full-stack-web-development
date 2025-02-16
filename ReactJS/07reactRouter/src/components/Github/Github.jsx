import React from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github()
{
    const data=useLoaderData();
    //    const [data,setdata]=useState([]);

//     useEffect(()=>{
//         fetch('https://api.github.com/users/srikanth-maganti')
//         .then((response)=>response.json())
//         .then((res)=>{

//             setdata(res);
//             console.log(data);
//         }
//         )

        
//     },[])
    return (
        <div className='text-black bg-yellow-200 text-3xl text-center'>
            <img src={data.avatar_url} alt="" />Github,{data.followers},{data.login}</div>

    )
}

export const githubinfo=async ()=>{
    const response=await fetch("https://api.github.com/users/srikanth-maganti");
    return response.json();
}   