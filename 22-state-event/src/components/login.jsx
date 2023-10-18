import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault()
    console.log(username);
    console.log(password);
    setUsername("")
    setPassword("")
  }

  return (
    <form>
      <h1>Login</h1>
      <input 
        type="text" 
        name="username" 
        placeholder="username" 
        value={username}
        onChange={handleUsername}
      /> <br />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={password}
        onChange={handlePassword}
      /> <br />
      <button onClick={login}>Login</button>
    </form>
  );
}

export default Login;
