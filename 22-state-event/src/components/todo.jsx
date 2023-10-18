import React, { useState } from 'react'

function Todo() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([
    {id: 1, todo: "belajar react"},
    {id: 2, todo: "belajar state"},
    {id: 3, todo: "buat todo"},
  ])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    
    let newTodo = {
      id: todos[todos.length-1].id + 1,
      todo: input
    }
    
    // cara 1
    // let cloneTodos = [...todos]
    // cloneTodos.push(newTodo)
    // setTodos(cloneTodos)

    // cara 2
    setTodos([
      ...todos,
      newTodo
    ])
  }

  const deleteTodo = (id) => {
    console.log(id);
    let newTodos = todos.filter(item => item.id != id)
    setTodos(newTodos)
  }
 
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input 
          type="text" 
          name='todo' 
          placeholder='new todo'
          value={input}
          onChange={handleInput}
        />
        <button onClick={addTodo}>Add</button>
      </form>

      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <span>{item.todo}</span>
            <button onClick={() => deleteTodo(item.id)}>x</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Todo