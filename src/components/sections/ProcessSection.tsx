"use client";

import React from "react";
import { Compass, FileSpreadsheet, Wrench, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "SITE VISIT",
      icon: Compass,
      description:
        "We inspect and measure the area, test the slab for moisture content, and identify existing cracks or surface oils.",
    },
    {
      num: "02",
      title: "QUOTE",
      icon: FileSpreadsheet,
      description:
        "You receive a clear written proposal detailing specific polymer system build, thickness, area, timeline, and fixed costs.",
    },
    {
      num: "03",
      title: "APPLICATION",
      icon: Wrench,
      description:
        "Heavy diamond grinding preparation, primer saturation, body screed/leveling, and protective topcoat application.",
    },
    {
      num: "04",
      title: "HANDOVER",
      icon: CheckCircle2,
      description:
        "Joint quality inspection, post-cure clearance, facility maintenance guide, and stamped written warranty certificate.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            Clear Engineering Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight mb-2">
            How We Work
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            A transparent 4-stage execution model eliminating downtime surprises.
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative bg-gray-50/70 border border-gray-200/80 p-6 flex flex-col justify-start hover:border-gray-400 transition-colors"
              >
                {/* Step Header with Big Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-black text-[#d32323] tracking-tight">
                    {st.num}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center border border-gray-200 shadow-xs">
                    <Icon className="w-4 h-4 text-[#d32323]" />
                  </div>
                </div>

                <h3 className="text-sm font-black uppercase tracking-wider text-gray-950 mb-2">
                  {st.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
