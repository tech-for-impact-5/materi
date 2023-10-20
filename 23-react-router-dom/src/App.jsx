import { Link, Navigate, Route, Routes } from "react-router-dom";
import ListPokemon from "./components/list-pokemon";
import { useState } from "react";
import Login from "./components/login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <h3>isLogin : {`${isLogin}`}</h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/pokemon" element={<ListPokemon />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />

      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default App;
