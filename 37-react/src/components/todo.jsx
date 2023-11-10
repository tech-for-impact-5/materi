import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState([])
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("userId")

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    const {data} = await axios.get(`https://busy-rose-coati-hat.cyclic.app/users/${id}/todos`, {
      headers: {
          'Authorization': `Bearer ${token}`,
      }
  })
    
    setTodos(data)
  }

  console.log(todos);

  return (
    <div>
      <h1>My Todo</h1>

      <form>
        <input type="text" />
        <button>add</button>
      </form>

      <div className='todo-list'>
        {todos.length == 0 ? <p>tidak ada todo</p> : todos.map(item => (
          <div className='todo-item' key={item._id}>
            <span>{item.value}</span>
            <button>✏️</button>
            <button>❌</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo