"use client";

import React, { useState, useEffect } from "react";
import { FileText, Phone } from "lucide-react";

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tabNum: "01 / EPOXY",
      tabTitle: "Seamless Epoxy",
      badge: "Industrial Grade Applicators · Mirpur, Dhaka",
      title: "Seamless Epoxy Floors Built for Heavy Use",
      desc: "Self-leveling, roller-coated and 3D epoxy systems for factories, showrooms, car parks and homes across Bangladesh.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPG8fyfa4cI28O10p9M3wBTRZZWbN5Pkd8CbPE5AbznboviDjiRKh3lKaR7FtKvar0DD05XZYcrz_CIMjToAFV8D8qbEzCyw8ofJkgVQY65KMkyFoocc9Q0FQD9Fg7ek1FTy3Oin4X09-_GvM0sC14j8YA8r-zVM-O7TS9CxiVSMrjirUmrXVqK79OSE50f2DJuTutKXkvvodbOGjaVMQuhXSU-NWiZXtiFbFAADvoRvxkKhhkMJ4NzQ",
      fallbackImage: "/images/hero-floor.jpg",
    },
    {
      tabNum: "02 / PU SCREED",
      tabTitle: "PU Flooring",
      badge: "Thermal Shock & Chemical Resistant · Dhaka",
      title: "PU Flooring That Handles Impact, Chemicals and Heat",
      desc: "Flexible, hygienic polyurethane floors for food plants, cold rooms, laboratories and production lines.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2R0eZpVXeF1z3Go-MnkVeArT9pXcEQ4XNCUqL4iL1TjgiKRemintUZ-dpI1ciquJLNV6cMxurtybF1P3aWu8edqAL6VxvFHAI_BO9lUeR1pXFW6d8ef4AWBQsoneVsnMasKCPAwtO8D4U6Aau8alZzy7lSBzpwnA_5K6lHM077dAZGzwvfn_M1zOX00nejz5uQIX2x9995e6lHn8uvtniRPHPitB0jibR8r-4xDiTQDVLzVYx5EhY3A",
      fallbackImage: "/images/service-pu.jpg",
    },
    {
      tabNum: "03 / MEMBRANES",
      tabTitle: "Waterproofing",
      badge: "Monsoon Armor & Leak Detection · Mirpur, Dhaka",
      title: "Stop Leaks Before They Cost You More",
      desc: "Roof waterproofing, PU membranes and damp proofing for homes and buildings across Dhaka and beyond.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDL5AqpDnsQStA-R-NrhRhVPcOffl-J1TAwiT5mKecwdsTRnU9cxGopk2Ft7yXBn9NEY77KvmE2TP8yAif4TTclVd3vPBDG8aEtUu5tmY2RaHYSbvsoZy3l8R_YMdXaCe-3NYF7IitYuEuqXkJ2yJoT1mCCYVwvgEArybNb4v0eealkUrjsDtE5POI21KT3NloMhVg5Mw66iEs8ryWoL7g1HTBVcDgbfjaqBJRPzafxWElK1sqzLi-BhA",
      fallbackImage: "/images/service-waterproof.jpg",
    },
    {
      tabNum: "04 / HARDENERS",
      tabTitle: "Chemicals & Industrial",
      badge: "High Compressive Strength Polymers · Bangladesh",
      title: "Stronger Concrete, Safer Industrial Floors",
      desc: "Construction chemicals, floor hardener, densifier and ESD flooring from one reliable engineering team.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5ePWhOZp_p-2q74jxJ7lZc_32Yf5vz9PWZpvBh9j5E39cX_I5AjJ2dtjv-i7O9CpIjJh40dFmms_uD6w3leA6yp4Qusc_nejx1iiTYdLADu-TG-ldWp3A6wZ7NemFG1qrFKgqjLbikKyqhQ20od1S2KyiraOT9BKncCeAomXYnAXvOT0gG0pcoGWFlGBXfAz_Sfeiv37Ov2rhTZBIwPM60oKAQIaXLb0XLcwY-7WXq3nQzTZEqpLzcw",
      fallbackImage: "/images/service-industrial.jpg",
    },
  ];

  // Auto-play interval: cycles every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const active = slides[currentSlide];

  return (
    <>
      {/* Hero Section with Interactive Slider Preview */}
      <section
        className="relative w-full bg-[#0A0F1D] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col justify-between"
        id="hero-slider"
      >
        {/* Slide Background Images */}
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={idx}
              id={`slide-bg-${idx}`}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                isActive ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url("${slide.bgImage}"), url("${slide.fallbackImage}")`,
              }}
            />
          );
        })}

        {/* Industrial Scrim & Structural Contrast Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0A0F1D]/85 to-[#0A0F1D]/40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0F1D] to-transparent pointer-events-none" />

        {/* Content Slot */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 pb-8 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded">
              <span className="w-2 h-2 rounded-full bg-[#b8001a] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-gray-200 font-bold">
                {active.badge}
              </span>
            </div>

            <div className="min-h-[170px]" id="slide-text-container">
              <h2
                id="slide-title"
                className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight text-white leading-tight uppercase max-w-2xl transition-all duration-300"
              >
                {active.title}
              </h2>
              <p
                id="slide-desc"
                className="text-base sm:text-lg text-gray-300 max-w-xl mt-3 leading-relaxed transition-all duration-300"
              >
                {active.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else {
                    const form = document.querySelector("#quote-form");
                    if (form) form.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3.5 bg-[#b8001a] hover:bg-[#e11d2a] text-white font-bold text-sm uppercase tracking-wider rounded transition-transform duration-150 active:scale-95 shadow-md flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Get a Free Quote</span>
              </button>

              <a
                href="tel:+8801819199876"
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#b8001a]" />
                <span>Call +880 1819-199876</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slider Rail & Systems Navigation */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 bg-[#0A0F1D]/85 backdrop-blur-md p-2 rounded">
            {slides.map((slide, idx) => {
              const isTabActive = currentSlide === idx;
              return (
                <button
                  key={idx}
                  id={`tab-btn-${idx}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`slider-tab text-left p-3 rounded transition-all flex flex-col gap-1 cursor-pointer ${
                    isTabActive
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 text-gray-300"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold ${
                      isTabActive ? "text-[#b8001a]" : "text-gray-400"
                    }`}
                  >
                    {slide.tabNum}
                  </span>
                  <span className="text-sm font-bold uppercase truncate">
                    {slide.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Page H1 Strip: Heavy Industrial Confidence */}
      <section className="w-full bg-[#0A0F1D] text-gray-200 py-5 shadow-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#b8001a] rounded"></span>
            <h1 className="uppercase tracking-tight text-white text-base sm:text-lg md:text-xl font-bold">
              Flooring, Waterproofing & Construction Chemical Solutions in Bangladesh
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/10 text-[#F59E0B] font-mono text-xs rounded uppercase font-semibold">
              Dhaka HQ · Mirpur-10
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
