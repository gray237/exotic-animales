import React from "react";
import FaqHero from "@/components/FaqHero";
import FAQSection from "@/components/FAQSection";

const FaqPage = () => {
  return (
    <div className="flex flex-col">
      <FAQSection />
      <FaqHero />
    </div>
  );
};

export default FaqPage;
