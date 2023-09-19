import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <h1 class="logo">MAQ</h1>
        <ul class="nav-items">
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favoritepersonalities">
              Favorite Personalities
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favoritecities">
              Favorite Cities
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favoritetouristspots">
              Favorite Tourist Spots
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
