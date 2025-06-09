
import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'

function App() {

  const [todo, setTodo] = useState<string>("")

  return (
    <>
      <h1>Todo List</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </>
  )
}

export default App
