import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/ui/accordion";
import { ArrowLeft, ShieldAlert, Scale } from "lucide-react";
import { legalData } from "../legalData";
import { eaBackground, exoticBanner1 } from "@/images";

// ------------------- HELPERS -------------------
// Helper to generate the slug consistently
const getSlug = (stateName: string) => stateName.toLowerCase().replace(/\s+/g, "-");

// ------------------- DYNAMIC METADATA -------------------
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const stateData = legalData.find((s) => getSlug(s.state) === slug);

  if (!stateData) return { title: "State Not Found | Exotic Animales" };

  return {
    title: `Exotic Pet Laws in ${stateData.state} | Legal & Restricted Animals`,
    description: stateData.summary,
    openGraph: {
      title: `Exotic Pet Laws in ${stateData.state}`,
      description: stateData.summary,
      images: [exoticBanner1.src],
    },
  };
};

export const dynamicParams = false;

// ------------------- PAGE COMPONENT -------------------
const LawSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const stateData = legalData.find((s) => getSlug(s.state) === slug);

  if (!stateData) {
    notFound();
  }

  // Pre-stringifying the JSON-LD to prevent Webpack serialization warnings
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stateData.faqs?.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  });

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* JSON-LD - Moved to top for cleaner SEO injection */}
      <Script
        id="state-law-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* HERO */}
      <section className="relative w-full h-70 md:h-80 flex items-center justify-center text-center overflow-hidden">
        <Image
          src={eaBackground}
          alt="Exotic Laws Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-gray-950" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest w-fit mx-auto">
            <Scale size={14} />
            State Law Overview
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Exotic Pet Laws in {stateData.state}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-16">
        {/* SUMMARY */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">What You Need to Know</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {stateData.summary}
          </p>
        </div>

        {/* LEGAL / RESTRICTED / PROHIBITED */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-green-600">Legal Species</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {stateData.legal.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-yellow-500">Restricted Species</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {stateData.restricted.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-red-600">Prohibited Species</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {stateData.prohibited.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PERMIT SECTION */}
        <section className="bg-purple-50 dark:bg-purple-900/10 p-10 rounded-4xl border border-purple-100 dark:border-purple-800/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <ShieldAlert className="text-purple-600" size={20} />
            Permit & Compliance Requirements
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {stateData.permitRequired
              ? `Certain species in ${stateData.state} require permits, registration, or enclosure inspections. Always check both state and local laws before acquiring an exotic animal.`
              : `Most legal species in ${stateData.state} do not require special permits, but municipal laws may still apply.`}
          </p>
          <p className="text-sm mt-4 text-gray-500 dark:text-gray-400 italic">
            {stateData.notes}
          </p>
        </section>

        {/* FAQ SECTION */}
        {stateData.faqs && stateData.faqs.length > 0 && (
          <section className="pt-12 border-t border-gray-100 dark:border-zinc-800">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion
              items={stateData.faqs.map((faq, i) => ({
                id: `faq-${i}`,
                title: faq.question,
                content: faq.answer,
              }))}
              columns={1}
              allowMultipleOpen={false}
            />
          </section>
        )}

        {/* COMPARISON SECTION */}
        {stateData.comparisons && stateData.comparisons.length > 0 && (
          <section className="bg-gray-50 dark:bg-zinc-900 p-10 rounded-4xl border border-gray-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">How {stateData.state} Compares</h3>
            {stateData.comparisons.map((comp, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-bold text-indigo-600 mb-2">{comp.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {comp.content}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* BACK BUTTON */}
        <Link
          href="/exotic-pet-laws"
          className="inline-flex items-center gap-3 -ml-4 px-4 py-2 rounded-full transition-all duration-300 text-gray-600 dark:text-gray-400 font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 active:scale-95 group"
        >
          <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          <span className="text-xs uppercase tracking-[0.15em]">Back to All States</span>
        </Link>
      </section>
    </div>
  );
};

export default LawSlugPage;

export const generateStaticParams = async () => {
  return legalData.map((s) => ({
    slug: getSlug(s.state),
  }));
};