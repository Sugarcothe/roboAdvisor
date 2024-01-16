import React from "react";
import "../assets/Landing.css";
import landingData from "../data/LandingData";
import heroImage from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-text1">
          {landingData.firstHeader}{" "}
          <span className="hero-text-span">{landingData.span}</span>
        </h1>
        <p>{landingData.secondHeader}</p>
        <button>Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
