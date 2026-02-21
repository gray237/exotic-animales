"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { eaBackground } from "@/images";
import USMap from "@/components/USMap";

const allStates = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming"
];

const PetLawPage = () => {
  const router = useRouter(); // ✅ must be inside component

  const slugify = (state: string) =>
    state.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <section className="relative w-full h-[450px] overflow-hidden">
        <Image
          src={eaBackground}
          alt="Exotic Pet Laws Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Exotic Pet <span className="text-green-400">Laws by State</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            A comprehensive, state-by-state guide to exotic animal ownership laws,
            permit requirements, prohibited species lists, and wildlife regulations
            across all 50 U.S. states.
          </p>
          <a
            href="#states"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all w-fit"
          >
            Explore State Laws
          </a>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Click your state on the interactive map to view detailed exotic pet
            ownership laws, permit requirements, restricted species lists,
            and prohibited animal regulations.
          </p>
        </div>

        <div className="w-full flex flex-col items-center px-0 md:px-24 lg:px-40 xl:px-60">
          <div className="w-full flex-1 flex items-center justify-center min-h-[350px]">
            <USMap
              onSelect={(state) => router.push(`/exotic-pet-laws/${slugify(state)}`)} activeState={""}/>
          </div>
        </div>
      </section>

      {/* SEO AUTHORITY SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              State-by-State Exotic Pet Laws, Permits & Wildlife Regulations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Exotic pet laws vary dramatically from state to state, and what is
              legal in one jurisdiction may be strictly prohibited in another.
              State wildlife agencies, departments of natural resources, game
              commissions, and conservation divisions establish and enforce
              regulations that define which exotic animals can be legally owned,
              which species require permits, and which are completely banned.
            </p>

            <p>
              To determine whether a specific exotic animal is legal in your
              state, consult official government sources such as your state’s
              Department of Fish and Wildlife or Department of Natural Resources.
              These agencies publish wildlife codes outlining licensing
              requirements, prohibited species lists, and permit procedures.
              Use the state directory below to explore current regulations.
            </p>
          </div>
        </div>
      </section>

      {/* STATE GRID */}
      <section id="states" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Browse Exotic Pet Laws by State
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allStates.map((state) => (
              <Link
                key={state}
                href={`/exotic-pet-laws/${slugify(state)}`}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-green-500 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-green-500 transition-colors text-base md:text-lg">
                  {state} Exotic Pet Laws & Ownership Regulations
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PetLawPage;
