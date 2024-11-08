import React from "react";
import Hero from "./landing/components/hero/hero";
import AboutUs from "./landing/components/aboutUs";
import Executives from "./landing/components/executives";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Executives/>

    </div>
  );
};

export default LandingPage;
