import { NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";
import { adoptionData } from "@/app/(client)/adopt/adoptionData";
import { vetData } from "@/app/(client)/vet-guide/vetData";
import { bioactiveData, BioactiveGuide } from "@/app/(client)/bioactive-guides/bioactiveData";

// --- Types for Sanity Data ---
interface SanityProduct {
  slug: string;
  name: string;
  _updatedAt: string;
  images: string[];
}

interface SanityCategory {
  slug: string;
  title: string;
  _updatedAt: string;
  mainImage: string;
}

interface SanityBlog {
  slug: string;
  title: string;
  _updatedAt: string;
}

// --- XML Escaping Helper ---
const escapeXml = (unsafe: string | undefined | null) => {
  if (!unsafe) return "";
  return unsafe.replace(/[<>&"']/g, (m) => {
    switch (m) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return m;
    }
  });
};

interface AdoptionItem {
  slug: string;
  title: string;
  updatedAt?: string;
  categoryImage?: string | null; // Changed from any to be safer
}

interface VetItem {
  slug: string;
  updatedAt?: string;
}

export async function GET() {
  try {
    const baseUrl = "https://www.exoticanimales.com";
    // Removed 'now' as it was unused
    const lastBulkUpdate = "2026-02-04T00:00:00.000Z"; 

    // --- Fetch Products ---
    const productsQuery = `*[_type == "product"]{
      "slug": slug.current,
      "name": name,
      _updatedAt,
      "images": images[].asset->url
    }`;
    const products: SanityProduct[] = await backendClient.fetch(productsQuery);

    // --- Fetch Categories ---
    const categoriesQuery = `*[_type == "category" && defined(slug.current)]{
      "slug": slug.current,
      "title": title,
      _updatedAt,
      "mainImage": mainImage.asset->url
    }`;
    const categories: SanityCategory[] = await backendClient.fetch(categoriesQuery);

    // --- Fetch Blogs ---
    const blogsQuery = `*[_type == "blog" && defined(slug.current)]{
      "slug": slug.current,
      "title": title,
      _updatedAt
    }`;
    const blogs: SanityBlog[] = await backendClient.fetch(blogsQuery);

    // --- Build Product URLs ---
    const productUrls = products.map((p) => {
      const images = (p.images || []).map((img) => `
        <image:image>
          <image:loc>${escapeXml(img)}</image:loc>
          <image:title>${escapeXml(p.name)}</image:title>
        </image:image>`).join("");

      return `
      <url>
        <loc>${baseUrl}/product/${escapeXml(p.slug)}</loc>
        <lastmod>${p._updatedAt || lastBulkUpdate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
        ${images}
      </url>`;
    }).join("");

    // --- Build Category URLs ---
    const categoryUrls = categories.map((c) => {
      const imageTag = c.mainImage ? `
        <image:image>
          <image:loc>${escapeXml(c.mainImage)}</image:loc>
          <image:title>${escapeXml(c.title)}</image:title>
        </image:image>` : "";
      
      return `
      <url>
        <loc>${baseUrl}/category/${escapeXml(c.slug)}</loc>
        <lastmod>${c._updatedAt || lastBulkUpdate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.85</priority>
        ${imageTag}
      </url>`;
    }).join("");

    // --- Build Blog URLs ---
    const blogUrls = blogs.map((b) => `
      <url>
        <loc>${baseUrl}/blog/${escapeXml(b.slug)}</loc>
        <lastmod>${b._updatedAt || lastBulkUpdate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`).join("");

    // --- Build Adopt URLs ---
    const adoptUrls = (adoptionData as unknown as AdoptionItem[]).map((a) => {
      const hasValidImage = a.categoryImage && typeof a.categoryImage === 'string';
      const imageTag = hasValidImage ? `
        <image:image>
          <image:loc>${escapeXml(a.categoryImage as string)}</image:loc>
          <image:title>${escapeXml(a.title)}</image:title>
        </image:image>` : "";

      return `
      <url>
        <loc>${baseUrl}/adopt/${escapeXml(a.slug)}</loc>
        <lastmod>${a.updatedAt || lastBulkUpdate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
        ${imageTag}
      </url>`;
    }).join("");

    // --- Build Vet Guide URLs ---
    const vetUrls = (vetData as VetItem[]).map((v) => `
      <url>
        <loc>${baseUrl}/vet-guide/${escapeXml(v.slug)}</loc>
        <lastmod>${v.updatedAt || lastBulkUpdate}</lastmod> 
        <changefreq>monthly</changefreq>
        <priority>0.85</priority>
      </url>`).join("");

    // --- Build Bioactive Guide URLs ---
    const bioactiveUrls = (bioactiveData as BioactiveGuide[]).map((g) => {
      const imageUrl = typeof g.heroImage === 'string' 
        ? g.heroImage 
        : g.heroImage?.src; 

      const imageTag = imageUrl ? `
        <image:image>
          <image:loc>${escapeXml(imageUrl)}</image:loc>
          <image:title>${escapeXml(g.title)}</image:title>
        </image:image>` : "";

      return `
      <url>
        <loc>${baseUrl}/bioactive-guides/${escapeXml(g.slug)}</loc>
        <lastmod>${lastBulkUpdate}</lastmod> 
        <changefreq>monthly</changefreq>
        <priority>0.85</priority>
        ${imageTag}
      </url>`;
    }).join("");

    // --- Static Pages ---
    const staticPages = [
      { path: "/", priority: "1.0" },
      { path: "/shop", priority: "0.95" },
      { path: "/deals", priority: "0.8" },
      { path: "/faq", priority: "0.7" },
      { path: "/about", priority: "0.7" },
      { path: "/vet-guide", priority: "0.9" },
      { path: "/pet-boarding", priority: "0.9" },
      { path: "/bioactive-guides", priority: "0.9" },
      { path: "/care-sheets", priority: "0.8" },
      { path: "/new-litters", priority: "0.8" },
      { path: "/payment", priority: "0.7" },
      { path: "/reservation", priority: "0.7" },
      { path: "/shipping-process", priority: "0.7" },
      { path: "/contact", priority: "0.6" },
    ];

    const staticUrls = staticPages.map((page) => `
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <lastmod>${lastBulkUpdate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${page.priority}</priority>
      </url>`).join("");

    // --- Final Sitemap Assembly ---
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
    ${productUrls}
    ${categoryUrls}
    ${blogUrls}
    ${adoptUrls}
    ${vetUrls}
    ${bioactiveUrls}
    ${staticUrls}
    </urlset>`.trim();

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return new NextResponse("Failed to generate sitemap", { status: 500 });
  }
}