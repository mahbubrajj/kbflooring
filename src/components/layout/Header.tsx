"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export function Header({ onOpenQuoteModal }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileCat = (slug: string) => {
    setMobileExpandedCat(mobileExpandedCat === slug ? null : slug);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-all duration-300">
      {/* Header Top Bar (Smoothly slides away on scroll - sleek compact 32px height) */}
      <div
        className={`bg-[#0b1120] text-gray-200 font-medium border-b border-gray-800/80 transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 py-0 border-b-0"
            : "max-h-9 opacity-100 py-0 text-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse shrink-0"></span>
            <span className="text-[11px] sm:text-xs font-medium tracking-wide text-gray-200">
              Free site visit in Dhaka
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-xs shrink-0">
            <a
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              href="tel:+8801819199876"
            >
              <Phone className="w-3.5 h-3.5 text-[#b8001a]" />
              <span className="font-semibold">+880 1819-199876</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              href="mailto:kbflooringbd@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#b8001a]" />
              <span>kbflooringbd@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar (Fully responsive on mobile, large on desktop) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16 sm:h-18"
          }`}
        >
          {/* Logo (Responsive scale: compact on mobile, large on desktop matching footer) */}
          <div className="flex items-center shrink-0 mr-2 sm:mr-4 lg:mr-10 xl:mr-14">
            <Link className="flex items-center gap-3 group" href="/">
              <img
                src="/Logo.png"
                alt="KB Flooring BD Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled
                    ? "h-7 sm:h-8 lg:h-8.5"
                    : "h-8 sm:h-9 md:h-10 lg:h-12"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation (Decreased 2px inner gap: gap-[12px] xl:gap-[18px]) */}
          <nav className="hidden lg:flex items-center gap-[12px] xl:gap-[18px] h-full">
            <Link
              href="/"
              className={`h-full flex items-center px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                isActive("/")
                  ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                  : "text-gray-700 hover:text-[#b8001a] font-medium"
              }`}
            >
              Home
            </Link>

            {/* About Direct Link (Dropdown removed) */}
            <Link
              href="/about"
              className={`h-full flex items-center px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                isActive("/about")
                  ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                  : "text-gray-700 hover:text-[#b8001a] font-medium"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown (Mega Menu with All 6 Categories & 21 Services) */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`h-full flex items-center gap-1 px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                  isActive("/services")
                    ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                    : "text-gray-700 hover:text-[#b8001a] font-medium"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#b8001a]" : "text-gray-500"
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full -left-64 xl:left-[-120px] w-[980px] bg-white shadow-2xl rounded-b-lg p-6 hidden group-hover:block border-t-2 border-[#b8001a] border-x border-b border-gray-200 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="pb-3 mb-4 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8001a]">
                      Industrial & Commercial Solutions
                    </span>
                    <h4 className="text-sm font-black uppercase text-gray-950">
                      Explore Certified Flooring Systems
                    </h4>
                  </div>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#b8001a] hover:underline flex items-center space-x-1"
                  >
                    <span>View All Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 6 Category Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {servicesData.map((category) => (
                    <div key={category.slug} className="space-y-2">
                      <Link
                        href={`/services/${category.slug}`}
                        className="group/cat block border-b border-gray-200 pb-1.5"
                      >
                        <div className="text-xs font-black uppercase tracking-wide text-gray-950 group-hover/cat:text-[#b8001a] flex items-center justify-between">
                          <span>{category.title}</span>
                          <ChevronRight className="w-3 h-3 text-gray-400 group-hover/cat:translate-x-0.5 transition-transform" />
                        </div>
                        <span className="text-[10px] text-gray-500 line-clamp-1">
                          {category.categoryTag}
                        </span>
                      </Link>

                      <ul className="space-y-1 pt-1">
                        {category.subServices.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/services/${category.slug}/${sub.slug}`}
                              className="block py-1 px-2 text-[12px] font-medium text-gray-600 hover:text-gray-950 hover:bg-red-50/70 hover:translate-x-1 transition-all rounded-xs"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Strip */}
                <div className="mt-6 pt-3 border-t border-gray-100 bg-gray-50 p-3 flex justify-between items-center text-xs rounded">
                  <span className="text-gray-600 font-medium">
                    Need a customized chemical specification or slab moisture inspection?
                  </span>
                  <button
                    onClick={() => {
                      if (onOpenQuoteModal) onOpenQuoteModal();
                    }}
                    className="text-[#b8001a] font-bold hover:underline uppercase text-[11px] tracking-wider"
                  >
                    Request Free Engineer Consultation →
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`h-full flex items-center px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                isActive("/projects")
                  ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                  : "text-gray-700 hover:text-[#b8001a] font-medium"
              }`}
            >
              Projects
            </Link>

            <Link
              href="/blog"
              className={`h-full flex items-center px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                isActive("/blog")
                  ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                  : "text-gray-700 hover:text-[#b8001a] font-medium"
              }`}
            >
              Blog
            </Link>

            {/* Changed from "Contact Us" to "Contact" */}
            <Link
              href="/contact"
              className={`h-full flex items-center px-1 xl:px-1.5 transition-colors text-[15px] xl:text-[16px] tracking-normal ${
                isActive("/contact")
                  ? "text-[#b8001a] font-bold border-b-2 border-[#b8001a]"
                  : "text-gray-700 hover:text-[#b8001a] font-medium"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions: Only hamburger on mobile/tablet (< lg), desktop CTAs on lg+ */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            {/* Desktop Call Us button */}
            <a
              className={`hidden lg:flex items-center gap-2 rounded border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold transition-all shrink-0 ${
                isScrolled
                  ? "px-[14px] py-[7px] text-[13px] sm:text-[14px]"
                  : "px-[17px] py-[10px] text-[15px] xl:text-[16px]"
              }`}
              href="tel:+8801819199876"
            >
              <Phone className="w-4 h-4 text-[#b8001a]" />
              <span>Call Us</span>
            </a>

            {/* Desktop Get a free Quote button */}
            <button
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal();
                else {
                  const form = document.querySelector("#quote-form");
                  if (form) form.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`hidden lg:flex rounded bg-[#b8001a] hover:bg-[#e11d2a] text-white font-semibold uppercase tracking-wider shadow-sm transition-all items-center gap-2 shrink-0 ${
                isScrolled
                  ? "px-[16px] py-[7px] text-[13px] sm:text-[14px]"
                  : "px-[19px] py-[10px] text-[15px] xl:text-[16px]"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Get a free Quote</span>
            </button>

            {/* Mobile menu toggle (Only element on the right in mobile view) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-1 text-gray-800 hover:text-[#b8001a] hover:bg-gray-100 rounded-lg lg:hidden focus:outline-hidden transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2 font-semibold text-gray-800 text-sm">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 ${isActive("/") ? "text-[#b8001a]" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 ${isActive("/about") ? "text-[#b8001a]" : ""}`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/services") ? "text-[#b8001a]" : ""}
                  >
                    All Services
                  </Link>
                </div>
                <div className="pl-3 pt-2 space-y-2">
                  {servicesData.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={() => toggleMobileCat(category.slug)}
                        className="w-full flex items-center justify-between text-xs text-gray-700 font-bold py-1"
                      >
                        <span>{category.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            mobileExpandedCat === category.slug ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpandedCat === category.slug && (
                        <div className="pl-2 py-1 space-y-1">
                          <Link
                            href={`/services/${category.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[11px] font-semibold text-[#b8001a]"
                          >
                            Overview & Specs →
                          </Link>
                          {category.subServices.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/services/${category.slug}/${sub.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-[11px] text-gray-600 hover:text-black py-0.5"
                            >
                              • {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 ${isActive("/projects") ? "text-[#b8001a]" : ""}`}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 ${isActive("/blog") ? "text-[#b8001a]" : ""}`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 ${isActive("/contact") ? "text-[#b8001a]" : ""}`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href="tel:+8801819199876"
                className="flex items-center justify-center space-x-2 py-2.5 border border-gray-300 font-bold text-gray-900 text-sm rounded"
              >
                <Phone className="w-4 h-4 text-[#b8001a]" />
                <span>Call +880 1819-199876</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else {
                    const form = document.querySelector("#quote-form");
                    if (form) form.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full bg-[#b8001a] hover:bg-[#e11d2a] text-white font-bold text-sm uppercase py-3.5 rounded flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get a free Quote</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
