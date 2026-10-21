import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronRight,
  User,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Share2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { blogPosts, getPostBySlug } from "@/data/blogData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found | KB Flooring BD" };

  return {
    title: `${post.metaTitle} | KB Flooring BD`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  // Generate Article and FAQPage JSON-LD Schema for SEO & AEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.metaDescription,
    image: `https://kbflooringbd.com${post.heroImage}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "KB Flooring BD",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "KB Flooring BD",
      logo: {
        "@type": "ImageObject",
        url: "https://kbflooringbd.com/Logo.png",
      },
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-21",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kbflooringbd.com/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0b1118] text-gray-400 py-3 border-b border-gray-800 text-xs">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold line-clamp-1">{post.title}</span>
          </div>
        </div>

        {/* Article Hero Header */}
        <header className="relative bg-[#0A0F1D] text-white py-14 lg:py-20 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              priority
              className="object-cover object-center brightness-40 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/90 to-[#0A0F1D]/60" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all 12 guides</span>
            </Link>

            <div className="inline-block bg-[#b8001a] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-xs">
              {post.category}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 pt-4 border-t border-gray-700/80">
              <span className="flex items-center space-x-1.5 font-bold text-white">
                <User className="w-4 h-4 text-[#b8001a]" />
                <span>{post.author}</span>
                <span className="text-gray-400 font-normal">({post.authorRole})</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Main Article Body */}
        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            {/* Hero Featured Image */}
            <div className="relative h-80 sm:h-96 md:h-[440px] w-full mb-10 border border-gray-200 shadow-xs overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* AEO Quick Answer Box (Direct Snippet for AI Overviews) */}
            <div className="mb-10 bg-red-50/60 border-l-4 border-[#d32323] p-6 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-gray-950 mb-2">
                <Sparkles className="w-4 h-4 text-[#d32323]" />
                <span>Quick Engineering Answer (AEO Summary)</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                {post.quickAnswer}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="mb-12 bg-gray-50 border border-gray-200 p-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-gray-950 mb-3">
                Key Engineering Takeaways
              </h3>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#d32323] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Blog Sections */}
            <div className="space-y-10">
              {post.sections.map((sec, secIdx) => (
                <section key={secIdx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-black uppercase text-gray-950 tracking-tight flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-[#d32323] inline-block"></span>
                    <span>{sec.heading}</span>
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {p}
                    </p>
                  ))}

                  {/* Bullet points if any */}
                  {sec.bulletPoints && (
                    <ul className="space-y-2 pl-4 border-l-2 border-gray-200 my-4 text-xs sm:text-sm text-gray-700">
                      {sec.bulletPoints.map((b, bIdx) => (
                        <li key={bIdx} className="list-disc pl-1 font-medium">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Data Table if any */}
                  {sec.tableData && (
                    <div className="my-6 border border-gray-200 overflow-x-auto shadow-xs">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#0c1219] text-white uppercase text-[11px] tracking-wider">
                            {sec.tableData.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3 px-4 font-bold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {sec.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-3 px-4 text-gray-800 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ Accordion Section for this Guide */}
            {post.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-gray-200">
                <h3 className="text-xl font-black uppercase text-gray-950 tracking-tight mb-6 flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-[#d32323]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {post.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="border border-gray-200 bg-gray-50/60 p-5">
                      <h4 className="text-xs sm:text-sm font-black uppercase text-gray-950 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Credential Signature Card */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase text-gray-950">
                  Written by {post.author}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  {post.authorRole} · Direct site inspection inquiries:{" "}
                  <strong className="text-gray-900">+880 1819-199876</strong>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-[#d32323] hover:bg-[#b51c1c] text-white text-xs font-bold uppercase py-3 px-6 whitespace-nowrap transition-colors shadow-xs"
              >
                Inquire With Author
              </Link>
            </div>

            {/* Related Technical Articles */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-lg font-black uppercase text-gray-950 tracking-tight mb-6">
                Related Industrial Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.slice(0, 2).map((other, i) => (
                  <Link
                    key={i}
                    href={`/blog/${other.slug}`}
                    className="p-5 border border-gray-200 bg-white hover:border-[#d32323] hover:shadow-xs transition-all group"
                  >
                    <div className="text-[10px] font-bold uppercase text-[#d32323] mb-1">
                      {other.category}
                    </div>
                    <h4 className="text-xs sm:text-sm font-black uppercase text-gray-950 group-hover:text-[#d32323] transition-colors line-clamp-2">
                      {other.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Lead Capture */}
        <QuoteCtaSection />
      </main>

      <Footer />
    </div>
  );
}
