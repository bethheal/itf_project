import React from "react";
import Hero from "./landing/components/hero/hero";
import AboutUs from "./landing/components/aboutUs";
import Executives from "./landing/components/executives";
import Testimonies from "./landing/components/testimoniesSection/testimonies";

const LandingPage = () => {
  return (
    <div >
      <Hero />
      <AboutUs/>
      <Executives/>
      <Testimonies/>
      

    </div>
  );
};

export default LandingPage;
