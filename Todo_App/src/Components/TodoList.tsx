
import type { Todos } from "../App"

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
            <div>
              <span>{todo.todo}</span>
              <div>
                
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList