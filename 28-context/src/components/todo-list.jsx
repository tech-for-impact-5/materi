import React, { useContext } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoList() {
  const { todos } = useContext(TodoContext);
  // console.log(data);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex flex-row justify-between">
          <span>{todo.value}</span>
          <div>
            <button>✏️</button>
            <button>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
