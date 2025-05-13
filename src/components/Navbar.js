import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link
        to="/todos"
        style={{ margin: "10px", textDecoration: "none", color: "blue" }}
      >
        Todos
      </Link>
      <Link
        to="/contact"
        style={{ margin: "10px", textDecoration: "none", color: "blue" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
