"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: "epoxy",
      title: "EPOXY FLOORING",
      badge: "HEAVY DUTY",
      image: "/images/service-epoxy.jpg",
      description:
        "Seamless, easy-to-clean floors in self-leveling, roller-coat and 3D finishes engineered for high mechanical loads.",
      bullets: [
        "Self-Leveling Epoxy (2mm - 4mm)",
        "High-Traffic Roller Coating",
        "Solvent-Free Deep Epoxy Primer",
      ],
      details: {
        compressiveStrength: "70 MPa (ASTM C579)",
        curingTime: "Foot traffic in 24 hrs, full mechanical load in 7 days",
        applications: "Pharma cleanrooms, garment production, car parks, showrooms, electronics labs",
        warranty: "5 to 10 Year Workmanship Guarantee",
      },
    },
    {
      id: "pu",
      title: "PU FLOORING",
      badge: "THERMAL SHOCK SAFE",
      image: "/images/service-pu.jpg",
      description:
        "Flexible, impact- and chemical-resistant floors designed specifically for food processing and cold rooms.",
      bullets: [
        "Industrial PU Heavy Screed (4mm - 9mm)",
        "Flexible Crack-Bridging PU Coat",
        "Aliphatic UV-Stable Topcoat",
      ],
      details: {
        compressiveStrength: "55 MPa with high impact elasticity",
        curingTime: "Light traffic 12 hrs, full chemical wash in 48 hrs",
        applications: "Dairy plants, meat & poultry processing, deep freezers, commercial kitchens, chemical storage",
        warranty: "Up to 12 Years Certified System Warranty",
      },
    },
    {
      id: "waterproofing",
      title: "WATERPROOFING",
      badge: "MONSOON ARMOR",
      image: "/images/service-waterproof.jpg",
      description:
        "Guaranteed leak protection for concrete roofs, terraces, subterranean basements, and high-rise facades.",
      bullets: [
        "Liquid-Applied Elastomeric PU Membrane",
        "Parapet & Expansion Joint Sealing",
        "Basement Damp Proofing & Injection",
      ],
      details: {
        compressiveStrength: "400% elongation at break",
        curingTime: "Rain safe in 4 hours, seamless monolithic seal",
        applications: "Rooftop terraces, planter boxes, basements, overhead water tanks, expansion joints",
        warranty: "10-Year Leak-Free Stamped Certificate",
      },
    },
    {
      id: "chemicals",
      title: "CONSTRUCTION CHEMICALS",
      badge: "CHEMICAL SUPPLY",
      image: "/images/service-chemicals.jpg",
      description:
        "High-performance admixtures, epoxy bonding agents, micro-concrete repair mortars and structural non-shrink grouts.",
      bullets: [
        "Superplasticizers & Waterproof Admixtures",
        "Epoxy & SBR Bonding Agents",
        "Non-Shrink Base Plate Grouting",
      ],
      details: {
        compressiveStrength: "Up to 85 MPa for structural repair mortars",
        curingTime: "Rapid early strength formulation",
        applications: "Precast yards, structural column jacketing, machine foundation grouting, batching plants",
        warranty: "ISO 9001 Batch Tested & Certified",
      },
    },
    {
      id: "industrial",
      title: "INDUSTRIAL FLOORING",
      badge: "HIGH TRAFFIC",
      image: "/images/service-industrial.jpg",
      description:
        "Non-metallic floor hardeners, sodium/lithium silicate concrete densifiers, and static-control ESD floors.",
      bullets: [
        "Monolithic Dry-Shake Floor Hardener",
        "Concrete Densification & Diamond Polish",
        "Conductive ESD Systems for Electronics",
      ],
      details: {
        compressiveStrength: "Mohs hardness scale 7 to 8",
        curingTime: "Applied monolithically with fresh power troweled concrete",
        applications: "Logistics hubs, heavy engineering plants, container freight stations, data centers",
        warranty: "Permanent monolithic concrete bond",
      },
    },
    {
      id: "interior",
      title: "INTERIOR FLOORING",
      badge: "FINISHED INTERIORS",
      image: "/images/service-interior.jpg",
      description:
        "Commercial antibacterial vinyl flooring, pumpable leveling compound, and ultra-smooth skim coats for offices and clinics.",
      bullets: [
        "Homogeneous Hospital Sheet Vinyl",
        "Fast-Setting Self-Leveling Underlayment",
        "Polymer Wall & Ceiling Skim Coat",
      ],
      details: {
        compressiveStrength: "Hygienic antibacterial coving integration",
        curingTime: "Quick installation, minimal facility disruption",
        applications: "Hospital operating theaters, ICU wards, corporate offices, hotel corridors",
        warranty: "7 Year Commercial Wear Warranty",
      },
    },
  ];

  const handleLearnMore = (srv: any) => {
    setSelectedService(srv);
  };

  const handleConsultService = (title: string) => {
    setSelectedService(null);
    if (onSelectService) {
      onSelectService(title);
    }
    const form = document.querySelector("#quote-form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-100/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
              Certified Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight">
              What We Do
            </h2>
            <p className="text-sm text-gray-500 mt-1 font-medium">
              Six service lines, one team, one point of contact.
            </p>
          </div>

          <div>
            <a
              href="#quote-form"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#d32323] hover:text-[#b51c1c] transition-colors"
            >
              <span>Explore Detailed Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 hover:border-gray-300 shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              {/* Media Container with Realistic Photos for All 6 Services */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#0c1219]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-xs border border-gray-700">
                  {srv.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black uppercase tracking-wide text-gray-950 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Bullet points (Light Font Weight) */}
                  <ul className="space-y-1.5 mb-6 pt-1">
                    {srv.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-sm text-gray-600 flex items-start space-x-2 font-light leading-snug"
                        style={{ fontWeight: 300 }}
                      >
                        <span className="text-[#b8001a] font-light text-sm leading-none shrink-0 mt-0.5">›</span>
                        <span className="font-light" style={{ fontWeight: 300 }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action - Red Background Button with White Text */}
                <div className="pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleLearnMore(srv)}
                    className="w-full bg-[#b8001a] hover:bg-[#d32323] text-white font-bold text-xs uppercase py-2.5 px-4 flex items-center justify-center space-x-2 transition-all shadow-xs group/btn tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Spec Sheet Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full border border-gray-200 shadow-2xl relative p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block bg-[#0c1219] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 mb-2">
              {selectedService.badge}
            </div>

            <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-2">
              {selectedService.title}
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3 bg-gray-50 p-4 border border-gray-100 mb-6 text-xs">
              <div>
                <span className="font-bold text-gray-900 block uppercase text-[10px]">
                  Standard Systems:
                </span>
                <ul className="mt-1 space-y-1 text-gray-700">
                  {selectedService.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-[#d32323]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-200 grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase font-bold">
                    Mechanical Spec
                  </span>
                  <span className="font-semibold text-gray-900">
                    {selectedService.details.compressiveStrength}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase font-bold">
                    Cure Dynamics
                  </span>
                  <span className="font-semibold text-gray-900">
                    {selectedService.details.curingTime}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200 text-[11px]">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">
                  Warranty Coverage
                </span>
                <span className="font-semibold text-gray-900">
                  {selectedService.details.warranty}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => handleConsultService(selectedService.title)}
                className="flex-1 bg-[#d32323] hover:bg-[#b51c1c] text-white font-bold text-xs uppercase py-5 rounded-none"
              >
                Request Quotation For This System
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedService(null)}
                className="rounded-none text-xs uppercase"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
