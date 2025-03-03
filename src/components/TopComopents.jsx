import React, { useState } from "react";
import { FaUser, FaInfoCircle, FaBoxOpen, FaCogs, FaBars, FaTimes } from "react-icons/fa";
import "../css/header.css";
import logo from "../assets/logo.jpeg";

const TopComponents = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Lovely Logo" className="logo-img" />
          <h1 className="logo-text">Lovely-Garments</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`header-icons ${menuOpen ? "open" : ""}`}>
          <div className="icon-text">
            <FaUser className="icon" />
            <a href="/">Home</a>
          </div>
          <div className="icon-text">
            <FaInfoCircle className="icon" />
            <a href="/abouts">About</a>
          </div>
          <div className="icon-text">
            <FaBoxOpen className="icon" />
            <a href="/products">Products</a>
          </div>
          <div className="icon-text">
            <FaCogs className="icon" />
            <a href="/about">Services</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopComponents;
