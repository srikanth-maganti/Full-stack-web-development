import { useState } from "react";
import "./Lottery.css"
import {genticket,sum} from "./helper.js"
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

function Lottery({n=3,winningfun})
{   let [ticket ,setticket]=useState(genticket(n))
    let iswinned=winningfun(ticket);

    function buyticket()
    {
        setticket(genticket(n));
    }
    return(
        <>
        <div className="ticket">
            <Ticket ticket={ticket}/>
        </div>
        <br />
            <Button action={buyticket}/>
        <div>
            {iswinned && "congrats you win"}
        </div>
        </>
    )
}

export default Lottery;