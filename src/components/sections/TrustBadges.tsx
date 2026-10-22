"use client";

import React from "react";
import { Compass, FileSpreadsheet, HardHat, ShieldCheck } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Compass,
      title: "FREE SITE VISIT",
      description: "Precise laser measurement in Dhaka",
    },
    {
      icon: FileSpreadsheet,
      title: "DATA SHEET BACKED",
      description: "Certified European & Asian chemistry",
    },
    {
      icon: HardHat,
      title: "TRAINED APPLICATORS",
      description: "Method-trained manufacturer crews",
    },
    {
      icon: ShieldCheck,
      title: "WRITTEN WARRANTY",
      description: "Binding project handover warranty terms",
    },
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-2.5 sm:space-x-3.5 p-3 sm:p-4 bg-gray-50/70 hover:bg-gray-50 border border-gray-100/90 rounded-none transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-red-50 text-[#d32323] flex items-center justify-center border border-red-100">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-gray-950 mb-0.5 leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-snug line-clamp-2">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
