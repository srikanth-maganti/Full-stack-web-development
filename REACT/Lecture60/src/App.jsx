import { useState } from 'react'
import './App.css'
import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"


function App() {
  let winningfun=(arr)=>{
      return sum(arr)===15;
  }

  return (
    <>
      <h3>Welcome to lottery</h3>
      {/* <Ticket ticket={[1,2,3]}/> */}
      <Lottery n={3} winningfun={winningfun}/>
        
    </>
  )
}

export default App
