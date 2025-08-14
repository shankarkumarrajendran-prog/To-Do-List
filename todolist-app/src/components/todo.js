import React from 'react'

const todo = ({todo,todos,setTodos,id}) => {
    const onchangeedit =() =>{}
  return (
    <div className='todo-li'>
      <li className='li-list'>

        <input className='li-input' value={todo.name} onChange={onchange}/>
        <button className='button-complete'>
            <span className='text-complete'>complete</span><i className='fa fa-check'></i>
        </button>

        <button className='button-edit'>
            <span className='text-edit'>edit</span><i className='fa fa-edit'></i>
        </button>

        <button className='button-delete'>
            <span className='text-delete'>delete</span><i className='fa fa-trash'></i>
        </button>
      </li>
      
    </div>
  )
}

export default todo
