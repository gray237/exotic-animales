"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav
  aria-label="Primary"
  className="
    hidden lg:flex items-center gap-0.5
    px-2 py-1.5 rounded-2xl border border-black/8
    bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      
      {headerData.map((item) => {
        const isActive = pathname === item.href;
        const children = item.children;
        // Determine if this is the large "Shop" style menu
        const isLargeMega = children?.type === "mega" && children.featured;

        return (
          <div key={item.title} className="relative isolate">
            <div className="relative group">
              {/* TOP LEVEL LINK */}
              <Link
                href={item.href}
                className={cn(
                  `
                  flex items-center
                  px-3 lg:px-4 py-2
                  rounded-xl
                  text-sm font-semibold
                  text-gray-600
                  border border-transparent
                  transition-all duration-200
                  hover:text-gray-900
                  hover:bg-purple-500/10
                  hover:-translate-y-px whitespace-nowrap
                  `,
                  isActive &&
                    `
                    text-gray-900
                    bg-linear-to-br
                    from-purple-500/20
                    to-pink-500/15
                    border-black/10
                    shadow-[0_10px_26px_rgba(107,77,255,0.18)]
                    `
                )}
              >
                <span>{item.title}</span>

                {children && (
                  <ChevronDown
                    size={14}
                    className="
                      
                      opacity-60
                      transition-transform duration-200
                      group-hover:rotate-180
                    "
                  />
                )}
              </Link>

              {/* ================= MEGA MENU ================= */}
              {children?.type === "mega" && children.sections && (
                <div
                  className={cn(
                    "absolute top-full left-1/2 z-50 pt-2 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                    // If it has featured content (Shop), make it wide. Otherwise (Info), let it fit content.
                    isLargeMega ? "w-[min(90vw,900px)]" : "w-max min-w-100"
                  )}
                >
                  <div className="rounded-3xl border border-black/10 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.15)] p-8">
                    <div 
                      className={cn(
                        "grid gap-8",
                        // Logic: 3 columns if featured exists, otherwise 2 columns (for Info)
                        isLargeMega ? "grid-cols-3" : "grid-cols-2"
                      )}
                    >
                      {children.sections.map((section) => (
                        <div key={section.title} className="min-w-45">
                          <h4 className="px-3 mb-4 text-sm font-bold text-gray-900">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.title}>
                                <Link
                                  href={link.href}
                                  className="
                                    block rounded-lg px-3 py-2
                                    text-sm font-medium text-gray-700
                                    hover:text-gray-900
                                    hover:bg-purple-500/10
                                    transition
                                  "
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {children.featured && (
                        <div className="flex flex-col justify-between rounded-2xl bg-purple-500/5 p-5">
                          <div>
                            <h4 className="mb-3 text-sm font-bold text-gray-900">
                              {children.featured.title}
                            </h4>
                            <ul className="space-y-3">
                              {children.featured.items.map((feat) => (
                                <li key={feat.title}>
                                  <Link
                                    href={feat.href}
                                    className="text-sm font-medium text-gray-800 hover:underline"
                                  >
                                    {feat.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {children.featured.image && (
                            <div className="mt-6 overflow-hidden rounded-xl">
                              <Image
                                src={children.featured.image}
                                alt="Featured"
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;