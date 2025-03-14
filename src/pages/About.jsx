import React from "react";
import Header from "../components/Contact/Header";
import TrustedCabService from "../components/Home/TrustedCabService";
import HowWorks from "../components/About/HowWorks";
import Drivers from "../components/About/Drivers";
import GetApp from "../components/About/GetApp";

const About = () => {
  return (
    <div>
      <Header name="About Us" title="About" />
      <TrustedCabService />
      <HowWorks />
      <Drivers />
      <GetApp />
    </div>
  );
};

export default About;
