import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch()
  const { todos } = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.value}</span>
          <button>✏️</button>
          <button onClick={() => handleDelete(todo.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
