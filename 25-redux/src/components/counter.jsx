import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counter-reducer';

function Counter() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const counterIncrement = () => {
    setCount(count + 1)
    dispatch(increment())
  }

  const counterDecrement = () => {
    setCount(count - 1)
    dispatch(decrement())
  }

  return (
    <div>
      <button onClick={counterDecrement}>-</button>
      <span>{count}</span>
      <button onClick={counterIncrement}>+</button>
    </div>
  )
}

export default Counter