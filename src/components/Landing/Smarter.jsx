import React from "react";
import Chart from "../Charts/Chart";
import "../assets/Landing.css"

const Smarter = () => {
  return (
    <div className="smart-container">
      <div className="chart-section1">
        <Chart />
      </div>
      <div className="chart-section2">
        <h1 className="chart-header">
          Smarter investing, brilliantly personalized.
        </h1>
        <p className="chart-para">
          Just answer a few questions, and we’ll build you a personalized
          portfolio of low-cost index funds from up to 17 global asset classes.
          Our software handles all the trading, rebalancing, and other busywork
          to help grow your wealth for the long term.
        </p>
        <button className="chart-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Smarter;
