import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { servicesData } from "@/data/servicesData";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catSlug } = await params;
  const category = servicesData.find((c) => c.slug === catSlug);
  if (!category) return { title: "Category Not Found | KB Flooring BD" };

  return {
    title: `${category.title} Systems & Installation in Bangladesh | KB Flooring BD`,
    description: `${category.shortDesc} Discover certified industrial systems, mechanical specifications, and application protocols across Greater Dhaka and national EPZs.`,
    keywords: [
      category.title,
      `${category.title} Bangladesh`,
      `${category.title} Dhaka`,
      "KB Flooring BD",
    ],
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: catSlug } = await params;
  const category = servicesData.find((c) => c.slug === catSlug);

  if (!category) {
    notFound();
  }

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
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold">{category.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src={category.heroImage}
              alt={category.title}
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
                {category.badge} · Certified Systems
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
                {category.title} Solutions
              </h1>
              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-6">
                {category.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Sub-services Grid */}
        <section className="py-16 lg:py-20 bg-gray-50/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-1">
                Specialized Sub-Systems
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-gray-950 tracking-tight">
                Choose a Specific {category.title} System
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
                Click any system below to inspect exact mechanical data sheets, curing dynamics, and thickness requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group p-6"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#d32323] mb-1">
                      {sub.thickness} Profile
                    </div>

                    <h3 className="text-base font-black uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors mb-2">
                      {sub.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal mb-6">
                      {sub.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-gray-100 mb-6 text-[11px] text-gray-600">
                      <div>
                        <strong className="text-gray-900">Compressive Strength:</strong>{" "}
                        {sub.compressiveStrength}
                      </div>
                      <div>
                        <strong className="text-gray-900">Warranty:</strong> {sub.warranty}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/services/${category.slug}/${sub.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-[#d32323] group-hover:translate-x-1 transition-all pt-3 border-t border-gray-100"
                  >
                    <span>Inspect System Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d32323]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <QuoteCtaSection selectedServicePreload={category.title} />
      </main>

      <Footer />
    </div>
  );
}
