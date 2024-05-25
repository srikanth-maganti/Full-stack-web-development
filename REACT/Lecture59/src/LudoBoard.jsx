import { useState } from "react";
function LudoBoard(){
    let [moves,setmoves]=useState({blue:0,red:0,green:0,yellow:0})
    let [arr,setarr]=useState(["no moves"]);
    function incblue(){ 
        setmoves((prevmoves)=>{
            return {...prevmoves,blue:prevmoves.blue+1};

        });  
        // setarr([...arr,"bluemoves"]);
        setarr((prev)=>{
            return [...prev,"bluemoves"];
        })
    }

    function incred(){ 
        setmoves((prevmoves)=>{
            return {...prevmoves,red:prevmoves.red+1};

        });  
        setarr((prev)=>{
            return [...prev,"redmoves"];
        })
    }

    function incgreen(){ 
        setmoves((prevmoves)=>{
            return {...prevmoves,green:prevmoves.green+1};

        });  
    }

    function incyellow(){ 
        setmoves((prevmoves)=>{
            return {...prevmoves,yellow:prevmoves.yellow+1};

        });  
    }

    return(
        <div>
            <p>Game starts now...!</p>
            <p>{arr}</p>
            <div>
                <p>blue moves={moves.blue}</p>
                <button className="blue" style={{backgroundColor:"blue"}} onClick={incblue} >+1</button>
                <p>red moves={moves.red}</p>
                <button className="red" style={{backgroundColor:"red"}} onClick={incred}>+1</button>
                <p>yellow moves={moves.yellow}</p>
                <button className="yellow" style={{backgroundColor:"yellow"}} onClick={incyellow}>+1</button>
                <p>green moves={moves.green}</p>
                <button className="green" style={{backgroundColor:"green"}} onClick={incgreen}>+1</button>
            </div>
        </div>
    )
}

export default LudoBoard;