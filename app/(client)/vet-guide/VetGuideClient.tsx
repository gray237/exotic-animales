"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { vetData } from "./vetData";
import { eaBackground, chameleonBanner } from "@/images";
import USMap from "@/components/USMap"; // We will build this next

const VetGuidePage = () => {
  // 1. Default to Texas as requested
  const [selectedState, setSelectedState] = useState("Texas");

  // 2. Extract unique states for the manual filter buttons
  const allStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

  // 3. Filter the data based on map/button selection
  const filteredVets = useMemo(() => {
    return vetData.filter((vet) => vet.state === selectedState);
  }, [selectedState]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION - Keeping your original style */}
      <section className="relative w-full h-[450px] overflow-hidden">
        <Image
          src={eaBackground}
          alt="Exotic Vet Guide Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Exotic Vet <span className="text-green-400">Directory</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Your pet’s health is our priority. Browse our curated list of 
            board-certified avian and exotic specialists nationwide to ensure 
            your unique companion gets the expert care they deserve.
          </p>
          <div className="flex gap-4">
             <a href="#vets" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all">
                Find a Vet
             </a>
          </div>
        </div>
      </section>

      {/* NEW: PROFESSIONAL ANALYST & MAP SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TEXT SECTION - Centralized & Full Width */}
          <div className="w-full text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              Find A Vet Near You <span className="text-green-500">Exotic Veterinarians</span>
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 mx-auto max-w-4xl">
              <p>
                Our directory isn't just a list of names—it's a curated selection of clinics that meet the "USDA Standard". 
                We look for facilities that prioritize specialized diagnostic equipment and practitioners who hold board certifications 
                in exotic companion mammals. Use the interactive map below to locate exotic animal specialists and veterinarians across 
                the United States. Click your state to view a list of local vets, organized by county.
              </p>
            </div>
          </div>

          {/* THE INTERACTIVE MAP - PROFESSIONALLY SCALED */}
          <div className="w-full flex flex-col items-center justify-center overflow-visible px-0 md:px-24 lg:px-40 xl:px-60 transition-all duration-500">
            <div className="w-full flex-1 flex items-center justify-center min-h-[300px] md:min-h-[450px]">
              <USMap activeState={selectedState} onSelect={setSelectedState} />
            </div>
            <p className="mt-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] animate-pulse">
              Select a state to filter
            </p>
          </div>

        </div>
      </section>

      {/* FILTER & DIRECTORY - Original Style, now with dynamic filtering */}
      <section id="vets" className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex items-center justify-between mb-12 gap-4 border-b border-gray-200 dark:border-white/10 pb-8">
            <div className="min-w-0">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white truncate uppercase tracking-tight">
                {selectedState} <span className="text-green-500">Specialists</span>
              </h2>
              <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-widest">
                Found: {filteredVets.length} Clinics
              </p>
            </div>
            
            {/* RIGHT: The Interactive Label/Dropdown */}
            <div className="flex flex-col items-end">
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                Change Region
              </p>
              
              <div className="relative group inline-block">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-lg md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                      {selectedState}
                    </span>
                    <span className="text-green-500 font-bold text-xs">↓</span>
                  </div>
                  
                  <div className="h-1 w-full bg-green-500 rounded-full mt-1 transition-transform duration-300 origin-right group-hover:scale-x-110" />
                </div>

                {/* 2. INTERACTION LAYER: Hidden select that captures clicks */}
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                >
                  {allStates.map((state) => (
                    <option key={state} value={state} className="text-sm">
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* VET LISTING GRID - Your original layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVets.map((vet) => (
              <div key={vet.slug} className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500 bg-green-50 dark:bg-green-500/10 px-3 py-1 rounded-full">
                      {vet.state}
                    </span>
                    {vet.emergency && (
                      <span className="text-[10px] font-bold uppercase bg-red-100 text-red-600 px-2 py-1 rounded">24/7 Emergency</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors">
                    {vet.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                    📍 {vet.city}, {vet.state}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6">
                    {vet.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                    {vet.specialties.slice(0, 3).map(s => (
                      <span key={s} className="text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                        #{s}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/vet-guide/${vet.slug}`}
                    className="mt-6 w-full text-center py-3 bg-gray-900 dark:bg-white dark:text-black text-white rounded-xl font-bold hover:bg-green-500 dark:hover:bg-green-400 transition-colors"
                  >
                    View Clinic Details
                  </Link>
                </div>
              </div>
            ))}

            {filteredVets.length === 0 && (
                <div className="col-span-full py-20 text-center">
                    <p className="text-gray-500">No clinics verified in {selectedState} yet. Check back soon!</p>
                </div>
            )}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - Your original touch */}
      <section className="py-20 mb-0 md:mb-5 lg:mb-20 bg-white dark:bg-gray-950 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Are you a Specialized Vet?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We are always looking to expand our directory to help exotic pet owners find the best care. 
            If you'd like your clinic to be featured on Exotic Animales, please reach out.
          </p>
          <Link href="/contact" className="text-green-500 font-bold hover:underline">
            Submit a Clinic Application →
          </Link>
        </div>
      </section>

      {/* FLOATING TRANSITION BANNER */}
      <div className="relative w-full h-0 z-10 overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-0">
          <Image
            src={chameleonBanner}
            alt="Exotic Care Banner"
            width={1600}
            height={238}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* DISCLAIMER & SELECTION GUIDE SECTION */}
      <section className="relative w-full bg-[#bddef9] dark:bg-gray-950 pt-2.5 pb-24 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center pt-15 md:pt-28 mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-8">
              Before You Choose an <span className="text-blue-700 dark:text-blue-400">Exotic Vet</span>
            </h2>
            
            {/* Main Disclaimer - Frosted Glass Effect */}
            <div className="backdrop-blur-md bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-5xl mx-auto">
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                The information provided in this Exotic Vet Guide is shared for your convenience and educational purposes only—it should not be considered a formal endorsement. The veterinarians and clinics listed are sourced from directories, breeder networks, and exotic animal communities that indicate experience with birds, reptiles, small mammals, New World primates, lemurs, kangaroos, wallabies, fish, and other non-traditional pets. Because every animal / clinic is different, we cannot guarantee individual experiences or outcomes. Always contact the veterinary practice directly and ask detailed questions before scheduling an appointment.
              </p>
            </div>
          </div>

          {/* TWO COLUMN BLURBS - Apple Style Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="group backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 p-10 rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black mb-6 shadow-lg shadow-blue-500/30">
                01
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Verify the Individual
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Many recommendations apply to <span className="text-blue-700 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">specific veterinarians</span> rather than the entire clinic or hospital. Exotic animal medicine is highly specialized, and not every veterinarian within the same practice may have training or hands-on experience with advanced exotic species care. When booking your appointment, confirm that you are scheduled with the veterinarian who has the appropriate background in your particular species.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 p-10 rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black mb-6 shadow-lg shadow-blue-500/30">
                02
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Perform Due Diligence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                If you are considering an exotic animal veterinarian who is not listed in this guide, take time to do your own research. Ask about their experience with your species, diagnostic capabilities, surgical experience, emergency protocols, and continuing education in exotic animal medicine. A knowledgeable and transparent veterinarian will welcome your questions and help you feel confident in the care your animal will receive.
              </p>
            </div>

          </div>

          {/* FINAL ADVICE - Subtle and clean */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block p-px bg-linear-to-r from-transparent via-blue-500 to-transparent w-full mb-8 opacity-30" />
            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-relaxed">
              Above all, trust your instincts as a responsible owner or breeder. The right exotic 
              veterinarian should communicate clearly, demonstrate species-specific knowledge, 
              and partner with you to support the long-term health and wellbeing of your animals 
              both in the clinic and at home.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ SECTION - SEO & AI Optimized */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
              Expert <span className="text-green-500">Insights</span> & FAQ
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Navigating the world of specialized veterinary care can be complex. We’ve compiled the most critical 
              questions pet parents ask when seeking expert care for unique companions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* COLUMN 1 */}
            <div className="space-y-4">
              <FAQItem 
                question="What qualifies a vet as an 'Exotic Specialist'?"
                answer="A true specialist often holds a Diplomate status from the American Board of Veterinary Practitioners (ABVP) in categories like Avian, Exotic Companion Mammal, or Reptile/Amphibian. This requires years of additional residency and passing rigorous examinations beyond standard DVM training."
              />
              <FAQItem 
                question="Why can't I take my reptile to a standard cat and dog vet?"
                answer="Exotic species have vastly different metabolic rates, anatomy, and stress responses. A 'generalist' may not have the specialized diagnostic equipment (like micro-endoscopes) or the specific pharmacological knowledge to safely dose medications for a 50g gecko versus a 5kg cat."
              />
              <FAQItem 
                question="How often should exotic pets have wellness exams?"
                answer="Because exotic animals are masters of hiding illness (a survival instinct), we recommend twice-yearly exams. These checkups often include fecal parasite screenings and bloodwork to catch silent issues like renal disease or nutritional deficiencies before they become emergencies."
              />
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-4">
              <FAQItem 
                question="What are the signs of an exotic pet emergency?"
                answer="Red flags include 'fluffing up' in birds, lethargy, changes in stool consistency, or a lack of appetite for more than 12-24 hours. For small mammals like rabbits, GI stasis is a critical emergency that requires immediate intervention by a specialized vet."
              />
              <FAQItem 
                question="Does pet insurance cover avian and exotic treatments?"
                answer="Yes, several providers now offer specialized exotic pet riders. We highly recommend insurance because specialized surgeries and advanced diagnostics (like CT scans for dental disease in rodents) can be significantly more expensive than standard pet care."
              />
              <FAQItem 
                question="How do you verify the clinics in this directory?"
                answer="Our analysts manually vet each clinic for board certifications, the presence of specialized equipment (like heated surgical tables and oxygen chambers), and positive peer-reviewed reputations within the exotic veterinary community."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VetGuidePage;

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
      >
        <span className="font-bold text-gray-900 dark:text-white md:text-lg leading-tight">
          {question}
        </span>
        <span className={`text-green-500 font-bold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};