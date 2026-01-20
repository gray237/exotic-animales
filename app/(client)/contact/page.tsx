import React from "react";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import ProofSection from "@/components/ProofSection";
import ContactFaq from "@/components/ContactFaq";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactSection />
      <ProofSection />
      <ContactFaq />
    </div>
  );
};

export default ContactPage;
