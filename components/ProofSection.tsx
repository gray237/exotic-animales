import React from "react";
import { 
  FaAward, 
  FaCalendarCheck, 
  FaFileInvoice, 
  FaSmile, 
  FaPaw, 
  FaBolt, 
  FaCheckCircle, 
  FaFilter, 
  FaQuoteLeft, 
  FaStar, 
  FaStarHalfAlt 
} from "react-icons/fa";

const proofCards = [
  {
    icon: FaPaw,
    label: "Trusted Care",
    text: "Every pet gets VIP treatment from day one — feeding, playtime, and handling done with love.",
    meta: [
      { icon: FaCalendarCheck, label: "Healthy Pets" },
      { icon: FaFileInvoice, label: "Verified Records" },
    ],
  },
  {
    icon: FaSmile,
    label: "Hassle-Free Buying",
    text: "No confusing forms. Just clear, friendly guidance to get your exotic friend home safely.",
    meta: [
      { icon: FaBolt, label: "Quick Process" },
      { icon: FaCheckCircle, label: "Zero Confusion" },
    ],
  },
  {
    icon: FaAward,
    label: "Elite Selection",
    text: "From lizards, rodents to snakes, all pets are socialized for a smooth bonding experience.",
    meta: [
      { icon: FaFilter, label: "Quality Checked" },
      { icon: FaSmile, label: "Happy Pets" },
    ],
  },
];

const testimonials = [
  {
    quote: "Got my baby hedgehog yesterday — super chill vibes! The team guided me through setup and care without any stress.",
    avatar: "MJ",
    name: "M. Johnson",
    role: "Happy Pet Parent",
    stars: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
  {
    quote: "Their sugar gliders are raised with love! I can tell they’re socialized and comfortable. Felt like adopting from family.",
    avatar: "AL",
    name: "A. Lee",
    role: "Exotic Enthusiast",
    stars: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
  },
];

const ProofSection = () => {
  return (
    <section className="py-16" id="proof" aria-labelledby="proofTitle">
      <div className="px-6 lg:px-16 mx-auto max-w-[1400px]">
        {/* Section Head */}
        <div className="mb-6">
          <h2 id="proofTitle" className="text-3xl font-bold text-gray-900 mb-2">
            Why Pet Lovers Choose Us
          </h2>
          <p className="text-gray-600">
            From rare reptiles to playful mammals, we ensure every exotic pet adoption is safe, smooth, and downright joyful.
          </p>
        </div>

        {/* Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {proofCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <article
                key={idx}
                className="border border-gray-200 rounded-[22px] bg-white shadow-md p-5 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg"
              >
                {/* Top: Icon + Label */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 bg-pink-100 text-pink-500">
                    <Icon size={20} />
                  </span>
                  <span className="font-semibold text-gray-500">{card.label}</span>
                </div>

                {/* Text */}
                <p className="text-gray-500 mb-3 leading-relaxed">{card.text}</p>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2">
                  {card.meta.map((m, mi) => {
                    const MetaIcon = m.icon;
                    return (
                      <span
                        key={mi}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-sm"
                      >
                        <MetaIcon size={14} />
                        {m.label}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-[22px] bg-white shadow-md p-5 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote */}
              <div className="flex gap-3 mb-3 text-gray-500 leading-relaxed">
                <FaQuoteLeft className="text-purple-500 mt-1" />
                <p>{t.quote}</p>
              </div>

              {/* Who */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-linear-to-br from-purple-100 to-teal-100 font-bold text-gray-900">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-extrabold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-1 text-yellow-400 opacity-95">
                  {t.stars.map((StarIcon, si) => (
                    <StarIcon key={si} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
