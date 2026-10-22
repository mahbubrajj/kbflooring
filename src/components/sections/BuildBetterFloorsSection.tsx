"use client";

import React from "react";
import {
  Users,
  Building,
  ShieldCheck,
  MapPin,
  MessageSquareCheck,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";

interface BuildBetterFloorsSectionProps {
  onOpenQuoteModal?: () => void;
}

export function BuildBetterFloorsSection({ onOpenQuoteModal }: BuildBetterFloorsSectionProps) {
  const points = [
    {
      icon: Users,
      title: "Skilled workforce and professional installation",
      desc: "Method-trained applicators with strict safety & surface profiling standards.",
    },
    {
      icon: Building,
      title: "Solutions for all types of buildings",
      desc: "Engineered formulations for industrial plants, commercial sites & residences.",
    },
    {
      icon: ShieldCheck,
      title: "Quality workmanship and durable flooring",
      desc: "Zero shortcuts on surface profiling with certified European & Asian polymers.",
    },
    {
      icon: MapPin,
      title: "Nationwide project coverage",
      desc: "Full equipment & crews deployed across Dhaka, Chattogram, Gazipur & all EPZs.",
    },
    {
      icon: MessageSquareCheck,
      title: "Free expert consultation",
      desc: "Complimentary digital laser inspection, moisture testing and expert advisory.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white relative overflow-hidden border-b border-gray-800">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-gray-900 to-gray-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e11d2a] block mb-2">
            Why Choose KB Flooring
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black uppercase tracking-tight text-white mb-3">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Your Project. Our Expertise. Quality That Lasts.
          </p>
        </div>

        {/* 5 Feature Boxes: 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-12 sm:mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isLast = idx === points.length - 1;
            return (
              <div
                key={idx}
                className={`bg-gray-800/80 border border-gray-700/80 p-3.5 sm:p-5 rounded-lg flex flex-col justify-between hover:border-[#b8001a] hover:bg-gray-800 transition-all ${
                  isLast ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-950/70 border border-red-800/60 text-[#ff4d5a] flex items-center justify-center mb-3 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Card: Let's Build Better Floors Together */}
        <div className="bg-gradient-to-r from-[#b8001a] to-[#8a0014] rounded-xl p-6 sm:p-10 text-white shadow-xl border border-red-500/30">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-200 bg-black/20 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With The Experts</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Let’s Build Better Floors Together
              </h3>
              <p className="text-sm sm:text-base text-red-100 max-w-2xl leading-relaxed">
                Contact KB FLOORING today for a FREE Consultation and a customized flooring solution for your project.
              </p>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide pt-1">
                Your Project. Our Expertise. Quality That Lasts.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else {
                    const form = document.querySelector("#quote-form");
                    if (form) form.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-gray-100 text-gray-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#b8001a]" />
              </button>

              <a
                href="tel:+8801819199876"
                className="w-full sm:w-auto px-5 py-3.5 bg-black/30 hover:bg-black/45 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+880 1819-199876</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
