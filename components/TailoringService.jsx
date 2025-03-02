import React from "react";
import '../css/service.css';
import { FaWhatsapp } from "react-icons/fa";

const TailoringService = () => {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="container">
            <div className="row">
              {[{ img: "offers1.png", title: "Tailor Sewing", description: "Expert tailoring services to create custom-fitted garments with precision and care.", delay: ".2s" },
                { img: "offers2.png", title: "Measurement", description: "Accurate body measurements to ensure the perfect fit for every outfit.", delay: ".4s" },
                { img: "offers3.png", title: "Ready-made", description: "A collection of stylish and high-quality ready-made garments for every occasion.", delay: ".6s" }].map((offer, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-offers mb-50 wow fadeInUp" data-wow-delay={offer.delay}>
                    <div className="offers-img">
                      <img src={new URL(`../assets/${offer.img}`, import.meta.url).href} alt={offer.title} />
                    </div>
                    <div className="offers-cap">
                      <span>{index + 1}</span>
                      <h3><a href="services.html">{offer.title}</a></h3>
                      <p>{offer.description}</p>
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
              body {
                font-family: 'Poppins', sans-serif;
                color: #333;
              }

              .main-container {
                padding: 20px;
              }

              .single-offers, .single-cat {
                background: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease-in-out;
              }

              .single-offers:hover, .single-cat:hover {
                transform: translateY(-5px);
              }

              .whatsapp-icon {
                background: #25D366;
                padding: 10px;
                border-radius: 50%;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              }

              @keyframes vibrate {
                0%, 100% { transform: translate(0, 0); }
                25% { transform: translate(-2px, 2px); }
                50% { transform: translate(2px, -2px); }
                75% { transform: translate(-2px, -2px); }
              }
            `}
          </style>

          <section className="categories-area section-padding40">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-9">
                  <div className="section-tittle text-center mb-60">
                    <h2>Why use our service?</h2>
                    <p>We provide top-notch tailoring services for a perfect fit.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {[{ img: "services1.svg", title: "Tailor Sewing", delay: ".2s" },
                  { img: "services2.svg", title: "Custom Fitting", delay: ".3s" },
                  { img: "services3.svg", title: "Alterations", delay: ".4s" },
                  { img: "services4.svg", title: "Fabric Selection", delay: ".5s" }].map((service, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay={service.delay}>
                      <div className="cat-icon">
                        <img src={new URL(`../assets/${service.img}`, import.meta.url).href} alt={service.title} />
                      </div>
                      <div className="cat-cap">
                        <h5>{service.title}</h5>
                        <p>High-quality materials and expert craftsmanship.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TailoringService;
