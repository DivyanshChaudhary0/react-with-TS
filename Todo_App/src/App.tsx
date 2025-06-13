
import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import TodoList from "./Components/TodoList"

export interface Todos {
  id: number,
  todo: string,
  isDone: boolean
}

function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([
    { id: 1, todo: "Sample Task", isDone: false }
  ]);
  const [update, setUpdate] = useState<boolean>(false);
  const [id, setId] = useState<null | number>(null);


  function handleSubmit(){
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
    }
    setTodo("");
  }


  return (
    <div className='container'>
      <h1>Todo List with typescript</h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} update={update} />
      <TodoList todos={todos} setTodos={setTodos} setUpdate={setUpdate} setTodo={setTodo} setId={setId} />
    </div>
  )
}

export default App
