import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Gauge,
  Layers,
  Building2,
  ChevronRight,
  ArrowRight,
  Wrench,
  FileText,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { servicesData, getServiceByCategoryAndSlug } from "@/data/servicesData";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of servicesData) {
    for (const sub of cat.subServices) {
      params.push({
        category: cat.slug,
        slug: sub.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const result = getServiceByCategoryAndSlug(category, slug);
  if (!result) return { title: "Service Not Found | KB Flooring BD" };

  return {
    title: `${result.subService.title} in Bangladesh | KB Flooring BD`,
    description: `${result.subService.shortDesc} Expert contractor in Dhaka, Bangladesh offering certified installation, moisture profiling, and written warranties.`,
    keywords: [
      result.subService.title,
      `${result.subService.title} Bangladesh`,
      `${result.subService.title} Dhaka`,
      result.category.title,
      "KB Flooring BD",
    ],
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const { category: catSlug, slug: subSlug } = await params;
  const result = getServiceByCategoryAndSlug(catSlug, subSlug);

  if (!result) {
    notFound();
  }

  const { category, subService } = result;

  // Other services in this category
  const siblingServices = category.subServices.filter((s) => s.slug !== subService.slug);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0b1118] text-gray-400 py-3 border-b border-gray-800 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center space-x-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link
              href={`/services/${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold">{subService.title}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src={subService.image || category.heroImage}
              alt={subService.title}
              fill
              priority
              className="object-cover object-center brightness-60 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/85 to-[#0A0F1D]/50" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800 text-[#d32323] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
                <span>{category.title}</span>
                <span>•</span>
                <span>Certified Applicator</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
                {subService.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
                {subService.tagline}
              </p>

              {/* Key Quick Spec Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-800 text-xs">
                <div className="bg-[#151e29] p-3 border border-gray-800">
                  <div className="text-[10px] uppercase font-bold text-gray-400">Build Profile</div>
                  <div className="font-bold text-white mt-0.5">{subService.thickness}</div>
                </div>
                <div className="bg-[#151e29] p-3 border border-gray-800">
                  <div className="text-[10px] uppercase font-bold text-gray-400">Strength</div>
                  <div className="font-bold text-white mt-0.5 line-clamp-1">{subService.compressiveStrength}</div>
                </div>
                <div className="bg-[#151e29] p-3 border border-gray-800">
                  <div className="text-[10px] uppercase font-bold text-gray-400">Cure Dynamic</div>
                  <div className="font-bold text-white mt-0.5 line-clamp-1">{subService.curingTime}</div>
                </div>
                <div className="bg-[#151e29] p-3 border border-gray-800">
                  <div className="text-[10px] uppercase font-bold text-gray-400">Warranty</div>
                  <div className="font-bold text-amber-400 mt-0.5">{subService.warranty}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content & Specifications Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Main Body (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* Engineering Overview */}
                <div>
                  <h2 className="text-2xl font-black uppercase text-gray-950 tracking-tight mb-4 flex items-center space-x-2">
                    <span className="w-2 h-5 bg-[#d32323] inline-block"></span>
                    <span>System Engineering Overview</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {subService.overview}
                  </p>
                </div>

                {/* Key Benefits Checklist */}
                <div>
                  <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-4">
                    Key Performance Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subService.keyBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#d32323] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-800 font-medium leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div>
                  <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-4">
                    Technical Specifications Matrix
                  </h3>
                  <div className="border border-gray-200 overflow-hidden">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#0c1219] text-white uppercase tracking-wider text-[11px]">
                          <th className="py-3 px-4 font-bold">Property Parameter</th>
                          <th className="py-3 px-4 font-bold">Certified Standard / Performance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {subService.specifications.map((spec, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                            <td className="py-3 px-4 font-semibold text-gray-900">{spec.label}</td>
                            <td className="py-3 px-4 text-gray-700">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Installation Process */}
                <div>
                  <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-4">
                    5-Stage Installation Methodology
                  </h3>
                  <div className="space-y-3">
                    {subService.processSteps.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-4 p-4 border border-gray-200 bg-white hover:border-[#d32323]/50 transition-colors"
                      >
                        <div className="w-9 h-9 shrink-0 bg-[#0c1219] text-white flex items-center justify-center font-bold text-xs">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wide text-gray-950 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-normal">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Applications */}
                <div>
                  <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-4">
                    Target Facilities & Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subService.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-1.5"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Free Consultation Card */}
                <div className="bg-[#0c1219] text-white p-6 border border-gray-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d32323] block mb-2">
                    Free Consultation In Dhaka
                  </span>
                  <h4 className="text-base font-black uppercase mb-3">
                    Require This System For Your Facility?
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
                    Schedule an on-site concrete moisture and hardness inspection. Our engineers will
                    measure your floor and provide an itemized engineering quote.
                  </p>
                  <a
                    href="#quote-form"
                    className="block text-center bg-[#d32323] hover:bg-[#b51c1c] text-white text-xs font-bold uppercase py-3.5 px-4 tracking-wider transition-colors"
                  >
                    Request Site Inspection
                  </a>
                  <a
                    href="tel:+8801819199876"
                    className="block text-center mt-3 border border-gray-700 hover:border-gray-500 text-gray-300 text-xs font-bold uppercase py-3 px-4 transition-colors"
                  >
                    Call: +880 1819-199876
                  </a>
                </div>

                {/* Sibling Services in This Category */}
                <div className="border border-gray-200 p-6 bg-gray-50/70">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-950 mb-4 pb-2 border-b border-gray-200">
                    More in {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {siblingServices.map((sib) => (
                      <li key={sib.slug}>
                        <Link
                          href={`/services/${category.slug}/${sib.slug}`}
                          className="group flex items-center justify-between text-xs font-semibold text-gray-700 hover:text-[#d32323] py-1.5"
                        >
                          <span className="line-clamp-1">{sib.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 group-hover:text-[#d32323] transition-transform shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <QuoteCtaSection selectedServicePreload={`${category.title}: ${subService.title}`} />
      </main>

      <Footer />
    </div>
  );
}
