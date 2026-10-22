"use client";

import React from "react";
import Image from "next/image";

interface HomeIntroSectionProps {
  onOpenQuoteModal?: () => void;
}

export function HomeIntroSection({ onOpenQuoteModal }: HomeIntroSectionProps = {}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Content & H1 */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge: Excellence in Every Layer */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#b8001a] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#b8001a] animate-pulse" />
              <span>Excellence in Every Layer</span>
            </div>

            {/* H1 Tag: KB FLOORING */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-950 mb-3">
              KB FLOORING
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-xl font-bold text-[#b8001a] tracking-normal mb-5">
              Professional Flooring Solutions Across Bangladesh
            </p>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
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

          {/* Right Column: Photo of Professional People */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group bg-gray-100">
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <Image
                  src="/images/professional-team.jpg"
                  alt="KB Flooring professional engineering teams and skilled applicators"
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Subtitle pill overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-lg text-white border border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-gray-200">
                  Certified Applicators & Engineers
                </span>
                <span className="text-[#ff4d5a] font-bold text-[11px]">
                  25+ Teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
