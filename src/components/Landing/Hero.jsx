import React from "react";
import "../assets/Landing.css";
import landingData from "../data/LandingData";

const Hero = () => {
  return (
    <div>
      <div className="hero-text">
        <h1>
          {landingData.firstHeader} <span>{landingData.span}</span>
        </h1>
        <p>{landingData.secondHeader}</p>
        <button>Get Started</button>
      </div>
      <div className="hero-text"></div>
    </div>
  );
};

export default Hero;
