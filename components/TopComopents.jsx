import React, { useState } from "react";
import { FaUser, FaInfoCircle, FaBoxOpen, FaCogs, FaBars, FaTimes } from "react-icons/fa";
import "../css/header.css"; 
import logo from "../assets/logo.jpeg"; 

const TopComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        {/* Left Side - Logo and Name */}
        <div className="logo-container">
          <img src={logo} alt="Lovely Logo" className="logo-img" />
          <h1 className="logo-text">Lovely-Garments</h1>
        </div>

        {/* Right Side - Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="header-icons desktop-menu">
          <div className="icon-text">
            <FaUser className="icon" />
            <a href="#/">Home</a>
          </div>
          <div className="icon-text">
            <FaInfoCircle className="icon" />
            <a href="#/abouts">About</a>
          </div>
          <div className="icon-text">
            <FaBoxOpen className="icon" />
            <a href="#/products">Products</a>
          </div>
          <div className="icon-text">
            <FaCogs className="icon" />
            <a href="#/about">Services</a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-dropdown">
          <a href="#/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#/abouts" onClick={() => setIsOpen(false)}>About</a>
          <a href="#/products" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#/about" onClick={() => setIsOpen(false)}>Services</a>
        </div>
      )}
    </header>
  );
};

export default TopComponents;
