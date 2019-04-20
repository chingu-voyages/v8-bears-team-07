import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          WIIYF
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
