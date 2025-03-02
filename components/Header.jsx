import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { FaShippingFast, FaHeadset, FaTags, FaTshirt, FaShoppingBag, FaGem, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f9f9f9", color: "#333" }}>
      <div className="row align-items-center py-5">
        {/* Text Content */}
        <div className="col-md-6 text-center text-md-start px-5">
          <h1 className="display-4 fw-bold">Welcome to Our Fashion Store</h1>
          <p className="lead">
            Discover exclusive collections from top brands. Explore our latest
            arrivals and shop in style. From everyday wear to premium fashion,
            we have something for everyone.
          </p>
          <p className="lead">
            Browse our wide range of clothing, including casual outfits,
            uniforms, formal suits, and luxury designer wear.
          </p>
          <button className="btn btn-warning btn-lg">🛍️ Shop Now</button>
        </div>

        {/* Moving Image Carousel */}
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img className="carousel-img" src="/assets/fasion3.jpeg" alt="Fashion 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src="/assets/fasion2.jpeg" alt="Fashion 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src="/assets/fasion5.jpeg" alt="Fashion 3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src="/assets/fasion4.jpeg" alt="Uniform Collection" />
            </Carousel.Item>
          </Carousel>


        </div>
      </div>
      {/* <div className="img-fluid"> */}
      <Carousel>
        {/* <div className="container text-center my-5"> */}


        <Carousel.Item>
          <img className="img-fluid" src="../src/assets/schoolall.webp" alt="Fashion Model" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="img-fluid " src="../src/assets/school1.jpg" alt="Fashion 1" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="img-fluid" src="../src/assets/scholset.jpeg" alt="Fashion 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid " src="../src/assets/hedar1.jpg" alt="Fashion 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="img-fluid" src="../src/assets/schoolall.webp" alt="Fashion 3" />
        </Carousel.Item>


      </Carousel>

      <div className="whatsapp-icon" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000", animation: "vibrate 1s infinite" }}>
        <a href="tel:+91 9841647361" style={{ color: "#25D366", fontSize: "40px" }}>
          <FaWhatsapp />
        </a>
      </div>



      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, -2px); }
            100% { transform: translate(2px, 2px); }
          }
        `}
      </style>



      {/* Services Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="lead">We offer a variety of fashion-related services to enhance your shopping experience.</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaShippingFast size={40} className="text-warning" />
              <h5>Fast Delivery</h5>
              <p>We ensure quick delivery to your doorstep with hassle-free shipping.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaHeadset size={40} className="text-warning" />
              <h5>24/7 Customer Support</h5>
              <p>Our support team is available round-the-clock to assist you with your shopping needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaTags size={40} className="text-warning" />
              <h5>Exclusive Discounts</h5>
              <p>Enjoy the best deals and offers on luxury brands and seasonal collections.</p>
            </div>
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="btn btn-primary" onClick={() => navigate("/services")}>
            View More →
          </button>
        </div>
      </div>

      {/* Fashion Model Image */}
      <div className="container text-center my-5">
        <img className="img-fluid" src="../src/assets/homme.jpg" alt="Fashion Model" />
      </div>

      {/* Featured Products */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Our Featured Products</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaTshirt size={40} className="text-warning" />
              <h5>Trendy Casual Wear</h5>
              <p>Comfortable and fashionable outfits for daily wear.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaShoppingBag size={40} className="text-warning" />
              <h5>Premium Uniforms</h5>
              <p>High-quality uniforms for professionals and students.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-white text-dark p-3 text-center">
              <FaGem size={40} className="text-warning" />
              <h5>Luxury Designer Wear</h5>
              <p>Elegant and sophisticated clothing for exclusive occasions.</p>
            </div>
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="btn btn-primary" onClick={() => navigate("/products")}>
            View More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
