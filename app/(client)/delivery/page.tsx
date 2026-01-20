import React from "react";
import DeliveryOptions from "@/components/DeliveryOptions";
import ProofSection from "@/components/ProofSection";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <DeliveryOptions />
      <ProofSection />
    </div>
  );
};

export default ContactPage;
