import React from "react";
import "../css/style.css"; 

const Header = () => {
  return (
    <div className="top-main">
      <div className="overlap">
        <div className="content">
          <h1 className="text-wrapper">Collections</h1>
          <p className="text">
            You can explore and shop many different collections from various brands here.
          </p>
          <button className="button-instance">🛍️ Shop Now</button>
        </div>

        <div className="image-container">
          <img
            className="fashion-image"
            alt="Fashion Model"
            src="../src/assets/hedar.jpg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
