import React from 'react'
import todo  from './todo'
const todolist = ({todos,setTodos}) => {
  return (
    <div  className='todo-ul'>
        <ul>
            {todos.map((todo)=>(
            <todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}/>
            ))}
        </ul>
      
    </div>
  )
}

export default todolist
