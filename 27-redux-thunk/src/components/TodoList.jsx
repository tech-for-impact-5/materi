import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../redux/reducers/todo-reducers";

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);
  const [input, setInput] = useState("")

  // console.log(isLoading, todos);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleClick = (e) => {
    e.preventDefault()
    let newTodo = {
      value: input,
      status: false
    }

    dispatch(addTodo(newTodo))
  }

  return (
    <div>
      <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
      </form>

      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          todos.map(todo => (
            <div key={todo.id}>
              <span>{todo.value}</span>
              <button>✏️</button>
              <button>❌</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
