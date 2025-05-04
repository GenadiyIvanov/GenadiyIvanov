import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage")); // за реактивност, ако трябва
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      {!isAuthenticated && <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>}
      {!isAuthenticated && <Link to="/register">Register</Link>}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
