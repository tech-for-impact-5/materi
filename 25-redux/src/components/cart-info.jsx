import React from 'react'
import { useSelector } from 'react-redux'

function CartInfo() {
  const {value} = useSelector(state => state.counter)

  return (
    <div>cart {value}</div>
  )
}

export default CartInfo