function handleFormsubmit(event){
    event.preventDefault();
    console.log("form submitted succesfully");
}


function Form(){
    return(
        <form>
            <input type="text" placeholder="enter name" />
            <button onClick={handleFormsubmit}>submit</button>
        </form>
    );
}

export default Form;