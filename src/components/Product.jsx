import React from "react";
import '../css/product.css';

const ProductsPage = () => {
  return (
    <>
      <main>
       
        <div className="container">
          <div className="row">
            {[
              { img: "uniforms.png", title: "Uniforms", delay: ".2s" },
              { img: "coat_suit.png", title: "Coat & Suit", delay: ".4s" },
              { img: "mens_pant.png", title: "Men's Pant", delay: ".6s" },
              { img: "mens_shirt.png", title: "Men's Shirt", delay: ".8s" },
            ].map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-product mb-50 wow fadeInUp" data-wow-delay={product.delay}>
                  <div className="product-img">
                    <img src={`../src/assets/${product.img}`} alt={product.title} />
                  </div>
                  <div className="product-cap">
                    <h3><a href="#">{product.title}</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     

        Why Choose Our Products Section
        <section className="features-area section-padding40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-9">
                <div className="section-tittle text-center mb-60">
                  <h2>Why Choose Our Products?</h2>
                  <p>We provide high-quality tailored products made from premium materials to ensure comfort and durability.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                { img: "quality.svg", title: "Premium Quality", delay: ".2s" },
                { img: "custom_fit.svg", title: "Custom Fit", delay: ".3s" },
                { img: "durability.svg", title: "Long-Lasting", delay: ".4s" },
                { img: "style.svg", title: "Modern Designs", delay: ".5s" },
              ].map((feature, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-feature mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay={feature.delay}>
                    <div className="feature-icon">
                      <img src={`../src/assets/${feature.img}`} alt={feature.title} />
                    </div>
                    <div className="feature-cap">
                      <h5>{feature.title}</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsPage;