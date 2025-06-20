
import type { Todos } from "../App"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

interface props {
  todos: Todos[],
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  setId: React.Dispatch<React.SetStateAction<number | null>>
}

const TodoList: React.FC<props> = ({todos, setTodos, setTodo, setUpdate, setId}) => {

  function handleEdit(id: number, val: string): void{
    setTodo(val);
    setId(id);
    setUpdate(true);
  }

  function handleDelete(id: number): void{
    const newTodos = todos.filter((val) => val.id !== id);
    setTodos(newTodos);
  }

  function handleDone(id: number): void{
    const newTodos = todos.map((val) => {
      if(val.id === id){
        return {...val, isDone: !val.isDone }
      }
      return val;
    })

    setTodos(newTodos);
  }


  return (
    <div className="todo_container">
      {
        todos.map((todo) => {
          return(
            <div key={todo.id} className="single_todo">
              <span className={todo?.isDone ? "line" : ""}> {todo.todo} </span>
              <div className="icons">
                <MdEdit cursor="pointer" onClick={() => handleEdit(todo.id, todo.todo)} />
                <MdDelete cursor="pointer" onClick={() => handleDelete(todo.id)} />
                <IoMdDoneAll cursor="pointer" onClick={() => handleDone(todo.id)} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList