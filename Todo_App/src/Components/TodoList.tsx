
import type { Todos } from "../App"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

interface props {
  todos: Todos[],
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FC<props> = ({todos, setTodos}) => {

  function handleEdit(id: number): void{

  }

  function handleDelete(id: number): void{

  }

  function handleDone(id: number): void{

  }


  return (
    <div className="todo_container">
      {
        todos.map((todo) => {
          return(
            <div key={todo.id} className="single_todo">
              <span>{todo.todo}</span>
              <div className="icons">
                <MdEdit cursor="pointer" onClick={() => handleEdit(todo.id)} />
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