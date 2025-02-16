import React from 'react';
import './input.css'
import {useId} from 'react';
function Input(
    {
        label,
        amount,
        onAmountChange,
        oncurrencyChange,
        currencyoptions=["ind","pak"],
        selectedcurrency="usd",
        amountDisabled=false,
        currencyDisabled=false
        

    }
)
{   let id=useId();
    return(
        <div className="inputbox">
            <div>
                <label htmlFor={id} >{label}</label>
                <br />
                <input id ={id} type='number' value={amount}  disabled={amountDisabled} onChange={(e)=>{onAmountChange && onAmountChange((Number)(e.target.value))}}/>
            </div>
            <div>
                <p>
                    Currency type
                </p>

                <select value={selectedcurrency} onChange={(e)=>{oncurrencyChange&& oncurrencyChange(e.target.value)}} disabled={currencyDisabled}>
                    {currencyoptions.map((value)=>(
                        <option  key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            
        </div>
    )
}

export default Input