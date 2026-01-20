"use client";

import React, { FC, useState } from "react";
import Logo from "./Logo";
import { X, ChevronDown } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  const [openItem, setOpenItem] = useState<string | null>(null);

  // grab pet store featured image safely
  const petStore = headerData.find((i) => i.title === "Pet Store");
  const featuredImage = petStore?.children?.featured?.image;

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-full bg-black/40 transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 h-screen bg-white
                   p-8 flex flex-col gap-6
                   text-black/80 shadow-xl overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={onClose}
            className="text-black hover:opacity-70 transition"
          >
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 font-semibold tracking-wide">
          {headerData.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = !!item.children;
            const isOpen = openItem === item.title;

            return (
              <div key={item.title}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={!hasChildren ? onClose : undefined}
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "text-black"
                        : "text-black/70 hover:text-black"
                    )}
                  >
                    {item.title}
                  </Link>

                  {hasChildren && (
                    <button
                      onClick={() =>
                        setOpenItem(isOpen ? null : item.title)
                      }
                      className="p-1 text-black/70"
                    >
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Children */}
                {hasChildren && isOpen && (
                  <div className="mt-3 ml-3 space-y-4 border-l border-black/10 pl-4">
                    {item.children.type === "mega" &&
                      item.children.sections.map((section) => (
                        <div key={section.title}>
                          <p className="text-sm font-bold text-black mb-2">
                            {section.title}
                          </p>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.title}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="text-sm text-black/70 hover:text-black transition"
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {item.children.type === "dropdown" &&
                      item.children.links.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          onClick={onClose}
                          className="block text-sm text-black/70 hover:text-black transition"
                        >
                          {link.title}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mt-6 rounded-xl overflow-hidden border border-black/10">
            <Image
              src={featuredImage}
              alt="Exotic Pets Sale"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Social */}
        <div className="mt-4 pt-4 border-t border-black/10">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
