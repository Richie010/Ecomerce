import React from "react";
import '../css/product.css';

// Import images from src/assets
<img src="/assets/school-pants.jpg" alt="school-pants" />;
<img src="/assets/school-shorts.jpeg" alt="school-shorts" />;
<img src="/assets/girls-uniform.jpg" alt="girls-uniform" />;
<img src="/assets/school-skirt.jpg" alt="school-skirt" />;
<img src="/assets/blazers.jpg" alt="blazers" />;
<img src="/assetsblazer-women.jpg" alt="blazer-women" />



// import schoolpants from "/assets/school-pants.jpg";
// import schoolshorts from "/assets/school-shorts.jpeg";
// import girlsuniform from "/assets/girls-uniform.jpg";
// import schoolskirt from "/assets/school-skirt.jpg";
// import blazer from "/assets/blazers.jpg";
// import blazerwomen from "/assets/blazer-women.jpg";
// import coatsuitformal from "/assets/coat suit formal.jpg";
// import wedingoats from "/assets/wedingcoats.jpg";
// import pants from "/assets/pants.jpg";
// import shirts from "/assets/shirt.jpg";
// import formalpant from "/assets/formalpants.jpeg";
// import formalshirt from "/assets/formalshirts.jpg";
import { FaWhatsapp } from "react-icons/fa"


const ProductsPage = () => {
  const uniforms = [
    { img: schoolpants, title: "School Pants", description: "Comfortable and durable school pants for students.", delay: ".2s" },
    { img: schoolshorts, title: "School Shorts", description: "Stylish school shorts designed for active students.", delay: ".4s" },
    { img: girlsuniform, title: "Girls' Uniform", description: "Smart and elegant uniforms for active girls.", delay: ".6s" },
    { img: schoolskirt, title: "School Skirt", description: "Classic school skirts with high-quality fabric.", delay: ".8s" },
  ];

  const blazersAndCoats = [
    { img: blazer, title: "Men's Blazer", description: "Premium quality blazers for formal and casual wear.", delay: ".2s" },
    { img: blazerwomen, title: "Women's Blazer", description: "Elegant and stylish blazers for professional women.", delay: ".4s" },
    { img: coatsuitformal, title: "Formal Coat & Suit", description: "Perfect for business meetings and special occasions.", delay: ".6s" },
    { img: wedingoats, title: "Wedding Suits", description: "Premium wedding suits for a perfect look.", delay: ".8s" },
  ];

  const mensCollection = [
    { img: pants, title: "Casual Trousers", description: "Comfortable and stylish casual trousers.", delay: ".2s" },
    { img: shirts, title: "Men's Shirts", description: "Trendy shirts for all occasions.", delay: ".4s" },
    { img: formalpant, title: "Formal Trousers", description: "Perfect fit formal trousers for office and events.", delay: ".6s" },
    { img: formalshirt, title: "Formal Shirts", description: "Premium quality formal shirts with a stylish touch.", delay: ".8s" },
  ];

  return (
    <main className="products-main">
      {/* 📌 Uniforms Section */}
      <div className="container">
        <h2 className="section-title">School Uniforms</h2>
        <div className="row">
          {uniforms.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-product mb-50 wow fadeInUp" data-wow-delay={product.delay}>
                <div className="product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-cap">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="whatsapp-icon" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000", animation: "vibrate 1s infinite" }}>
              <a href="tel:+1234567890" style={{ color: "#25D366", fontSize: "40px" }}>
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
      

      {/* 📌 Blazers & Coat Suit Section */}
      <div className="container">
        <h2 className="section-title">Blazers & Coat Suits</h2>
        <div className="row">
          {blazersAndCoats.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-product mb-50 wow fadeInUp" data-wow-delay={product.delay}>
                <div className="product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-cap">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📌 Men's Collection Section */}
      <div className="container">
        <h2 className="section-title">Men's Collection</h2>
        <div className="row">
          {mensCollection.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-product mb-50 wow fadeInUp" data-wow-delay={product.delay}>
                <div className="product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-cap">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
