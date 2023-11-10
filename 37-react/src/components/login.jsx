import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const {data} = await axios.post("https://busy-rose-coati-hat.cyclic.app/auth/login", user)
    
    localStorage.setItem("token", data.token)
    localStorage.setItem("userId", data.userId)

    // navigate ke halaman todo
  }

  return (
    <form>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />{" "}
      <br />
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;
