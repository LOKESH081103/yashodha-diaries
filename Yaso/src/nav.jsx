import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./assets/yaso_logo.png";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/home.jsx" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>
            Our Products ▼
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/product1">Product 1</NavLink></li>
            <li><NavLink to="/product2">Product 2</NavLink></li>
            <li><NavLink to="/product3">Product 3</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/shop_here.jsx" className={({ isActive }) => isActive ? "active-link" : ""}>
            Shop Here
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="navbar-cart">
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
          <FaShoppingCart size={24} />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
