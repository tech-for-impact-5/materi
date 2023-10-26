import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInput() {
  const {
    todos,
    setTodos,
    todoInput,
    setTodoInput,
    isEdit,
    todoEdit,
    setIsEdit,
  } = useContext(TodoContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
    } else {
      let newTodo = {
        id: new Date(),
        value: todoInput,
        status: false,
      };

      setTodos([...todos, newTodo]);
    }

    setTodoInput("");
  };

  return (
    <form className="flex flex-row justify-between">
      <input
        className="p-2 w-[100%] border-solid border-black border-2"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="p-2 border-solid border-black border-2"
        onClick={handleClick}
      >
        {isEdit ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default TodoInput;
