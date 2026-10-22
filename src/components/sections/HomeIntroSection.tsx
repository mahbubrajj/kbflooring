"use client";

import React from "react";
import { Users, HardHat, Building2, Layers, CheckCircle2, ArrowRight, Phone } from "lucide-react";

interface HomeIntroSectionProps {
  onOpenQuoteModal?: () => void;
}

export function HomeIntroSection({ onOpenQuoteModal }: HomeIntroSectionProps) {
  const highlights = [
    {
      icon: Users,
      value: "25+",
      label: "Dedicated Teams",
      sub: "Rapid deployment across Bangladesh",
    },
    {
      icon: HardHat,
      value: "500+",
      label: "Skilled Applicators",
      sub: "Certified polymer application crews",
    },
    {
      icon: Building2,
      value: "All Sectors",
      label: "Residential, Commercial & Industrial",
      sub: "Tailored to building specifications",
    },
    {
      icon: Layers,
      value: "Specialized",
      label: "Epoxy, PU, ESD & Industrial Coatings",
      sub: "Engineered high-performance systems",
    },
  ];

  const systems = [
    "Epoxy Flooring",
    "PU Flooring",
    "PU Concrete Screed",
    "ESD Anti-Static",
    "Industrial Coatings",
    "Specialized Systems",
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Layout */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge: Excellence in Every Layer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#b8001a] text-xs font-bold uppercase tracking-wider mb-4 animate-in fade-in">
            <span className="w-2 h-2 rounded-full bg-[#b8001a] animate-pulse" />
            <span>Excellence in Every Layer</span>
          </div>

          {/* H1 Tag: KB FLOORING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-950 mb-3">
            KB FLOORING
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#b8001a] tracking-normal mb-6">
            Professional Flooring Solutions Across Bangladesh
          </p>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              With <strong className="font-semibold text-gray-950">25+ Dedicated Teams</strong> and{" "}
              <strong className="font-semibold text-gray-950">500+ Skilled Applicators</strong>,{" "}
              <strong className="font-bold text-gray-950">KB FLOORING</strong> provides professional flooring
              solutions for residential, commercial, and industrial buildings across Bangladesh.
            </p>
            <p className="text-gray-600">
              Our expertise includes Epoxy, PU, PU Concrete, ESD, Industrial Coatings, and other specialized
              flooring systems, tailored to your project requirements.
            </p>
          </div>

          {/* Specialized Systems Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 pb-2">
            {systems.map((system, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200/90 text-gray-800 text-xs font-semibold rounded-full shadow-2xs hover:border-[#b8001a]/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b8001a]" />
                <span>{system}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 4 Highlight Cards: 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-10 max-w-5xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-3.5 sm:p-5 rounded-lg border border-gray-200/80 shadow-xs hover:border-[#b8001a]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-red-50 text-[#b8001a] border border-red-100 flex items-center justify-center mb-2.5 sm:mb-3 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-gray-950 tracking-tight mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-1 line-clamp-1">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
          <button
            onClick={() => {
              if (onOpenQuoteModal) onOpenQuoteModal();
              else {
                const form = document.querySelector("#quote-form");
                if (form) form.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 bg-[#b8001a] hover:bg-[#e11d2a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-sm flex items-center gap-2"
          >
            <span>Request Free Site Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+8801819199876"
            className="px-5 py-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#b8001a]" />
            <span>Call +880 1819-199876</span>
          </a>
        </div>
      </div>
    </section>
  );
}
