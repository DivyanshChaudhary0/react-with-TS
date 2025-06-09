

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: props) => {

  return (
    <form className="form">
        <input 
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="input_field"
        />

        <button className="input_btn">Add task</button>
    </form>
  )
}

export default InputField