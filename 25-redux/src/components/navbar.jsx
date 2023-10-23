import React from "react";
import CartInfo from "./cart-info";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Logo</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <CartInfo />
    </div>
  );
}

export default Navbar;
