
function printhello(){
    console.log("hellooo");
}

function handlemouseover(){
    console.log("mouse entered");
}
function Event(){
    return (
        <div>
            <button onClick={printhello}>click</button>
            <p onMouseOver={handlemouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa error consequuntur pariatur, reprehenderit animi doloremque, blanditiis nemo nam distinctio corrupti deserunt labore accusantium officia qui, suscipit iure quod. Et!</p>
        </div>
    );
}

export default Event;