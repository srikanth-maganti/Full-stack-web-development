import { useEffect } from "react";
import { useState } from "react";

export default function Joker()
{   
    let [joke,setjoke]=useState({});
    let url="https://official-joke-api.appspot.com/random_joke";
    async function getjoke()
    {
        let response=await fetch(url)
        let jokeobj=await response.json();
        
        setjoke({setup:jokeobj.setup,punchline:jokeobj.punchline});
    }
    useEffect(()=>{
       async function firstjoke()
       {
        let response=await fetch(url)
        let jokeobj=await response.json();
        
        setjoke({setup:jokeobj.setup,punchline:jokeobj.punchline});
       } 
       firstjoke();

    },[]);
    
    return(
        <div>
            <h4>{joke.setup}</h4>
            <h4>{joke.punchline}</h4>
            <button onClick={getjoke}>new joke</button>
        </div>
    )
}