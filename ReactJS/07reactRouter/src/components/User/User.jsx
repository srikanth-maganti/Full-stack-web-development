import React from 'react'
import {useParams} from 'react-router-dom'

export default function User()
{   const {userid}=useParams();
    return(
        <div className="bg-orange-400 text-3xl text-white p-4 text-center" >user :{userid}</div>
    )
}