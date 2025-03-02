import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Shop Details */}
        <div className="footer-details">
          <h2 className="shop-name">Lovely-Garments</h2>
          <p>
            At Lovely Fashion, we bring you the latest trends with a touch of elegance and comfort. 
            Our collections are carefully curated to meet your fashion needs, ensuring style and quality in every piece.
          </p>

          <div className="footer-address">
            <p><strong>Address:</strong></p>
            <p>N0.66A, Mari Amman Kovil Street,</p>
            <p>Nesapakkam, West KK Nagar,</p>
            <p>Chennai - 600 078</p>

            <p><strong>Email:</strong> contact@lovelyfashion.com</p>
            <p><strong>Phone:</strong> +91 9841647361</p>
          </div>
        </div>

        {/* Right Side: Google Map */}
        <div className="footer-map">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.936873950188!2d80.18949357321101!3d13.039690113385603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670b30f3addf%3A0x2cf6bf98fa559adc!2sLovely%20Garments!5e0!3m2!1sen!2sin!4v1740936607933!5m2!1sen!2sin" 
            width="100%"
            height="180"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      
      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Lovely Fashion. All rights reserved. | Designed by <strong>TechSys</strong></p>
      </div>

      <style>
        {`
          .footer-address p {
            margin: 2px 0;
            font-size: 14px;
            line-height: 1.5;
          }

          .footer-address strong {
            display: block;
            margin-top: 8px;
            font-size: 16px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
