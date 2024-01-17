import React from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Landing/Slider";
import Smarter from "../components/Landing/Smarter";
import Services from "../components/Landing/Services";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Smarter />
      <Services/>
    </>
  );
};

export default Landing;
