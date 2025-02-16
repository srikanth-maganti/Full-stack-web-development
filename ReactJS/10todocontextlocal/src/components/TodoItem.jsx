import React from 'react'
import {useState} from 'react'
import {useTodo} from '../contexts/index'
function TodoItem({todo}){
    const [iseditable,setiseditable]=useState(false);
    const [todomsg,settodomsg]=useState(todo.todo);
    const {updatetodo,deletetodo,togglecomplete}=useTodo();

    const edittodo=()=>{
        updatetodo(todo.id,{...todo,todo:todomsg});
        setiseditable(false);
    }
    const togglecompleted=()=>{
        togglecomplete(todo.id);
    }

    return (
        <div  className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}>
            <input type="checkbox" className="cursor-pointer" checked={todo.completed} onChange={togglecompleted}/>
            <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${
                  iseditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}value={todomsg} onChange={(e)=>settodomsg(e.target.value)} readOnly={!iseditable} />
            <button  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    if(todo.completed)
                        return;
                    if(iseditable)
                    {
                        edittodo();
                    }
                    else
                    {
                        setiseditable((prev)=>!prev);
                    }
                }}
                disabled={todo.completed}
            > {iseditable ? "📁" : "✏️"}</button>
            <button
            
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deletetodo(todo.id)}
          >
              ❌
                
            </button>
        </div>
    )
}

export default TodoItem;