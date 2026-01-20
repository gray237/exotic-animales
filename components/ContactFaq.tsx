"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const leftFaqs = [
  {
    question: "How fast do you respond?",
    answer:
      "Usually within a few hours during the day. If it’s urgent, choose High priority in the form.",
  },
  {
    question: "What details should I include?",
    answer:
      "Goal, timeline, budget range, and any links (website/app/mockups). The form nudges you with hints.",
  },
  {
    question: "Can I submit without a phone number?",
    answer:
      "Yes. Email is enough. Phone is optional but useful when you want a callback.",
  },
  {
    question: "Does this demo send data anywhere?",
    answer:
      "No. Submission is simulated to show the UX. You can wire it to any backend later.",
  },
  {
    question: "Are your exotic pets legal to own?",
    answer:
      "We comply with all state and federal regulations. Each pet comes with documentation regarding legality and ownership requirements.",
  },
];

const rightFaqs = [
  {
    question: "What kind of care do these pets require?",
    answer:
      "Every listing includes full care instructions: diet, habitat setup, enrichment, and handling tips to ensure a healthy pet.",
  },
  {
    question: "Do you offer delivery or shipping?",
    answer:
      "Yes! We provide climate-controlled, secure delivery nationwide. You can track your pet throughout the journey.",
  },
  {
    question: "Can I return a pet if needed?",
    answer:
      "We have a 24-hour check-in policy for safe transport. After that, our team provides ongoing support to ensure proper care and placement.",
  },
  {
    question: "Are the pets vaccinated or health-checked?",
    answer:
      "All mammals are vetted and checked for health by certified veterinarians. Reptiles and amphibians are checked for common health issues.",
  },
  {
    question: "Do you provide advice after purchase?",
    answer:
      "Absolutely. Our experts are available for lifetime support regarding care, habitat, and enrichment tips.",
  },
];

const Accordion = ({ faqs }: { faqs: typeof leftFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const contentRef = useRef<HTMLDivElement>(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
          if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
          }
        }, [contentRef, faq.answer, isOpen]);

        return (
          <div
            key={idx}
            className="border border-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center font-semibold text-gray-900 dark:text-white cursor-pointer px-4 py-4 text-left"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              ref={contentRef}
              style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
              className="text-gray-600 dark:text-gray-300 px-4 overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
              <div className="py-2">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ContactFaq = () => {
  return (
    <section id="faq" aria-labelledby="faqTitle" className="py-16">
      <div className="px-6 lg:px-16 mx-auto max-w-[1400px]">
        <div className="mb-6">
          <h2
            id="faqTitle"
            className="text-3xl font-extrabold text-gray-900 mb-2"
          >
            FAQ
          </h2>
          <p className="text-gray-600 text-lg">
            Short answers that remove common objections before the form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Accordion faqs={leftFaqs} />
          <Accordion faqs={rightFaqs} />
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
