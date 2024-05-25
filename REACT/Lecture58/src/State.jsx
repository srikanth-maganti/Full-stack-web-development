import {useState} from "react"
function init(){
    console.log("called");
    return Math.random();
}
function State()
{
    // let count=0;
    let [count,setcount]=useState(init); //initialization
    // console.log(count);// count value after rerendering

    function increment(){
        // count+=1;
        // setcount(count+1);
        // console.log(count);//count value before rerendering

        setcount((currcount)=>{
            return currcount+1;
        });

        setcount((currcount)=>{
            return currcount+1;
        })
    }
    return (
        <div>
            <h1>
                count={count}
            </h1>
            <button onClick={increment}>inc++</button>
        </div>
    )
}
export default State;