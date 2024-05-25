import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    let [todos,settodos]=useState([{task:"sample task",id:uuidv4(),isdone:false}]);
    let [newtask,setnewtask]=useState("");

    let addnewtask=(event)=>{
        
        setnewtask(event.target.value);
    }
    let addtask=()=>{
        settodos((prev)=>{
            return [...prev,{task:newtask,id:uuidv4(),isdone:false}];
        
        })
        setnewtask("");
    }

    function deletetask(id)
    {
    //    settodos((prev)=>todos.filter((prev)=>prev.id!=id));
    settodos(todos.filter((todo)=>todo.id!=id));
          
    }

    function uppercaseall()
    {
        settodos((prevtodos)=>prevtodos.map((todo)=> {
             return {
                ...todo,
                task:todo.task.toUpperCase()
            }}));
        
    }

    function uppercaseone(id){
        settodos((prevtodos)=>prevtodos.map((todo)=>{
            if(todo.id===id)
            {
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
            }
            else{
                return todo
                
            }
        })

        )
    }

    function doneone(id)
    {
        settodos((prevtodos)=>prevtodos.map((todo)=>{
            if(todo.id===id)
            {
                return {
                    ...todo,
                    isdone:true,
                }
            }
            else{
                return todo;
            }

         }))
        

    }

    function doneall()
    {   
        settodos((prevtodos)=>prevtodos.map((todo)=>{
            
            return {
                ...todo,
                isdone:true,
        }}))
        

    }
    let styles={textDecoration:"line-through"};
    return(
        <div>
            <input type="text" placeholder="enter task" onChange={addnewtask} value={newtask}/>
            <button onClick={addtask} >Add task</button>
            <br /><br /><br />
            <hr />
            <h4>Todo list</h4>
            <ul>
                
                {todos.map((task)=>
                
                <li key={task.id}>
                    {task.isdone?<del>{task.task}</del>:<>{task.task}</>}
                    &nbsp;&nbsp;&nbsp;
                    <span><button onClick={()=>{deletetask(task.id)}}>delete</button><button onClick={()=>{uppercaseone(task.id)}}>uppercase</button><button onClick={()=>{doneone(task.id)}}>done</button></span>
                    
                    </li>)}
            
            </ul>
            <button onClick={uppercaseall}>Uppercase all</button>
            <button onClick={doneall}>done all</button>
        </div>
    )
}

export default Todo;