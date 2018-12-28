import React from "react";

import { NavLink } from "react-router-dom";
//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="bagde badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#testing"
          aria-controls="testing"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="collapse navbar-collapse" id="testing">
          <ul className="navbar-nav smooth-scroll ml-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </ul>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
