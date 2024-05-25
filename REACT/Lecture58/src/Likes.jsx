import {useState} from "react"
function Likes(){
    let [isliked,setisliked]=useState(false);
    let [clicks,setclicks]=useState(0);

    function toggle()
    {
        setisliked(!isliked);
        setclicks(clicks+1);
    }

    return (
        <div>
            <p>clicks={clicks}</p>
            <p onClick={toggle}>{isliked ? <i className="fa-solid fa-heart" style={{color:"red"}}></i>:<i className="fa-regular fa-heart"></i>}</p>
        </div>
    )
}

export default Likes