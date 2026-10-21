"use client";

import React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "KB Flooring took our heavily worn spinning floor, diamond ground the cracks, and laid a seamless self-leveling epoxy. It has endured daily forklift transit without any flaking.",
      name: "ENGR. RAFIQUL ISLAM",
      role: "Plant General Manager · Savar Garments Ltd",
      service: "Industrial Self-Leveling Epoxy",
    },
    {
      quote:
        "Their crew worked strictly during night shifts so we didn't lose production hours in our cleanroom. The PU screed passed every moisture and microbial audit with flying colors.",
      name: "DR. M. SHAMSUL HUDA",
      role: "QA Director · BioPharma Labs Dhaka",
      service: "Heavy Duty PU Flooring",
    },
    {
      quote:
        "We had persistent monsoon leakages across our 12-storey corporate roof terrace in Banani. KB Flooring repaired the joint parapets and laid liquid PU. No seepage since.",
      name: "TANVIR AHMED CHOWDHURY",
      role: "Head of Facilities · Delta Properties Ltd",
      service: "Polyurethane Roof Waterproofing",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            Commercial Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight mb-2">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Feedback from plant managers and facility directors across Bangladesh.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-xs font-black uppercase text-gray-950 tracking-wide">
                  {t.name}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">{t.role}</div>
                <div className="text-[11px] font-semibold text-[#d32323] mt-2">
                  Service: {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
