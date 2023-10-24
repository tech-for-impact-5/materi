import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    console.log(input);
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="input todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default InputTodo;
