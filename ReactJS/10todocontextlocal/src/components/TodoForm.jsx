import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts/index';
function TodoForm(){
    const [todo,setTodo]=useState("");
    const {addtodo}=useTodo();
    const add=(e)=>{
        e.preventDefault();

        addtodo(
            {todo,completed:false}
        )
        setTodo("");

    }
    return (
        <div>
           <form >
            <input type="text" className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" value={todo} placeholder="enter todo.." onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={add}>add</button>
            </form> 
        </div>
    )
}

export default TodoForm;

