"use client";

import React from "react";

interface HomeIntroSectionProps {
  onOpenQuoteModal?: () => void;
}

export function HomeIntroSection({ onOpenQuoteModal }: HomeIntroSectionProps = {}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge: Excellence in Every Layer */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#b8001a] text-xs font-bold uppercase tracking-wider mb-4">
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
        <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-normal">
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
      </div>
    </section>
  );
}
