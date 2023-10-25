import axios from "axios"

const initialValue = {
  todos: [],
  isLoading: false,
  error: ""
}

function todoReducer(state = initialValue, action) {
  switch(action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading: true
      }
    case "SUCCESS_GET_TODO":
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      }
    default: return state
  }
}

function startFetching() {
  return {
    type: "START_FETCHING"
  }
}

function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data
  }
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(startFetching())

    const {data} = await axios("https://643e1624c72fda4a0bed5b7f.mockapi.io/todo")

    dispatch(successGetTodo(data))
  }
}

export default todoReducer