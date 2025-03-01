import React from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "../css/header.css"; // Ensure this CSS file exists
import logo from "../assets/logo.jpeg"; // Add your logo in the 'assets' folder

const TopComopents = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Lovely Logo" className="logo-img" />
          <h1 className="logo-text">Lovely</h1>
        </div>
      
        <div className="header-icons">
          <div className="icon-text">
            <FaUser className="icon" />
            <span>Account</span>
          </div>
          <div className="icon-text">
            <FaShoppingBag className="icon" />
            <span>Shopping</span>
          </div>
        </div>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="/products">Products</a>
        <a href="/about">Service</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default TopComopents;
