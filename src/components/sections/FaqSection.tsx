"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT TYPES OF FLOORING DO YOU INSTALL?",
      answer:
        "We specialize in heavy-duty industrial and commercial flooring systems: Self-Leveling Epoxy (2mm to 4mm), High-Traffic Roller Epoxy Coating, Polyurethane (PU) Screed (4mm to 9mm for food, cold storage and pharma), Monolithic Dry-Shake Concrete Hardeners, Diamond Polished Concrete Densification, Electrostatic Conductive (ESD) floors, and Liquid Polyurethane Elastomeric Roof & Basement Waterproofing membranes.",
    },
    {
      question: "DO YOU OFFER A FREE SITE VISIT?",
      answer:
        "Yes! We offer a complimentary, no-obligation site visit anywhere within Dhaka Metropolitan area (Mirpur, Uttara, Tejgaon, Gulshan, Banani, Motijheel, etc.). During the visit, our engineers perform precise digital laser measurements, concrete slab moisture content readings (Tramex/RH testing), and surface hardness assessments to suggest the right polymer chemistry.",
    },
    {
      question: "WHICH AREAS DO YOU WORK IN?",
      answer:
        "Our headquarters and central warehouse are located in Mirpur 10, Dhaka. While our primary day-to-day operations cover Greater Dhaka (Gazipur, Tongi, Savar, Ashulia EPZ, Narayanganj), we regularly deploy full mobile application teams and heavy grinding machinery to projects nationwide, including Chattogram EPZ, Cumilla, Sylhet, Bogura, and Khulna.",
    },
    {
      question: "HOW LONG DOES INSTALLATION TAKE?",
      answer:
        "Project duration depends on the total square footage and curing parameters: A 10,000 sq ft industrial epoxy flooring typically takes 3 to 5 days, including heavy diamond profiling, primer saturation, base body screed, and protective topcoat. Light foot traffic is permitted after 24 hours of curing, while full chemical and forklift transit requires 7 days for complete polymer molecular cross-linking.",
    },
    {
      question: "CAN YOU APPLY NEW FLOORING OVER AN OLD FLOOR?",
      answer:
        "Yes, provided the concrete slab is structurally sound. We never apply coatings directly over contaminated or unprofiled concrete. We use heavy 3-phase diamond grinders and scarifiers to remove old flaking paints, surface oil, and weak laitance down to clean aggregate. Structural cracks are V-cut and pressure-injected with high-tensile epoxy repair mortar before the new floor system is installed.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Direct engineering advice regarding installation, site visits, and curing times.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-slate-50/80 border transition-colors shadow-xs ${
                  isOpen ? "border-gray-400 bg-white" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-4.5 group"
                >
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wide text-gray-950 group-hover:text-[#d32323] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-black shrink-0 transition-transform duration-200">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#d32323]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
