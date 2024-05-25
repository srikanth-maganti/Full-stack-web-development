import { useEffect } from "react";
import { useState } from "react";

export default function Counter()
{
    let [countx,setcountx]=useState(0);
    let [county,setcounty]=useState(0);
    function incrementx()
    {   
        setcountx((curr)=>{
            return curr+1;
        });
    }

    function incrementy()
    {   
        setcounty((curr)=>{
            return curr+1;
        });
    }

    useEffect(function printhello(){
        console.log("hello");
    },[countx])

    return (
        <div>
            <h1>count={countx}</h1>
             <button onClick={incrementx}>+1</button>
        <br />
             <h1>count={county}</h1>
             <button onClick={incrementy}>+1</button>
        </div>
        
    )
}