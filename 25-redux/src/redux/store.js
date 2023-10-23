import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter-reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store