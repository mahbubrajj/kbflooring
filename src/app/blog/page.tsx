"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight, User, Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { getAllPosts } from "@/data/blogData";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    "ALL",
    "PRICING & ESTIMATES",
    "COMPARISONS",
    "WATERPROOFING",
    "QUALITY ASSURANCE",
    "PHARMACEUTICAL COMPLIANCE",
    "WAREHOUSE ENGINEERING",
  ];

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "ALL" || post.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || post.metaDescription).toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-white font-semibold">Blog & Technical Guides (12 Articles)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog-hero.jpg"
              alt="KB Flooring technical testing and chemical engineering laboratory"
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
                Field Knowledge & Industrial Engineering Insights
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
                12 Technical Flooring & Waterproofing Guides
              </h1>
              <p className="text-base text-gray-300 font-normal leading-relaxed">
                Practical, transparent answers on cost per square foot benchmarks, ASTM testing standards,
                curing dynamics, moisture vapor management, and concrete substrate profiling across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Toolbar (Static positioning, sticky turned off) */}
        <div className="bg-gray-100 border-b border-gray-200 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 items-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0c1219] text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-300"
                  }`}
                >
                  {cat === "ALL" ? "All (12 Guides)" : cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search pricing, ASTM, cleanrooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-white border border-gray-300 px-3 py-2 pl-8 focus:outline-hidden focus:border-[#d32323]"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3" />
            </div>
          </div>
        </div>

        {/* 12 Blog Posts Grid */}
        <section className="py-16 lg:py-20 bg-gray-50/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
              <span>Showing {filteredPosts.length} of {allPosts.length} comprehensive technical articles</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#d32323] font-semibold underline"
                >
                  Clear search
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              {filteredPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white border border-gray-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col group overflow-hidden"
                >
                  <div className="relative h-28 sm:h-52 w-full overflow-hidden bg-black/40">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0c1219]/90 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 border border-gray-700 truncate max-w-[85%]">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5 sm:space-x-3 text-[9px] sm:text-[11px] text-gray-400 mb-1.5 sm:mb-2.5">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="text-xs sm:text-base font-extrabold uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors mb-1.5 sm:mb-3 leading-snug line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="hidden sm:block text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal mb-6">
                        {post.excerpt || post.metaDescription}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-xs">
                      <span className="hidden sm:flex text-[11px] text-gray-500 items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-1 sm:space-x-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#d32323] hover:underline"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
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
