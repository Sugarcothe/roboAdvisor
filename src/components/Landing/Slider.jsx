import React from "react";
import "../assets/Landing.css";

const Slider = () => {
  const slideImages = [
    {
      firstText: "NerdWarlet",
      otherText: "Best Robo-advisor, Portfolio Options, 2023",
      otherText1: "Best Robo-advisor, IRA, 2022 1",
    },

    {
      firstText: "Investopedia",
      otherText: "Best Robo-advisor, 2022",
    },
    {
      firstText: "700k+",
      otherText: "Trusted clients",
    },
    {
      firstText: "Investopedia",
      otherText: "Best Robo-advisor, 2022",
    },
    {
      firstText: "$50B+",
      otherText: "In assets managed",
    },
    {
      firstText: "Investopedia",
      otherText: "Best Robo-advisor, 2022 ",
      otherText1: "Best Robo-advisor, 2020",
    },
    {
      firstText: "4.8*",
      otherText: "Apple App Store",
    },
    {
      firstText: "4.9",
      otherText: "Google Play Store",
    },
    {
      firstText: "435",
      otherText: "New Client, First quater 2024",
    },
    {
      firstText: "Investopedia",
      otherText: "Best Robo-advisor, 2022",
    },
    {
      firstText: "$50B+",
      otherText: "In assets managed",
    },
    {
      firstText: "4.8*",
      otherText: "Apple App Store",
    },
  ];
  return (
    <div className="slider">
      <div className="slide-track">
        {slideImages.map((data, index) => (
          <div className="slide" key={index}>
            {/* <img src={image} height="100" width="250" alt="" /> */}
            <h3 style={{ fontWeight: "bold", fontSize: "2vw " }}>
              {data.firstText}
            </h3>
            <span style={{ fontWeight: "100", fontSize: "1vw", color: "#333" }}>
              {data.otherText}
            </span>
            <span style={{ fontWeight: "100", fontSize: "1vw", color: "#333" }}>
              {data.otherText1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
