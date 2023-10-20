import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setIsLogin}) {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault()
    console.log(user);
    // logic cek username dan password
    // jika lolos maka ubah setIsLogin
    setIsLogin(true)
    navigate("/pokemon")
  }

  return (
    <div>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='username' name="username"value={user.username} onChange={handleChange} /> <br />
        <input type="text" placeholder='password' name="password"value={user.password} onChange={handleChange}/> <br />
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login