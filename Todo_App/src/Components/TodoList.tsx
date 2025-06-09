
import type { Todos } from "../App"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

interface props {
  todos: Todos[],
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className="todo_container">
      {
        todos.map((todo) => {
          return(
            <div className="single_todo">
              <span>{todo.todo}</span>
              <div className="icons">
                <MdEdit/>
                <MdDelete/>
                <IoMdDoneAll/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList