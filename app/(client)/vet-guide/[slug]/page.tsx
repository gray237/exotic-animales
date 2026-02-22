export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Smartphone } from "lucide-react";
import { vetData } from "../vetData";
import { eaBackground, exoticBanner1 } from "@/images";


// ------------------- DYNAMIC METADATA -------------------
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const clinic = vetData.find((v) => v.slug === slug);
  
  if (!clinic) return { title: "Clinic Not Found | Exotic Animales" };

  const title = `Expert Exotic Vet: ${clinic.name} | ${clinic.city}, ${clinic.state}`;
  const description = `Looking for specialized care in ${clinic.city}? ${clinic.name} is a verified exotic vet specializing in ${clinic.specialties.slice(0, 3).join(", ")}. View contact info and clinic hours.`;

  return {
    title,
    description,
    keywords: [`${clinic.name}`, "exotic vet", `${clinic.city} reptile vet`, `${clinic.state} avian specialist`, "verified exotic vet"],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.exoticanimales.com/vet-guide/${clinic.slug}`,
      images: [
        {
          url: exoticBanner1.src, // Using your brand hero image for consistency
          width: 1200,
          height: 630,
          alt: `${clinic.name} - Exotic Vet Guide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [exoticBanner1.src],
    },
  };
};

export const dynamicParams = false;

const VetProfilePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const clinic = vetData.find((v) => v.slug === slug);
  if (!clinic) notFound();

  return (
    // Wrap EVERYTHING in Suspense
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Clinic...</div>}>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full py-15 items-center justify-center text-center">
        <Image src={eaBackground} alt="Clinic Background" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-gray-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-widest w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Verified Specialist
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {clinic.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Dedicated Exotic Medical Care in <span className="text-gray-900 dark:text-white font-bold">{clinic.city}, {clinic.state}</span>
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: RICH DATA */}
        <div className="lg:col-span-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Clinic Overview & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {clinic.description}
            </p>

            {/* Core Specializations Card */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-4xl border border-gray-100 dark:border-white/5 mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Core Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {clinic.specialties.map(s => (
                  <span key={s} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Analyst Section */}
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Exotic Animales Trusts This Clinic</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Not all veterinarians are created equal when it comes to &quot;non-traditional&quot; pets. Our analysts look for clinics that invest in specialized diagnostic equipment—like micro-sized surgical tools and high-resolution imaging—necessary for animals weighing only a few grams.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="space-y-4">
                <h4 className="font-bold text-green-600 flex items-center gap-2 text-lg">
                  ✅ Pro-Active Diagnostics
                </h4>
                <p className="text-sm text-gray-500">This facility is known for not just treating symptoms, but using bloodwork and imaging to find the root cause in exotic species.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-green-600 flex items-center gap-2 text-lg">
                  ✅ Exotic-Only Recovery
                </h4>
                <p className="text-sm text-gray-500">Reduced stress environments where sensitive animals like rabbits or birds aren&apos;t housed next to barking dogs.</p>
              </div>
            </div>

            {/* Checklist Section */}
            <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 p-8 rounded-4xl bg-white dark:bg-gray-950">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Exotic Vet Screening Checklist</h3>
              <p className="text-sm mb-6 text-gray-500 italic">When calling {clinic.name}, we recommend asking these specific questions to ensure the best fit for your pet:</p>
              <ul className="space-y-4 list-none pl-0 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3"><strong>1.</strong> &quot;How many [Your Species] do you typically see in a month?&quot;</li>
                <li className="flex gap-3"><strong>2.</strong> &quot;What is your protocol for anesthesia in small exotic mammals?&quot;</li>
                <li className="flex gap-3"><strong>3.</strong> &quot;Do you have a specialized incubator for recovery?&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT & ACTIONS */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="p-8 bg-linear-to-br from-indigo-700 to-purple-600 overflow-hidden relative group text-white rounded-4xl shadow-2xl shadow-green-500/10">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase text-gray-200 mb-1 tracking-tighter">Location</p>
                  <p className="text-lg leading-snug">{clinic.address}</p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase text-gray-200 mb-1 tracking-tighter">Direct Line</p>
                  <a href={`tel:${clinic.phone}`} className="text-3xl font-black text-green-400 hover:text-green-300 transition-colors">
                    {clinic.phone}
                  </a>
                </div>

                <div className="pt-4 space-y-3">
                  <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-white text-black rounded-2xl font-bold hover:bg-green-400 transition-all">
                    Official Website
                  </a>
                  <Link href="/contact" className="relative z-10 block w-full text-center py-4 bg-gray-800 text-gray-400 rounded-2xl font-bold text-sm hover:text-white transition-all">
                    Report Outdated Info
                  </Link>
                </div>
                <Smartphone className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>

            {/* Emergency Info Card */}
            {clinic.emergency && (
              <div className="p-6 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 rounded-3xl">
                <h4 className="text-red-600 dark:text-red-400 font-bold mb-2 flex items-center gap-2">
                  🚨 24/7 Emergency Facility
                </h4>
                <p className="text-xs text-red-800 dark:text-red-300/70 leading-relaxed">
                  This clinic is equipped for after-hours emergencies. We recommend calling ahead while in transit so their team can prepare the triage station.
                </p>
              </div>
            )}
            {/* BACK BUTTON */}
            <Link 
              href="/vet-guide" 
              className="
                inline-flex items-center gap-3 mt-0 mb-0 px-4 py-2 -ml-4
                rounded-full transition-all duration-300
                text-gray-600 dark:text-gray-400 font-bold
                hover:bg-purple-50 dark:hover:bg-purple-900/20 
                hover:text-purple-600 dark:hover:text-purple-400
                active:scale-95
                group
              "
            >
              <div className="relative flex items-center justify-center">
                {/* This arrow moves slightly left on hover */}
                <ArrowLeft 
                  size={20} 
                  className="transition-transform duration-300 group-hover:-translate-x-1.5" 
                />
              </div>

              <span className="text-xs uppercase tracking-[0.15em] transition-colors">
                Back to Guides
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER BREADCRUMBS */}
      <footer className="py-12 border-t border-gray-100 dark:border-white/5 text-center text-sm text-gray-400">
        <p>
          <Link href="/" className="hover:text-green-500 transition-colors">Home</Link> / 
          <Link href="/vet-guide" className="hover:text-green-500 ml-1 transition-colors">Vet Guide</Link> / 
          <span className="ml-1 text-gray-900 dark:text-white font-bold">{clinic.name}</span>
        </p>
      </footer>

      {/* JSON-LD FOR GOOGLE SEARCH */}
      <Script type="application/ld+json" id={`vet-schema-${clinic.slug}`}>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          "name": clinic.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": clinic.address,
            "addressLocality": clinic.city,
            "addressRegion": clinic.state,
          },
          "telephone": clinic.phone,
          "url": clinic.website,
          "description": clinic.description,
          "memberOf": {
            "@type": "Organization",
            "name": "Exotic Animales Certified Network"
          }
        })}
      </Script>
    </div>
    </Suspense>
  );
};

export default VetProfilePage;

export const generateStaticParams = async () => {
  return vetData.map((clinic) => ({ slug: clinic.slug }));
};