import React from "react";
import HeroSection from "./HeroSection";

const About = () => {
  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      <div>
        <HeroSection myData={data} />
      </div>
    </>
  );
};

export default About;
