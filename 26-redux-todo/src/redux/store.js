import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducer";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default store