import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import ListPokemon from "./components/list-pokemon";
import DetailPokemon from "./components/detail-pokemon";

import { useState } from "react";
import Login from "./components/login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "active-link"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "active-link"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => isActive && "active-link"}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokemon"
              className={({ isActive }) => isActive && "active-link"}
            >
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive && "active-link"}
            >
              Login
            </NavLink>
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
        <Route path="/pokemon/:id" element={<DetailPokemon />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
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
