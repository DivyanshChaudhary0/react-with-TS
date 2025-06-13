

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    update: boolean
    handleSubmit: () => void
}

const InputField = ({todo, setTodo, handleSubmit, update}: props) => {

  return (
    <div className="form">
        <input 
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="input_field"
        />
        {update ? <button className="input_btn"> Update </button> : <button onClick={handleSubmit} className="input_btn">Add task</button>}
    </div>
  )
}

export default InputField