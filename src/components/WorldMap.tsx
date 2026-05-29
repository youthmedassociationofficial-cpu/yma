"use client";

import { useState } from "react";
import { MapPin, DollarSign, Heart, ExternalLink } from "lucide-react";
import siteData from "@/data/siteData.json";

interface RegionData {
  id: string;
  name: string;
  amount: number;
  charity: string;
  coordinates: { x: string; y: string };
}

export default function WorldMap() {
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [activeRegion, setActiveRegion] = useState<RegionData | null>(null);

  const regions: RegionData[] = siteData.impact.mapRegions;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-10 shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Map Area */}
        <div className="flex-1 w-full relative">
          <div className="text-center lg:text-left mb-6">
            <span className="px-3 py-1 text-xs font-semibold text-accent bg-teal-950/50 border border-teal-900/50 rounded-full">
              Live Impact Tracker
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-2">
              Global Fund Distribution
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Hover over the pulsing nodes to view allocation details.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-slate-950/40 rounded-2xl border border-slate-800/50 overflow-hidden flex items-center justify-center">
            
            {/* World Grid Silhouette (SVG Representation) */}
            <svg
              className="w-full h-full opacity-20 text-slate-700"
              viewBox="0 0 1000 500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified Grid Lines for Clinical Look */}
              <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`x-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line key={`y-${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} />
                ))}
              </g>

              {/* Stylized Continent Poly-groups */}
              {/* North America */}
              <polygon points="120,80 160,80 240,110 320,110 340,140 280,240 250,220 220,260 210,310 180,260 140,250 80,180 80,120" />
              {/* South America */}
              <polygon points="260,280 340,310 390,380 340,480 300,480 270,390 240,330" />
              {/* Africa */}
              <polygon points="460,240 500,210 560,220 620,290 600,340 540,430 490,430 460,340 450,290" />
              {/* Europe & Asia */}
              <polygon points="440,160 520,110 600,100 700,90 820,120 900,160 920,240 850,280 820,330 750,330 700,280 640,280 580,240 480,240 440,200" />
              {/* Australia */}
              <polygon points="760,350 820,350 860,380 840,420 780,410 740,380" />
            </svg>

            {/* Glowing Map Pins */}
            {regions.map((region) => {
              const isHovered = hoveredRegion?.id === region.id;
              const isActive = activeRegion?.id === region.id;
              
              return (
                <button
                  key={region.id}
                  className="absolute group focus:outline-none transition-transform hover:scale-110"
                  style={{ top: region.coordinates.y, left: region.coordinates.x }}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setActiveRegion(activeRegion?.id === region.id ? null : region)}
                >
                  {/* Pulse Rings */}
                  <span className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isHovered || isActive ? "bg-accent" : "bg-teal-500/40"
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
                      isHovered || isActive ? "bg-accent-light" : "bg-accent"
                    }`}></span>
                  </span>
                </button>
              );
            })}

            {/* Hover Tooltip Overlay (Desktop Only) */}
            {hoveredRegion && (
              <div
                className="hidden md:block absolute bg-slate-900/95 border border-slate-800 p-4 rounded-xl shadow-2xl backdrop-blur-md pointer-events-none z-10 w-64 animate-fade-in"
                style={{
                  top: `calc(${hoveredRegion.coordinates.y} - 120px)`,
                  left: `calc(${hoveredRegion.coordinates.x} - 128px)`,
                }}
              >
                <div className="flex items-center justify-between mb-1.5 border-b border-slate-800 pb-1.5">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {hoveredRegion.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-teal-400">
                    ${hoveredRegion.amount.toLocaleString()}
                  </span>
                </div>
                <h4 className="text-white text-xs font-bold font-sans">
                  {hoveredRegion.charity}
                </h4>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Info List */}
        <div className="w-full lg:w-80 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8 self-stretch justify-center">
          <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-2">
            Funding Regions
          </h4>
          <div className="flex flex-col gap-3">
            {regions.map((region) => {
              const isSelected = hoveredRegion?.id === region.id || activeRegion?.id === region.id;
              
              return (
                <div
                  key={region.id}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setActiveRegion(activeRegion?.id === region.id ? null : region)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                    isSelected
                      ? "bg-slate-800/80 border-accent/40 shadow-md shadow-accent/5"
                      : "bg-slate-950/30 border-slate-850 hover:bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-sans font-semibold text-white">
                      {region.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-accent-light">
                      ${region.amount.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-sans leading-snug">
                    {region.charity}
                  </span>
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 p-4 rounded-2xl bg-teal-950/20 border border-teal-900/30 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-950/50 text-accent mt-0.5">
              <Heart size={16} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-white">100% Student Driven</span>
              <p className="text-[11px] text-slate-400 leading-normal">
                Every dollar allocated goes directly to medical resources and humanitarian aid.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
