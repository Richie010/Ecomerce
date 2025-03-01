import React from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "../css/header.css"; // Ensure this CSS file exists

const TopComopents = () => {
  return (
    <header className="header">
      <div className="header-top">
        <FaSearch className="icon search-icon" />
        <h1 className="logo">Lovely</h1>
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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      
      </nav>
    </header>
  );
};

export default TopComopents;
