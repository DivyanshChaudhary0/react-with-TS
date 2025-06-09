
import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'

interface Todos {
  id: number,
  todo: string,
  isDone: boolean
}

function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo, isDone: false}])
    setTodo("");
  }

  return (
    <div className='container'>
      <h1>Todo List with typescript</h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
