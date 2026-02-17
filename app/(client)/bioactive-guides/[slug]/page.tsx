import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { bioactiveData } from "../bioactiveData";
import { eaBackground } from "@/images";
import { Clock, Gauge, ChevronRight, BookOpen, ArrowLeft, Sprout } from "lucide-react";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const guide = bioactiveData.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide Not Found" };
  return { title: `${guide.title} | Bioactive Manual`, description: guide.description };
};

const GuideSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const guide = bioactiveData.find((g) => g.slug === slug);
  if (!guide) notFound();

  // Filter out the current guide & Shuffle (Fisher-Yates style logic)
  const filteredGuides = bioactiveData.filter((g) => g.slug !== slug);

  const randomizedGuides = [...filteredGuides].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image src={eaBackground} alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/40 via-gray-900/80 to-gray-950" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {guide.category}
            </span>
            <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
              <Clock size={16} className="text-purple-400" /> {guide.readTime}
              <span className="mx-2 opacity-30">|</span>
              <Gauge size={16} className="text-green-400" /> {guide.difficulty}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white max-w-4xl leading-tight">
            {guide.title}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: CONTENT (COL 8) */}
          <main className="lg:col-span-8 space-y-10">

            {/* 1. INTRO BLURB */}
            {guide.introBlurb && (
              <div className="p-8 rounded-3xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
                <p className="text-lg leading-relaxed italic text-gray-800 dark:text-gray-200
                              prose prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: guide.introBlurb }} />
              </div>
            )}

            {/* DYNAMIC FULL-WIDTH FEATURE IMAGE */}
            {guide.heroImage && (
              <div className="relative w-full h-[280px] md:h-[420px] my-12 group">
                <div className="absolute inset-0 rounded-4xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800">
                  <Image 
                    src={guide.heroImage} 
                    alt={`${guide.title} environment`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
                  
                  {/* Decorative Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <Sprout size={16} className="text-green-400" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Live Ecosystem Preview</span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TEXT SECTIONS */}
            {guide.textSections?.map((section, i) => (
              <section key={i} 
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-strong:font-bold 
              prose-strong:text-gray-900 
              dark:prose-strong:text-white">
                {section.title && <h2 className="text-3xl font-bold mb-6">{section.title}</h2>}
                <div dangerouslySetInnerHTML={{ __html: section.content }} className="text-gray-600 dark:text-gray-300 leading-relaxed" />
              </section>
            ))}

            {/* 3. TWO COLUMN TEXT */}
            {guide.twoColumnSections?.map((section, i) => (
              <section key={i} className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-600">{section.leftTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: section.leftContent }} className="text-gray-600 dark:text-gray-400 leading-relaxed" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">{section.rightTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: section.rightContent }} className="text-gray-600 dark:text-gray-400 leading-relaxed" />
                </div>
              </section>
            ))}

            {/* 4. TEXT + IMAGE BLOCKS */}
            {guide.imageTextBlocks?.map((block, i) => (
              <section 
                key={i} 
                className={`flex flex-col ${block.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-stretch`}
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  {block.title && <h3 className="text-2xl font-bold mb-4">{block.title}</h3>}
                  <div 
                    dangerouslySetInnerHTML={{ __html: block.content }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed
                    prose prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white" 
                  />
                </div>

                {/* Dynamic Height Image Container */}
                {block.image && (
                  <div className="flex-1 w-full min-h-[400px] md:min-h-[300px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800">
                    <Image 
                      src={block.image} 
                      alt={block.title || "Step visual"} 
                      fill 
                      className="object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                )}
              </section>
            ))}

            {/* FULL WIDTH MID-PAGE BANNER */}
            {guide.bannerImage && (
              <section className="relative w-full h-[250px] md:h-[350px] my-16 overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-zinc-800">
                <Image 
                  src={guide.bannerImage} 
                  alt="Ecosystem Detail Banner" 
                  fill 
                  className="object-cover" 
                />
                {/* Gradient Overlay for a cinematic look */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent" />
                
                {/* Subtle Branding or Caption */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em]">Bioactive Precision</span>
                  </div>
                </div>
              </section>
            )}

            {/* 5. LIST SECTIONS (Bulletproof List) */}
            {guide.listSections?.map((list, i) => (
              <section key={i} className="bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
                <h3 className="text-2xl font-bold mb-6">{list.title}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {list.items.map((item, idx) => (
                    <li  key={idx} 
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400
                      prose prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white" >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* 6. ACCORDION SECTIONS */}
            {guide.accordionSections?.map((accordion, i) => (
              <section key={i} className="pt-12 border-t border-gray-100 dark:border-zinc-800">
                <h3 className="text-2xl font-bold mb-8">{accordion.title}</h3>

                <div className="space-y-4">
                  {accordion.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6 transition-all"
                    >
                      <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
                        {item.question}
                        <ChevronRight className="transition-transform group-open:rotate-90 text-purple-500" size={18} />
                      </summary>

                      <div className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed
                        prose prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </details>
                  ))}
                </div>
              </section>
            ))}

            {/* BACK BUTTON */}
            <Link 
              href="/bioactive-guides" 
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
          </main>

          {/* RIGHT: STICKY SIDEBAR (COL 4) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">
              <div className="p-1 rounded-3xl bg-linear-to-br from-purple-500/20 to-green-500/20">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-[22px] shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                    <BookOpen fill="currentColor" className="text-purple-600 dark:text-purple-400" size={18} />
                    Explore More Guides
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                    {/* 3. Map through the randomized array */}
                    {randomizedGuides.slice(0, 6).map((item, index) => {
                      
                      // Visibility logic: 4 on mobile, 6 on tablet, 5 on desktop
                      let responsiveDisplayClass = "flex";
                      if (index === 4) responsiveDisplayClass = "hidden md:flex"; // 5th item
                      if (index === 5) responsiveDisplayClass = "hidden md:flex lg:hidden"; // 6th item

                      return (
                        <Link 
                          key={item.slug} 
                          href={`/bioactive-guides/${item.slug}`}
                          className={`group gap-4 p-2 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-gray-100 dark:hover:border-zinc-700 ${responsiveDisplayClass}`}
                        >
                          <div className="relative w-17 h-17 rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-zinc-800">
                            <Image 
                              src={item.heroImage} 
                              alt={item.title} 
                              fill 
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold leading-tight line-clamp-2 text-gray-800 dark:text-zinc-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-zinc-500 mt-1 flex items-center gap-1">
                              {item.readTime} <ChevronRight size={10} />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar Mini Call to Action */}
              <div className="bg-linear-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl text-white overflow-hidden relative group">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Need a Kit?</h4>
                  <p className="text-purple-100 text-sm mb-6">We supply the microfauna and plants for all our guides.</p>
                  <Link href="/shop" className="bg-white text-purple-600 px-6 py-2 rounded-xl font-bold text-sm inline-block hover:scale-105 transition-transform">
                    Shop Supplies
                  </Link>
                </div>
                <Sprout className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default GuideSlugPage;

export const generateStaticParams = async () => {
  return bioactiveData.map((guide) => ({ slug: guide.slug }));
};