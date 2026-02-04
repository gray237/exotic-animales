"use client";
import React, { useState } from "react";

const stateNames: { [key: string]: string } = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming"
};

const paths = [
  { id: "HI", d: "M405.2,501.3l-5.2,1.2l-1.9-1.9l-1.2,1.3l0.3,1.9l2.4,2.3l4.3,0.3l2.2-2.5L405.2,501.3z M381,507.2l-5.4,1.9l0.4,2.1l4.1,0.5l3.8-1.7l1-3.6L381,507.2z M362.9,507.2l-3.3,0.3l-2,2.3l1.3,2.7l4,1.4l3.1-2.1l0.3-3.6L362.9,507.2z M349.5,498.1l-3.1,1.1l-1.3,3.7l2,2.8l3.6-0.3l2-3.8l-0.7-3L349.5,498.1z M330.1,489.1l-3.5-0.1l-2,1.5l0.4,2.1l3.5,0.7l2.8-1.5L330.1,489.1z M314.9,488.6l-2.4-1.3l-2.7,1l-0.5,2.4l2.4,1.8l2.9-0.8L314.9,488.6z" },
  { id: "AK", d: "M159.8,502.5l-3.1-2.8l-4.5,1.2l-0.6,3.4l2.4,2.9l4.5,0.6l2.9-2.1L159.8,502.5z M131,487.8l-3.6,1.4l-1,3.4l2,2.3l4.4-0.4l2.4-4L131,487.8z M116.1,475l-4,0.1l-2.6,2.3l1.2,3.3l4,0.1l3.3-3L116.1,475z M251.2,467.2l-0.9-13.8l-4.5-0.7l-4.4,2.1l-1.3,4.1l2.5,4.3l4.2,3.3L251.2,467.2z M214.3,446.9l-2.4,0.1l-1,1.9l1.4,1.4l2.3-0.5L214.3,446.9z" },
  { id: "FL", d: "M800.2,456.9l-11.2,3.4l-8.4,14l-4.2,10.6l0.2,12l6.2,12.4l5.3,4.4l4.2-2l-1.2-11.4l5.4-14.7l7.2-10.7l6.5-6l0.3-6.5L800.2,456.9z M707.4,414.1l0.3,5.4l21.4,1.2l12.4,1.2l15.1,3.1l8,5.1l7.8,11.2l11.6,10.4l15.1,3.4l1.3-3.6l-10.7-10.4l-8.4-11l-12.3-13l-18.7-1.4l-24.3-1.4L707.4,414.1z" },
  { id: "TX", d: "M435.6,324.9l-20.4,1.5l-0.6,12l-7.4,4l-4.5,15.1l-10.1,6.5l-3,9.5l1.6,10l12,12.7l16.1,6.3l13.8,12.4l1.6,14l8,10.4l15.4,6l18.4,13.8l13.5,5.1l11.3,16.6l16.3,1l9.8-5.7l10.1,0.3l14.9,13l13.5,6.5l8.6-2.2l1.6-11.2l-7.1-13.8l-0.6-18.4l-6.5-12.7l-15.1-13.8l-12.4-4.8l-4.5-10.4l-14.3-1.9l-12.7-10.7l-0.3-12l-11-20.7l-0.3-24.3l-16.1-0.9l-17.5-0.6L435.6,324.9z" },
  { id: "CA", d: "M216.7,112.5l-19,41.9l11,54.7l19.6,48.1l23.5,39.2l49,79.5l3.8,15.1l21.9,13.2l20.4,2.5l14.7-22.3l10.7-56.9l-5.7-10.7l-29.3-51.3L307.7,213l-24.4-48.4l-27.1-53.6L216.7,112.5z" },
  { id: "NY", d: "M891.7,162.1l-13.2-6.5l-8.6-1.5l-12-8.6l-15.7-3l-15.4,1l-15.7,8.6l-10.4,0.6l-1.5-10.1l2.5-12.4l-10.4-15.4l-12.4-2.8l-1.9,4.8l2.8,11.3l-2.5,14.3l-12.7,4.8l-6,11.3l2.8,11.3l11.3,12.4l0.3,14l15.1,1.5l16.3,10.4l15.7,1.6l17.8,12.7l15.4,3.1L891.7,162.1z" },
  { id: "AL", d: "M692.7,357.6l-0.3,56.6l5.7,0.3l1,12.4l11.6,1.2l0.6-13l36.5-0.3l0.3-57.5l-27.4-0.3L692.7,357.6z" },
  { id: "AZ", d: "M367.7,288l0.3,86l12.7,2.2l21.9-13.2l-3.8-15.1l-49-79.5L367.7,288z" },
  { id: "AR", d: "M603.4,319l-0.3,47.8l56.6,0.3l1-15.1l11.3-13.8l-1.2-18.7l-35.9-0.3L603.4,319z" },
  { id: "CO", d: "M434.7,212.1l-0.3,64.2l96.6,0.3l0.3-64.2L434.7,212.1z" },
  { id: "CT", d: "M883.7,162.1l-0.3,6.3l14.3,0.3l0.3-6.5L883.7,162.1z" },
  { id: "DE", d: "M867.7,208l-5.1,10.7l4.5,1.5l2.2-11.6L867.7,208z" },
  { id: "GA", d: "M747.7,357.6l-0.3,57.5l24.3,1.4l18.7,1.4l12.3,13l3.6-4.5l-7.1-13l-12.7-24.9l-11-20.1L747.7,357.6z" },
  { id: "ID", d: "M303.4,47.8l-13.5,1.2l-1.2,14l11.3,4.5l4.5,14.9l-22.3,48.1l24.4,48.4l51.6-1.5l-0.3-65.7l-41.9-0.3L303.4,47.8z" },
  { id: "IL", d: "M654.7,212.1l-10.4,12l-1.5,15.7l6,16.6l3.6,18.4l18.7,0.3l1-63.3L654.7,212.1z" },
  { id: "IN", d: "M671.4,212.1l-1,63.3l35.9,0.3l0.3-63.3L671.4,212.1z" },
  { id: "IA", d: "M566.7,180.1l-1.5,16.3l10.4,15.7l79.1,0.3l-1-32.6L566.7,180.1z" },
  { id: "KS", d: "M451.7,276.3l-0.3,42.8l120,0.3l2.2-42.8L451.7,276.3z" },
  { id: "KY", d: "M635.4,275.4l-1.2,18.7l37.1,0.3l34.5-12.7l1-6.3L635.4,275.4z" },
  { id: "LA", d: "M601.7,367.1l1.2,18.7l1.5,11.3l10.1,6.5l14.9,0.3l10.7,13l8.6,0.3l-1.2-50.4L601.7,367.1z" },
  { id: "ME", d: "M919.7,64.1l-15.1,1.5l-11.6,12l-1.2,21.9l12.7,12.7l16.6-4.8l8.6-15.1L919.7,64.1z" },
  { id: "MD", d: "M842.7,192l-11,3.4l-0.3,5.1l36.5,0.3l-1.5-6.5L842.7,192z" },
  { id: "MA", d: "M880.7,148l-0.3,13.8l17.5,0.3l3.6-6.5l-5.1-7.1L880.7,148z" },
  { id: "MI", d: "M738.7,148l-0.3,64.2l35.9,0.3l-1.5-64.2L738.7,148z" },
  { id: "MN", d: "M545.7,85l-1.5,95.1l86.5,0.3l1.5-95.1L545.7,85z" },
  { id: "MS", d: "M653.7,367.1l0.3,57.5l38.7,0.3l-0.3-57.5L653.7,367.1z" },
  { id: "MO", d: "M572.4,244.1l-1.2,74.9l83.5,0.3l-10.4-12l-1.5-15.7l-6-16.6l-3.6-18.4L572.4,244.1z" },
  { id: "MT", d: "M303.4,47.8l143.2,0.3l-0.3,65.7l-91.6,0.3l-2.5-15.1l-11.3-4.5l1.2-14L342,80L303.4,47.8z" },
  { id: "NE", d: "M443.4,180.1l-0.3,32.3l123.6,0.3l0.3-32.3L443.4,180.1z" },
  { id: "NV", d: "M275.4,112.5l-19,41.9l11,54.7l19.6,48.1l23.5,39.2l57.2-22.3l-0.3-161.6L275.4,112.5z" },
  { id: "NH", d: "M892.7,112.5l-1.2,35.4l11.3,0.3l0.3-35.4L892.7,112.5z" },
  { id: "NJ", d: "M875.7,175l-1.2,33l10.4,0.3l0.3-33L875.7,175z" },
  { id: "NM", d: "M434.4,276.6l0.3,113.8l96.6,0.3l-0.3-113.8L434.4,276.6z" },
  { id: "NC", d: "M765.7,275.4l-11.3,47.8l118.4,0.3l-12.7-24.9l-11-20.1L765.7,275.4z" },
  { id: "ND", d: "M446.7,85l-0.3,47.8l99.3,0.3l0.3-47.8L446.7,85z" },
  { id: "OH", d: "M707.4,212.1l-0.3,63.3l57.2,0.3l0.3-63.3L707.4,212.1z" },
  { id: "OK", d: "M451.7,319.1l-0.3,47.8l151.7,0.3l0.3-47.8L451.7,319.1z" },
  { id: "OR", d: "M201.7,112.5l-1.5,95.1l107.5,0.3l-19.6-48.1l-11-54.7L201.7,112.5z" },
  { id: "PA", d: "M764.7,180.1l-0.3,32l101.3,0.3l-0.3-32L764.7,180.1z" },
  { id: "RI", d: "M897.7,162.1l0.3,6.5l6.5,0.3l-0.3-6.5L897.7,162.1z" },
  { id: "SC", d: "M754.4,323.2l0.3,34.5l54.5,0.3l-12.7-24.9L754.4,323.2z" },
  { id: "SD", d: "M446.4,132.8l-0.3,47.3l99.3,0.3l0.3-47.3L446.4,132.8z" },
  { id: "TN", d: "M668.7,319l0.3,38.7l96.7,0.3l-11.3-38.7L668.7,319z" },
  { id: "UT", d: "M367.7,212.1l0.3,65.7l66.7,0.3l-0.3-65.7L367.7,212.1z" },
  { id: "VT", d: "M881.7,112.5l-1.2,35.4l11.3,0.3l0.3-35.4L881.7,112.5z" },
  { id: "VA", d: "M774.4,244.1l-1,31.3l98.3,0.3l-15.1-31.3L774.4,244.1z" },
  { id: "WA", d: "M201.7,47.8l-1.5,64.7l103.2,0.3l1.2-14l-11.3-4.5l-4.5-14.9L201.7,47.8z" },
  { id: "WV", d: "M764.7,212.1l-0.3,32l10,0.3l10.4-32L764.7,212.1z" },
  { id: "WI", d: "M632.7,148l-0.3,64.2l38.7,0.3l-0.3-64.2L632.7,148z" },
  { id: "WY", d: "M344.7,112.5l0.3,99.6l90,0.3l-0.3-99.6L344.7,112.5z" }
];


