import { useEffect, useState } from 'react'
import { useTodo,TodoProvider} from './contexts/index'
import {TodoForm,TodoItem} from "./components/index"


function App() {
  const [todos,settodo]=useState([]);
  const addtodo=(todo)=>{
      settodo((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updatetodo=(id,todo)=>{
     settodo((prev)=>prev.map((prevtodo)=>prevtodo.id==todo.id?todo:prevtodo));
  }
  const deletetodo=(id)=>{
     settodo((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id));
  }

  const togglecomplete=(id)=>{
    settodo((prev)=>prev.map((prevtodo)=>
      prevtodo.id==id?{...prevtodo,completed:!prevtodo.completed}:prevtodo
    ))

  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos&& todos.length>0)
    {
      settodo(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  

  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}
export default App
