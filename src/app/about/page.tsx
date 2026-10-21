import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Award,
  Users,
  Building2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  FlaskConical,
  Phone,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatsSection } from "@/components/sections/StatsSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { AboutGallery } from "@/components/sections/AboutGallery";

export const metadata: Metadata = {
  title: "About Us | Who We Are, Our Clients & Project Gallery | KB Flooring BD",
  description:
    "Learn about KB Flooring BD: Dhaka's premier industrial flooring, PU screed, and waterproofing contractor. Explore who we are, our major enterprise clients across Bangladesh, and our verified on-site photo gallery.",
  keywords: [
    "About KB Flooring BD",
    "Who we are KB Flooring",
    "KB Flooring clients Bangladesh",
    "Industrial flooring gallery Dhaka",
    "Epoxy contractor Mirpur",
  ],
};

export default function AboutPage() {
  const values = [
    {
      title: "Scientific Substrate Diagnostics",
      desc: "We test concrete compressive strength (Schmidt hammer) and slab relative humidity (ASTM F2170) before recommending any polymer system.",
      icon: Wrench,
    },
    {
      title: "Certified Chemistry Only",
      desc: "We exclusively import and install laboratory-tested epoxy, polyurethane, and polycarboxylate polymers with verified TDS and MSDS sheets.",
      icon: Award,
    },
    {
      title: "Zero Prep Shortcuts",
      desc: "Because 90% of coating delaminations stem from skipped prep, every KB Flooring project includes heavy diamond grinding and crack injection as standard.",
      icon: ShieldCheck,
    },
    {
      title: "Direct In-House Applicators",
      desc: "We never sub-contract our labor. Our team of 45+ trained professionals works under direct engineering supervision from start to handover.",
      icon: Users,
    },
  ];

  const clients = [
    {
      name: "Apex Spinning & Knitting Mills Ltd.",
      sector: "Textiles & Garments (RMG)",
      location: "Gazipur Industrial Zone",
      scope: "42,000 sq ft Industrial Self-Leveling Epoxy (3mm)",
      result: "High-density seamless floor enduring continuous heavy forklift and trolley traffic with zero flaking.",
    },
    {
      name: "Beximco Pharmaceuticals Ltd.",
      sector: "Pharmaceuticals & Healthcare",
      location: "Tongi Plant, Gazipur",
      scope: "18,500 sq ft Antimicrobial PU Screed (4mm)",
      result: "Cleanroom certified thermal shock floor resistant to boiling steam sanitization and corrosive cleaning agents.",
    },
    {
      name: "Navana Real Estate Ltd.",
      sector: "Commercial Real Estate",
      location: "Gulshan-1, Dhaka",
      scope: "24,000 sq ft Liquid Polyurethane Roof Waterproofing",
      result: "Elastomeric monolithic membrane over corporate terrace and parapets, eliminating persistent monsoon leakage.",
    },
    {
      name: "Meghna Group of Industries (MGI)",
      sector: "Logistics & Heavy Warehousing",
      location: "Narayanganj BSCIC Industrial Park",
      scope: "85,000 sq ft Monolithic Dry-Shake Floor Hardener",
      result: "Impact-resistant non-metallic hardener chemically densified with lithium silicates for dustproof abrasive protection.",
    },
    {
      name: "Square Textiles Unit 2",
      sector: "Textile Spinning & Dyeing",
      location: "Bhaluka, Mymensingh",
      scope: "35,000 sq ft High-Traffic Epoxy Roller Coating",
      result: "Vibration-dampening, oil-impermeable floor shielding the concrete slab from loom lubricants and lint friction.",
    },
    {
      name: "Incepta Pharmaceuticals Sterile Suite",
      sector: "Pharma Sterile Manufacturing",
      location: "Savar EPZ, Dhaka",
      scope: "12,000 sq ft cGMP Hospital Grade Cleanroom PU Floor",
      result: "Hermetically sealed, antimicrobial floor meeting strict WHO and US-FDA export audit guidelines.",
    },
    {
      name: "Akij Food & Beverage Bottling Hall",
      sector: "Food & Beverage Processing",
      location: "Dhamrai, Dhaka",
      scope: "22,000 sq ft Chemical & Steam Resistant Heavy PU Screed",
      result: "Impervious to citric and lactic food acids, with non-slip aggregate profile preventing workplace slips.",
    },
    {
      name: "Walton Hi-Tech Industries Logistics",
      sector: "Electronics & Appliance Assembly",
      location: "Chandra, Gazipur",
      scope: "65,000 sq ft Concrete Densification & Diamond Polish",
      result: "Ultra-hard, reflective concrete polish with surface densifier reducing tire marks from automated guided vehicles.",
    },
  ];

  const equipment = [
    {
      name: "3-Phase Planetary Diamond Grinders",
      desc: "Heavy multi-disc grinders capable of cutting down high spots and removing old paint to create CSP-3 surface profiles.",
    },
    {
      name: "Industrial HEPA Dust Extractors",
      desc: "Zero-dust containment systems ensuring clean working environments inside active pharmaceutical and food facilities.",
    },
    {
      name: "Concrete Moisture & Hardness Meters",
      desc: "Tramex digital concrete moisture meters and Schmidt rebound hammers providing empirical substrate data prior to application.",
    },
    {
      name: "High-Output Airless Spray Pumps",
      desc: "Specialized plural-component liquid membrane sprayers delivering uniform millage across expansive industrial rooftops.",
    },
  ];

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
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/surface-prep.jpg"
              alt="KB Flooring industrial facility and surface engineering"
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
                Dhaka Headquarters · Mirpur 10
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
                About KB Flooring BD
              </h1>
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                We are a specialized industrial flooring, polyurethane screed, and waterproofing
                contractor dedicated to delivering flawless mechanical performance and longevity
                across manufacturing plants, commercial hubs, and high-rise structures in Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE ARE Section */}
        <section id="who-we-are" className="py-20 lg:py-28 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story & Who We Are */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
                    Who We Are · Substrate Specialists
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight">
                    Engineering Durable Floors Across Bangladesh Since 2014
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <strong>KB Flooring BD</strong> is a Dhaka-based engineering contractor specializing exclusively in monolithic polymer floors, polyurethane screeds, roof waterproofing, and structural construction chemicals. Founded in <strong>Mirpur, Dhaka</strong>, we were established to solve a widespread problem in Bangladesh&apos;s industrial sector: premature coating peeling caused by unscientific application, skipped diamond surface profiling, and untested materials.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Today, we maintain an in-house fleet of planetary diamond grinders, dust extractors, and digital moisture diagnostic tools. With over <strong>45+ full-time certified applicators</strong> and <strong>12+ years of field engineering experience</strong>, our crews have successfully delivered over <strong>1.2 Million+ square feet</strong> of industrial floors for textile giants, pharmaceutical cleanrooms, food processing plants, and commercial developments nationwide.
                </p>

                {/* 4 Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-gray-50 border border-gray-200/90 rounded-xs">
                    <div className="flex items-center space-x-2 text-[#b8001a] font-bold text-xs uppercase mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>In-House Applicators</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">
                      We never subcontract our labor. All jobs are executed by method-trained KB Flooring technicians.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200/90 rounded-xs">
                    <div className="flex items-center space-x-2 text-[#b8001a] font-bold text-xs uppercase mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Surface Profile Guarantee</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">
                      Every concrete floor is mechanically ground to CSP-3/CSP-4 standard for permanent polymer adhesion.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200/90 rounded-xs">
                    <div className="flex items-center space-x-2 text-[#b8001a] font-bold text-xs uppercase mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Certified European Chemistry</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">
                      Formulated with certified high-grade epoxy, polyurethane, and polycarboxylate polymers with full TDS/MSDS.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200/90 rounded-xs">
                    <div className="flex items-center space-x-2 text-[#b8001a] font-bold text-xs uppercase mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Written Binding Warranty</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">
                      Every project handover includes a formal stamped written workmanship and material warranty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Realistic Engineering Photo */}
              <div className="lg:col-span-5">
                <div className="relative border border-gray-200 overflow-hidden shadow-xl rounded-xs">
                  <div className="relative h-80 sm:h-96 lg:h-[480px] w-full">
                    <Image
                      src="/images/contact-hero.jpg"
                      alt="KB Flooring engineering consultation and planning office in Dhaka"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white bg-black/60 backdrop-blur-xs border-t border-gray-800">
                    <span className="text-[#f59e0b] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                      Technical Consultation · Mirpur 10
                    </span>
                    <h3 className="text-sm font-bold uppercase text-white">
                      Field Diagnostics & Slab Specification Planning
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Our engineers analyzing floor plans, concrete core moisture readings, and polymer formulation data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Principles / Values */}
        <section className="py-16 lg:py-20 bg-gray-50/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
                Core Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-950 tracking-tight">
                Why Factory Managers Choose KB Flooring BD
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-6 border border-gray-200/90 shadow-xs flex flex-col justify-start"
                  >
                    <div className="w-10 h-10 bg-red-50 text-[#b8001a] flex items-center justify-center mb-4 border border-red-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black uppercase text-gray-950 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* High-Impact Statistics */}
        <StatsSection />

        {/* OUR CLIENTS Section */}
        <section id="our-clients" className="py-20 lg:py-28 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
                  Commercial & Industrial Partnerships
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight">
                  Our Corporate & Industrial Clients
                </h2>
                <p className="text-sm text-gray-600 mt-2 max-w-2xl font-normal leading-relaxed">
                  Over 180+ commercial enterprises and industrial plants across Bangladesh rely on KB Flooring BD for heavy mechanical load resistance, cGMP cleanroom compliance, and permanent leak prevention.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-gray-600 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>100% Verified Project Delivery</span>
              </div>
            </div>

            {/* 8 Client Case Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/60 border border-gray-200/90 p-5 rounded-xs hover:border-[#b8001a] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 bg-red-50 text-[#b8001a] font-bold uppercase truncate max-w-[160px]">
                        {client.sector}
                      </span>
                      <span className="text-gray-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-sm font-bold uppercase text-gray-950 group-hover:text-[#b8001a] transition-colors leading-snug">
                      {client.name}
                    </h3>

                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{client.location}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-200/80">
                      <div className="text-[11px] font-bold text-gray-900 uppercase">
                        {client.scope}
                      </div>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {client.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise Trust Banner */}
            <div className="mt-10 p-5 bg-[#0b1120] text-white rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-[#b8001a] shrink-0" />
                <p className="text-xs sm:text-sm font-medium text-gray-200">
                  Are you managing a facility in Greater Dhaka, Gazipur, Savar, or Chittagong? Schedule a free engineer site inspection.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#b8001a] hover:bg-[#e11d2a] text-white text-xs font-bold uppercase tracking-wider rounded-xs whitespace-nowrap transition-colors"
              >
                Request Client Reference List
              </Link>
            </div>
          </div>
        </section>

        {/* ON-SITE APPLICATION GALLERY Component */}
        <AboutGallery />

        {/* Machinery & Equipment Fleet */}
        <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
                Mechanical Capability
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-950 tracking-tight">
                Our On-Site Application Fleet
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                We do not outsource surface preparation. Our company owns and operates certified machinery on every site.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((eq, i) => (
                <div key={i} className="p-5 border border-gray-200 bg-gray-50/50">
                  <div className="text-[10px] font-bold uppercase text-[#b8001a] mb-1">
                    Fleet Item 0{i + 1}
                  </div>
                  <h3 className="text-xs font-black uppercase text-gray-950 mb-2">
                    {eq.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-normal leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <QuoteCtaSection />
      </main>

      <Footer />
    </div>
  );
}
