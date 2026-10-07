/**
 * Eco Green Solar — Master Content File
 * Empanelled Vendor under PM Surya Ghar Muft Bijli Yojana
 * Rajkot, Gujarat, India
 */

export const content = {
  meta: {
    brandName: "Eco Green Solar",
    legalName: "Green Energy / Eco Green Ventures",
    tagline: "Power Your Home With The Sun",
    badge: "PM Surya Ghar Empanelled Vendor",
    estd: "Estd. 2007 • 19 Years Green Energy Experience",
    discom: "Empanelled under PGVCL, GUVNL & National Solar Portal",
    location: "GIDC Metoda, Rajkot, Gujarat"
  },

  navigation: {
    links: [
      { id: "hero", label: "Home", href: "#hero" },
      { id: "about", label: "About", href: "#about" },
      { id: "products", label: "Products", href: "#products" },
      { id: "services", label: "Services", href: "#services" },
      { id: "subsidy", label: "Subsidy & Calculator", href: "#subsidy" },
      { id: "gallery", label: "Projects", href: "#gallery" },
      { id: "testimonials", label: "Testimonials", href: "#testimonials" },
      { id: "contact", label: "Contact", href: "#contact" }
    ],
    contactButton: "Get Free Quote",
    hotline: "+91-7878444414",
    hotlineDisplay: "+91 78 78 44 44 14"
  },

  hero: {
    badge: "PM Surya Ghar Empanelled Vendor • Gujarat",
    headlineLine1: "Power Your Home",
    headlineLine2: "With The Sun.",
    subheadline:
      "Gujarat's trusted solar engineering partner since 2007. Generate zero-bill clean electricity and pressurized solar hot water with up to ₹78,000 direct bank subsidy.",
    ctaPrimary: "Get Free Quote",
    ctaSecondary: "Explore Products",
    whatsappUrl:
      "https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20would%20like%20to%20get%20a%20free%20site%20survey%20and%20quote%20under%20PM%20Surya%20Ghar%20Yojana.",
    floatingChips: [
      { label: "25-Year Linear Power Warranty", icon: "shield" },
      { label: "40+ MW Solar EPC Installed", icon: "zap" },
      { label: "24-Hr Service Guarantee", icon: "clock" }
    ]
  },

  about: {
    tag: "OUR HERITAGE // ESTD. 2007",
    headline: "19 years of engineering excellence in Saurashtra.",
    storyP1:
      "Founded in 2007 in Rajkot, Gujarat, Eco Green Solar (Green Energy) began with a mission to bring world-class renewable energy engineering to Indian households and industries. Over nearly two decades, we expanded from pioneering Evacuated Tube Collector (ETC) solar water heaters to our state-of-the-art manufacturing unit at GIDC Metoda, Rajkot.",
    storyP2:
      "From executing 40+ MW in Gujarat's milestone Charanka Solar Park to powering over 2,500 residential rooftops across Rajkot, Jamnagar, Junagadh, and Morbi, our engineering team ensures uncompromised quality, hot-dip galvanized aerodynamics, and seamless Discom net-metering approvals.",
    pinnedStatement:
      "Transforming Gujarat's sunlight into clean energy independence since 2007.",
    stats: [
      { value: "19+", label: "Years Experience", desc: "Pioneering green energy since 2007" },
      { value: "40+ MW", label: "EPC Projects", desc: "Utility-scale and rooftop solar" },
      { value: "2,500+", label: "Happy Customers", desc: "Residential villas & industries" },
      { value: "24 Hrs", label: "Service Response", desc: "Direct factory technician turnaround" }
    ]
  },

  products: {
    tag: "PRODUCT SHOWROOM",
    headline: "Engineered for maximum yield and generational durability.",
    subheadline:
      "High-efficiency photovoltaic modules, food-grade pressurized solar water heaters, intelligent heat pumps, and automatic hydro-pneumatic booster pumps.",
    categories: [
      {
        id: "solar-pv",
        name: "Rooftop Solar PV",
        badge: "PM Surya Ghar Approved",
        image: "/media/images/solar-panels-roof-hero.jpg",
        desc: "Tier-1 Monocrystalline N-Type TOPCon bifacial panels with anti-reflective glass and aerodynamic anodized structures.",
        specs: ["22.8% Module Efficiency", "25-Yr Performance Guarantee", "Dual Surge & Chemical Earthing"],
        capacity: "1 kW to 100 kW+"
      },
      {
        id: "pressurized-swh",
        name: "Pressurized Solar Water Heater",
        badge: "Best Seller",
        image: "/media/images/pressurized-solar-water-heater.png",
        desc: "Heavy-duty Evacuated Tube Collector (ETC) system with food-grade SS-304 inner tank, high-density PUF insulation, and pressure-rated design.",
        specs: ["High Pressure Handling (Up to 5 Bar)", "Triple Target Evacuated Tubes", "Zero Heat Loss Insulation"],
        capacity: "100 to 500 LPD"
      },
      {
        id: "heat-pump",
        name: "Air-Source Heat Pump",
        badge: "75% Energy Saving",
        image: "/media/images/heat-pump-engineering.jpg",
        desc: "Modern thermodynamic heat pump that extracts heat from ambient air to deliver hot water at a fraction of electric geyser power.",
        specs: ["COP > 4.2 Energy Efficiency", "All-Weather 24/7 Heating", "Whisper Quiet Japanese Compressor"],
        capacity: "200 to 2,000 LPD"
      },
      {
        id: "pressure-pump",
        name: "Hydro-Pneumatic Booster Pump",
        badge: "Consistent Pressure",
        image: "/media/images/pressure-pump.png",
        desc: "Automatic multi-stage booster pump with diaphragm pressure tank, ensuring constant luxurious water flow to rain showers and Jacuzzis.",
        specs: ["Automatic Pressure Sensing", "Dry-Run Protection", "Stainless Steel Impellers"],
        capacity: "0.5 HP to 3.0 HP"
      }
    ],
    models: [
      { name: "Pressurized ETC Series", type: "Solar Water Heater", image: "/media/images/pressurized-solar-water-heater.png" },
      { name: "Copper Coil Series", type: "Solar Water Heater", image: "/media/images/copper-solar-heater.png" },
      { name: "Diamond ETC Series", type: "Solar Water Heater", image: "/media/images/diamond-solar.png" },
      { name: "Pearl ETC Series", type: "Solar Water Heater", image: "/media/images/pearl-solar.png" },
      { name: "Glassline Series", type: "Solar Water Heater", image: "/media/images/glassline-solar.png" },
      { name: "Cleanx High-Pressure Nozzles", type: "Water Care", image: "/media/images/cleanx-nozzles.png" }
    ]
  },

  services: {
    tag: "TURNKEY SOLUTIONS",
    headline: "End-to-end solar execution with zero consumer friction.",
    subheadline: "From technical shadow mapping to Discom approvals and 25-year lifecycle monitoring.",
    items: [
      {
        id: "residential",
        number: "01",
        title: "Residential Rooftop Solar",
        tag: "PM Surya Ghar Muft Bijli Yojana",
        desc: "Complete home solar installations tailored for bungalows, flats, and housing societies with maximum government subsidy.",
        image: "/media/images/luxury-modern-home.jpg",
        points: ["Zero electricity bills", "₹78,000 direct bank subsidy", "Bi-directional net metering"]
      },
      {
        id: "commercial",
        number: "02",
        title: "Commercial & Industrial Solar EPC",
        tag: "CAPEX / OPEX Models",
        desc: "High-capacity on-grid arrays for factories in GIDC Metoda, Shapar, Lodhika, hospitals, and educational institutions.",
        image: "/media/images/solar-commercial-rooftop.jpg",
        points: ["Accelerated 40% depreciation", "Drastic reduction in tariff peaks", "Remote SCADA monitoring"]
      },
      {
        id: "thermal",
        number: "03",
        title: "Solar Water Heating & Heat Pumps",
        tag: "Hospitality & Domestic",
        desc: "Centralized hot water engineering for luxury villas, boutique hotels, hospitals, and hostels with zero electrical geyser loads.",
        image: "/media/images/hydro-pressure-water.jpg",
        points: ["75% reduction in geyser power", "24/7 pressurized hot water", "Food grade SS-304 construction"]
      },
      {
        id: "discom",
        number: "04",
        title: "Net Metering & Discom Liaison",
        tag: "100% Hassle-Free",
        desc: "Complete documentation and liaison with PGVCL, DGVCL, MGVCL, UGVCL, and GUVNL from feasibility sanction to meter commissioning.",
        image: "/media/images/solar-array-cinematic.jpg",
        points: ["Discom single line diagram filing", "CEI inspection coordination", "Fast-track subsidy disbursement"]
      }
    ]
  },

  subsidy: {
    tag: "GOVERNMENT SUBSIDY",
    headline: "PM Surya Ghar: Muft Bijli Yojana",
    subheadline:
      "Get up to ₹78,000 direct bank transfer (DBT) subsidy from the Central Government. We manage the entire portal filing for you.",
    slabs: [
      { kw: "1 kW", subsidy: "₹30,000", units: "~120-150 Units/mo", space: "100 sq. ft." },
      { kw: "2 kW", subsidy: "₹60,000", units: "~240-300 Units/mo", space: "180 sq. ft." },
      { kw: "3 kW to 10 kW", subsidy: "₹78,000 (Max)", units: "~360-450+ Units/mo", space: "270 sq. ft." }
    ],
    steps: [
      { step: "01", title: "Portal Registration", desc: "We register your PGVCL consumer number on the National Solar Portal." },
      { step: "02", title: "Feasibility Sanction", desc: "Discom technical feasibility is approved without consumer hassle." },
      { step: "03", title: "Installation & Metering", desc: "Certified installation of panels, inverter, and bi-directional meter." },
      { step: "04", title: "Direct Bank Transfer", desc: "Subsidy is directly credited to your Aadhaar-linked bank account within 30 days." }
    ],
    calculator: {
      headline: "Interactive Solar Savings Calculator",
      subheadline: "Move the slider to estimate your system sizing, government subsidy, and 25-year financial returns.",
      minBill: 1000,
      maxBill: 25000,
      defaultBill: 5000,
      disclaimer: "*Estimates based on typical Gujarat Discom tariff slabs (~₹6.50/unit) and MNRE guidelines. Actual generation depends on roof orientation and shading."
    }
  },

  gallery: {
    tag: "FEATURED INSTALLATIONS",
    headline: "Landmark projects powering Saurashtra.",
    subheadline: "A selection of our utility-scale, industrial, and luxury residential solar installations across Gujarat.",
    projects: [
      {
        title: "Charanka Solar Park",
        category: "Utility Scale EPC (40 MW)",
        location: "Patan, Gujarat",
        image: "/media/images/solar-farm-aerial.jpg",
        badge: "Historic EPC"
      },
      {
        title: "Kalawad Road Luxury Villa",
        category: "Residential Rooftop (5 kW N-Type)",
        location: "Rajkot, Gujarat",
        image: "/media/images/modern-home-gujarat.jpg",
        badge: "Zero Bill"
      },
      {
        title: "Metoda GIDC Industrial Plant",
        category: "Commercial Array (100 kW)",
        location: "Rajkot, Gujarat",
        image: "/media/images/solar-commercial-rooftop.jpg",
        badge: "Industrial EPC"
      },
      {
        title: "Gondal Road Boutique Resort",
        category: "Solar PV + Commercial Heat Pump",
        location: "Rajkot, Gujarat",
        image: "/media/images/luxury-residential-villa.jpg",
        badge: "Hybrid Thermal"
      },
      {
        title: "University Road Bungalow",
        category: "Residential Grid-Tied (3 kW)",
        location: "Rajkot, Gujarat",
        image: "/media/images/solar-panels-roof-hero.jpg",
        badge: "PM Surya Ghar"
      },
      {
        title: "Saurashtra Precision Engineering",
        category: "Industrial Rooftop (50 kW)",
        location: "Shapar, Rajkot",
        image: "/media/images/solar-clean-nature.jpg",
        badge: "Commercial"
      }
    ]
  },

  testimonials: {
    tag: "CLIENT TESTIMONIALS",
    headline: "Trusted by over 2,500 families & businesses.",
    items: [
      {
        quote:
          "My PGVCL electricity bill for my bungalow on Kalawad Road went from ₹7,800 down to just the minimum meter rent of ₹120! Eco Green Solar handled everything with Discom smoothly.",
        author: "Pravinbhai Patel",
        role: "Industrialist & Homeowner",
        location: "Kalawad Road, Rajkot",
        system: "5 kW N-Type TOPCon Rooftop",
        saving: "Saved ₹92,000 / year"
      },
      {
        quote:
          "We installed an Eco Green pressurized solar water heater and a 10 kW rooftop array for our hotel. Our water heating and energy bills dropped by over 70%. Their 24-hr service support is outstanding.",
        author: "Devang Javia",
        role: "Hotelier",
        location: "Gondal Road, Rajkot",
        system: "10 kW Solar PV + 500 LPD Heat Pump",
        saving: "Saved ₹2,10,000 / year"
      },
      {
        quote:
          "The ₹78,000 PM Surya Ghar subsidy was directly deposited into my bank account within 22 days of net-meter commissioning. GIDC Metoda factory-backed engineering you can rely on.",
        author: "Dr. Mihir Mehta",
        role: "Consultant Physician",
        location: "University Road, Rajkot",
        system: "3 kW Residential On-Grid",
        saving: "Saved ₹54,000 / year"
      }
    ]
  },

  faq: {
    tag: "FREQUENTLY ASKED QUESTIONS",
    headline: "Everything you need to know about solar in Gujarat.",
    items: [
      {
        question: "How much subsidy do I get under PM Surya Ghar Muft Bijli Yojana?",
        answer:
          "Under the national scheme, residential consumers receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum flat central subsidy of ₹78,000 for 3 kW and above. Eco Green Solar is an empanelled vendor and handles 100% of the portal submission and documentation for direct bank credit."
      },
      {
        question: "Will solar panels damage my terrace or cause water leakage?",
        answer:
          "No. We use non-penetrative structural clamping or civil concrete footings that protect your waterproofing layer completely. Our structures are hot-dip galvanized and engineered for 170 km/h coastal Saurashtra wind shears."
      },
      {
        question: "How long does Discom net-metering approval take in Rajkot?",
        answer:
          "With Eco Green Solar handling your liaison, feasibility sanction from PGVCL takes 2 to 4 days, installation takes 2 to 3 days, and bi-directional meter testing is usually completed within 8 to 14 days."
      },
      {
        question: "What happens during monsoon or cloudy winter days?",
        answer:
          "Our Monocrystalline N-Type TOPCon bifacial modules generate significant power even from diffuse ultraviolet radiation on overcast days. Net metering also banks your surplus summer power with PGVCL, which you draw seamlessly during rain or night."
      },
      {
        question: "What is the lifespan and warranty of the system?",
        answer:
          "Our solar modules come with a 25-year linear performance warranty guaranteeing over 84.8% peak generation at year 25. Inverters carry 5 to 10 year manufacturer warranties with local factory service."
      }
    ]
  },

  contact: {
    tag: "GET IN TOUCH",
    headline: "Start your journey to zero electricity bills.",
    subheadline:
      "Schedule a free rooftop technical survey today. Our senior solar engineer will visit your property with shadow analysis tools.",
    phone: "+91-7878444414",
    phoneDisplay: "+91 78 78 44 44 14",
    whatsapp: "+917878444414",
    email: "greenenergy123@gmail.com",
    address:
      "Plot No. 4-5-6, Gajanand Industrial Area, Rev. Survey No. 183, Near R K Exotica, Opp. Chhapra Gam, Lodhika, Rajkot - 360021, Gujarat, India",
    googleMapsUrl: "https://maps.app.goo.gl/JpXDLW58g7hkwxSd6",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM (Emergency 24-Hr Support)"
  },

  footer: {
    copyright: "© 2026 Eco Green Solar (Green Energy). All rights reserved.",
    disclaimer:
      "Empanelled vendor under PM Surya Ghar Muft Bijli Yojana (MNRE, Ministry of New and Renewable Energy, Govt of India). All subsidy calculations subject to official portal verification.",
    rajkotCoordinates: "22.2127° N, 70.6044° E • Saurashtra Hub",
    socialLinks: [
      { name: "WhatsApp", url: "https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar%2C%20I%20want%20to%20enquire%20about%20solar%20rooftop%20solutions." },
      { name: "Facebook", url: "https://www.facebook.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
      { name: "YouTube", url: "https://www.youtube.com/" }
    ]
  },

  catalogueProducts: [
    {
      id: "pressurized-etc",
      name: "Pressurized ETC Series",
      category: "Solar Water Heaters",
      categoryId: "heaters",
      accentColor: "#008F4F",
      bgGradient: "linear-gradient(135deg, #093721 0%, #031D11 100%)",
      badge: "5 Bar Pressure",
      tag: "Best Seller",
      image: "/media/images/pressurized-solar-water-heater.png",
      indexNumber: "01",
      oneLiner: "Engineered for high-pressure modern luxury bathrooms & rain showers.",
      fullDescription: "Built with heavy-duty argon-welded food-grade SS-304L/SS-316L inner vessels, 50mm injected high-density PUF insulation, and borosilicate 3.3 triple-target vacuum tubes. Withstands up to 5 Bar continuous booster pump pressure with 72-hour thermal heat retention.",
      chips: ["5 Bar Pressure", "Food-Grade SS-304L", "5 Years Guarantee"],
      specs: [
        { value: "5.0 Bar", label: "Max Pressure", icon: "gauge" },
        { value: "SS-304L", label: "Inner Metallurgy", icon: "shield" },
        { value: "72 Hrs", label: "Heat Retention", icon: "flame" },
        { value: "5 Years", label: "Factory Warranty", icon: "award" }
      ],
      capacities: ["100 LPD", "150 LPD", "200 LPD", "250 LPD", "300 LPD", "500 LPD"],
      capacityFamilyMap: { "100 LPD": 2, "150 LPD": 3, "200 LPD": 4, "250 LPD": 6, "300 LPD": 8, "500 LPD": 10 },
      pdfUrl: "/downloads/EcoGreen-Pressurized-ETC.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Pressurized ETC Solar Water Heater"
    },
    {
      id: "copper-coil",
      name: "Copper Coil & Glass-Line",
      category: "Solar Water Heaters",
      categoryId: "heaters",
      accentColor: "#D97706",
      bgGradient: "linear-gradient(135deg, #372309 0%, #1D1303 100%)",
      badge: "Hard Water Specialist",
      tag: "Zero Scaling",
      image: "/media/images/copper-solar-heater.png",
      indexNumber: "02",
      oneLiner: "Instant heat-exchanger copper coil engineered for high-TDS hard groundwater.",
      fullDescription: "Features an internal electrolytic pure copper heat-exchanger coil coupled with vitreous glass enamel lining. Tested to withstand up to 2,500+ PPM TDS borewell water across Saurashtra & Kutch without mineral scaling or corrosive pinhole failures.",
      chips: ["99.9% Copper Coil", "Glass-Lined Enamel", "7 Years Tank Warranty"],
      specs: [
        { value: "2500+ PPM", label: "TDS Tolerance", icon: "droplet" },
        { value: "Pure Copper", label: "Heat Exchanger", icon: "zap" },
        { value: "6.0 Bar", label: "Coil Pressure", icon: "gauge" },
        { value: "7 Years", label: "Inner Tank Guarantee", icon: "award" }
      ],
      capacities: ["150 LPD", "200 LPD", "300 LPD", "500 LPD"],
      capacityFamilyMap: { "150 LPD": 3, "200 LPD": 4, "300 LPD": 7, "500 LPD": 10 },
      pdfUrl: "/downloads/EcoGreen-CopperCoil-Catalogue.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Copper Coil & Glass-Line Series"
    },
    {
      id: "diamond-etc",
      name: "Diamond ETC Series",
      category: "Solar Water Heaters",
      categoryId: "heaters",
      accentColor: "#0284C7",
      bgGradient: "linear-gradient(135deg, #082F49 0%, #031726 100%)",
      badge: "Household Choice",
      tag: "Most Popular",
      image: "/media/images/diamond-solar.png",
      indexNumber: "03",
      oneLiner: "Heavy-duty natural thermosiphon circulation trusted by 20,000+ Gujarati homes.",
      fullDescription: "Our flagship domestic workhorse. Built with 2.0mm hot-dip galvanized mounting structures that withstand 140 km/h coastal winds. Delivers reliable 65°C to 85°C hot water with zero electricity cost throughout the year.",
      chips: ["Thermosiphon Flow", "2.0mm HDG Frame", "5 Years Comprehensive"],
      specs: [
        { value: "0.5 Bar", label: "Gravity Feed", icon: "gauge" },
        { value: "SS-304", label: "Inner Tank", icon: "shield" },
        { value: "140 km/h", label: "Wind Stability", icon: "wind" },
        { value: "5 Years", label: "Full Warranty", icon: "award" }
      ],
      capacities: ["100 LPD", "150 LPD", "200 LPD", "250 LPD", "300 LPD"],
      capacityFamilyMap: { "100 LPD": 2, "150 LPD": 3, "200 LPD": 5, "250 LPD": 6, "300 LPD": 8 },
      pdfUrl: "/downloads/EcoGreen-Diamond-ETC.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Diamond ETC Series"
    },
    {
      id: "glassline-ceramic",
      name: "Glass-Line Ceramic Series",
      category: "Solar Water Heaters",
      categoryId: "heaters",
      accentColor: "#059669",
      bgGradient: "linear-gradient(135deg, #064E3B 0%, #022C22 100%)",
      badge: "Anti-Corrosion Armor",
      tag: "850°C Fused",
      image: "/media/images/glassline-solar.png",
      indexNumber: "04",
      oneLiner: "Vitreous ceramic enamel coating immune to aggressive chlorides and fluorides.",
      fullDescription: "Fired at 850°C to create an impermeable glass-fused barrier on 2.5mm carbon steel, backed by an active sacrificial magnesium anode rod. Completely eliminates corrosion in coastal, saline, and hard borewell water regions.",
      chips: ["850°C Ceramic", "Magnesium Anode", "7 Years Replacement"],
      specs: [
        { value: "10.0 Bar", label: "Hydrostatic Test", icon: "gauge" },
        { value: "Fused Ceramic", label: "Internal Shield", icon: "shield" },
        { value: "High Saline", label: "Coastal Rating", icon: "droplet" },
        { value: "7 Years", label: "Tank Replacement", icon: "award" }
      ],
      capacities: ["150 LPD", "200 LPD", "300 LPD", "500 LPD"],
      capacityFamilyMap: { "150 LPD": 3, "200 LPD": 5, "300 LPD": 7, "500 LPD": 10 },
      pdfUrl: "/downloads/EcoGreen-GlassLine-Catalogue.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Glass-Line Ceramic Series"
    },
    {
      id: "pearl-domestic",
      name: "Pearl Domestic Series",
      category: "Solar Water Heaters",
      categoryId: "heaters",
      accentColor: "#10B981",
      bgGradient: "linear-gradient(135deg, #064E3B 0%, #032A1F 100%)",
      badge: "Best Value Home",
      tag: "Fast ROI",
      image: "/media/images/pearl-solar.png",
      indexNumber: "05",
      oneLiner: "Compact, high-yield natural solar heating designed for domestic urban terraces.",
      fullDescription: "Engineered with double-passivated stainless steel seams and precision evacuated vacuum tubes. Achieves hot water temperatures up to 85°C before 11:00 AM, recovering its entire installation cost within 2 Saurashtra winter seasons.",
      chips: ["Up to 85°C Temp", "Compact Footprint", "5 Years Warranty"],
      specs: [
        { value: "< 2 Yrs", label: "Payback Period", icon: "trending-up" },
        { value: "85°C Peak", label: "Thermal Yield", icon: "flame" },
        { value: "SS-304", label: "Inner Vessel", icon: "shield" },
        { value: "5 Years", label: "Factory Warranty", icon: "award" }
      ],
      capacities: ["100 LPD", "150 LPD", "200 LPD"],
      capacityFamilyMap: { "100 LPD": 2, "150 LPD": 3, "200 LPD": 5 },
      pdfUrl: "/downloads/EcoGreen-Pearl-Catalogue.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Pearl Domestic Series"
    },
    {
      id: "commercial-heatpump",
      name: "Commercial Air-Source Heat Pump",
      category: "Heat Pumps & Thermal",
      categoryId: "heatpumps",
      accentColor: "#6366F1",
      bgGradient: "linear-gradient(135deg, #1E1B4B 0%, #0F0E2A 100%)",
      badge: "75% Power Saving",
      tag: "Thermodynamic",
      image: "/media/images/heat-pump-hero.jpg",
      indexNumber: "06",
      oneLiner: "Extracts latent atmospheric heat for centralized 24/7 hot water in hotels & hospitals.",
      fullDescription: "Delivers high coefficient of performance (COP > 4.2), producing 4.2 kW of thermal energy per 1 kW of electrical power. Features quiet Japanese rotary/scroll compressors, intelligent microcomputer controllers, and modular cascade capacity up to 15,000 LPD.",
      chips: ["COP > 4.2 Ratio", "24/7 All-Weather", "Japanese Compressor"],
      specs: [
        { value: "COP > 4.2", label: "Energy Multiplier", icon: "zap" },
        { value: "75% Cut", label: "Power Reduction", icon: "trending-up" },
        { value: "8.0 Bar", label: "Loop Rating", icon: "gauge" },
        { value: "3+5 Yrs", label: "Compressor + Tank", icon: "award" }
      ],
      capacities: ["200 LPD", "500 LPD", "1000 LPD", "3000 LPD+"],
      capacityFamilyMap: { "200 LPD": 4, "500 LPD": 10, "1000 LPD": 25, "3000 LPD+": 75 },
      pdfUrl: "/downloads/EcoGreen-Commercial-HeatPump.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Commercial Air-Source Heat Pump"
    },
    {
      id: "pressure-booster",
      name: "Hydro-Pneumatic Pressure Booster",
      category: "Pressure Boosters",
      categoryId: "pumps",
      accentColor: "#0EA5E9",
      bgGradient: "linear-gradient(135deg, #082F49 0%, #021827 100%)",
      badge: "Rain Shower Booster",
      tag: "Automatic Flow",
      image: "/media/images/pressure-pump.png",
      indexNumber: "07",
      oneLiner: "Automatic electronic pressure sensing for steady, pulsation-free luxury showers.",
      fullDescription: "Equipped with heavy stainless steel motor bodies, forged brass impellers, butyl diaphragm pressure tanks, and intelligent dry-run protection. Senses faucet operation and engages instantaneously to deliver high pressure to luxury body jets and rain showers.",
      chips: ["Automatic Sensing", "Silent < 52 dB", "Dry-Run Protection"],
      specs: [
        { value: "2.5–5.5 Bar", label: "Operating Flow", icon: "gauge" },
        { value: "< 52 dB", label: "Noise Emission", icon: "volume-x" },
        { value: "Brass/SS", label: "Internal Impeller", icon: "shield" },
        { value: "2 Years", label: "Factory Guarantee", icon: "award" }
      ],
      capacities: ["0.5 HP", "0.8 HP", "1.0 HP", "1.5 HP", "2.0 HP"],
      capacityFamilyMap: { "0.5 HP": 2, "0.8 HP": 3, "1.0 HP": 5, "1.5 HP": 7, "2.0 HP": 10 },
      pdfUrl: "/downloads/EcoGreen-PressureBooster-Guide.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about the Hydro-Pneumatic Pressure Booster Pump"
    },
    {
      id: "rooftop-solar",
      name: "Monocrystalline Rooftop Solar PV",
      category: "Rooftop Solar PV",
      categoryId: "solar",
      accentColor: "#EAB308",
      bgGradient: "linear-gradient(135deg, #422006 0%, #1A0D02 100%)",
      badge: "PM Surya Ghar Approved",
      tag: "Zero Electric Bill",
      image: "/media/images/solar-rooftop.png",
      indexNumber: "08",
      oneLiner: "Tier-1 TOPCon bifacial modules with PGVCL on-grid net-metering & ₹78,000 subsidy.",
      fullDescription: "N-Type TOPCon bifacial glass modules operating at 22.8% conversion efficiency. Includes elevated hot-dip galvanized mounting structures that preserve usable rooftop terrace space. Direct empanelment under PGVCL, GUVNL, and MNRE with 25-year linear performance warranty.",
      chips: ["22.8% TOPCon", "₹78,000 Subsidy", "25-Yr Performance"],
      specs: [
        { value: "22.8%", label: "Cell Efficiency", icon: "zap" },
        { value: "₹78,000", label: "Direct Govt DBT", icon: "gift" },
        { value: "160 km/h", label: "Wind Resistance", icon: "wind" },
        { value: "25 Years", label: "Linear Performance", icon: "award" }
      ],
      capacities: ["3 kW", "5 kW", "10 kW", "25 kW+"],
      capacityFamilyMap: { "3 kW": 4, "5 kW": 6, "10 kW": 10, "25 kW+": 25 },
      pdfUrl: "/downloads/EcoGreen-Rooftop-Solar-PV.pdf",
      whatsappMsg: "Hello Eco Green Solar, I would like to inquire about Monocrystalline Rooftop Solar PV"
    }
  ]
};

export default content;

