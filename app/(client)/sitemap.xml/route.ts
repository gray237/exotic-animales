import { NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backendClient";

export async function GET() {
  try {
    const baseUrl = "https://www.exoticanimales.com";

    // --- Fetch Products ---
    const productsQuery = `*[_type == "product"]{
      "slug": slug.current,
      _updatedAt
    }`;
    const products = await backendClient.fetch(productsQuery);

    // --- Fetch Categories ---
    const categoriesQuery = `*[_type == "category"]{
      "slug": slug.current,
      _updatedAt
    }`;
    const categories = await backendClient.fetch(categoriesQuery);

    // --- Fetch Blogs (if you have a blog schema) ---
    const blogsQuery = `*[_type == "blog"]{
      "slug": slug.current,
      _updatedAt
    }`;
    const blogs = await backendClient.fetch(blogsQuery);

    // --- Build URLs for sitemap ---
    const productUrls = products
      .map(
        (p: any) => `
      <url>
        <loc>${baseUrl}/product/${p.slug}</loc>
        <lastmod>${p._updatedAt || new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>`
      )
      .join("");

    const categoryUrls = categories
      .map(
        (c: any) => `
      <url>
        <loc>${baseUrl}/category/${c.slug}</loc>
        <lastmod>${c._updatedAt || new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join("");

    const blogUrls = blogs
      .map(
        (b: any) => `
      <url>
        <loc>${baseUrl}/blog/${b.slug}</loc>
        <lastmod>${b._updatedAt || new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join("");

    // --- Add static pages ---
    const staticUrls = ["/", "/shop", "/deals", "/faq", "/about", "/delivery", "/new-litters", "/care-sheet", "/contact"]
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join("");

    // --- Combine everything ---
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${productUrls}
      ${categoryUrls}
      ${blogUrls}
      ${staticUrls}
    </urlset>`;

        return new NextResponse(sitemap, {
          headers: {
            "Content-Type": "application/xml",
          },
        });
      } catch (err) {
        console.error("Sitemap generation error:", err);
        return new NextResponse("Failed to generate sitemap", { status: 500 });
      }
    }
