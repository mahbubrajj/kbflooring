"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedPosts } from "@/data/blogData";

export function GuidesSection() {
  const featuredPosts = getFeaturedPosts(6);

  return (
    <section id="blog" className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
              Industry Knowledge & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight">
              Flooring Guides and Tips
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Practical answers on cost per sq ft, materials, and concrete prep across Bangladesh.
            </p>
          </div>

          <div>
            <Link href="/blog">
              <Button className="bg-[#0c1219] hover:bg-[#1f2b3b] text-white text-xs font-bold uppercase tracking-wider px-6 py-5 rounded-none shadow-xs transition-colors">
                Read All 12 Articles →
              </Button>
            </Link>
          </div>
        </div>

        {/* 6 Featured Articles Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((art, idx) => (
            <article
              key={idx}
              className="bg-white border border-gray-200/90 shadow-xs hover:shadow-md transition-all flex flex-col group overflow-hidden"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <Image
                  src={art.heroImage}
                  alt={art.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0c1219]/90 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-0.5 border border-gray-700">
                  {art.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-[11px] text-gray-400 mb-2.5">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors mb-2.5 leading-snug line-clamp-2">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal mb-4">
                    {art.excerpt || art.metaDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#d32323] hover:underline inline-flex items-center space-x-1 group/btn"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-gray-400 font-semibold">{art.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
