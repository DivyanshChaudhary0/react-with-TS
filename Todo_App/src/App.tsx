
import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'

function App() {

  const [todo, setTodo] = useState<string>("")

  return (
    <div className='container'>
      <h1>Todo List with typescript</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
