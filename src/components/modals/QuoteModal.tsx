"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    service: preselectedService || "Self-Leveling Epoxy (2-4mm)",
    area: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white text-gray-900 border border-gray-200 max-w-lg w-full relative p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase text-gray-950">
              Inquiry Received!
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
              Our Dhaka engineering team will review your requirements for{" "}
              <strong>{formData.service}</strong> and call you at{" "}
              <strong>{formData.mobileNumber}</strong> within 24 hours.
            </p>
            <Button
              onClick={handleResetAndClose}
              className="bg-[#0c1219] hover:bg-[#1f2b3b] text-white text-xs font-bold uppercase rounded-none mt-2"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-block bg-[#d32323] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2">
                Free Site Visit & Laser Measurement
              </div>
              <h3 className="text-lg font-black uppercase text-gray-950 tracking-tight">
                Request A Fast Quote
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Direct engineer consultation for your warehouse, cleanroom, or roof.
              </p>
            </div>

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
                className="rounded-none text-xs h-10 border-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  className="rounded-none text-xs h-10 border-gray-300"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Estimated Area (Sq Ft)
                </label>
                <Input
                  type="text"
                  placeholder="e.g. 10,000"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="rounded-none text-xs h-10 border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                Service System
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
                Site Location & Project Details
              </label>
              <Textarea
                rows={2}
                placeholder="e.g. Gazipur, Savar, Mirpur, heavy forklift traffic..."
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="rounded-none text-xs border-gray-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d32323] hover:bg-[#b51c1c] text-white font-bold text-xs uppercase py-5 rounded-none"
            >
              {loading ? "Submitting..." : "Send Quote Request →"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
