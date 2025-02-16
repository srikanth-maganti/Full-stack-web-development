import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [color,setColor]=useState("pink");

  function changecolor(color){
    setColor(color);
  }
  let styles={backgroundColor:color};
  return (
    <div className=" h-screen duration-200" style={styles}>
      <div className="fixed w-full bottom-10">
          <div className="flex flex-wrap gap-5 rounded-md border bg-white justify-center p-3 m-auto w-fit">
            <button onClick={()=>setColor("red")} className="text-3xl rounded-md p-2 " style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>changecolor("green")} className="text-3xl rounded-md p-2" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setColor("yellow")} className="text-3xl rounded-md p-2" style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=>setColor("orange")} className="text-3xl rounded-md p-2" style={{backgroundColor:"orange"}}>orange</button>

          </div>
      </div>

    </div>
  );
}

export default App
