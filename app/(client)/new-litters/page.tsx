import React from "react";
import AboutHero from "@/components/AboutHero";
import NewLitters from "@/components/NewLitters";

const NewLitter = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <NewLitters />
    </div>
  );
};

export default NewLitter;
