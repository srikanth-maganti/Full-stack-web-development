import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let arr=[1,2,3,4,5];


  return (
    <>
      <h1 className="bg-green-500 font-serif text-3xl">Maganti</h1>
      <br />
      <Card username="srikanth" post="ml engineer" arr={arr}></Card>
      <br />
      <Card username="ka"></Card>
      <Card></Card>
    </>
  )
}

export default App
