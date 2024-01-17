import React from "react";
import vdeo from "../assets/this.mp4";
import "../assets/Landing.css";

const SectionFour = () => {
  return (
    <div className="sFourContainer">
      <div className="left-section">
        <video className="video" autoPlay="true" loop="true" src={vdeo}></video>
        {/* <div className="sFourImgSection">
          <img src={} alt="" />
          <img src="" alt="" />
        </div> */}
      </div>
      <div className="right-section">
        <h1 className="sFour-header">
          Our not-so-secret ingredient? Automation✨
        </h1>
        <p className="sFour-text">
          Keep your eyes on the big picture, your other investments, or
          basically anything besides the busywork. We rebalance your portfolio,
          automatically diversify deposits, and can help save you taxes, all
          without you ever lifting a finger.
        </p>
        <button className="chart-btn">Get Started</button>
      </div>
    </div>
  );
};

export default SectionFour;
