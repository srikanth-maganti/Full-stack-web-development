import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [numberallowed,setnumberallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false);
  const [password,setpassword]=useState("");

  
  const generatepassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()?/~";

    for(let i=1;i<length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpassword(pass);

  },[length,charallowed,numberallowed]);

  useEffect(()=>{
    generatepassword();
  },[length,charallowed,numberallowed]);
  

  const passwordref=useRef(null);

  function copypasswordtoclipboard()
  { 
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select();
  }
  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div className="output">
              <div className>
                <input type="text" className="password" value={password} ref={passwordref}/>
              </div>
              <div>
                <button onClick={copypasswordtoclipboard}>copy</button>
              </div>
        </div>
        <div className="options">
              <div >
                <input type="range" min="8" max="20"  value={length} onChange={(e)=>setlength(e.target.value)} id="length" />
                <label htmlFor="length">Length:{length}</label>
              </div>
              <div>
                <input type="checkbox" id="number" defaultChecked={numberallowed} onChange={()=>{setnumberallowed((prev)=>!prev)}} />
                <label htmlFor="number">Number</label>
              </div>
              <div>
                  <input type="checkbox" id="char" defaultChecked={charallowed} onChange={()=>{setcharallowed((prev)=>!prev)}} />
                  <label htmlFor="char">Character</label>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
