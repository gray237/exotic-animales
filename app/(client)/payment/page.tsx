import React from "react";
import PaymentInfo from "@/components/PaymentInfo";
import ProofSection from "@/components/ProofSection";

const PaymentPage = () => {
  return (
    <div className="flex flex-col">
      <PaymentInfo />
      <ProofSection />
    </div>
  );
};

export default PaymentPage;
