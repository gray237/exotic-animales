import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { adoptionData } from "../adoptionData";
import AdoptionCard from "@/components/AdoptionCard";
import QuickCategories from "@/components/QuickCategories";
import AdoptionAccordion from "@/components/AdoptionAccordion";
import { eaBackground } from "@/images";

// ------------------- DYNAMIC METADATA -------------------
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;

  const category = adoptionData.find((c) => c.slug === slug);

  if (!category) return { title: "Category Not Found" };

  return {
    title: category.seoTitle || category.title,
    description: category.seoDescription || category.description,
    keywords: category.seoKeywords?.join(", "),
    openGraph: {
      title: category.seoTitle || category.title,
      description: category.seoDescription || category.description,
      images: category.heroImage ? [category.heroImage as string] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle || category.title,
      description: category.seoDescription || category.description,
      images: category.heroImage ? [category.heroImage as string] : undefined,
    },
  };
};


export const dynamicParams = false;

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const category = adoptionData.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background */}
        <Image
          src={ eaBackground }
          alt="Adoption background"
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
              {category.title}
            </h1>
            <p className="text-base lg:text-lg transition-all mb-8 text-gray-200">
              {category.description}
            </p>

            <div className="flex gap-4">
              <Link
                href="#pets"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                View Pets
              </Link>
              <Link
                href="/adopt"
                className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-medium rounded-lg whitespace-nowrap"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          {/* Image (1/3) */}
          {category.heroImage && (
            <div className="hidden md:block relative w-full max-w-[400px] aspect-5/4 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={category.heroImage}
                alt={category.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* QUICK CATEGORIES */}
      <QuickCategories />

      {/* AVAILABLE PETS */}
      <section id="pets" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
            {category.title} Available For Adoption
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {category.pets.map((pet) => (
              <AdoptionCard key={pet.name} pet={pet} />
            ))}
          </div>
        </div>
      </section>

      {/* TWO COLUMN TEXT */}
      {category.twoColumnText && (
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: category.twoColumnText.leftTitle, content: category.twoColumnText.leftContent },
              { title: category.twoColumnText.rightTitle, content: category.twoColumnText.rightContent }
            ].map((col, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{col.title}</h3>
                
                {/* Use 'prose' and custom modifier for dark green links */}
                <div 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: col.content }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TEXT + IMAGE SECTION */}
      {category.textImageSection && category.categoryImage && (
        <section className="py-6 md:py-8 bg-white dark:bg-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* 1. Full-Width Title Row */}
            <div className="mb-5 md:mb-10">
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight max-w-4xl">
                {category.textImageSection.title}
              </h3>
              <div className="h-1.5 w-20 bg-linear-to-r from-purple-500 to-green-500 mt-2 rounded-full" />
            </div>

            {/* 2. Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left: Text Content + Policy Link */}
              <div className="lg:col-span-7">
                <div 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: category.textImageSection.content }}
                />
                
                {/* Linked Text + Arrow Under Content */}
                <div className="mt-8">
                  <a 
                    href="/delivery" 
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 group"
                  >
                    <span>Review our full Shipping & Live Arrival Policy</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* Right: Image with Purple to Green Glow */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  {/* Gradient Glow Effect */}
                  <div className="absolute -inset-1.5 bg-linear-to-tr from-purple-600 to-green-500 rounded-4xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
                  
                  <div className="relative h-[350px] md:h-[420px] w-full rounded-4xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10">
                    <Image
                      src={category.categoryImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      <AdoptionAccordion category={category} />

      {/* ================= JSON-LD FOR SEO ================= */}
      <Script type="application/ld+json" id={`adoption-category-${category.slug}`}>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.title,
          description: category.description,
          url: `https://exoticanimales.com/adopt/${category.slug}`,
          image: category.heroImage ? category.heroImage : undefined,
        })}
      </Script>

    </>
  );
};

export default CategoryPage;

export const generateStaticParams = async () => {
  return adoptionData.map((category) => ({
    slug: category.slug,
  }));
};

