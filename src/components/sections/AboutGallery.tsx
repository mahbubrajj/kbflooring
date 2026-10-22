"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronRight, CheckCircle2 } from "lucide-react";

interface GalleryItem {
  title: string;
  category: string;
  location: string;
  area: string;
  image: string;
  description: string;
}

export function AboutGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("ALL");

  const galleryItems: GalleryItem[] = [
    {
      title: "Planetary Diamond Concrete Grinding",
      category: "SURFACE PREPARATION",
      location: "Tejgaon Commercial Hub, Dhaka",
      area: "35,000 sq ft Substrate Prep",
      image: "/images/surface-prep.jpg",
      description:
        "Heavy planetary diamond grinding exposing concrete aggregate to CSP-3 surface profile for 100% mechanical interlocking of polymer primers.",
    },
    {
      title: "Seamless Industrial Self-Leveling Epoxy",
      category: "EPOXY FLOORING",
      location: "Apex Spinning & Knitting, Gazipur",
      area: "42,000 sq ft Installed",
      image: "/images/hero-floor.jpg",
      description:
        "High-density 3mm solvent-free self-leveling epoxy flooring engineered to withstand continuous forklift and trolley traffic with high chemical resistance.",
    },
    {
      title: "Polyurethane (PU) Screed Cleanroom Floor",
      category: "PU FLOORING",
      location: "Beximco Pharma Block 3, Tongi",
      area: "18,500 sq ft Installed",
      image: "/images/service-pu.jpg",
      description:
        "Seamless antimicrobial polyurethane screed resistant to thermal shock (-40°C to +120°C) and corrosive sanitization chemicals, certified for sterile production.",
    },
    {
      title: "Liquid Elastomeric Roof Waterproofing",
      category: "WATERPROOFING",
      location: "Navana Corporate Tower, Gulshan-1",
      area: "24,000 sq ft Terrace",
      image: "/images/service-waterproof.jpg",
      description:
        "Seamless UV-stable liquid polyurethane membrane application over concrete roof slab, parapet joints, and expansion gaps, guaranteeing zero monsoon seepage.",
    },
    {
      title: "Monolithic Concrete Hardener & Densifier",
      category: "INDUSTRIAL FLOORING",
      location: "Meghna Logistics Depot, Narayanganj",
      area: "85,000 sq ft Warehouse",
      image: "/images/service-industrial.jpg",
      description:
        "Dry-shake non-metallic floor hardener integrated during concrete casting, chemically densified with lithium silicates for dustproof abrasive protection.",
    },
    {
      title: "Commercial High-Gloss Epoxy Finish",
      category: "EPOXY FLOORING",
      location: "Uttara Commercial Showroom, Dhaka",
      area: "16,000 sq ft Installed",
      image: "/images/service-epoxy.jpg",
      description:
        "High-gloss reflective epoxy coating creating an aesthetic, dust-free surface for commercial retail and automotive showroom environments.",
    },
    {
      title: "ASTM Standard Substrate Testing Lab",
      category: "QUALITY DIAGNOSTICS",
      location: "Central Materials Testing Lab, Dhaka",
      area: "Quality Assurance Mandate",
      image: "/images/blog-hero.jpg",
      description:
        "Comprehensive civil engineering laboratory testing for concrete compressive strength (Schmidt hammer) and in-situ relative humidity moisture testing.",
    },
    {
      title: "Client Engineering Consultation Studio",
      category: "TECHNICAL PLANNING",
      location: "Mirpur Operations HQ, Dhaka",
      area: "Headquarters Hub",
      image: "/images/contact-hero.jpg",
      description:
        "Engineering specification desk where client slab requirements, material safety data sheets, and custom polymer layering specifications are formulated.",
    },
  ];

  const categories = ["ALL", "EPOXY FLOORING", "PU FLOORING", "WATERPROOFING", "INDUSTRIAL FLOORING", "SURFACE PREPARATION"];

  const filteredItems = filter === "ALL"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
              Verified Project Archive
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-gray-950 tracking-tight">
              On-Site Application Gallery
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl font-normal leading-relaxed">
              Explore authentic high-resolution field photography showcasing our crews, surface preparation machinery, and finished polymer flooring systems across Bangladesh.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#0b1120] text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat === "ALL" ? "All Photos" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-[#0b1120]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-gray-700">
                  {item.category}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-[#b8001a] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 space-y-1.5">
                <h3 className="text-xs sm:text-sm font-bold uppercase text-gray-950 group-hover:text-[#b8001a] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono pt-1 border-t border-gray-100">
                  <span className="truncate max-w-[140px]">{item.location}</span>
                  <span className="font-bold text-gray-800">{item.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white max-w-3xl w-full border border-gray-200 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-80 sm:h-96 md:h-[420px] w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 bg-white space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 bg-red-50 text-[#b8001a] font-bold uppercase">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500">{selectedImage.location} · {selectedImage.area}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold uppercase text-gray-950">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
