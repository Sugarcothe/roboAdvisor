import React from "react";
import serviceImage from "../assets/service.png";

const Services = () => {
  return (
    <div className="service-container">
      <div className="services-text">
        <h1 className="service-header">
          You make it custom. We’ll do the rest.
        </h1>
        <p className="service-text">
          Choose from hundreds of funds in categories like clean energy, tech,
          and crypto and we’ll handle the trades and rebalance your portfolio
          for you. Or start with a portfolio designed around your values with
          our Socially Responsible portfolio. We make it easy and safe to
          customize by helping you see when your choices won’t be in line with
          your preferred risk level.
        </p>
        <button className="chart-btn">Get Started</button>
      </div>

      <img className="service-image" src={serviceImage} alt="" />
    </div>
  );
};

export default Services;
