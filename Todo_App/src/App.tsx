
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

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
    }
    setTodo("");
  }

  return (
    <div className='container'>
      <h1>Todo List with typescript</h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
