

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}

const InputField = ({todo, setTodo, handleSubmit}: props) => {

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
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