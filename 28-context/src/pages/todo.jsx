import React from "react";
import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";
import TodoInfo from "../components/todo-info";

function Todo() {
  return (
    <div className="mt-12 p-4 w-full">
      <TodoInput />
      <TodoList />
      <TodoInfo />
    </div>
  );
}

export default Todo;
