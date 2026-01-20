"use client";
import { Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const SearchDropdown = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", query);
    // Add your actual search logic here
  };

  return (
    <div className="relative flex items-center gap-2">
      {/* Search icon pill */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-9 w-9 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition group"
        aria-label="Open search"
      >
        <Search className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-shop_light_green transition-colors duration-200" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-0 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-3 z-50 flex items-center gap-3"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 px-4 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center px-5 h-10 rounded-full bg-linear-to-r from-green-900 to-green-600 border border-green-700 text-white text-sm font-semibold shadow-md hover:from-green-600 hover:to-green-900 transition"
          >
            Go
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
