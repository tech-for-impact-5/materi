import { useState } from "react"

function Counter () {

  const [count, setCount] = useState(0)

  const increment = () => {
    console.log("dari tombol plus");
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter