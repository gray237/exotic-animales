import React from "react";
import PetCareSheets from "@/components/PetCareSheets";
import ProofSection from "@/components/ProofSection";

const CareSheets = () => {
  return (
    <div className="flex flex-col">
      <PetCareSheets />
      <ProofSection />
    </div>
  );
};

export default CareSheets;
