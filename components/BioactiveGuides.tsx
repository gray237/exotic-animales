"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Gauge, Clock, ArrowRight } from "lucide-react";
import { eaBackground, bioactiveSetupGuides, bioactiveTerrariumGuide } from "@/images";
import { bioactiveData } from "@/app/(client)/bioactive-guides/bioactiveData";

const BioactiveGuides = () => {
  return (
    <>
{/* {/* HERO */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background */}
        <Image
          src={eaBackground}
          alt="Boarding background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          
          {/* Text (2/3) */}
          <div className="md:col-span-2 text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bioactive Setup Guides
            </h1>
            <p className="text-base lg:text-lg transition-all mb-8 text-gray-200">
              We provide professional exotic pet boarding services designed specifically for small mammals, reptiles, birds, and unique companion animals. With secure housing, expert care, and customized routines, your exotic pets stay safe, comfortable, and stress-free.
            </p>

            <div className="flex gap-4">
              <Link
                href="#browse"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                Start learning
              </Link>
              <Link
                href="/adopt"
                className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                Adopt a Pet
              </Link>
            </div>
          </div>

          {/* Image (1/3) */}
          <div className="hidden md:block relative w-full max-w-[400px] aspect-5/4 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={bioactiveSetupGuides}
              alt="Boarding Facility"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-15 bg-white dark:bg-gray-950">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            How to Setup <span className="text-indigo-500">Bioactive Enclosures</span> for Exotic Pets
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-loose"
          >
            Bioactive vivarium, terrarium or paludarium habitats aren't just aesthetically stunning — they provide significant biological 
            benefits to your animals. By introducing "The Clean Up Crew" (Isopods and Springtails), 
            live plants, and specialized substrate layers, you recreate the nitrogen cycle in your home. 
            Our guides cover everything from drainage layers to plant selection for every climate.
          </motion.p>
        </div>
      </section>

      {/* DYNAMIC GRID SECTION */}
      <section id="browse" className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bioactiveData.map((guide, idx) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={guide.heroImage}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {guide.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-indigo-500" /> {guide.readTime}</span>
                    <span className="flex items-center gap-1.5"><Gauge size={14} className="text-green-500" /> {guide.difficulty}</span>
                  </div>
                  
                  <Link href={`/bioactive-guides/${guide.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-700 transition-colors">
                    {guide.title}
                  </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                    {guide.description}
                  </p>

                  <Link 
                    href={`/bioactive-guides/${guide.slug}`}
                    className="w-full shadow:md flex items-center justify-center gap-3 py-4 rounded-2xl font-bold shadow-lg -translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-gray-100 hover:text-white hover:shadow-purple-500/30 hover:bg-linear-to-r from-purple-600 to-indigo-700">
                      
                    <span className="font-bold flex items-center gap-2">
                      <BookOpen size={18} /> Read Full Guide
                    </span>
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL FOUNDATION SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">

          <div className="prose prose-lg dark:prose-invert max-w-none
                          prose-strong:font-bold
                          prose-strong:text-gray-900
                          dark:prose-strong:text-white">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Is a Bioactive Enclosure?
            </h2>

            <p>
              A <strong>bioactive enclosure</strong> is a carefully designed habitat that replicates a miniature ecosystem inside your terrarium, vivarium, or paludarium. Instead of functioning as a sterile box that requires complete substrate changes, a bioactive system mimics natural biological processes — allowing waste to break down naturally through beneficial organisms, plants, and microorganisms.
            </p>

            <p>
              These environments are particularly ideal for <strong>small to medium-sized reptiles and amphibians</strong> that thrive in stable humidity and temperature conditions. Species housed in enclosures ranging from approximately 20” x 10” x 12” up to 4’ x 2’ x 1’ often benefit significantly from this ecosystem approach. Because reptiles and amphibians have slower metabolisms compared to similarly sized mammals, their waste output is manageable for a properly established clean-up crew.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6">
              Why Choose a Bioactive Setup?
            </h3>

            <p>
              At first glance, creating a bioactive enclosure may seem complex and expensive. It requires planning, research, and an upfront investment in materials. However, the long-term benefits far outweigh the initial effort.
            </p>

            <p>
              One of the most appealing advantages is <strong>reduced day-to-day maintenance</strong>. Rather than performing full substrate replacements and deep disinfecting sessions, most bioactive enclosures require only regular misting, spot cleaning of uneaten food, and monitoring of humidity levels. The ecosystem itself handles the breakdown of organic waste.
            </p>

            <p>
              Additionally, bioactive habitats provide:
            </p>

            <ul>
              <li><strong>Natural waste recycling</strong> through microfauna and beneficial bacteria</li>
              <li><strong>More stable humidity and temperature gradients</strong></li>
              <li><strong>Environmental enrichment</strong> that promotes natural behaviors</li>
              <li><strong>Reduced stress</strong> through complex hiding and climbing opportunities</li>
            </ul>

            <p>
              In the wild, no one replaces substrate. Nature recycles everything — and a bioactive enclosure brings that ecological balance into your home.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6">
              The Four Core Components of a Bioactive System
            </h3>

            <p>
              Every successful bioactive setup contains four primary elements:
            </p>

            <ul>
              <li>
                <strong>Clean-Up Crew:</strong> Isopods and springtails that consume waste, mold, and decaying organic matter.
              </li>
              <li>
                <strong>Substrate Layers:</strong> A structured soil system that supports plant growth, drainage, and microbial activity.
              </li>
              <li>
                <strong>Live Vegetation:</strong> Plants that stabilize humidity, provide oxygen exchange, and enrich the environment.
              </li>
              <li>
                <strong>Proper Lighting:</strong> Essential for plant photosynthesis and species-specific UVB requirements.
              </li>
            </ul>

            <p>
              These components will vary depending on your animal’s natural habitat — tropical rainforest species require vastly different conditions than desert dwellers. Customization is essential.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6">
              What Animals Are Suitable for Bioactive Enclosures?
            </h3>

            <p>
              Bioactive habitats are ideal for many <strong>small to medium reptiles and amphibians</strong>. Geckos, frogs, toads, newts, small lizards, and many snake species can thrive in properly designed ecosystems.
            </p>

            <p>
              Animals with slower metabolisms are generally better suited because their waste production does not overwhelm the biological filtration system. Small mammals and birds, on the other hand, often produce waste at a rate too high for standard enclosure sizes to support efficiently.
            </p>

            <p>
              As always, detailed research into your species’ natural biome is critical before committing to a design.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6">
              What Does a Bioactive Setup Cost?
            </h3>

            <p>
              Costs vary depending on quality, plant selection, and scale. On the lower end, a functional bioactive setup (excluding the enclosure itself) may cost approximately <strong>$215</strong>. On the higher end, if premium plants, lighting, and specialty materials are used, costs can reach <strong>$875 or more</strong>.
            </p>

            <p>
              Typical expense ranges include:
            </p>

            <ul>
              <li><strong>Isopods:</strong> $15 – $150 depending on species</li>
              <li><strong>Springtails:</strong> $8 – $14 per culture</li>
              <li><strong>Substrate materials:</strong> $50 – $100+ combined</li>
              <li><strong>Plants:</strong> $30 – $300 depending on density and rarity</li>
              <li><strong>Lighting systems:</strong> $50+</li>
            </ul>

            <p>
              For keepers on tighter budgets, upgrading gradually over time is entirely acceptable. Bioactive systems can evolve just as ecosystems do in nature.
            </p>

          </div>
        </div>
      </section>

      {/* HOW DO YOU START – TWO COLUMN */}
      <section className="mb-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE COLUMN */}
          <div className="relative group">

            <div className="p-1 rounded-3xl bg-linear-to-br from-purple-500/20 to-green-500/20 transition-all duration-500 group-hover:from-purple-500/40 group-hover:to-green-500/40">

              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">

                <Image
                  src={bioactiveTerrariumGuide}
                  alt="Planning and researching a bioactive enclosure setup"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority={false}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

              </div>

            </div>

          </div>

          {/* TEXT COLUMN */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-gray-900 dark:text-white">
              How Do You Start?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The answer is simple: <strong className="font-bold text-gray-900 dark:text-white">Research. Research. Research.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Before building any bioactive enclosure, you must understand your animal’s heat requirements, humidity parameters, dietary needs, temperament, and natural habitat. You must also determine:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 w-2 h-2 rounded-full bg-indigo-700 shrink-0" />
                Whether the species may prey on the clean-up crew
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 w-2 h-2 rounded-full bg-indigo-700 shrink-0" />
                Which plants are non-toxic and biome-appropriate
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 w-2 h-2 rounded-full bg-indigo-700 shrink-0" />
                What substrate mixture best mimics natural soil conditions
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-2 w-2 h-2 rounded-full bg-indigo-700 shrink-0" />
                How to maintain long-term ecosystem balance
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This page serves as a foundational overview, but every enclosure must be customized to the specific biological and environmental needs of the species you are keeping.
            </p>

          </div>

        </div>
      </section>

    </>
  );
};

export default BioactiveGuides;