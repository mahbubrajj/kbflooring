"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Self-Leveling Epoxy (2-4mm)",
    area: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#0b1118] text-gray-400 py-3 border-b border-gray-800 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative bg-[#0A0F1D] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="KB Flooring engineering consultation and project inspection in Dhaka"
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
                Direct Engineering Consultation
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
                Contact KB Flooring BD
              </h1>
              <p className="text-base text-gray-300 font-normal leading-relaxed">
                Schedule a complimentary site visit anywhere in Dhaka. We test concrete moisture,
                evaluate surface profiles, and deliver transparent written proposals within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details & Inquiry Form */}
        <section className="py-16 lg:py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Office Details & Map (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d32323] block mb-2">
                    Headquarters
                  </span>
                  <h2 className="text-2xl font-extrabold uppercase text-gray-950 tracking-tight mb-4">
                    Mirpur Operations Hub
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    Our central technical testing facility, warehouse machinery stock, and resin
                    distribution depot are centrally situated in Mirpur, allowing rapid deployment
                    throughout Greater Dhaka and Gazipur.
                  </p>
                </div>

                {/* Contact Card Details */}
                <div className="space-y-4 bg-white p-6 border border-gray-200/90 shadow-xs">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 bg-red-50 text-[#d32323] flex items-center justify-center shrink-0 border border-red-100">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Office Location
                      </div>
                      <div className="text-xs font-bold text-gray-900 mt-0.5 leading-snug">
                        House 791/1, West Kazipara, Mirpur, Dhaka-1216, Bangladesh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 bg-red-50 text-[#d32323] flex items-center justify-center shrink-0 border border-red-100">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Phone & Hotline
                      </div>
                      <a
                        href="tel:+8801819199876"
                        className="text-xs font-bold text-gray-900 hover:text-[#d32323] transition-colors mt-0.5 block"
                      >
                        +880 1819-199876
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 bg-red-50 text-[#d32323] flex items-center justify-center shrink-0 border border-red-100">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Email Inquiries
                      </div>
                      <a
                        href="mailto:kbflooringbd@gmail.com"
                        className="text-xs font-bold text-gray-900 hover:text-[#d32323] transition-colors mt-0.5 block"
                      >
                        kbflooringbd@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 bg-red-50 text-[#d32323] flex items-center justify-center shrink-0 border border-red-100">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Operating Hours
                      </div>
                      <div className="text-xs text-gray-800 mt-0.5">
                        Saturday – Thursday: 8:00 AM – 8:00 PM
                      </div>
                      <div className="text-[11px] text-amber-600 font-semibold mt-0.5">
                        Friday: Emergency Industrial Support Only
                      </div>
                    </div>
                  </div>
                </div>

                {/* Styled Map Card */}
                <div className="bg-[#0c1219] text-white p-5 border border-gray-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span>West Kazipara, Mirpur 10</span>
                    <span className="text-[#d32323]">Dhaka 1216</span>
                  </div>
                  <div className="h-36 bg-[#16202c] border border-gray-700 relative flex items-center justify-center text-center p-4">
                    <div className="space-y-1">
                      <MapPin className="w-6 h-6 text-[#d32323] mx-auto animate-bounce" />
                      <div className="text-xs font-bold text-white uppercase">
                        KB Flooring Engineering Center
                      </div>
                      <div className="text-[10px] text-gray-400">
                        Opposite Kazipara Metro Rail Station Pillar 240
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=West+Kazipara+Mirpur+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider underline pt-1"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Right Column: Comprehensive Proposal Request Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 border border-gray-200/90 shadow-md">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-extrabold uppercase text-gray-950">
                        Inquiry Successfully Logged
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our
                        engineering coordination desk has received your request. An engineer will
                        call you at <strong className="text-gray-900">{formData.phone}</strong> to confirm
                        your free site inspection time.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "Self-Leveling Epoxy (2-4mm)",
                            area: "",
                            location: "",
                            message: "",
                          });
                        }}
                        className="bg-[#0c1219] hover:bg-[#1a2533] text-white text-xs font-bold uppercase rounded-none mt-4"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#d32323] block mb-1">
                          Direct Engineering Response
                        </span>
                        <h3 className="text-xl font-extrabold uppercase text-gray-950 tracking-tight">
                          Request Technical Consultation & Quote
                        </h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">
                          Share your preliminary specifications and our engineering team will get back to you within 1 business day.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Your Name *
                          </label>
                          <Input
                            required
                            type="text"
                            placeholder="e.g. Engr. Tanvir Ahmed"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="rounded-none text-xs h-10 border-gray-300"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Mobile Number *
                          </label>
                          <Input
                            required
                            type="tel"
                            placeholder="+880 1XXX-XXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-none text-xs h-10 border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="rounded-none text-xs h-10 border-gray-300"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Service System Required
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full h-10 text-xs border border-gray-300 px-3 py-1 bg-white focus:outline-hidden focus:border-[#d32323]"
                          >
                            <option value="Self-Leveling Epoxy (2-4mm)">Self-Leveling Epoxy (2-4mm)</option>
                            <option value="Epoxy Roller Coating (300-600um)">Epoxy Roller Coating</option>
                            <option value="Industrial PU Heavy Screed">Industrial PU Heavy Screed (4-9mm)</option>
                            <option value="Roof & Terrace Waterproofing">Roof & Terrace Waterproofing</option>
                            <option value="Concrete Floor Hardener & Densifier">Concrete Floor Hardener & Densifier</option>
                            <option value="Construction Chemicals Supply">Construction Chemicals Supply</option>
                            <option value="Hospital Homogeneous Sheet Vinyl">Hospital Sheet Vinyl</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Estimated Area (Sq Ft)
                          </label>
                          <Input
                            type="text"
                            placeholder="e.g. 10,000 sq ft"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="rounded-none text-xs h-10 border-gray-300"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                            Site Location (City / Zone)
                          </label>
                          <Input
                            type="text"
                            placeholder="e.g. Gazipur, Savar, Tejgaon"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="rounded-none text-xs h-10 border-gray-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Traffic Conditions & Operational Details
                        </label>
                        <Textarea
                          rows={3}
                          placeholder="Describe your floor usage (forklifts, cleanroom hygiene, chemical spills, temperature range, existing slab condition)..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="rounded-none text-xs border-gray-300 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#d32323] hover:bg-[#b51c1c] text-white font-bold text-xs uppercase py-6 rounded-none tracking-wider shadow-md transition-all flex items-center justify-center space-x-2"
                      >
                        {loading ? "Submitting Specification..." : "Submit Technical Inquiry →"}
                      </Button>

                      <p className="text-center text-[10px] text-gray-400 pt-1">
                        We respect your privacy. Technical details are strictly confidential.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
