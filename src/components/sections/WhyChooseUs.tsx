"use client";

import React from "react";
import { Lightbulb, Wrench, FileCheck, Users, Calculator, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      num: "1.",
      title: "HONEST ADVICE",
      icon: Lightbulb,
      description:
        "We check the slab, moisture levels and actual vehicle traffic before recommending a system. We never push excessive thickness where lighter coats suffice.",
    },
    {
      num: "2.",
      title: "PROPER SURFACE PREPARATION",
      icon: Wrench,
      description:
        "Diamond floor grinding, crack injection, and deep primers are standard on every job—because 90% of all coating delaminations start with skipped surface prep.",
    },
    {
      num: "3.",
      title: "QUALITY MATERIALS",
      icon: FileCheck,
      description:
        "We exclusively apply laboratory-tested industrial polymers and share technical data sheets (TDS) and material safety sheets (MSDS) prior to application.",
    },
    {
      num: "4.",
      title: "SKILLED CREW",
      icon: Users,
      description:
        "Our applicators are trained directly in manufacturer-approved laying techniques, mixing ratios, and dew-point curing thresholds to prevent pinholes.",
    },
    {
      num: "5.",
      title: "CLEAR QUOTES",
      icon: Calculator,
      description:
        "Scope, area system, build square footage, and project turnaround timelines are in writing. Never unexpected surcharges or hidden supply costs.",
    },
    {
      num: "6.",
      title: "AFTER-SALES SUPPORT",
      icon: ShieldCheck,
      description:
        "Written workmanship warranty terms along with tailored facility cleaning guidelines and periodic surface inspection visits post-handover.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight mb-2">
            Why Choose KB Flooring BD
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Zero shortcuts on surface profiling and certified polymer chemistry.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 border border-gray-200/90 shadow-xs hover:border-[#d32323]/50 hover:shadow-md transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 bg-red-50 text-[#d32323] flex items-center justify-center mb-4 border border-red-100">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-black uppercase tracking-wide text-gray-950 mb-2.5">
                  <span className="text-[#d32323] mr-1">{pt.num}</span>
                  {pt.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
