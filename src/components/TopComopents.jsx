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
        <a href="#">Coat & Suit Blazers</a>
        <a href="#">Clothing</a>
        <a href="#">Home & Living</a>
        <a href="#">Wedding & Party</a>
        <a href="#">Uniforms</a>
        <a href="#">Art & Collectibles</a>
        <a href="#">Safari & Mens</a>
      </nav>
    </header>
  );
};

export default TopComopents;
