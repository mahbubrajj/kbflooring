"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeIntroSection } from "@/components/sections/HomeIntroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BuildBetterFloorsSection } from "@/components/sections/BuildBetterFloorsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuidesSection } from "@/components/sections/GuidesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";
import { QuoteModal } from "@/components/modals/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Self-Leveling Epoxy (2-4mm)");

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with TopBar & Sticky Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* Hero Section (Slider) */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Brand Overview & Capabilities with H1 Tag (After Slider) */}
        <HomeIntroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 4 Trust Badges Bar */}
        <TrustBadges />

        {/* About Section: Dhaka Engineered Substrates */}
        <AboutSection />

        {/* What We Do: 6 Certified Systems */}
        <ServicesSection onSelectService={handleSelectServiceForQuote} />

        {/* National Deployment: Industries & Areas */}
        <CoverageSection onInquireTravel={() => handleOpenQuoteModal("National Regional Travel")} />

        {/* Quality Assurance: Why Choose KB Flooring BD */}
        <WhyChooseUs />

        {/* High Impact Numbers / Stats Counter */}
        <StatsSection />

        {/* Case Studies: Projects We Have Completed */}
        <ProjectsSection />

        {/* Why Choose Us & Partnership Callout (After Case Studies & Before How We Work) */}
        <BuildBetterFloorsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Clear Engineering Process: How We Work */}
        <ProcessSection />

        {/* Commercial Endorsements: What Our Clients Say */}
        <TestimonialsSection />

        {/* Industry Knowledge: Flooring Guides and Tips */}
        <GuidesSection />

        {/* Questions & Answers: Frequently Asked Questions */}
        <FaqSection />

        {/* Lead Capture Section: Ready to Upgrade Your Floor? */}
        <QuoteCtaSection selectedServicePreload={selectedService} />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedService}
      />
    </div>
  );
}
