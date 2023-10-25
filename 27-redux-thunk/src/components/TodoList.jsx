import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/reducers/todo-reducers";

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);

  console.log(isLoading, todos);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <form>
        <input type="text" name="" id="" />
        <button>Add</button>
      </form>

      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <div>
              <span>hallao</span>
              <button>✏️</button>
              <button>❌</button>
            </div>

            <div>
              <span>hallao</span>
              <button>✏️</button>
              <button>❌</button>
            </div>

            <div>
              <span>hallao</span>
              <button>✏️</button>
              <button>❌</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoList;
