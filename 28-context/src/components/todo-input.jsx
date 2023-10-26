import React from "react";

function TodoInput() {
  return (
    <form className="flex flex-row justify-between">
      <input
        className="p-2 w-[100%] border-solid border-black border-2"
        type="text"
        name=""
        id=""
      />
      <button className="p-2 border-solid border-black border-2">Add</button>
    </form>
  );
}

export default TodoInput;
