import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Wrench, Layers } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Industrial & Commercial Flooring Services in Bangladesh | KB Flooring BD",
  description:
    "Comprehensive directory of industrial flooring, PU screed, waterproofing, construction chemicals, and surface preparation services by KB Flooring BD in Dhaka, Bangladesh.",
  keywords: [
    "Epoxy flooring services",
    "PU screed contractor",
    "Waterproofing Bangladesh",
    "Floor hardener Dhaka",
    "KB Flooring BD services",
  ],
};

export default function ServicesPage() {
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
            <span className="text-white font-semibold">Services</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/service-epoxy.jpg"
              alt="KB Flooring industrial certified systems"
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
                Complete Engineering Portfolio
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
                Our Services & Certified Systems
              </h1>
              <p className="text-base text-gray-300 font-normal leading-relaxed">
                Explore our full spectrum of specialized flooring and waterproofing services.
                Engineered with European and Asian polymer formulations, applied with diamond grinding
                surface profiling, and backed by written warranties across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* All Categories & Sub-services Grid */}
        <section className="py-16 lg:py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
            {servicesData.map((category, catIdx) => (
              <div
                key={catIdx}
                id={category.slug}
                className="bg-white border border-gray-200/90 p-6 sm:p-10 shadow-xs"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#d32323] block mb-1">
                      {category.categoryTag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-gray-950 tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl font-normal">
                      {category.shortDesc}
                    </p>
                  </div>

                  <Link
                    href={`/services/${category.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#d32323] hover:underline shrink-0"
                  >
                    <span>View Category Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subServices.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="bg-gray-50/70 border border-gray-200/80 p-5 flex flex-col justify-between hover:border-gray-400 hover:bg-white transition-all group"
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                          Build: <span className="text-gray-900">{sub.thickness}</span>
                        </div>

                        <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors mb-2">
                          {sub.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed font-normal mb-4">
                          {sub.shortDesc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between text-xs">
                        <Link
                          href={`/services/${category.slug}/${sub.slug}`}
                          className="font-bold text-[#d32323] hover:underline uppercase text-[11px] flex items-center space-x-1"
                        >
                          <span>Detailed Specs</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <span className="text-[10px] text-gray-500 font-semibold">{sub.warranty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture */}
        <QuoteCtaSection />
      </main>

      <Footer />
    </div>
  );
}
