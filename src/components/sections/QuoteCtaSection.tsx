"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface QuoteCtaSectionProps {
  selectedServicePreload?: string;
}

export function QuoteCtaSection({ selectedServicePreload }: QuoteCtaSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    service: selectedServicePreload || "Self-Leveling Epoxy (2-4mm)",
    estimatedArea: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="quote-form" className="py-20 lg:py-24 bg-[#0b1118] text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#d32323] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1">
              Free Consultation Available
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.1]">
              Ready To Upgrade Your Floor?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl">
              Tell us about your space and get a free site visit and written quote. We will measure
              your concrete, inspect moisture, and recommend the exact chemical system for your
              operations.
            </p>

            {/* Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-bold tracking-wider uppercase text-gray-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-red-950/80 border border-red-800/80 text-[#d32323] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white">ISO Certified</div>
                  <div className="text-[10px] text-gray-400 font-medium">Procedures</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-red-950/80 border border-red-800/80 text-[#d32323] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white">100% Guaranteed</div>
                  <div className="text-[10px] text-gray-400 font-medium">Workmanship</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Proposal Request Form Box */}
          <div className="lg:col-span-6">
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-none border border-gray-200 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-gray-950">
                    Specification Received
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-900">{formData.fullName || "Partner"}</strong>.
                    Our technical engineering team has logged your inquiry and will contact you via{" "}
                    <strong className="text-gray-900">{formData.mobileNumber}</strong> within 1 business day for
                    the site inspection schedule.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        mobileNumber: "",
                        service: "Self-Leveling Epoxy (2-4mm)",
                        estimatedArea: "",
                        requirements: "",
                      });
                    }}
                    className="bg-[#0c1219] hover:bg-[#1a2636] text-white text-xs font-bold uppercase rounded-none mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-gray-950 mb-1">
                      Request Technical Proposal
                    </h3>
                    <p className="text-[11px] text-gray-500 font-medium">
                      Fill in your preliminary details and our engineering team will get back to you within 1 business day.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        required
                        type="text"
                        placeholder="e.g. Engr. Tanvir Ahmed"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="rounded-none border-gray-300 text-xs h-10 focus-visible:ring-[#d32323]"
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
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="rounded-none border-gray-300 text-xs h-10 focus-visible:ring-[#d32323]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-10 text-xs border border-gray-300 px-3 py-1 bg-white focus:outline-hidden focus:border-[#d32323]"
                      >
                        <option value="Self-Leveling Epoxy (2-4mm)">Self-Leveling Epoxy (2-4mm)</option>
                        <option value="Industrial PU Heavy Screed">Industrial PU Heavy Screed (4-9mm)</option>
                        <option value="Liquid Elastomeric Waterproofing">Liquid Elastomeric Waterproofing</option>
                        <option value="Monolithic Concrete Hardener & Polish">Monolithic Hardener & Polish</option>
                        <option value="Construction Chemicals & Repair">Construction Chemicals & Repair</option>
                        <option value="Commercial Antibacterial Sheet Vinyl">Commercial Sheet Vinyl</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Estimated Area (Sq Ft)
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. 5,000 sq ft"
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        className="rounded-none border-gray-300 text-xs h-10 focus-visible:ring-[#d32323]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Site Location & Traffic Requirements
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Location (e.g. Gazipur, Savar, Mirpur) and usage type (forklifts, heavy chemicals, pedestrians, cleanroom)..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="rounded-none border-gray-300 text-xs focus-visible:ring-[#d32323] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#d32323] hover:bg-[#b51c1c] text-white font-bold text-xs uppercase py-6 rounded-none tracking-wider shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Specification</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-gray-400">
                    No spam. We protect your project details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
