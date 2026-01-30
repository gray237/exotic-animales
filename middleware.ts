import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default clerkMiddleware((auth, req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host");

  // 1️⃣ Force non-www → www
  if (host === "exoticanimales.com") {
    const url = req.nextUrl.clone();
    url.hostname = "www.exoticanimales.com";
    return NextResponse.redirect(url, 301);
  }

  // 2️⃣ Public pages that Google can crawl without auth
  const PUBLIC_PATHS = [
    "/",
    "/about",
    "/shop",
    "/shop/",          // exact folder
    "/product",
    "/product/",
    "/category",
    "/category/",
    "/blog",
    "/blog/",
    "/faq",
    "/contact",
    "/deals",
    "/sitemap.xml",
    "/robots.txt",
  ];

  const isPublic = PUBLIC_PATHS.some((path) =>
    pathname.startsWith(path)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // 3️⃣ Protected pages: let clerkMiddleware handle auth automatically
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:css|js|json|png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf)).*)",
  ],
};
