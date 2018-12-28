import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};
export default Navigation;
