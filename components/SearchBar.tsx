"use client";
import { Search, X, Loader2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchDropdown = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isPending, setIsPending] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Sync input with URL if user navigates or refreshes
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus input when opened
      inputRef.current?.focus();
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setIsPending(true);
    // Push to the search page we just built
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    
    // Close and reset states after a short delay for UX
    setTimeout(() => {
      setOpen(false);
      setIsPending(false);
    }, 500);
  };

  return (
    <div className="relative flex items-center gap-2">
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center h-10 w-10 rounded-xl border transition-all duration-300 shadow-sm
          ${open 
            ? "bg-shop_dark_green border-shop_dark_green text-white shadow-md scale-95" 
            : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-shop_dark_green hover:text-shop_dark_green"
          }`}
        aria-label="Toggle search"
      >
        {open ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
      </button>

      {/* DROPDOWN MENU */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-12 w-[320px] md:w-[400px] bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-3 z-100 animate-in fade-in zoom-in-95 duration-200 origin-top-right"
        >
          <form onSubmit={handleSearch} className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pets, laws, or guides..."
                className="w-full pl-4 pr-10 h-12 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-shop_dark_green/50 transition-all text-sm"
              />
              {query && !isPending && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {isPending && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-4 h-4 animate-spin text-shop_dark_green" />
                </div>
              )}
            </div>

            <button
  type="submit"
  disabled={!query.trim() || isPending}
  className="
    h-12 w-12 md:w-14 rounded-xl shrink-0
    bg-linear-to-br from-purple-500/22  to-teal-400/14
    text-gray-600 shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)]
    hover:shadow-[0_12px_24px_-8px_rgba(79,70,229,0.6)]
    hover:brightness-110 hover:-translate-y-0.5
    active:scale-95 active:translate-y-0
    disabled:opacity-40 disabled:grayscale disabled:pointer-events-none 
    transition-all duration-300 ease-out
    flex items-center justify-center
    group ring-1 ring-white/20 border border-black/10
  "
>
  {isPending ? (
    <Loader2 className="w-5 h-5 animate-spin opacity-80" />
  ) : (
    <Search 
      size={20} 
      strokeWidth={2.5}
      className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" 
    />
  )}
</button>
          </form>

          {/* QUICK SUGGESTIONS (The Golden Touch) */}
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 px-1">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Texas Laws", "Axolotl Care", "Fennec Fox", "Exotic Vets"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    // Immediate search on suggestion click
                    router.push(`/search?q=${encodeURIComponent(s)}`);
                    setOpen(false);
                  }}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 hover:bg-shop_light_green/20 hover:text-shop_dark_green transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;