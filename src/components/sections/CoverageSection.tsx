"use client";

import React from "react";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoverageSectionProps {
  onInquireTravel?: () => void;
}

export function CoverageSection({ onInquireTravel }: CoverageSectionProps) {
  const sectors = [
    "Factories & Garments (RMG)",
    "Warehouses & Logistics Hubs",
    "Pharmaceutical Cleanrooms",
    "Food & Beverage Plants",
    "Hospitals & Healthcare Clinics",
    "Schools & Universities",
    "Showrooms & Shopping Malls",
    "Multi-Level Car Parks",
    "Homes & Penthouse Terraces",
  ];

  const regionalHubs = [
    { name: "DHAKA METRO (MIRPUR)", isPrimary: true },
    { name: "Uttara Industrial", isPrimary: false },
    { name: "Gulshan & Banani", isPrimary: false },
    { name: "Tejgaon Commercial", isPrimary: false },
    { name: "Motijheel C/A", isPrimary: false },
    { name: "Gazipur & Tongi Hub", isPrimary: false },
    { name: "Savar & Ashulia EPZ", isPrimary: false },
    { name: "Narayanganj BSCIC", isPrimary: false },
    { name: "Chattogram Port & EPZ", isPrimary: false },
  ];

  const handleInquire = () => {
    if (onInquireTravel) {
      onInquireTravel();
    } else {
      const el = document.querySelector("#quote-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            National Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight mb-2">
            Industries and Areas We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Engineered flooring systems compliant with international manufacturing hygiene standards.
          </p>
        </div>

        {/* 2 Big Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Specialized Sectors */}
          <div className="bg-gray-50/70 border border-gray-200/80 p-6 sm:p-8">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-gray-950 mb-6">
              <span className="w-2 h-4 bg-[#d32323] inline-block"></span>
              <Building2 className="w-4 h-4 text-[#d32323]" />
              <span>Specialized Sectors</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {sectors.map((sec, i) => (
                <span
                  key={i}
                  className="bg-white hover:bg-gray-100 border border-gray-200/90 text-gray-800 text-xs font-medium px-3.5 py-2 rounded-xs transition-colors"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Regional Coverage Hubs */}
          <div className="bg-gray-50/70 border border-gray-200/80 p-6 sm:p-8">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-gray-950 mb-6">
              <span className="w-2 h-4 bg-[#d32323] inline-block"></span>
              <MapPin className="w-4 h-4 text-[#d32323]" />
              <span>Regional Coverage Hubs</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {regionalHubs.map((hub, i) => (
                <span
                  key={i}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-xs border transition-colors ${
                    hub.isPrimary
                      ? "bg-[#0c1219] text-white border-[#0c1219]"
                      : "bg-white text-gray-800 border-gray-200/90 hover:bg-gray-100"
                  }`}
                >
                  {hub.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip */}
        <div className="bg-[#0c1219] text-white p-4 sm:p-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Based in Mirpur, Dhaka. We travel to your site anywhere in Bangladesh.</span>
          </div>

          <Button
            onClick={handleInquire}
            className="bg-[#d32323] hover:bg-[#b51c1c] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-4 rounded-none shadow-xs shrink-0"
          >
            Inquire Regional Travel
          </Button>
        </div>
      </div>
    </section>
  );
}
