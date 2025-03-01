import React from "react";
import '../css/service.css';

const TailoringService = () => {
  return (
    <>
      {/* Preloader Start
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="Loader" />
            </div>
          </div>
        </div>
      </div> */}
      {/* Preloader End */}

    

      <main>
    
      
          
               


     

      
          <div className="container">
            <div className="row">
              {[
                { img: "offers1.png", title: "Tailor Sewing", delay: ".2s" },
                { img: "offers2.png", title: "Measurement", delay: ".4s" },
                { img: "offers3.png", title: "Ready-made", delay: ".6s" },
              ].map((offer, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-offers mb-50 wow fadeInUp" data-wow-delay={offer.delay}>
                    <div className="offers-img">
                      <img src={`../src/assets/${offer.img}`} alt={offer.title} />
                    </div>
                    <div className="offers-cap">
                      <span>{index + 1}</span>
                      <h3><a href="services.html">{offer.title}</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      
        <div className="video-area section-bg2 d-flex align-items-center"
          style={{ backgroundImage: "url('assets/img/gallery/video-bg.png')" }}>
          <div className="container">
            <div className="video-wrap position-relative">
              <div className="video-icon">
                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      
        <section className="categories-area section-padding40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-9">
                <div className="section-tittle text-center mb-60">
                  <h2>Why use our service?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
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
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay={service.delay}>
                    <div className="cat-icon">
                      <img src={`../src/assets/${service.img}`} alt={service.title} />
                    </div>
                    <div className="cat-cap">
                      <h5>{service.title}</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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

export default TailoringService;
