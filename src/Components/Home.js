import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeatureProducts from "./featureProducts";

const Home = () => {
  const data = {
    name: "Thapa Technical"
  }
  return (
    <div>
      <HeroSection myData = {data}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </div>
  );
};

export default Home;
