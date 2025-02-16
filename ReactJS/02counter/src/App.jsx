import { useState } from 'react'
import "./App.css"

function App() {

  let [counter,setcounter]=useState(0);
  // let counter=1;
  let addvalue=()=>{
    // counter=counter+1;
    // console.log(counter);


    // setcounter(counter+1);
    // setcounter(counter+2);//bundling takes same value of counter

    setcounter((prev)=>{
      return prev+1;
    })

    setcounter((prev)=>{
      return prev+2;
    })

  }

  let removevalue=()=>{
    // counter=counter-1;

    setcounter((counter)=>counter-1);
  }
  return (
    <>
     <h1>counter:{counter}</h1>
     <button onClick={addvalue}>add value</button>{" "}
     <button onClick={removevalue}>remove val</button>
     <p>footer:{counter}</p>
       
         
    </>
  )
}

export default App
