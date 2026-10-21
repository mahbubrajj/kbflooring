export interface SubService {
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  thickness: string;
  curingTime: string;
  compressiveStrength: string;
  warranty: string;
  image: string;
  overview: string;
  keyBenefits: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  processSteps: { step: string; title: string; desc: string }[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  categoryTag: string;
  shortDesc: string;
  badge: string;
  heroImage: string;
  overview: string;
  subServices: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    categoryTag: "Certified High-Build Polymer Systems",
    shortDesc: "Seamless, hygienic, and chemically resistant resin systems engineered for heavy industrial and commercial environments.",
    badge: "HEAVY DUTY",
    heroImage: "/images/service-epoxy.jpg",
    overview:
      "KB Flooring BD installs high-performance epoxy resin floor systems across Bangladesh. From multi-story textile spinning mills in Gazipur to pharmaceutical cleanrooms in Tongi and retail showrooms in Dhaka, our epoxy formulations provide seamless, dust-free surfaces that resist mechanical impact, forklift transit, oils, and chemical spills.",
    subServices: [
      {
        slug: "self-leveling",
        title: "Self-Leveling Epoxy Flooring",
        shortDesc: "Mirror-smooth, joint-free 2mm to 4mm heavy-duty floor system engineered for cleanrooms, laboratories, and RMG units.",
        tagline: "Ultra-Clean, High-Gloss Seamless Polymer Surface",
        thickness: "2.0mm – 4.0mm",
        curingTime: "Light Foot: 24 hrs | Full Load: 7 days",
        compressiveStrength: "70 – 75 MPa (ASTM C579)",
        warranty: "5 to 10 Year Workmanship Guarantee",
        image: "/images/service-epoxy.jpg",
        overview:
          "Self-leveling epoxy flooring is the gold standard for high-hygiene industrial and commercial spaces requiring absolute cleanliness. This system creates a continuous, pore-free glossy surface that prevents bacterial harbor, eliminates concrete dusting, and easily withstands heavy pallet truck and forklift transit.",
        keyBenefits: [
          "Seamless monolithic finish with zero grout joints or dirt traps",
          "Ultra-high compressive strength resistant to 5-ton forklift transit",
          "Chemical resistance against acids, alkalis, oils, and hydraulic fluids",
          "High light reflectance reducing facility lighting energy costs",
          "cGMP and ISO 14644 cleanroom hygiene compliance",
        ],
        specifications: [
          { label: "Standard Thickness", value: "2.0mm, 3.0mm, or 4.0mm options" },
          { label: "Compressive Strength", value: "> 70 N/mm² (ASTM C579)" },
          { label: "Flexural Strength", value: "> 35 N/mm² (ASTM C580)" },
          { label: "Tensile Strength", value: "> 20 N/mm² (ASTM C307)" },
          { label: "Bond Strength", value: "> 2.0 N/mm² (Concrete substrate failure)" },
          { label: "Shore D Hardness", value: "82 – 85" },
        ],
        applications: [
          "Pharmaceutical cleanrooms (Grade A, B, C, D)",
          "Garment and textile spinning halls",
          "Automobile assembly plants & service workshops",
          "Electronics and precision engineering labs",
          "Commercial supermarkets and flagship showrooms",
        ],
        processSteps: [
          { step: "01", title: "Substrate Grinding", desc: "Diamond grinding concrete to CSP-3 profile and vacuum dust extraction." },
          { step: "02", title: "Moisture & Crack Prep", desc: "Tramex moisture check, V-grooving cracks, and epoxy mortar pressure injection." },
          { step: "03", title: "Deep Penetrating Primer", desc: "100% solids epoxy primer saturation sealing slab capillaries." },
          { step: "04", title: "Self-Leveling Body Coat", desc: "Pouring and notched-trowel leveling of pigmented resin matrix." },
          { step: "05", title: "De-aeration Spike Rolling", desc: "Spike rolling to release trapped air and achieve mirror smoothness." },
        ],
      },
      {
        slug: "roller-coating",
        title: "Epoxy Roller Coating",
        shortDesc: "Cost-effective 300 to 600 micron multi-coat epoxy system designed to dust-proof and seal concrete in active warehouses.",
        tagline: "Economic Durability for Light-to-Medium Industrial Sites",
        thickness: "300µm – 600µm",
        curingTime: "Light Foot: 12-16 hrs | Full Traffic: 72 hrs",
        compressiveStrength: "55 – 60 MPa",
        warranty: "3 to 5 Year Service Life",
        image: "/images/service-epoxy.jpg",
        overview:
          "Epoxy roller coating is an economical, high-coverage coating system ideal for factories, parking garages, and storerooms where concrete dusting must be eliminated without the capital cost of high-build screeds. Applied in 2 to 3 roller coats over primed concrete.",
        keyBenefits: [
          "Eliminates 100% of concrete surface dusting immediately",
          "Fast turnaround minimizing industrial facility downtime",
          "Easy to clean and maintain with standard floor scrubbers",
          "Available in anti-slip textured finishes with quartz aggregate broadcast",
          "Attractive satin or gloss sheen in customized RAL colors",
        ],
        specifications: [
          { label: "Dry Film Thickness", value: "300 – 600 microns (2-3 coats)" },
          { label: "Solid Content", value: "100% Solids or High Solids Solvent-Free" },
          { label: "Tack-Free Time", value: "6 – 8 hours at 30°C" },
          { label: "Abrasion Resistance", value: "< 50 mg loss (Taber CS-17, 1000 cycles)" },
          { label: "Chemical Resistance", value: "Resistant to motor oils, fuels, mild detergents" },
        ],
        applications: [
          "Multi-level underground parking facilities",
          "General distribution warehouses and storage bays",
          "Plant mechanical rooms and generator rooms",
          "Educational workshops and utility areas",
        ],
        processSteps: [
          { step: "01", title: "Surface Scuff Grinding", desc: "Mechanical abrading to remove laitance and dirt." },
          { step: "02", title: "Primer Application", desc: "Applying low-viscosity moisture tolerant epoxy primer." },
          { step: "03", title: "First Roller Coat", desc: "High-solids pigmented epoxy intermediate coat." },
          { step: "04", title: "Final Topcoat", desc: "Even cross-roll application for uniform texture and color." },
        ],
      },
      {
        slug: "primer",
        title: "Solvent-Free Epoxy Primer",
        shortDesc: "Deep-penetrating moisture-tolerant primer that seals concrete capillaries and forms an unbreakable chemical bond.",
        tagline: "The Essential Foundation for Zero Delamination",
        thickness: "100µm – 150µm",
        curingTime: "Recoatable in 6 – 12 hrs",
        compressiveStrength: "65 MPa",
        warranty: "Guaranteed Substrate Adhesion",
        image: "/images/surface-prep.jpg",
        overview:
          "90% of all resin floor coating delaminations occur because of inadequate priming. Our 100% solids low-viscosity epoxy primer deeply penetrates concrete micro-capillaries, consolidates weak concrete aggregates, and seals out rising air bubbles before the top layer is applied.",
        keyBenefits: [
          "Exceptional capillary penetration depth into dense concrete",
          "Tolerates concrete residual moisture up to 5% RH",
          "Prevents pinholes and blisters in subsequent screed coats",
          "Zero VOC solvent-free formulation safe for indoor clean areas",
        ],
        specifications: [
          { label: "Viscosity", value: "350 – 500 mPa.s at 25°C" },
          { label: "Adhesion to Concrete", value: "> 2.5 MPa (Concrete failure)" },
          { label: "Coverage Rate", value: "0.20 – 0.35 kg/m² per coat" },
          { label: "Pot Life", value: "30 – 40 minutes at 30°C" },
        ],
        applications: [
          "Primer under self-leveling epoxy and PU screeds",
          "Concrete surface consolidation prior to coatings",
          "Moisture vapor barrier base coats",
        ],
        processSteps: [
          { step: "01", title: "Moisture Measurement", desc: "Checking slab RH before primer selection." },
          { step: "02", title: "Proportionate Mixing", desc: "Mechanical spiral paddle mixing of Part A and Part B." },
          { step: "03", title: "Squeegee & Roller Spread", desc: "Spreading until concrete surface is thoroughly saturated." },
        ],
      },
      {
        slug: "topcoat",
        title: "High-Gloss Epoxy Topcoat",
        shortDesc: "Heavy wear chemical resistant protective sealing glaze for maximum scrub resistance and color vibrancy.",
        tagline: "Tough Barrier Layer Against Scuffs and Chemical Stains",
        thickness: "150µm – 250µm",
        curingTime: "Foot: 18 hrs | Full Cure: 5 days",
        compressiveStrength: "70 MPa",
        warranty: "5-Year Gloss Retention",
        image: "/images/service-epoxy.jpg",
        overview:
          "The epoxy topcoat acts as the primary shield against scuffs, tyre marks, acidic drips, and harsh sanitizers. Available in brilliant high-gloss, satin, or anti-glare matte sheens.",
        keyBenefits: [
          "Exceptional resistance against tire burn marks from forklifts",
          "Impermeable barrier to industrial cleaning detergents",
          "UV-stabilized additives to retain color vibrancy",
          "Easily recoated for long-term facility lifecycle maintenance",
        ],
        specifications: [
          { label: "Gloss Level", value: "> 90% at 60 degree angle" },
          { label: "Pencil Hardness", value: "2H – 3H" },
          { label: "Service Temp", value: "-10°C to +70°C" },
        ],
        applications: ["Showroom floors", "Assembly bays", "Bottling facilities", "Packaging zones"],
        processSteps: [
          { step: "01", title: "Intermediate Sanding", desc: "Light sanding of body coat for inter-coat adhesion." },
          { step: "02", title: "Dust Mopping", desc: "Solvent wiping and microfiber tack rag clearing." },
          { step: "03", title: "Even Roll Application", desc: "Cross-rolling topcoat for streak-free reflection." },
        ],
      },
      {
        slug: "3d-epoxy",
        title: "3D & Metallic Epoxy Flooring",
        shortDesc: "Artistic, high-definition visual resin flooring incorporating 3D graphics and iridescent metallic pigments.",
        tagline: "Stunning Architectural Statements in Showrooms & Residences",
        thickness: "2.5mm – 3.5mm",
        curingTime: "Foot Traffic: 48 hrs",
        compressiveStrength: "65 MPa",
        warranty: "5-Year Artistic Coating Guarantee",
        image: "/images/hero-floor.jpg",
        overview:
          "For executive reception halls, luxury boutiques, hotels, and upscale penthouses in Dhaka, 3D and metallic epoxy combines rock-hard industrial resin performance with bespoke artistic aesthetics. Seamless, easy to maintain, and utterly unique.",
        keyBenefits: [
          "Bespoke marbled, oceanic, or iridescent visual effects",
          "Ultra-clear UV resistant crystal epoxy glass top glaze",
          "Zero joints or grout lines for easy hygiene maintenance",
          "High scratch resistance with polyurethane clear seal",
        ],
        specifications: [
          { label: "Clarity", value: "Water-clear optical grade resin" },
          { label: "Yellowing Index", value: "< 2 (ASTM D1925)" },
          { label: "Design Options", value: "Metallic pearlescent, 3D mural, river design" },
        ],
        applications: ["Commercial headquarters", "Jewelry & watch boutiques", "Luxury residential villas", "Hotel lobbies"],
        processSteps: [
          { step: "01", title: "Base Color Layer", desc: "Laying opaque black or white base epoxy." },
          { step: "02", title: "Metallic Pour / Graphic", desc: "Swirling metallic pigments or embedding 3D photographic substrate." },
          { step: "03", title: "Opti-Clear Glaze", desc: "Flooding with high-solids clear resin." },
        ],
      },
    ],
  },
  {
    slug: "pu-flooring",
    title: "PU Flooring",
    categoryTag: "Thermal Shock & Antimicrobial Screeds",
    shortDesc: "Flexible, impact-resistant polyurethane floors designed for cold storage, food & beverage, and chemical plants.",
    badge: "THERMAL SHOCK SAFE",
    heroImage: "/images/service-pu.jpg",
    overview:
      "Polyurethane (PU) resin flooring systems are engineered for severe operational environments where epoxy would fail due to thermal shock, heavy impact, or organic acids. Compliant with HACCP and international food processing hygiene standards.",
    subServices: [
      {
        slug: "industrial-pu",
        title: "Industrial PU Heavy Screed",
        shortDesc: "Heavy-duty 4mm to 9mm polyurethane concrete mortar capable of withstanding steam cleaning and heavy impact.",
        tagline: "The Toughest Floor For Food, Beverage & Heavy Chemistry",
        thickness: "4.0mm – 9.0mm",
        curingTime: "Light Foot: 12 hrs | Steam Clean: 48 hrs",
        compressiveStrength: "55 – 60 MPa with high ductility",
        warranty: "Up to 12 Years Certified System Warranty",
        image: "/images/service-pu.jpg",
        overview:
          "Industrial PU Screed is a four-component hybrid polyurethane concrete technology engineered for extreme industrial duty. It matches the thermal expansion coefficient of concrete, allowing it to withstand thermal shock from -40°C freezers to +120°C live steam washdowns without debonding.",
        keyBenefits: [
          "Extreme thermal shock tolerance from -40°C up to +120°C (at 9mm)",
          "Withstands aggressive organic acids, milk lactic acid, and blood",
          "Non-tainting, odorless application during live plant shifts",
          "Antimicrobial silver-ion technology inhibiting pathogen growth",
          "Integral slip-resistance even under constantly wet operations",
        ],
        specifications: [
          { label: "Thermal Range (4mm)", value: "-15°C to +80°C" },
          { label: "Thermal Range (6mm)", value: "-25°C to +100°C" },
          { label: "Thermal Range (9mm)", value: "-40°C to +120°C" },
          { label: "Slip Resistance", value: "Class R11 – R13 (DIN 51130)" },
          { label: "Water Absorption", value: "Nil (impermeable)" },
        ],
        applications: [
          "Dairies, cheese, and milk packaging plants",
          "Poultry, seafood, and meat processing facilities",
          "Breweries, beverage, and fruit juice bottling lines",
          "Deep freezer cold rooms and cold store storage hubs",
          "Chemical blending plants with hot liquid spill hazards",
        ],
        processSteps: [
          { step: "01", title: "Anchor Grooving", desc: "Cutting 10mm mechanical anchor grooves at perimeter and drains." },
          { step: "02", title: "Heavy Substrate Prep", desc: "Scarifying or diamond grinding to achieve CSP-4 profile." },
          { step: "03", title: "PU Scratch Primer", desc: "Applying moisture tolerant PU scratch coat to fill blowholes." },
          { step: "04", title: "Trowel Screed Application", desc: "Laying 4mm-9mm PU mortar and power-troweling to tight density." },
          { step: "05", title: "Coving & Drain Detailing", desc: "Forming radius coving seamless with stainless steel drains." },
        ],
      },
      {
        slug: "pu-coating",
        title: "Flexible PU Floor Coating",
        shortDesc: "Elastomeric polyurethane floor coating engineered for crack bridging, vibration dampening, and sports/clean decks.",
        tagline: "Impact-Absorbing Elasticity with Superior Abrasion Resistance",
        thickness: "1.5mm – 2.5mm",
        curingTime: "Foot Traffic: 24 hrs",
        compressiveStrength: "45 MPa with 40% elongation",
        warranty: "5-Year Elasticity Guarantee",
        image: "/images/service-pu.jpg",
        overview:
          "Unlike rigid epoxies, polyurethane coatings possess natural elasticity. This makes them ideal for intermediate suspended floors, mezzanine steel decks, multi-purpose sport facilities, and hospitals where structural vibration and foot comfort are paramount.",
        keyBenefits: [
          "Dynamic crack-bridging capability across substrate hairline movement",
          "Acoustic impact sound dampening for busy corporate offices",
          "Ergonomic foot comfort for workers standing on production lines",
          "Seamless satin aesthetics resistant to scratching and scuffs",
        ],
        specifications: [
          { label: "Elongation at Break", value: "35% – 50% (ASTM D412)" },
          { label: "Shore A Hardness", value: "90 – 95" },
          { label: "Impact Sound Reduction", value: "6 – 10 dB" },
        ],
        applications: ["Hospital wards and surgical suites", "School gymnasiums & auditoriums", "Office mezzanines", "Clean production assembly"],
        processSteps: [
          { step: "01", title: "Elastic Primer", desc: "Applying flexible polyurethane primer." },
          { step: "02", title: "Elastic Body Coat", desc: "Rake application of solvent-free flexible PU matrix." },
          { step: "03", title: "Matte/Satin Topcoat", desc: "Polyurethane clear or pigmented wear seal." },
        ],
      },
      {
        slug: "pu-topcoat",
        title: "Aliphatic UV-Stable PU Topcoat",
        shortDesc: "Non-yellowing, sunlight-resistant two-component aliphatic polyurethane clear and pigmented topcoat.",
        tagline: "Permanent UV Resistance for Outdoor and Skylight Areas",
        thickness: "100µm – 150µm",
        curingTime: "Touch Dry: 4 hrs | Traffic: 24 hrs",
        compressiveStrength: "High scratch hardness",
        warranty: "7-Year Color & UV Stability",
        image: "/images/service-waterproof.jpg",
        overview:
          "Standard epoxy yellowers and chalks when exposed to UV sunlight. Our aliphatic polyurethane topcoats provide permanent color stability and high gloss/matte retention for external walk decks, rooftop terraces, and skylit factory atriums.",
        keyBenefits: [
          "Zero chalking or yellowing under tropical Bangladesh sunlight",
          "Exceptional resistance against atmospheric pollution and acid rain",
          "Chemical and stain proof finish",
        ],
        specifications: [
          { label: "UV Resistance", value: "Passes 2000 hrs QUV accelerated weathering" },
          { label: "Finish Options", value: "High Gloss, Silk Satin, Dead Matte" },
        ],
        applications: ["Helipads", "Rooftop restaurants", "Open parking decks", "Glass atrium factory floors"],
        processSteps: [
          { step: "01", title: "Surface Prep", desc: "Fine abrading base coat." },
          { step: "02", title: "Airless Spray / Roller", desc: "Applying uniform thin film aliphatic coating." },
        ],
      },
    ],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    categoryTag: "Monsoon Proof Membrane Systems",
    shortDesc: "Guaranteed leak protection for concrete roofs, terraces, subterranean basements, and high-rise facades.",
    badge: "MONSOON ARMOR",
    heroImage: "/images/service-waterproof.jpg",
    overview:
      "Waterproofing in Bangladesh requires systems specifically engineered for tropical torrential monsoons, ponding water, and thermal concrete expansion. KB Flooring BD applies liquid elastomeric polyurethane membranes, joint sealants, and negative-side damp proofing backed by stamped written warranties.",
    subServices: [
      {
        slug: "roof-waterproofing",
        title: "Commercial Roof Waterproofing",
        shortDesc: "Seamless liquid-applied polyurethane membrane system that seals flat roofs, parapet walls, and expansion joints.",
        tagline: "Total Monsoon Protection for High-Rise & Factory Roofs",
        thickness: "1.5mm – 2.0mm",
        curingTime: "Rain Safe in 4 hrs | Full Cure: 48 hrs",
        compressiveStrength: "High elongation membrane",
        warranty: "10-Year Stamped Leak-Free Guarantee",
        image: "/images/service-waterproof.jpg",
        overview:
          "Traditional bitumen tar felts crack and peel under intense heat and monsoons. Our liquid-applied polyurethane roof waterproofing forms a joint-free, rubber-like monolithic barrier that accommodates structural thermal expansion and resists prolonged water ponding.",
        keyBenefits: [
          "100% seamless liquid membrane with zero joints or overlaps to fail",
          "Superior elongation bridging hairline concrete thermal cracks",
          "UV-reflective cool roof topcoat reducing indoor room temperatures by 4-6°C",
          "Withstands standing water and extreme ponding conditions",
          "Applied over complex rooftop piping, HVAC stands, and parapets",
        ],
        specifications: [
          { label: "Elongation at Break", value: "> 450% (ASTM D412)" },
          { label: "Tensile Strength", value: "> 6.5 MPa" },
          { label: "Solar Reflectance Index (SRI)", value: "> 102 (Cool Roof)" },
          { label: "Hydrostatic Head", value: "> 50 meters water column" },
        ],
        applications: [
          "Corporate skyscraper rooftop terraces (Gulshan, Banani, Motijheel)",
          "Industrial textile factory roofs and saw-tooth gutters",
          "Residential building roof slabs and planter boxes",
          "Podium decks and sky gardens",
        ],
        processSteps: [
          { step: "01", title: "Debris Removal & Slope Check", desc: "Pressure washing concrete and repairing water ponding slopes." },
          { step: "02", title: "Crack & Parapet Coving", desc: "V-cutting joints and sealing with polyurethane structural sealant." },
          { step: "03", title: "Penetrating Primer", desc: "Polyurethane primer for deep adhesion to damp concrete." },
          { step: "04", title: "First Elastomeric Coat", desc: "Laying base liquid PU membrane with geotextile mesh reinforcement." },
          { step: "05", title: "Aliphatic UV Shield Coat", desc: "Solar-reflective protective topcoat for lifetime weatherproofing." },
        ],
      },
      {
        slug: "pu-membrane",
        title: "Liquid Elastomeric PU Membrane",
        shortDesc: "High-build elastomeric polyurethane waterproofing liquid membrane with over 400% elongation.",
        tagline: "High-Elasticity Chemical Barrier for Wet Areas and Basements",
        thickness: "1.2mm – 1.8mm",
        curingTime: "24 hours",
        compressiveStrength: "Flexible elastomeric",
        warranty: "10-Year Material & Application Warranty",
        image: "/images/service-waterproof.jpg",
        overview:
          "Engineered for sub-grade foundations, wet rooms, balconies, and water retention tanks, this liquid membrane forms a continuous elastomeric envelope around concrete structures, preventing chemical corrosion and groundwater ingress.",
        keyBenefits: [
          "Bridges dynamic structural cracks up to 2mm wide",
          "Certified safe for potable drinking water reservoirs",
          "Root penetration resistance for rooftop planter boxes",
        ],
        specifications: [
          { label: "Solids Content", value: "90% – 100%" },
          { label: "Permeability", value: "0.08 g/m² · 24h" },
          { label: "Crack Bridging", value: "Class A5 (EN 1062-7)" },
        ],
        applications: ["Basement retaining walls", "Underground and overhead water tanks", "Bathrooms & wet zones", "Balconies"],
        processSteps: [
          { step: "01", title: "Substrate Cleaning", desc: "High pressure jet washing." },
          { step: "02", title: "Fillet Coving", desc: "Applying polymer mortar fillets at wall-to-floor junctions." },
          { step: "03", title: "2-Coat PU Spray/Roll", desc: "Applying cross coats of elastomeric liquid membrane." },
        ],
      },
      {
        slug: "damp-proofing",
        title: "Basement & Subterranean Damp Proofing",
        shortDesc: "Crystalline and chemical injection damp proofing to permanently halt rising damp and subterranean seepage.",
        tagline: "Permanent Crystallization Protection for Below-Grade Concrete",
        thickness: "Internal crystalline penetration",
        curingTime: "Continuous chemical crystal growth",
        compressiveStrength: "Increases concrete density",
        warranty: "Permanent Substrate Protection",
        image: "/images/surface-prep.jpg",
        overview:
          "High water tables in Dhaka, Chittagong, and riverine Bangladesh cause severe basement wall sweating and efflorescence. Our crystalline waterproofing chemicals penetrate deep into concrete pores, reacting with free lime to grow insoluble micro-crystals that permanently block moisture capillaries.",
        keyBenefits: [
          "Effective against both positive and negative side water pressure",
          "Self-heals micro-cracks up to 0.4mm throughout building life",
          "Eliminates basement damp smells, mildew, and peeling paint",
          "Resists hydrostatic pressure up to 12 bar",
        ],
        specifications: [
          { label: "Pressure Resistance", value: "Up to 120m hydrostatic head" },
          { label: "Penetration Depth", value: "Up to 300mm into concrete over time" },
        ],
        applications: ["Multi-level basement car parking", "Lift pits and sump pits", "Retaining foundation walls", "Tunnels and culverts"],
        processSteps: [
          { step: "01", title: "Water Ingress Pinpointing", desc: "Detecting active leaks and hydrostatic seepage points." },
          { step: "02", title: "Pressure Injection", desc: "Injecting polyurethane/acrylic grout into leaking cracks." },
          { step: "03", title: "Crystalline Slurry Coat", desc: "Applying double crystalline coating over saturated concrete." },
        ],
      },
    ],
  },
  {
    slug: "construction-chemicals",
    title: "Construction Chemicals",
    categoryTag: "High-Performance Chemical Supply",
    shortDesc: "High-performance admixtures, epoxy bonding agents, micro-concrete repair mortars and structural grouts.",
    badge: "CHEMICAL SUPPLY",
    heroImage: "/images/service-chemicals.jpg",
    overview:
      "KB Flooring BD manufactures, imports, and supplies certified international construction chemicals across Bangladesh. All products are tested to BS, ASTM, and DIN standards for structural integrity, early strength gain, and water tightness.",
    subServices: [
      {
        slug: "concrete-admixture",
        title: "High-Range Concrete Admixtures",
        shortDesc: "Polycarboxylate ether (PCE) superplasticizers, accelerators, and integral waterproofing chemical additives.",
        tagline: "Superior Slump, High Early Strength & Reduced Water-Cement Ratio",
        thickness: "Chemical liquid admixture dosage",
        curingTime: "Accelerated hydration",
        compressiveStrength: "20% - 35% strength increase",
        warranty: "ASTM C494 Type A, F & G Certified",
        image: "/images/hero-floor.jpg",
        overview:
          "Our advanced PCE superplasticizers and integral waterproofing admixtures allow ready-mix batching plants and project sites to drastically cut water-cement ratios while maintaining workability, achieving rapid early demoulding strength and zero honeycombing.",
        keyBenefits: [
          "Reduces water demand by up to 35% without losing slump flow",
          "Accelerates early strength for faster formwork cycle times",
          "Integral pore-blocking chemistry creating water-impermeable concrete",
          "Controls heat of hydration in massive raft foundations",
        ],
        specifications: [
          { label: "Base Polymer", value: "Modified Polycarboxylate Ether (PCE)" },
          { label: "Specific Gravity", value: "1.08 – 1.12 g/cm³" },
          { label: "Chloride Content", value: "Chloride free (< 0.1%)" },
        ],
        applications: ["Raft and pile foundations", "Precast concrete girder yards", "Ready-mix batching plants", "Bridges and flyovers"],
        processSteps: [
          { step: "01", title: "Mix Design Optimization", desc: "Calibrating dosage to site aggregate and cement chemistry." },
          { step: "02", title: "Batching Plant Dosing", desc: "Automated dosing with mixing water for complete dispersion." },
        ],
      },
      {
        slug: "bonding-agent",
        title: "Epoxy & SBR Bonding Agents",
        shortDesc: "High-tensile structural bonding agents for cold joints, column jacketing, and new-to-old concrete bonding.",
        tagline: "Unbreakable Chemical Bond Stronger Than Concrete Itself",
        thickness: "0.5mm – 1.0mm",
        curingTime: "Open time up to 4 hrs at 30°C",
        compressiveStrength: "> 60 MPa shear bond",
        warranty: "Structural Joint Guarantee",
        image: "/images/surface-prep.jpg",
        overview:
          "When pouring fresh concrete against existing cured slabs or columns, cold joints represent severe structural failure planes. Our solvent-free epoxy bonding agents create a monolithic bond with tensile shear values exceeding the concrete's own cohesive strength.",
        keyBenefits: [
          "Tensile bond strength exceeds concrete substrate failure threshold",
          "Extended open time allowing ample placement time for fresh concrete",
          "Moisture tolerant for humid tropical job sites",
          "Protects rebar steel against moisture corrosion",
        ],
        specifications: [
          { label: "Bond Strength (Slant Shear)", value: "> 25 MPa (ASTM C882)" },
          { label: "Pot Life", value: "60 – 90 mins at 25°C" },
        ],
        applications: ["Building column retrofit & jacketing", "Slab extension construction joints", "Bridge deck overlays"],
        processSteps: [
          { step: "01", title: "Substrate Scabbling", desc: "Mechanical roughening to expose sound aggregate." },
          { step: "02", title: "Brush Coat Application", desc: "Applying mixed epoxy bonding agent over cleaned surface." },
          { step: "03", title: "Fresh Pour Placement", desc: "Pouring fresh concrete while bonding agent remains tacky." },
        ],
      },
      {
        slug: "repair-mortar",
        title: "Structural Concrete Repair Mortar",
        shortDesc: "Polymer-modified and micro-concrete non-shrink repair mortars for damaged columns, beams, and spalled floors.",
        tagline: "Restoring Structural Integrity to Damaged Concrete",
        thickness: "10mm – 100mm per lift",
        curingTime: "Initial set: 2 hrs | Full strength: 28 days",
        compressiveStrength: "60 – 75 MPa",
        warranty: "BS EN 1504-3 Class R4 Compliant",
        image: "/images/surface-prep.jpg",
        overview:
          "Concrete spalling, honeycombing, and chemical damage threaten facility longevity. Our Class R4 polymer-modified mortars and free-flowing micro-concretes feature shrinkage-compensating formulations and corrosion-inhibiting chemistry to restore original structural load capacity.",
        keyBenefits: [
          "Zero drying shrinkage preventing micro-cracking",
          "High compressive and flexural strength for heavy load bearing",
          "Low permeability resisting chloride and carbonation attacks",
          "Can be troweled overhead or poured into formwork",
        ],
        specifications: [
          { label: "Compressive Strength (1 Day)", value: "> 20 MPa" },
          { label: "Compressive Strength (28 Days)", value: "> 65 MPa" },
          { label: "Elastic Modulus", value: "> 20 GPa" },
        ],
        applications: ["Spalled factory floor patch repair", "Corroded column repair in industrial zones", "Water treatment tank repairs"],
        processSteps: [
          { step: "01", title: "Concrete Breakout", desc: "Chipping damaged concrete to 20mm behind corroded rebar." },
          { step: "02", title: "Rebar Priming", desc: "Applying zinc-rich anti-corrosion primer to steel." },
          { step: "03", title: "Mortar Compaction", desc: "Wet-on-wet application and tight compaction." },
        ],
      },
      {
        slug: "grout",
        title: "Non-Shrink Structural Grout",
        shortDesc: "High-flow cementitious and epoxy non-shrink precision grouts for machine base plates, cranes, and anchor bolts.",
        tagline: "Rock-Solid Precision Support for Heavy Machinery",
        thickness: "10mm – 120mm",
        curingTime: "Rapid early strength",
        compressiveStrength: "Up to 85 MPa",
        warranty: "Certified Precision Anchor Warranty",
        image: "/images/service-industrial.jpg",
        overview:
          "Heavy industrial spinning frames, turbine generators, and gantry crane rails generate massive dynamic vibrations. Our non-shrink grouts expand slightly during curing to eliminate shrinkage gaps, creating 100% bearing contact across equipment base plates.",
        keyBenefits: [
          "Controlled dual-stage expansion offsetting plastic and drying shrinkage",
          "Ultra-high early compressive strength for fast equipment commissioning",
          "High fluidity self-leveling into congested anchor bolt pockets",
          "Resistant to lubricating oils, fuels, and industrial vibration",
        ],
        specifications: [
          { label: "1-Day Compressive Strength", value: "> 35 MPa" },
          { label: "28-Day Compressive Strength", value: "> 85 MPa" },
          { label: "Expansion", value: "0.2% to 1.5% (ASTM C1090)" },
        ],
        applications: ["Textile spinning machine bases", "Generator and compressor foundations", "Precast beam bearing pads", "Crane rails"],
        processSteps: [
          { step: "01", title: "Formwork & Pre-Soak", desc: "Constructing leak-tight formwork and pre-soaking concrete." },
          { step: "02", title: "High-Shear Mixing", desc: "Mixing grout powder with precise water ratio." },
          { step: "03", title: "Continuous Pour", desc: "Pouring from one side to avoid air entrapment beneath plate." },
        ],
      },
    ],
  },
  {
    slug: "industrial-flooring",
    title: "Industrial Flooring",
    categoryTag: "Heavy Traffic & Concrete Hardening",
    shortDesc: "Non-metallic floor hardeners, sodium/lithium silicate concrete densifiers, and static-control ESD floors.",
    badge: "HIGH TRAFFIC",
    heroImage: "/images/service-industrial.jpg",
    overview:
      "For massive warehouse depots, freight terminals, and logistics hubs where heavy forklift traffic is unrelenting, KB Flooring BD provides dry-shake quartz/corundum floor hardeners, diamond concrete densification, and conductive ESD flooring.",
    subServices: [
      {
        slug: "floor-hardener",
        title: "Monolithic Dry-Shake Floor Hardener",
        shortDesc: "Quartz and synthetic mineral dry-shake aggregate power-troweled into fresh concrete for severe abrasion resistance.",
        tagline: "Integrated Wear Layer That Never Delaminates",
        thickness: "Monolithically bonded with slab surface",
        curingTime: "Tied to concrete pour cure",
        compressiveStrength: "Mohs Hardness 7 – 8",
        warranty: "Lifetime Monolithic Bond",
        image: "/images/service-industrial.jpg",
        overview:
          "Applied monolithically onto fresh power-troweled concrete during the initial pour, dry-shake hardener becomes an integral part of the slab. It increases concrete surface abrasion resistance by up to 300%, eliminating dusting and tyre rutting from constant forklift transit.",
        keyBenefits: [
          "Monolithic integration with concrete slab—impossible to peel or delaminate",
          "300% increase in concrete surface abrasion and impact resistance",
          "Significantly denser surface reducing oil and fuel absorption",
          "Most economical long-term heavy-duty warehouse flooring solution",
        ],
        specifications: [
          { label: "Hardness", value: "Mohs Scale 7 (Non-Metallic Quartz) / 8 (Corundum)" },
          { label: "Dosage Rate", value: "4.0 – 6.0 kg/m² for heavy industrial duty" },
          { label: "Abrasion Resistance", value: "Böhme Abrasion < 5 cm³/50 cm² (DIN 52108)" },
        ],
        applications: ["Logistics and freight distribution warehouses", "Container freight stations (CFS)", "Heavy engineering factories", "Hardware and building material depots"],
        processSteps: [
          { step: "01", title: "Fresh Concrete Pour", desc: "Laser screeding concrete slab to level." },
          { step: "02", title: "First Broadcast", desc: "Broadcasting 60% of hardener at initial bleed water disappearance." },
          { step: "03", title: "Power Troweling", desc: "Mechanical float pan troweling to embed hardener aggregates." },
          { step: "04", title: "Second Broadcast & Finish", desc: "Broadcasting remainder and finish-blade troweling to mirror shine." },
        ],
      },
      {
        slug: "concrete-densifier",
        title: "Lithium & Sodium Concrete Densifier",
        shortDesc: "Chemical silicate liquid hardener and diamond polishing system for mirror-finish concrete floors.",
        tagline: "Permanent Concrete Hardening via Micro-Crystalline Silica",
        thickness: "Penetrating chemical treatment",
        curingTime: "Immediate foot traffic",
        compressiveStrength: "Hardens upper 5mm concrete layer",
        warranty: "15-Year Dust-Proof Guarantee",
        image: "/images/surface-prep.jpg",
        overview:
          "Liquid lithium silicate densifiers chemically react with the free calcium hydroxide (lime) present in cured concrete to form calcium silicate hydrate (CSH) crystals. Combined with diamond polishing, it yields a glistening, ultra-hard, marble-like concrete floor that never peels.",
        keyBenefits: [
          "Permanently eliminates concrete dusting by converting free lime into CSH",
          "Increases concrete surface hardness by up to 40%",
          "Glistening reflective gloss without slippery wax coatings",
          "Ultra-low maintenance cost over a 20+ year facility lifespan",
        ],
        specifications: [
          { label: "Active Silicate", value: "Nano-Lithium Silicate formulation" },
          { label: "Penetration", value: "4mm – 8mm into concrete pores" },
          { label: "Gloss Level", value: "Polished up to 3000 grit diamond pads" },
        ],
        applications: ["Hypermarkets and modern cash-and-carry stores", "Logistics centers", "Aviation hangars", "Educational campuses"],
        processSteps: [
          { step: "01", title: "Coarse Diamond Grind", desc: "Leveling slab with 50/100/200 grit metal-bond diamond tooling." },
          { step: "02", title: "Densifier Drench", desc: "Flooding surface with lithium silicate densifier for 30 minutes." },
          { step: "03", title: "Resin Diamond Polish", desc: "Progressive polishing up to 800/1500/3000 grit." },
          { step: "04", title: "Stain Guard Buff", desc: "High-speed burnishing with protective micro-film guard." },
        ],
      },
      {
        slug: "esd-flooring",
        title: "Electrostatic Discharge (ESD) Flooring",
        shortDesc: "Conductive and dissipative epoxy and vinyl flooring preventing static charge damage to sensitive microelectronics.",
        tagline: "Essential Static Control for Electronics & Cleanrooms",
        thickness: "2.0mm – 3.0mm",
        curingTime: "Light Foot: 24 hrs | Tested: 7 days",
        compressiveStrength: "70 MPa",
        warranty: "Certified Electrical Resistance Guarantee",
        image: "/images/service-epoxy.jpg",
        overview:
          "Static electricity discharges easily destroy semiconductor chips and trigger explosions in volatile solvent zones. Our conductive ESD epoxy systems incorporate conductive carbon fibers, copper grounding tape grid networks, and conductive primers to safely dissipate static voltage to earth.",
        keyBenefits: [
          "Guaranteed electrical resistance range compliant with ANSI/ESD S20.20",
          "Integrated copper grounding tape connected to building earthing pits",
          "Protects multi-million dollar electronics inventory from static fry",
          "Seamless high-gloss cleanroom finish",
        ],
        specifications: [
          { label: "Conductive Range", value: "2.5 x 10⁴ to 1.0 x 10⁶ Ohms (Conductive)" },
          { label: "Dissipative Range", value: "1.0 x 10⁶ to 1.0 x 10⁹ Ohms (Static Dissipative)" },
          { label: "Standard", value: "IEC 61340-5-1 and ANSI/ESD S20.20" },
        ],
        applications: ["Mobile and smartphone assembly plants", "Server rooms and telecommunications data centers", "Munitions and explosive solvent blending facilities", "Medical electronics labs"],
        processSteps: [
          { step: "01", title: "Substrate Prep & Primer", desc: "Surface diamond grind and insulating primer." },
          { step: "02", title: "Copper Grounding Grid", desc: "Laying 10mm self-adhesive copper tape grid across room." },
          { step: "03", title: "Conductive Carbon Primer", desc: "Continuous black conductive primer coat." },
          { step: "04", title: "ESD Self-Leveling Topcoat", desc: "Applying specialized ESD pigmented polymer matrix." },
          { step: "05", title: "Mega-Ohm Resistance Audit", desc: "Certified electrical testing with point-to-ground resistance meter." },
        ],
      },
    ],
  },
  {
    slug: "interior-flooring",
    title: "Interior Flooring",
    categoryTag: "Acoustic, Clinical & Skim Solutions",
    shortDesc: "Commercial antibacterial vinyl flooring, pumpable leveling compound, and ultra-smooth skim coats for offices and clinics.",
    badge: "FINISHED INTERIORS",
    heroImage: "/images/service-interior.jpg",
    overview:
      "KB Flooring BD caters to high-end interior architecture, hospitals, corporate headquarters, and commercial centers requiring acoustic comfort, hygienic sheet vinyl, and perfectly level subfloors.",
    subServices: [
      {
        slug: "vinyl-flooring",
        title: "Commercial & Hospital Sheet Vinyl",
        shortDesc: "Homogeneous antibacterial PVC sheet vinyl with welded joints and integrated coved wall skirtings.",
        tagline: "Infection Control & Acoustic Comfort for Modern Healthcare",
        thickness: "2.0mm – 3.0mm",
        curingTime: "Immediate use upon adhesive cure (24 hrs)",
        compressiveStrength: "High indentation recovery",
        warranty: "7-Year Commercial Healthcare Warranty",
        image: "/images/project-beximco.jpg",
        overview:
          "Hospitals and clinical laboratories demand surfaces with zero bacteria-harboring crevices. Our homogeneous PVC sheet vinyl features heat-welded seams, polyurethane reinforcement (PUR) for easy cleaning, and 100mm cove-formed skirting seamlessly running up the wall.",
        keyBenefits: [
          "Bacteriostatic and fungistatic treatment inhibiting infection spread",
          "Seamless hot-air welded joints preventing fluid penetration",
          "High slip resistance and comfort underfoot for nurses and patients",
          "Resistant to iodine, betadine, and medical disinfectants",
        ],
        specifications: [
          { label: "Wear Layer", value: "Group T highest wear rating (EN 660-2)" },
          { label: "Chemical Resistance", value: "Stain resistant to hospital reagents" },
          { label: "Sound Insulation", value: "Up to 15 dB acoustic absorption" },
        ],
        applications: ["Hospital operating theaters (OT) and ICUs", "Diagnostic centers and pathology labs", "School classrooms and libraries", "Corporate multinational offices"],
        processSteps: [
          { step: "01", title: "Subfloor Self-Leveling", desc: "Laying 3mm smooth cementitious underlayment." },
          { step: "02", title: "Adhesive Spreading", desc: "Applying low-emission acrylic conductive/standard vinyl adhesive." },
          { step: "03", title: "Sheet Laying & Rolling", desc: "Rolling with 50kg weighted roller to remove air pockets." },
          { step: "04", title: "Grooving & Heat Welding", desc: "Routing joints and thermal welding with vinyl weld rod." },
        ],
      },
      {
        slug: "floor-leveling-compound",
        title: "Pumpable Floor Leveling Compound",
        shortDesc: "Fast-setting cementitious self-leveling underlayment to flatten wavy, out-of-level concrete slabs.",
        tagline: "Rapid Subfloor Rectification from 3mm to 30mm",
        thickness: "3mm – 30mm",
        curingTime: "Foot Traffic: 4 hrs | Flooring Install: 24 hrs",
        compressiveStrength: "30 – 35 MPa",
        warranty: "Flat Floor Guarantee (DIN 18202)",
        image: "/images/surface-prep.jpg",
        overview:
          "Uneven, rough, or sunken concrete slabs prevent proper installation of vinyl, parquet, tiles, or epoxy. Our pumpable self-leveling underlayment flows like water to find its own level, curing to an ultra-flat, rock-solid subfloor in hours.",
        keyBenefits: [
          "Corrects severe slab undulations and uneven concrete slopes quickly",
          "Walkable in just 3 to 4 hours after pouring",
          "Ready for floor covering installation within 24 hours",
          "High compressive strength resisting heavy dynamic loads",
        ],
        specifications: [
          { label: "Flow Diameter", value: "135 – 145mm (EN 12706)" },
          { label: "Compressive Strength (28d)", value: "> 30 N/mm²" },
          { label: "Flexural Strength", value: "> 7 N/mm²" },
        ],
        applications: ["Under vinyl sheet flooring", "Under engineered wood & carpet", "Leveling uneven factory slabs"],
        processSteps: [
          { step: "01", title: "Level Survey", desc: "Laser level datum pin surveying across room." },
          { step: "02", title: "Subfloor Primer", desc: "Applying acrylic bonding primer to prevent moisture loss." },
          { step: "03", title: "Pump / Pour & Pin Rake", desc: "Continuous pumping and gauge rake smoothing." },
        ],
      },
      {
        slug: "skim-coat",
        title: "Polymer Wall & Ceiling Skim Coat",
        shortDesc: "Ultra-smooth white polymer-modified skim coat for pinhole-free concrete walls and soffits prior to paint.",
        tagline: "Flawless Architectural Smoothness for Interior Substrates",
        thickness: "1.0mm – 3.0mm",
        curingTime: "Paintable in 24 hrs",
        compressiveStrength: "Smooth architectural finish",
        warranty: "Anti-Flaking Quality Assurance",
        image: "/images/hero-floor.jpg",
        overview:
          "Traditional plastering leaves rough sand marks and micro-cracks. Our polymer-modified interior skim coats provide an ultra-smooth, creamy white finish that eliminates hairline shrinkage cracks and saves up to 40% on primer and paint consumption.",
        keyBenefits: [
          "Mirror-smooth velvet white finish requiring minimal sanding",
          "Water-resistant formulation preventing paint peeling and flaking",
          "Excellent adhesion to raw concrete, precast panels, and plaster",
          "Low paint absorption reducing total painting contractor costs",
        ],
        specifications: [
          { label: "Color", value: "Brilliant White" },
          { label: "Pot Life", value: "2 hours at 30°C" },
          { label: "Coverage", value: "1.2 kg/m² per 1mm thickness" },
        ],
        applications: ["Corporate interior concrete walls", "Cleanroom ceiling soffits", "Residential apartment interiors"],
        processSteps: [
          { step: "01", title: "Surface Cleaning", desc: "Removing shuttering oil and dust from concrete." },
          { step: "02", title: "First Base Coat", desc: "Troweling 1.5mm base coat to bridge surface honeycombs." },
          { step: "03", title: "Second Finish Coat", desc: "Applying 0.5mm finish coat and dry sponge finishing." },
        ],
      },
    ],
  },
];

// Helper to look up service by category slug and sub-service slug
export function getServiceByCategoryAndSlug(categorySlug: string, serviceSlug: string) {
  const category = servicesData.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const subService = category.subServices.find((s) => s.slug === serviceSlug);
  if (!subService) return null;
  return { category, subService };
}

// Helper to get all categories
export function getAllCategories() {
  return servicesData;
}
