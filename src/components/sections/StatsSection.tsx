"use client";

import React from "react";

export function StatsSection() {
  const stats = [
    {
      value: "250+",
      label: "PROJECTS COMPLETED",
      color: "text-[#d32323]",
    },
    {
      value: "180+",
      label: "COMMERCIAL CLIENTS",
      color: "text-white",
    },
    {
      value: "1.2M+",
      label: "SQ FT INSTALLED",
      color: "text-amber-500",
    },
    {
      value: "12+",
      label: "YEARS EXPERIENCE",
      color: "text-white",
    },
  ];

  return (
    <section className="bg-[#0b1118] text-white py-14 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2">
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${s.color} mb-2`}>
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
