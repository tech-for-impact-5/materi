import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // <>
      <header className="flex flex-row justify-between items-center p-2 bg-red-200">
        <h1 className="font-bold text-2xl">Logo</h1>
        <nav>
          <ul className="flex flex-row gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/login">Login</NavLink>
          </ul>
        </nav>
      </header>
    // </>
  );
}

export default Navbar;
