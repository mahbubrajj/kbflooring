"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Maximize2, X } from "lucide-react";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const projects = [
    {
      title: "APEX SPINNING & KNITTING",
      category: "EPOXY FLOORING",
      categoryColor: "text-red-500",
      location: "Gazipur Industrial",
      area: "42,000 sq ft",
      image: "/images/project-apex.jpg",
      details:
        "High-traffic textile spinning hall required a 3mm solvent-free self-leveling epoxy system capable of enduring continuous heavy bobbin trolleys, vibrations, and fiber dust accumulation. Diamond ground to CSP-3 profile.",
    },
    {
      title: "BEXIMCO PHARMA BLOCK 3",
      category: "INDUSTRIAL PU SCREED",
      categoryColor: "text-amber-500",
      location: "Tongi, Gazipur",
      area: "18,500 sq ft",
      image: "/images/project-beximco.jpg",
      details:
        "cGMP certified grade-B cleanroom facility requiring antimicrobial, joint-free 6mm polyurethane screed with integrated coving. Handled high chemical sterilization and steam washdowns without micro-cracking.",
    },
    {
      title: "NAVANA TOWER TERRACE",
      category: "PU ROOF WATERPROOFING",
      categoryColor: "text-cyan-400",
      location: "Gulshan-1, Dhaka",
      area: "24,000 sq ft",
      image: "/images/project-navana.jpg",
      details:
        "High-exposure corporate rooftop terrace subject to torrential monsoon downpours and intense UV heat. Liquid-applied elastomeric aliphatic polyurethane membrane with 10-year leak-free warranty.",
    },
    {
      title: "MEGHNA LOGISTICS DEPOT",
      category: "HEAVY WAREHOUSE FLOORING",
      categoryColor: "text-red-500",
      location: "Narayanganj",
      area: "85,000 sq ft",
      image: "/images/project-meghna.jpg",
      details:
        "Massive high-bay distribution hub with 6-ton forklift axle traffic. Monolithic dry-shake non-metallic floor hardener and lithium silicate densifier with mirror diamond polishing.",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#0c1219] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Projects We Have Completed
            </h2>
          </div>

          <div>
            <a
              href="#quote-form"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d32323]" />
            </a>
          </div>
        </div>

        {/* 4 Cards Grid (2 columns on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProject(proj)}
              className="group bg-[#141d27] border border-gray-800 hover:border-gray-600 transition-all cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative h-32 sm:h-48 w-full overflow-hidden bg-black/40">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                />

                {/* Completed Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-300 px-1.5 sm:px-2 py-0.5 border border-gray-700 backdrop-blur-xs flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span>COMPLETED</span>
                </div>

                {/* Expand Hover Hint */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1 sm:p-1.5 text-white">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${proj.categoryColor} mb-0.5 sm:mb-1 truncate`}>
                    {proj.category}
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wide text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                </div>

                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-gray-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400">
                  <span className="truncate">{proj.location}</span>
                  <span className="font-semibold text-gray-300 shrink-0 ml-1">{proj.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#141d27] border border-gray-700 max-w-2xl w-full text-white relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-gray-300 hover:text-white rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-80 w-full">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider mb-2">
                <span className={activeProject.categoryColor}>{activeProject.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{activeProject.location}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-200">{activeProject.area}</span>
              </div>

              <h3 className="text-xl font-black uppercase text-white mb-3">
                {activeProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {activeProject.details}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <a
                  href="#quote-form"
                  onClick={() => setActiveProject(null)}
                  className="bg-[#d32323] hover:bg-[#b51c1c] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveProject(null)}
                  className="text-xs text-gray-400 hover:text-white font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
