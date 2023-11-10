import { Link, Navigate, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Login from "./components/login";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getDataUser();
  }, []);

  console.log(user);

  const getDataUser = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data);
  };

  return (
    <>
      <nav>
        <Link to="/todo">Todo</Link> <br />
        {user ? (
          <Link to="/profile">{user.name}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
