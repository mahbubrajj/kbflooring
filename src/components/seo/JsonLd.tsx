import React from "react";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "KB Flooring BD",
    legalName: "KB Flooring Bangladesh",
    alternateName: "KB Flooring",
    url: "https://kbflooringbd.com",
    logo: "https://kbflooringbd.com/Logo.png",
    image: "https://kbflooringbd.com/images/hero-floor.jpg",
    description:
      "Dhaka-based industrial flooring, polyurethane (PU) screed, and waterproofing contractor. Specializing in self-leveling epoxy, heavy-duty concrete hardeners, and roof leak prevention in Bangladesh.",
    telephone: "+8801819199876",
    email: "kbflooringbd@gmail.com",
    priceRange: "৳৳",
    sameAs: [
      "https://www.facebook.com/KBflooringBD",
      "https://www.linkedin.com/company/kbflooringbd",
      "https://www.youtube.com/@KBflooringBD",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "House 791/1, West Kazipara",
      addressLocality: "Mirpur",
      addressRegion: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8041,
      longitude: 90.3667,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "17:00",
        description: "Emergency Industrial Plant Support Only",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dhaka" },
      { "@type": "City", name: "Gazipur" },
      { "@type": "City", name: "Savar" },
      { "@type": "City", name: "Tongi" },
      { "@type": "City", name: "Narayanganj" },
      { "@type": "City", name: "Chattogram" },
      { "@type": "Country", name: "Bangladesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flooring and Waterproofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Self-Leveling Epoxy Flooring",
            description: "Seamless 2mm to 4mm heavy duty floor coating for pharma cleanrooms and RMG factories.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Polyurethane (PU) Heavy Screed",
            description: "Thermal shock and organic acid resistant flooring for food, dairy, and cold storage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Liquid Elastomeric Roof Waterproofing",
            description: "Seamless polyurethane membrane with >400% elongation for flat roofs and terraces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monolithic Dry-Shake Concrete Floor Hardener",
            description: "Monolithic quartz wear layer power-troweled onto fresh warehouse concrete.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KB Flooring BD",
    url: "https://kbflooringbd.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kbflooringbd.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the price of epoxy flooring in Bangladesh per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Bangladesh, professional epoxy flooring ranges from BDT 90 to BDT 140 per sq ft for thin roller coatings, BDT 160 to BDT 250 per sq ft for multi-coat systems, and BDT 260 to BDT 420 per sq ft for heavy-duty self-leveling epoxy cleanroom systems, including diamond surface grinding.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free on-site inspections in Dhaka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, KB Flooring BD provides free, no-obligation site visits throughout Greater Dhaka (Mirpur, Uttara, Tejgaon, Gulshan, Savar, Gazipur) including digital laser measurements, concrete slab moisture content readings, and surface hardness testing.",
        },
      },
      {
        "@type": "Question",
        name: "How does PU flooring compare to epoxy for food plants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Polyurethane (PU) screed withstands thermal shock from boiling steam washdowns (-40°C to +120°C) and resists corrosive lactic/citric acids, making it mandatory for food and beverage plants where standard epoxy would soften and delaminate.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
