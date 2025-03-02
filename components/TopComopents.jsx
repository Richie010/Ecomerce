import React from "react";
import { FaUser, FaShoppingBag, FaInfoCircle, FaBoxOpen, FaCogs, FaPhone } from "react-icons/fa";
import "../css/header.css"; 
import logo from "/assets/logo.jpeg"; 

const TopComponents = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Lovely Logo" className="logo-img" />
          <h1 className="logo-text">Lovely-Garments</h1>
        </div>

        <div className="header-icons">
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
          {/* <div className="icon-text">
            <FaPhone className="icon" />
            <a href="/contact">Contact</a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default TopComponents;
