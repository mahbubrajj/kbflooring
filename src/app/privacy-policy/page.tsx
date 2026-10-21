import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ShieldCheck, Lock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | KB Flooring BD",
  description:
    "Privacy and data protection commitment of KB Flooring BD. We safeguard project inquiries, facility specifications, and commercial contact information.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-white font-semibold">Privacy Policy</span>
          </div>
        </div>

        {/* Header */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-20 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/surface-prep.jpg"
              alt="KB Flooring data privacy and commercial confidentiality"
              fill
              priority
              className="object-cover object-center brightness-50 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/90 to-[#0A0F1D]/60" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8001a] block mb-2">
              Data Protection & Confidentiality
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-300">
              Effective Date: October 2026 · KB Flooring BD, Mirpur, Dhaka, Bangladesh
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>1. Overview & Commitment</span>
              </h2>
              <p>
                KB Flooring BD (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
                protecting the personal information and proprietary operational data shared by plant
                managers, engineers, architects, and facility owners when inquiring about our
                flooring and waterproofing services.
              </p>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>2. Information We Collect</span>
              </h2>
              <p>
                When you request a technical proposal, schedule a free site visit, or contact our
                engineering desk, we collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Your full name, job title, and organization/company name</li>
                <li>Telephone/mobile contact numbers and business email addresses</li>
                <li>Project geographic location (e.g. Gazipur, Savar, Mirpur, Chattogram EPZ)</li>
                <li>Estimated project area (square feet or square meters) and facility traffic requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>3. Industrial Non-Disclosure & Confidentiality</span>
              </h2>
              <p>
                We understand that factory production lines, pharmaceutical cleanrooms, and
                commercial layouts involve sensitive business intelligence. KB Flooring BD treats
                all floor plans, technical parameters, and chemical exposure details as strictly
                confidential. We never share client site data with third parties.
              </p>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>4. Purpose of Data Use</span>
              </h2>
              <p>Your information is used solely to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Prepare accurate engineering bill of quantities (BOQ) and chemical quotations</li>
                <li>Coordinate on-site moisture and slab hardness testing visits</li>
                <li>Fulfill contractual handover and warranty service inspections</li>
                <li>Provide relevant technical data sheets (TDS) and material safety sheets (MSDS)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-black uppercase text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                <span>5. Data Inquiries & Contact</span>
              </h2>
              <p>
                If you have questions regarding your data or wish to update your project details,
                please contact our administrative desk:
              </p>
              <div className="bg-gray-50 p-4 border border-gray-200 mt-2 text-xs">
                <div><strong>KB Flooring BD</strong></div>
                <div>House 791/1, West Kazipara, Mirpur, Dhaka-1216, Bangladesh</div>
                <div>Email: <a href="mailto:kbflooringbd@gmail.com" className="text-[#d32323] underline">kbflooringbd@gmail.com</a></div>
                <div>Phone: +880 1819-199876</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
