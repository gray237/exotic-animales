import React from "react";
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";
import AboutFeature from "@/components/AboutFeature";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutUs />
      <AboutFeature />
    </div>
  );
};

export default AboutPage;
