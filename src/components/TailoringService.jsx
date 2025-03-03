import React from "react";
import "../css/service.css";
import { FaWhatsapp } from "react-icons/fa";

const TailoringService = () => {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="container">
            <div className="row">
              {[
                {
                  img: "offers1.png",
                  title: "Tailor Sewing",
                  description:
                    "Expert tailoring services to create custom-fitted garments with precision and care.",
                  delay: ".2s",
                },
                {
                  img: "offers2.png",
                  title: "Measurement",
                  description:
                    "Accurate body measurements to ensure the perfect fit for every outfit.",
                  delay: ".4s",
                },
                {
                  img: "offers3.png",
                  title: "Ready-made",
                  description:
                    "A collection of stylish and high-quality ready-made garments for every occasion.",
                  delay: ".6s",
                },
              ].map((offer, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-offers mb-50 wow fadeInUp" data-wow-delay={offer.delay}>
                    <div className="offers-img">
                      <img src={`../src/assets/${offer.img}`} alt={offer.title} />
                    </div>
                    <div className="offers-cap">
                      <span>{index + 1}</span>
                      <h3>{offer.title}</h3>
                      <p>{offer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <div className="whatsapp-icon">
            <a href="tel:+1234567890">
              <FaWhatsapp />
            </a>
          </div>

          <section className="categories-area section-padding40">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-9 text-center">
                  <div className="section-title">
                    <h2>Why Choose Our Services?</h2>
                    <p>Experience premium tailoring with expert craftsmanship.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                {[
                  { img: "services1.svg", title: "Tailor Sewing", delay: ".2s" },
                  { img: "services2.svg", title: "Custom Fitting", delay: ".3s" },
                  { img: "services3.svg", title: "Alterations", delay: ".4s" },
                  { img: "services4.svg", title: "Fabric Selection", delay: ".5s" },
                ].map((service, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-cat mb-50">
                      <div className="cat-icon">
                        <img src={`../src/assets/${service.img}`} alt={service.title} />
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
