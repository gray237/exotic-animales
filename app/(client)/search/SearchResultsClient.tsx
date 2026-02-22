"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { performGlobalSearch } from "@/lib/search-util"; 
import { searchSanity } from "@/sanity/queries"; 
import Link from "next/link";
import Image from "next/image";
import { Shield, BookOpen, Stethoscope, PawPrint, ShoppingBag, ArrowRight, Search, Loader2, FileText } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

// --- 1. PRO TYPES ---
interface SanitySearchResult {
  _id: string;
  _type: "product" | "blog";
  title?: string;
  price?: number;
  slug?: { current: string } | string;
  image?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }; 
  description?: string;
}

interface LocalResults {
  guides: Array<{ slug: string; title: string; description: string; category: string }>;
  laws: Array<{ state: string; summary: string }>;
  vets: Array<{ slug: string; name: string; city: string; state: string; specialties: string[] }>;
  // ✅ FIXED: Ensure categorySlug is expected here
  pets: Array<{ categorySlug: string; name: string; description: string }>; 
}

const SearchResultsClient = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [sanityResults, setSanityResults] = useState<SanitySearchResult[]>([]);
  const [localResults, setLocalResults] = useState<LocalResults | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllResults = async () => {
      if (!query) return;
      setLoading(true);
      
      try {
        // Since performGlobalSearch is NOT an async function (it's local filtering),
        // we don't actually need Promise.all. 
        const liveData = await searchSanity(query);
        const staticData = performGlobalSearch(query); // Call it directly
        
        setSanityResults(liveData);
        setLocalResults(staticData);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllResults();
  }, [query]);

  const products = sanityResults.filter(item => item._type === "product");
  const blogs = sanityResults.filter(item => item._type === "blog");
  
  const totalCount = 
    products.length + 
    blogs.length + 
    (localResults?.laws.length || 0) + 
    (localResults?.guides.length || 0) + 
    (localResults?.vets.length || 0) + 
    (localResults?.pets.length || 0);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32">
      <Loader2 className="w-12 h-12 animate-spin text-shop_dark_green mb-4" />
      <p className="text-gray-500 font-medium animate-pulse">Searching the Exotic Universe...</p>
    </div>
  );

  if (!query) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Results for <span className="text-indigo-500">&quot;{query}&quot;</span>
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          We found <span className="font-bold text-gray-800">{totalCount}</span> matches.
        </p>
      </div>

      {totalCount === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">No results found</h2>
        </div>
      ) : (
        <div className="space-y-20">
          
          {/* SHOP PRODUCTS */}
          {products.length > 0 && (
            <ResultSection title="Shop Products" icon={<ShoppingBag className="text-indigo-600" />}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => {
                  const slugStr = typeof item.slug === 'string' ? item.slug : item.slug?.current;
                  return (
                    <Link key={item._id} href={`/product/${slugStr}`} className="group bg-white rounded-2xl border p-3 hover:shadow-xl transition-all">
                      <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100 mb-3">
                        {item.image && <Image src={urlFor(item.image).width(500).url()} alt={item.title || "Product"} fill sizes="500px" className="object-cover group-hover:scale-110 transition-transform duration-500" />}
                      </div>
                      <h3 className="font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                      <p className="text-shop_dark_green font-bold mt-1">${item.price}</p>
                    </Link>
                  );
                })}
              </div>
            </ResultSection>
          )}

          {/* GUIDES */}
          {localResults && localResults.guides.length > 0 && (
            <ResultSection title="Care Manuals" icon={<BookOpen className="text-green-600" />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localResults.guides.map((guide) => (
                  <ContentCard key={guide.slug} href={`/bioactive-guides/${guide.slug}`} title={guide.title} desc={guide.description} badge={guide.category} />
                ))}
              </div>
            </ResultSection>
          )}

          {/* LAWS */}
          {localResults && localResults.laws.length > 0 && (
            <ResultSection title="State Legality" icon={<Shield className="text-indigo-600" />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localResults.laws.map((law) => (
                  <ContentCard key={law.state} href={`/exotic-pet-laws/${law.state.toLowerCase()}`} title={`${law.state} Regulations`} desc={law.summary} badge="Legality" />
                ))}
              </div>
            </ResultSection>
          )}

          {/* VETS */}
          {localResults && localResults.vets.length > 0 && (
            <ResultSection title="Veterinarians" icon={<Stethoscope className="text-red-600" />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localResults.vets.map((vet) => (
                  <ContentCard key={vet.slug} href={`/vet-guide/${vet.slug}`} title={vet.name} desc={`${vet.city}, ${vet.state}`} badge="Medical" />
                ))}
              </div>
            </ResultSection>
          )}

          {/* ADOPTION */}
          {localResults && localResults.pets.length > 0 && (
            <ResultSection title="Adoption" icon={<PawPrint className="text-pink-600" />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localResults.pets.map((pet, idx) => (
                  <ContentCard 
                    key={`${pet.name}-${idx}`} 
                    // ✅ FIXED: Now links to the correct category slug page
                    href={`/adopt/${pet.categorySlug}`} 
                    title={pet.name} 
                    desc={pet.description} 
                    badge="Adoption" 
                  />
                ))}
              </div>
            </ResultSection>
          )}

          {/* BLOGS */}
          {blogs.length > 0 && (
            <ResultSection title="Articles" icon={<FileText className="text-purple-600" />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <ContentCard key={blog._id} href={`/blog/${typeof blog.slug === 'string' ? blog.slug : blog.slug?.current}`} title={blog.title || "Untitled"} desc={blog.description || ""} badge="Blog" />
                ))}
              </div>
            </ResultSection>
          )}
        </div>
      )}
    </div>
  );
};

// --- SUB-COMPONENTS (PROPERLY TYPED) ---

const ResultSection = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
  <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-gray-100 dark:bg-zinc-900 rounded-xl">{icon}</div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white uppercase tracking-tighter">{title}</h2>
    </div>
    {children}
  </section>
);

const ContentCard = ({ href, title, desc, badge }: { href: string, title: string, desc: string, badge: string }) => (
  <Link href={href} className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 
  rounded-2xl hover:shadow-xl hover:border-shop_dark_green transition-all flex flex-col h-full">
    <div className="flex justify-between mb-4">
      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded-md">{badge}</span>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-shop_dark_green group-hover:translate-x-1 transition-all" />
    </div>
    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-shop_dark_green transition-colors line-clamp-2">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3 leading-relaxed">{desc}</p>
  </Link>
);

export default SearchResultsClient;