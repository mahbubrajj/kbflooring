import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | KB Flooring BD",
  description:
    "Standard commercial engineering contract terms, substrate warranties, surface preparation requirements, and curing guidelines for KB Flooring BD projects in Bangladesh.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0b1118] text-gray-400 py-3 border-b border-gray-800 text-xs">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold">Terms and Conditions</span>
          </div>
        </div>

        {/* Header */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-20 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/service-industrial.jpg"
              alt="KB Flooring commercial contracts and specifications"
              fill
              priority
              className="object-cover object-center brightness-50 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/90 to-[#0A0F1D]/60" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
              Legal & Commercial Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-300">
              Last updated: October 2026 · Governing all industrial application contracts by KB Flooring BD
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>1. Scope of Work & Binding Written Proposals</span>
              </h2>
              <p>
                All flooring, waterproofing, and chemical application contracts undertaken by KB
                Flooring BD are governed exclusively by our formal, written Technical Proposal and
                Quotation. Specifications, build thickness (millimeters or microns), mechanical
                profile parameters, surface preparation protocols, and schedules confirmed in
                writing supersede all informal or verbal communications.
              </p>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>2. Concrete Substrate Conditions & Pre-Requisites</span>
              </h2>
              <p>
                The durability of resin floor coatings and waterproofing membranes depends on the
                structural soundness of the underlying concrete slab:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                <li>
                  <strong>Concrete Age:</strong> Freshly cast concrete slabs must be cured for a
                  minimum of 28 days prior to resin application.
                </li>
                <li>
                  <strong>Moisture Content:</strong> Substrate moisture must not exceed 4% by weight
                  (measured via Tramex / in-situ probe) unless a certified moisture-barrier epoxy
                  primer has been specifically included in the agreed scope.
                </li>
                <li>
                  <strong>Compressive Strength:</strong> The concrete slab must possess a minimum
                  compressive strength of 20 N/mm² (Grade M20 or higher) and tensile pull-off
                  strength of at least 1.5 N/mm².
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>3. Client Site Provisions (Power & Access)</span>
              </h2>
              <p>
                To enable our heavy 3-phase diamond grinders, vacuum dust extractors, and mixing
                rigs to operate effectively, the client agrees to provide uninterrupted 415V 3-phase
                electrical power (or agreed single-phase generator capacity), clean water supply, and
                unrestricted access to the application work bays.
              </p>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>4. Curing Periods & Facility Re-Entry</span>
              </h2>
              <p>
                Resin polymers undergo delicate molecular cross-linking following application.
                The client must strictly enforce access restrictions during curing:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-600">
                <li>Light foot traffic is permitted only after 24 hours at 25°C - 30°C.</li>
                <li>Light trolley and packaging traffic is permitted after 72 hours.</li>
                <li>
                  Full mechanical forklift transit, chemical cleaning washdowns, and heavy point
                  loads are strictly prohibited until a full 7-day cure is achieved.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>5. Written Workmanship Warranty</span>
              </h2>
              <p>
                KB Flooring BD issues a stamped, formal Certificate of Warranty upon joint post-cure
                handover inspection. The warranty covers delamination, peeling, blistering, and
                workmanship defects under normal specified operational traffic.
              </p>
              <p className="mt-2 text-gray-500 text-xs">
                Exclusions: Structural building settlement cracks, subterranean hydrostatic rising
                damp on un-vapor-barriered slabs exceeding chemical limits, mechanical dragging of
                unprotected metal sharp edges, and chemical exposure outside the agreed TDS chemical
                resistance chart.
              </p>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>6. Jurisdiction & Legal Authority</span>
              </h2>
              <p>
                All contracts entered into with KB Flooring BD are governed by the laws of the
                People&apos;s Republic of Bangladesh. Any disputes shall be subject to the exclusive
                jurisdiction of the competent courts of Dhaka.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
