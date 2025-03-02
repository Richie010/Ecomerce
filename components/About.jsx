import React from "react";
<img src="/assets/coat.jpg" alt="school-pants" />;
<img src="/assets/school.jpg" alt="school-pants" />;
<img src="/assets/college.jpg" alt="school-pants" />;
import '../css/about.css';  // Make sure you create/update this CSS file
import { FaWhatsapp } from "react-icons/fa"


const aboutData = [
  {
    title: "Premium Coat & Suits",
    description: (
      <>
        <p>
          Our premium coats and suits are designed with top-notch tailoring techniques and high-quality fabrics. Whether you're dressing for a business meeting, a wedding, or a formal event, our suits provide the perfect balance of elegance and comfort.
        </p>
        <p>
          We offer a variety of styles, from modern slim fits to classic cuts, ensuring a perfect match for every personality. Our materials range from luxurious wool blends to lightweight linen, making them ideal for all seasons.
        </p>
      </>
    ),
    image: coat,
  },
  {
    title: "School Uniforms",
    description: (
      <>
        <p>
          We specialize in high-quality school uniforms that offer comfort and durability. Our uniforms are made from soft yet strong materials to ensure students feel comfortable throughout the school day.
        </p>
        <p>
          Available in various sizes and designs, we cater to different school requirements, from primary to high school uniforms. We also offer custom logo embroidery for school branding.
        </p>
      </>
    ),
    image: schoolUniforms,
  },
  {
    title: "college",
    description: (
      <>
        <p>
          We specialize in high-quality school uniforms that offer comfort and durability. Our uniforms are made from soft yet strong materials to ensure students feel comfortable throughout the school day.
        </p>
        <p>
          Available in various sizes and designs, we cater to different school requirements, from primary to high school uniforms. We also offer custom logo embroidery for school branding.
        </p>
      </>
    ),
    image: college,
  }, {
    title: "School Uniforms",
    description: (
      <>
        <p>
          We specialize in high-quality school uniforms that offer comfort and durability. Our uniforms are made from soft yet strong materials to ensure students feel comfortable throughout the school day.
        </p>
        <p>
          Available in various sizes and designs, we cater to different school requirements, from primary to high school uniforms. We also offer custom logo embroidery for school branding.
        </p>
      </>
    ),
    image: schoolUniforms,
  }
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="space-y-12">
        {aboutData.map((item, index) => (
          <div key={index} className="about-item">
            {/* Image Section (Always Left) */}
            <div className="about-image">
              <img src={item.image} alt={item.title} />
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
          
            {/* Text Section Inside a Box */}
            <div className="about-text">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <div className="text-gray-700">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
