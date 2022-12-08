import React from "react";
import "./testimonials.css";
import IMAGE1 from "../../assets/slide1.jpg";
import IMAGE2 from "../../assets/slide2.jpg";
import IMAGE3 from "../../assets/slide3.jpg";
import IMAGE4 from "../../assets/slide4.jpg";
import IMAGE5 from "../../assets/slide5.jpg";
import ImageSlider from "./ImageSlider.jsx";

const Testimonials = () => {
  const slides = [
    { url: IMAGE1, title: "Beach" },
    { url: IMAGE2, title: "Boat" },
    { url: IMAGE3, title: "Forest" },
    { url: IMAGE4, title: "City" },
    { url: IMAGE5, title: "Italy" },
  ];
  const containerStyles = {
    widht: "100vw",
    height: "80vh",
    margin: "0 auto",
  };
  return (
    <section id='testimonials'>
      <div>
        <h2>Our Proyects</h2>
        <p>
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their home.
        </p>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
