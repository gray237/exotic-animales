"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex items-center mr-[5px]"> 
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="group flex flex-col items-center justify-center h-12 w-auto outline-hidden"
        >
          <span className=" text-[10px] font-medium uppercase tracking-widest text-gray-500 dark:text-zinc-400  leading-none block -mb-0.5">
            Menu
          </span>

          <div className="transition-transform duration-200 group-hover:scale-105 flex items-center justify-center h-8">
            <AlignLeft 
              size={40} 
              strokeWidth={2.5} 
              className="text-gray-800 dark:text-gray-100" 
            />
          </div>
        </button>
      </div>

      <div className="lg:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;