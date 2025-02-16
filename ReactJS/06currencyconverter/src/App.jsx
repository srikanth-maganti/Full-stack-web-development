import { useState } from 'react'
import {Input} from "./components/Index.js";
import useCurrencydata from './hooks/useCurrencydata';

import './App.css'

function App() {
  const [amount,setamount]=useState(0);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const [convertedamount,setconvertedamount]=useState(0);

  const currencydata=useCurrencydata(from);//this will called when from changes
  
  const swap=()=>{
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amount);

  }
  const options=Object.keys(currencydata);
  const convert=()=>{
    setconvertedamount(currencydata[to]*amount);
  }

  return (
    <>
      <div className="main">
        <h1>currency converter</h1>
        <div>
          <form onSubmit={(e)=>{
           
            e.preventDefault()
            convert();

          }}>
            <div>
              <Input
                label="from"
                amount={amount}
                selectedcurrency={from}
                currencyoptions={options}
                onAmountChange={(amount)=>setamount(amount)}
                oncurrencyChange={(currency)=>setfrom(currency)}

              />
            </div>

            <button onClick={swap} type="button" className='btn'>swap</button>
            <div>
              <Input
              label="to"
              amount={convertedamount}
              selectedcurrency={to}
              oncurrencyChange={(currency)=>setto(currency)}
              currencyoptions={options}
              amountDisabled={true}

              
              />
            </div>
            <button type='submit'>change {from} to {to}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
