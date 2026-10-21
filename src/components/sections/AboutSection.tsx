"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldAlert, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenGallery?: () => void;
}

export function AboutSection({ onOpenGallery }: AboutSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header Labels */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            Dhaka Engineered Substrates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black uppercase text-gray-950 tracking-tight max-w-2xl">
            Your Flooring and Waterproofing Partner in Dhaka
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Industrial Overlays */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden border border-gray-200 shadow-md">
              <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
                <Image
                  src="/images/surface-prep.jpg"
                  alt="Industrial surface preparation concrete diamond grinding"
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Top-Right Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-gray-900 border border-gray-200/80 px-3 py-1.5 shadow-md flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-50 text-[#d32323] flex items-center justify-center">
                  <Wrench className="w-3 h-3" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-gray-500 font-normal">GRINDING PROTOCOL:</span> HEAVY DIAMOND PROFILE
                </div>
              </div>

              {/* Bottom Dark Overlay Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0c1219]/95 text-white p-3.5 border-t border-gray-800 flex flex-wrap justify-between items-center text-[10px] sm:text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 font-normal">SUBSTRATE DIAGNOSTICS:</span>
                  <span className="font-bold text-gray-100 tracking-wide uppercase">
                    Substrate Moisture & Compressive Testing
                  </span>
                </div>
                <span className="font-mono text-amber-400 font-bold tracking-wider mt-1 sm:mt-0">
                  METHOD ISO-8502
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mandate */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <strong className="text-gray-950 font-bold">KB Flooring BD</strong> is a Dhaka-based
              flooring and waterproofing contractor. We design, supply and install epoxy and PU
              floors, protect roofs and walls from water, and supply the construction chemicals
              that keep concrete strong. Our work covers factories, warehouses, showrooms,
              hospitals, schools, offices, car parks and private homes.
            </p>

            {/* Mandate Callout Box */}
            <div className="border-l-4 border-[#d32323] bg-gray-50 p-6 rounded-none space-y-2.5">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                <ShieldAlert className="w-4 h-4 text-[#d32323]" />
                <span>Our Pre-Application Mandate</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every job starts with a site visit, a moisture and surface check, and a clear
                written quote. We tell you what your floor actually needs, not just what costs
                more. Backed by 12+ years of field engineering across Greater Dhaka and national
                export processing zones.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => scrollTo("#projects")}
                className="bg-[#0c1219] hover:bg-[#1a2533] text-white text-xs font-bold uppercase tracking-wider px-6 py-5 rounded-none inline-flex items-center space-x-2 transition-colors"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-gray-300" />
              </Button>

              <button
                onClick={() => {
                  if (onOpenGallery) onOpenGallery();
                  else scrollTo("#projects");
                }}
                className="border border-gray-300 hover:border-gray-900 text-gray-800 hover:text-gray-950 text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                View Work Site Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
