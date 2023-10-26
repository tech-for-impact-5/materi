import React from "react";

function Todo() {
  return (
    <div className="mt-12 p-4 w-[70vw]">
      <form className="flex flex-row justify-between">
        <input
          className="p-2 w-[100%] border-solid border-black border-2"
          type="text"
          name=""
          id=""
        />
        <button className="p-2 border-solid border-black border-2">Add</button>
      </form>

      <div>
        <div className="flex flex-row justify-between">
          <span>Hallo</span>
          <div>
            <button>✏️</button>
            <button>❌</button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span>Hallo</span>
          <div>
            <button>✏️</button>
            <button>❌</button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span>Hallo</span>
          <div>
            <button>✏️</button>
            <button>❌</button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="font-bold text-xs">3 todo</div>
      </div>
    </div>
  );
}

export default Todo;
