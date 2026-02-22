"use client";

import React from "react";

const Terms = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="w-full bg-linear-to-br from-purple-500/20 to-teal-400/15 border-b border-purple-400/30">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to E.A Ranch! Before bringing home your new exotic companion — whether it&apos;s a baby hedgehog, sugar glider, axolotl, fennec fox, lemur, kinkajou, or opossum — please read our terms carefully. 
            These policies are designed to protect both you and the animals, ensuring they go to safe, loving homes and receive proper care throughout their lives.
          </p>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 lg:px-24 py-16 space-y-12 text-gray-700 leading-relaxed">

        {/* Rehoming Policy */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rehoming Policy</h2>
          <p>
            All buyers are responsible for the care, housing, feeding, and medical needs of their animals. If at any point you find that your new pet is not a good fit for your home, you must contact E.A Ranch immediately. The animal must be returned to us at the buyer’s expense. 
          </p>
          <p>
            Animals may <strong>not</strong> be sold, gifted, or rehomed to another party without our written consent. This policy ensures that every animal — from hedgehogs and sugar gliders to axolotls and lemurs — continues to receive proper care and attention. 
          </p>
          <p>
            Non-bottle baby hoofstock are exempt from this policy.
          </p>
        </div>

        {/* Health Guarantee */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Health Guarantee</h2>
          <p>
            All animals sold by E.A Ranch are carefully checked and guaranteed to be healthy, free from parasites, illness, or disease at the time they leave our care. To make a claim:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Have a licensed exotic veterinarian examine the animal within 48 hours of pickup.</li>
            <li>Submit a written vet report confirming any health issue to E.A Ranch within 48 hours.</li>
            <li>Return the animal within 3 days of pickup if replacement is requested.</li>
          </ul>
          <p className="mt-2">
            Animals transported by third-party services are not covered under this guarantee. African pygmy hedgehogs receive an extended health warranty — please see the Species-Specific Policies section. 
          </p>
          <p className="mt-1">
            <strong>Important:</strong> Any warranty is void if feeding or care instructions provided in the care guides are not followed, except when we explicitly authorize otherwise.
          </p>
        </div>

        {/* Deposits and Payments */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Deposits & Payments</h2>
          <p>
            To reserve a pet, a <strong>nonrefundable deposit</strong> is required. We accept the following payment methods:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Zelle</li>
            <li>PayPal Friends & Family</li>
            <li>CashApp</li>
            <li>Bank Transfer</li>
          </ul>
          <p className="mt-2">
            Deposits and payments are nontransferable. Remaining balances for local pickups are due on the scheduled pickup date, and for transport, balances must be cleared at least 7 days before shipping. Buyers must be 18 or older. Providing false information may result in forfeiture of deposits and payments.
          </p>
          <p className="mt-2">
            Texas residents are responsible for a 6.75% sales tax on all in-state purchases. Out-of-state orders are exempt. Tax exemption certificates must be submitted before pickup for eligible buyers.
          </p>
        </div>

        {/* Taking Your Animal Home */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Taking Your Animal Home</h2>
          <p>
            Animals are released only after habitat setup has been verified and approved by E.A Ranch. “Ready by” dates are estimates; your pet must be thriving and independent of its parents before leaving our care.
          </p>
        </div>

        {/* Local Pickups */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Local Pickups</h2>
          <p>
            Pickups must be scheduled and confirmed at least one business day in advance. Animals must be collected within 7 days of their ready date, unless other arrangements are made in writing. Late or missed pickups may result in forfeiture of deposits and fees.
          </p>
        </div>

        {/* Pet Transport */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pet Transport</h2>
          <p>
            E.A Ranch uses USDA-licensed transporters for nationwide deliveries. Important details:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Delivery dates are estimates; traffic, weather, or construction may cause delays.</li>
            <li>Buyers must meet drivers, show government-issued ID, and sign required forms.</li>
            <li>Transport deposits are nonrefundable.</li>
            <li>Transport can be stressful; in-person pickup is strongly recommended.</li>
          </ul>
        </div>

        {/* Boarding Fees */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Boarding Fees</h2>
          <p>
            Animals held at E.A Ranch beyond the 7-day grace period will incur boarding fees, payable upfront. Fees cover enclosure space, food, socialization, and care:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Pocket pets: $10/day</li>
            <li>Weaned animals (non-pocket pets): $30/day</li>
            <li>Bottle babies without overnight feedings: $50/day</li>
            <li>Bottle babies with overnight feedings & monkeys: $100/day</li>
          </ul>
        </div>

        {/* Pet Photoshoots */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pet Photoshoots</h2>
          <p>
            We photograph all animals twice: once for the website listing and again before they leave our care. Extra photos or short videos may be requested for a fee:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>$15 for 5 additional photos</li>
            <li>$20 for 5 photos plus a short video</li>
          </ul>
        </div>

        {/* Returns */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Returns</h2>
          <p>
            All sales are final. Deposits, boarding fees, shipping, vet fees, and photoshoot charges are nonrefundable. However, we accept surrenders for rehoming if the pet is not a good fit for your home.
          </p>
        </div>

        {/* Species-Specific Policies */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Species-Specific Policies</h2>
          <p>
            Certain animals have additional requirements or guarantees:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li><strong>African Pygmy Hedgehogs:</strong> 1-year congenital health guarantee and lifetime Wobbly Hedgehog Syndrome coverage. Breeding strictly prohibited unless approved.</li>
            <li><strong>Sugar Gliders:</strong> Breeding allowed only with proper lineage documentation and authorization. Pet-only gliders are neutered to prevent unwanted breeding.</li>
            <li><strong>Fennec & Bat-Eared Foxes:</strong> Breeding prohibited without USDA license.</li>
            <li><strong>Lemurs & Cotton-Top Tamarins:</strong> Texas residents only; breeding prohibited unless USDA licensed.</li>
          </ul>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          By completing a purchase or interacting with E.A Ranch, you agree to these Terms & Conditions. Policies may be updated at any time to ensure compliance, safety, and the welfare of all animals in our care.
        </p>
      </div>
    </section>
  );
};

export default Terms;