const USMap = ({ activeState, onSelect }: { activeState: string; onSelect: (s: string) => void }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Standard tooltip offset
    setMousePos({ x: e.clientX + 15, y: e.clientY - 40 });
  };

  return (
    <div className="relative w-full h-full group" onMouseMove={handleMouseMove}>
      {/* FLOATING TOOLTIP - Restored to your preferred style */}
      {hoveredState && (
        <div 
          className="fixed z-9999 pointer-events-none bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          {hoveredState} ({Object.keys(stateNames).find(key => stateNames[key] === hoveredState)})
        </div>
      )}

      {/* The Map Container: We use scale and negative margins to center the mainland */}
      <div className="flex items-center justify-center overflow-visible w-full h-full">
      <svg
        viewBox="0 0 959 593"
        /* Balanced Scale: 1.2 on mobile, 1.3 on desktop 
          Adjusted translate-x to -3% to keep it visually centered at this size
        */
        className="w-full h-auto scale-[1.2] md:scale-[1.3] transition-transform duration-500 ease-out translate-x-[-3%] translate-y-[1%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((state) => {
          const name = stateNames[state.id];
          const isActive = activeState === name;
          
          return (
            <path
              key={state.id}
              d={state.d}
              onClick={() => onSelect(name)}
              onMouseEnter={() => setHoveredState(name)}
              onMouseLeave={() => setHoveredState(null)}
              className={`cursor-pointer transition-all duration-300 stroke-white dark:stroke-gray-950 stroke-[1px] 
                ${isActive 
                  ? "fill-green-500 brightness-110 drop-shadow-md scale-[1.01]" 
                  : "fill-gray-200 dark:fill-gray-700 hover:fill-green-400 dark:hover:fill-green-600"
                }`}
              style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
            />
          );
        })}
      </svg>
    </div>
    </div>
  );
};

export default USMap;