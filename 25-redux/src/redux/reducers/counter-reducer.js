const initialState = {
  value: 0
}

function counterReducer (state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        value: state.value + 1
      } 
    case "decrement":
      return {
        value: state.value - 1
      } 
    default: return state
  }
}

export function increment () {
  return {
    type: "increment"
  }
}

export function decrement () {
  return {
    type: "decrement"
  }
}

export default counterReducer