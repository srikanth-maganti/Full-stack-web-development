import {useContext,createContext} from 'react'

const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"todo message",
        completed:false
    }],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:()=>{},
})

export function useTodo(){
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;