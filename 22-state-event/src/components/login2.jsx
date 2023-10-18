import { useState } from "react";

function Login2() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }

  const login = (event) => {
    event.preventDefault()
    console.log(user);
  }

  return (
    <form>
      <h1>Login</h1>
      <input 
        type="text" 
        name="username" 
        placeholder="username" 
        value={user.username}
        onChange={handleInput}
      /> <br />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={user.password}
        onChange={handleInput}
      /> <br />
      <button onClick={login}>Login</button>
    </form>
  );
}

export default Login2;
