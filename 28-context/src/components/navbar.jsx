function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center p-2 bg-red-200">
      <h1 className="font-bold text-2xl">Logo</h1>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Todo</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
