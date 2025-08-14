import React,{useState} from 'react'
import Form from './components/form';
import Todolist from './components/todolist';
function App() {
  const[todos,setTodos]=useState([]);
  return (
    <div className="App">
      <div className='todolist'>
        <h1>TodoList-App</h1>
        <div><Form todos={todos} setTodos={setTodos}/></div>
        <div><Todolist todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  );
}

export default App;
