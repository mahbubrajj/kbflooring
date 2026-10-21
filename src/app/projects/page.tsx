"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Maximize2, ShieldCheck, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeProjectModal, setActiveProjectModal] = useState<any | null>(null);

  const filterOptions = [
    { label: "All Projects", value: "all" },
    { label: "Epoxy Flooring", value: "epoxy" },
    { label: "Industrial PU Screed", value: "pu" },
    { label: "Waterproofing", value: "waterproofing" },
    { label: "Concrete Hardeners", value: "hardener" },
  ];

  const projects = [
    {
      id: "apex",
      categoryKey: "epoxy",
      title: "APEX SPINNING & KNITTING",
      category: "EPOXY FLOORING",
      categoryColor: "text-red-500",
      location: "Gazipur Industrial Zone",
      area: "42,000 sq ft",
      image: "/images/project-apex.jpg",
      challenge: "Textile spinning hall required continuous vibration absorption and a 100% dust-free environment with heavy bobbin trolleys.",
      solution: "Installed 3mm solvent-free self-leveling epoxy system after CSP-3 diamond grinding and pressure-injecting floor expansion joints.",
      result: "Zero floor flaking or dusting after 4 years of continuous 24/7 industrial spinning shifts.",
    },
    {
      id: "beximco",
      categoryKey: "pu",
      title: "BEXIMCO PHARMA BLOCK 3",
      category: "INDUSTRIAL PU SCREED",
      categoryColor: "text-amber-500",
      location: "Tongi, Gazipur",
      area: "18,500 sq ft",
      image: "/images/project-beximco.jpg",
      challenge: "Grade-B pharmaceutical sterile cleanroom requiring seamless wall coving and extreme chemical resistance against sanitizing agents.",
      solution: "Engineered 6mm antimicrobial polyurethane screed with integral 100mm seamless radius coving.",
      result: "Achieved zero microbial audit findings and 100% compliance with international cGMP standards.",
    },
    {
      id: "navana",
      categoryKey: "waterproofing",
      title: "NAVANA TOWER TERRACE",
      category: "PU ROOF WATERPROOFING",
      categoryColor: "text-cyan-400",
      location: "Gulshan-1, Dhaka",
      area: "24,000 sq ft",
      image: "/images/project-navana.jpg",
      challenge: "Corporate skyscraper rooftop suffering severe monsoon rainwater seepage into executive offices below.",
      solution: "Liquid-applied elastomeric aliphatic polyurethane membrane with polyester fleece joint reinforcement and 102 SRI cool roof topcoat.",
      result: "Complete elimination of water ingress through 3 severe monsoon seasons with a 10-year stamped warranty.",
    },
    {
      id: "meghna",
      categoryKey: "hardener",
      title: "MEGHNA LOGISTICS DEPOT",
      category: "CONCRETE HARDENERS",
      categoryColor: "text-red-500",
      location: "Narayanganj BSCIC",
      area: "85,000 sq ft",
      image: "/images/project-meghna.jpg",
      challenge: "High-bay freight distribution depot subjected to 6-ton axle forklift transit and severe concrete dusting.",
      solution: "Non-metallic quartz dry-shake hardener power-troweled monolithically onto fresh slab, followed by lithium silicate densification.",
      result: "Surface abrasion resistance increased by 300% with mirror diamond polish and zero tyre rutting.",
    },
    {
      id: "square",
      categoryKey: "epoxy",
      title: "SQUARE PHARMACEUTICALS PACKAGING",
      category: "EPOXY FLOORING",
      categoryColor: "text-red-500",
      location: "Pabna Industrial Hub",
      area: "22,000 sq ft",
      image: "/images/service-epoxy.jpg",
      challenge: "Fast-track packaging line requiring non-slip pedestrian zones and high light reflectivity.",
      solution: "Multi-layer epoxy system with graded quartz aggregate broadcast in walkways and mirror-gloss resin in machine bays.",
      result: "Reduced factory lighting energy consumption by 18% due to high optical reflectance.",
    },
    {
      id: "city-group",
      categoryKey: "pu",
      title: "CITY GROUP COLD STORAGE COMPLEX",
      category: "INDUSTRIAL PU SCREED",
      categoryColor: "text-amber-500",
      location: "Munshiganj River Port",
      area: "15,000 sq ft",
      image: "/images/service-pu.jpg",
      challenge: "Deep freezer blast cold room operating at -28°C with thermal shock during defrost steam cleaning.",
      solution: "Heavy-duty 9mm hybrid polyurethane concrete screed with anchor retention grooves at all perimeter walls.",
      result: "Seamless adhesion retained under severe temperature swings without delamination or debonding.",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0b1118] text-gray-400 py-3 border-b border-gray-800 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold">Projects</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/project-apex.jpg"
              alt="KB Flooring completed industrial installations"
              fill
              priority
              className="object-cover object-center brightness-60 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/85 to-[#0A0F1D]/50" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-3">
                Over 250+ Completed Installations
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
                Case Studies & Project Gallery
              </h1>
              <p className="text-base text-gray-300 font-normal leading-relaxed">
                Review verified industrial projects executed by KB Flooring BD across Greater Dhaka,
                Chittagong, and national export processing zones. Every project is backed by our
                stamped written warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar (Static positioning, sticky turned off) */}
        <div className="bg-gray-100 border-b border-gray-200 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700 mr-2">
              Filter By:
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedFilter(opt.value)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 transition-all ${
                  selectedFilter === opt.value
                    ? "bg-[#0c1219] text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-16 lg:py-20 bg-gray-50/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveProjectModal(proj)}
                  className="bg-white border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col group cursor-pointer overflow-hidden"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-black/40">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-[10px] font-bold uppercase tracking-wider text-gray-200 px-2.5 py-1 border border-gray-700">
                      COMPLETED
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1.5 text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${proj.categoryColor} mb-1`}>
                        {proj.category}
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                        {proj.challenge}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#d32323]" />
                        <span>{proj.location}</span>
                      </div>
                      <span className="font-bold text-gray-900">{proj.area}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Project Inspection */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white max-w-2xl w-full text-gray-900 relative shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider">
                  <span className={activeProjectModal.categoryColor}>{activeProjectModal.category}</span>
                  <span className="text-gray-400">•</span>
                  <span>{activeProjectModal.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-bold text-gray-950">{activeProjectModal.area}</span>
                </div>

                <h3 className="text-2xl font-black uppercase text-gray-950 tracking-tight">
                  {activeProjectModal.title}
                </h3>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <div>
                    <strong className="text-gray-950 block text-xs uppercase mb-1">
                      Site Challenge:
                    </strong>
                    <p className="font-normal bg-gray-50 p-3 border border-gray-100">{activeProjectModal.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-gray-950 block text-xs uppercase mb-1">
                      Engineered Solution:
                    </strong>
                    <p className="font-normal bg-gray-50 p-3 border border-gray-100">{activeProjectModal.solution}</p>
                  </div>
                  <div>
                    <strong className="text-gray-950 block text-xs uppercase mb-1">
                      Verified Result:
                    </strong>
                    <p className="font-normal bg-emerald-50 text-emerald-950 p-3 border border-emerald-100 font-medium">
                      {activeProjectModal.result}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <a
                    href="#quote-form"
                    onClick={() => setActiveProjectModal(null)}
                    className="bg-[#d32323] hover:bg-[#b51c1c] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 transition-colors"
                  >
                    Inquire Similar Facility System
                  </a>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="text-xs uppercase font-bold text-gray-500 hover:text-black"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lead Capture */}
        <QuoteCtaSection />
      </main>

      <Footer />
    </div>
  );
}
