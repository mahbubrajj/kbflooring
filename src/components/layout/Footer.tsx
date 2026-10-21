"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[#080d13] text-gray-400 pt-16 pb-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Main 4-column footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
            {/* Column 1: Company Profile & Logo (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-56 h-12">
                <Image
                  src="/K-B-Flooring-Logo-footer.png"
                  alt="KB Flooring BD"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                KB Flooring BD is a flooring, waterproofing and construction chemical contractor
                based in Mirpur, Dhaka, serving clients across Bangladesh with precision engineering
                and certified chemical application.
              </p>

              {/* Social Media Links (Facebook, LinkedIn, YouTube) */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/KBflooringBD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow KB Flooring BD on Facebook"
                  className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/kbflooringbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with KB Flooring BD on LinkedIn"
                  className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@KBflooringBD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to KB Flooring BD on YouTube"
                  className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Industrial Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Industrial Services
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: "Industrial Epoxy Flooring", href: "/services/epoxy-flooring" },
                  { name: "Polyurethane (PU) Screed", href: "/services/pu-flooring" },
                  { name: "Basement & Roof Waterproofing", href: "/services/waterproofing" },
                  { name: "Construction Chemical Supply", href: "/services/construction-chemicals" },
                  { name: "Heavy Duty Factory Flooring", href: "/services/industrial-flooring" },
                  { name: "Commercial Interior Coating", href: "/services/interior-flooring" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline transition-colors text-left block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Profile (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Corporate Profile
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: "About Our Company", href: "/about" },
                  { name: "Client Case Studies", href: "/projects" },
                  { name: "On-Site Application", href: "/projects" },
                  { name: "Structural Inspection", href: "/contact" },
                  { name: "Technical Specs", href: "/services" },
                  { name: "Contact & Branches", href: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline transition-colors text-left block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Operations (3 cols) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Contact & Operations
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#d32323] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    House 791/1, West Kazipara, Mirpur, Dhaka-1216, Bangladesh
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#d32323] shrink-0" />
                  <a
                    href="tel:+8801819199876"
                    className="text-white hover:text-[#d32323] font-bold transition-colors"
                  >
                    +880 1819-199876
                  </a>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <a
                    href="mailto:kbflooringbd@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    kbflooringbd@gmail.com
                  </a>
                </div>

                <div className="pt-2 border-t border-gray-800 text-[11px] text-gray-400">
                  <div className="flex items-center space-x-1.5 text-gray-200 font-bold uppercase mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#d32323]" />
                    <span>Working Hours:</span>
                  </div>
                  <p>Saturday - Thursday: 8:00 AM - 8:00 PM</p>
                  <p className="text-amber-500 font-medium">Friday: Emergency Support Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subfooter */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] sm:text-[15px] text-gray-400">
            <div>
              © 2026 KB Flooring BD. All rights reserved. Engineering durable floors across Bangladesh.
            </div>

            <div className="flex items-center space-x-6 text-gray-300">
              <Link href="/privacy-policy" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
              <span className="text-gray-600">·</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors font-medium">
                Terms and Conditions
              </Link>
              <span className="text-gray-600">·</span>
              <Link href="/services" className="hover:text-white transition-colors font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/8801819199876?text=Hello%20KB%20Flooring%20BD,%20I%20would%20like%20to%20inquire%20about%20flooring/waterproofing%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <svg
          className="w-8 h-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat with an engineer
        </span>
      </a>
    </>
  );
}
