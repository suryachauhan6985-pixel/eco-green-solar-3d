export interface ProductSpec {
  capacity: string;
  tubesCount?: string;
  tubesSize?: string;
  members?: string;
  dimensions?: string;
  [key: string]: string | undefined;
}

export interface ProductApplication {
  title: string;
  desc: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: 'solar-pv' | 'solar-water-heater' | 'heat-pump' | 'pressure-pump' | 'solar-maintenance';
  tagline: string;
  badge: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  salientFeatures: string[];
  specsTable?: ProductSpec[];
  technicalDetails?: {
    innerTank?: string;
    outerTank?: string;
    insulation?: string;
    tubes?: string;
    structure?: string;
    pressure?: string;
    coating?: string;
    efficiency?: string;
    warranty?: string;
    electricalBackup?: string;
  };
  brochureUrl: string;
  capacityRange: string;
  // Product Hero System Fields
  heroVideo?: string;
  heroPoster?: string;
  heroFallbackImage: string;
  heroStats: { label: string; value: string; }[];
  heroTheme: 'green' | 'blue' | 'amber' | 'slate' | 'teal';
  heroHeadline: string;
  heroSubheadline: string;
  keyBenefits: { title: string; desc: string; }[];
  howItWorksSteps: HowItWorksStep[];
  applications: ProductApplication[];
  galleryImages: string[];
  installationImages?: string[];
  faqs: ProductFAQ[];
  whatsappQuery: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'solar-rooftop',
    slug: 'solar-rooftop',
    name: 'Solar Rooftop System',
    category: 'Solar Photovoltaic',
    categorySlug: 'solar-pv',
    tagline: 'Generate Zero-Bill Clean Electricity With Up to ₹78,000 Direct Bank Subsidy',
    badge: 'PM Surya Ghar Approved',
    image: '/media/images/solar-panels-roof-hero.jpg',
    shortDesc: 'Tier-1 N-Type TOPCon bifacial monocrystalline solar modules with aerodynamic galvanized structures, smart on-grid inverters, and seamless PGVCL net-metering.',
    fullDesc: 'Eco Green Solar is an empanelled vendor under the PM Surya Ghar Muft Bijli Yojana in Gujarat. We engineer high-yield on-grid rooftop solar plants for residential villas, housing societies, commercial buildings, and industrial plants across Saurashtra and Gujarat. Utilizing bi-directional net-metering with PGVCL/GUVNL, surplus power generated during daytime is fed back to the power grid, wiping out up to 90% of electricity bills while securing direct DBT bank subsidies.',
    heroVideo: '/media/videos/solar-panels-roof.mp4',
    heroPoster: '/media/images/solar-panels-roof-hero.jpg',
    heroFallbackImage: '/media/images/solar-panels-roof-hero.jpg',
    heroTheme: 'green',
    heroHeadline: 'Power Your Property With Zero-Bill Solar Generation',
    heroSubheadline: 'Empanelled Gujarat vendor with 40+ MW track record. Enjoy ₹78,000 direct bank subsidy and 25 years of linear power guarantee.',
    heroStats: [
      { label: 'DBT Bank Subsidy', value: 'Up to ₹78,000' },
      { label: 'Linear Power Warranty', value: '25 Years' },
      { label: 'Module Efficiency', value: '22.8% TOPCon' }
    ],
    salientFeatures: [
      'Up to ₹78,000 Direct Bank Transfer (DBT) subsidy under PM Surya Ghar Muft Bijli Yojana',
      '25-Year Linear Power Warranty on Tier-1 N-Type TOPCon bifacial solar modules',
      'Hot-dip galvanized aerodynamic mounting structures certified for 150 km/h coastal winds',
      'Smart Wi-Fi enabled on-grid inverters with real-time smartphone generation monitoring',
      'End-to-end liaisoning with PGVCL, GUVNL, MGVCL, UGVCL and National Solar Portal',
      'Chemical earthing pits and dual class-II AC/DC surge protection devices (SPD)'
    ],
    keyBenefits: [
      { title: 'Wipe Out 90% Power Bills', desc: 'Generate free electricity during daytime and export excess solar energy back to the grid via PGVCL bi-directional net metering.' },
      { title: 'Generational 25-Year ROI', desc: 'Complete system payback achieved in 3 to 4 years. Over 20+ subsequent years of virtually free green electricity.' },
      { title: 'Storm & Wind Resistant', desc: 'Engineered with heavy-duty hot-dip galvanized steel mounting structures engineered to withstand cyclonic coastal winds up to 150 km/h.' },
      { title: '100% Hassle-Free Paperwork', desc: 'Our dedicated in-house technical team manages the entire National Solar Portal registration, DISCOM inspection, and DBT subsidy release.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Solar PV Panels', desc: 'Tier-1 TOPCon bifacial modules absorb ambient sunlight and convert solar photons into Direct Current (DC) electricity.' },
      { step: '02', title: 'Smart On-Grid Inverter', desc: 'High-efficiency string inverters invert DC electricity into synchronized 230V/415V Alternating Current (AC) for household appliances.' },
      { step: '03', title: 'Bi-Directional Net Meter', desc: 'DISCOM net-meter records electricity imported at night and solar electricity exported during the day, crediting your power bill.' }
    ],
    applications: [
      { title: 'Residential Villas & Bungalows', desc: '1 kW to 10 kW systems qualifying for maximum ₹78,000 PM Surya Ghar DBT bank subsidy.' },
      { title: 'Apartment Societies & Common Areas', desc: 'Power elevators, water pumping systems, and corridor lighting with high-yield group net metering.' },
      { title: 'Commercial Complexes & Offices', desc: 'Cut high commercial tariff expenses and claim accelerated depreciation tax advantages.' },
      { title: 'Industrial Sheds & Factories', desc: 'Heavy 50 kW to 1 MW rooftop solar arrays offsetting high peak-tariff manufacturing machinery costs.' }
    ],
    galleryImages: [
      '/media/images/solar-panels-roof-hero.jpg',
      '/media/images/solar-commercial-rooftop.jpg',
      '/media/images/factory-installation.jpg',
      '/media/images/luxury-residential-villa.jpg'
    ],
    specsTable: [
      { capacity: '1 kW', members: '1 - 2 Rooms', dimensions: '100 sq.ft terrace', tubesCount: 'Up to ₹30,000 DBT Subsidy' },
      { capacity: '2 kW', members: '2 - 3 BHK House', dimensions: '200 sq.ft terrace', tubesCount: 'Up to ₹60,000 DBT Subsidy' },
      { capacity: '3 kW', members: '3 - 4 BHK Villa', dimensions: '300 sq.ft terrace', tubesCount: 'Up to ₹78,000 DBT Subsidy' },
      { capacity: '5 kW', members: 'Large Bungalow', dimensions: '500 sq.ft terrace', tubesCount: '₹78,000 Max Central Subsidy' },
      { capacity: '10 kW+', members: 'Societies & Commercial', dimensions: '1,000+ sq.ft', tubesCount: 'Custom EPC & Net-Metering' }
    ],
    technicalDetails: {
      innerTank: 'Tier-1 N-Type TOPCon Bifacial Glass-to-Glass Modules (550Wp – 590Wp)',
      outerTank: 'Anodized 35mm Aluminum Alloy Aerodynamic Frame',
      insulation: 'Anti-Reflective 3.2mm Toughened Tempered Solar Glass',
      tubes: '144 Half-Cut Multi-Busbar Monocrystalline Cells',
      structure: 'Hot-Dip Galvanized C-Channel (Min 80 Microns Coating), 150 km/h Wind Certified',
      pressure: 'IP66 Rated Inverter, Dual Surge Arresters (Type II SPD)',
      coating: 'Chemical Maintenance-Free Earth Electrodes with Copper Bonding',
      efficiency: '22.8% Module Conversion Efficiency, 98.6% Inverter Max Efficiency',
      warranty: '25-Year Linear Power Output Warranty, 10-Year Inverter Manufacturer Guarantee'
    },
    brochureUrl: '/media/images/solar-rooftop.png',
    capacityRange: '1 kW to 100 kW+',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about PM Surya Ghar Rooftop Solar installation and site survey.',
    faqs: [
      { question: 'How much subsidy do I get under PM Surya Ghar Yojana?', answer: 'For residential rooftops in Gujarat, the central government DBT subsidy is ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and higher capacities.' },
      { question: 'How much roof space is required for a 3 kW solar plant?', answer: 'A 3 kW solar rooftop system typically requires approximately 250 to 300 square feet of shadow-free rooftop space.' },
      { question: 'What is the lifespan and warranty of the panels?', answer: 'Our Tier-1 TOPCon solar panels come with a 25-year linear performance warranty, ensuring over 80% generation efficiency even after 25 years.' },
      { question: 'Who handles the PGVCL net-metering paperwork?', answer: 'Eco Green Solar handles 100% of the liaisoning, portal registration, DISCOM approvals, and meter installation on your behalf.' }
    ]
  },
  {
    id: 'pressurized',
    slug: 'pressurized',
    name: 'Pressurized ETC Series',
    category: 'Solar Water Heater',
    categorySlug: 'solar-water-heater',
    tagline: 'Engineered for High-Pressure Booster Pumps & Multi-Story Luxury Residences',
    badge: 'High Pressure Rated • 5 Bar',
    image: '/media/images/pressurized-solar-water-heater.png',
    shortDesc: 'Heavy-duty Evacuated Tube Collector (ETC) system with food-grade SS-304/SS-316L inner tank, high-density PUF insulation, and pressure-rated design up to 5 Bar.',
    fullDesc: 'The Eco Green Pressurized ETC Series is engineered specifically for modern luxury villas, hotels, and apartments equipped with automatic hydro-pneumatic pressure booster pumps. Standard solar water heaters cannot withstand the high head and pressure surges of booster pumps; our Pressurized Series features heavy-duty argon-arc welded SS-304/SS-316L inner vessels, 50mm injected PUF insulation, and high-efficiency borosilicate 3.3 vacuum tubes tested to withstand up to 5 Bar operational pressure.',
    heroVideo: '/media/videos/fluid-dynamics-reel.webm',
    heroPoster: '/media/images/pressurized-solar-water-heater.png',
    heroFallbackImage: '/media/images/pressurized-solar-water-heater.png',
    heroTheme: 'blue',
    heroHeadline: 'Constant Hot Water Under Extreme Pressure',
    heroSubheadline: 'Built to withstand 5 Bar booster pump pressure. Food-grade SS-304 vessel, triple-target vacuum tubes, and zero overnight heat loss.',
    heroStats: [
      { label: 'Operating Pressure', value: 'Up to 5 Bar' },
      { label: 'Inner Tank Material', value: 'SS-304/316L (2.0mm)' },
      { label: 'Heat Retention', value: '72 Hours PUF' }
    ],
    salientFeatures: [
      'Pressure tested up to 5 Bar — 100% safe for automatic hydro-pneumatic booster pumps',
      'Food-grade SS-304 / SS-316L (2.0mm thickness) inner tank suitable for drinking and cooking',
      '50mm high-density automated machine-injected Polyurethane Foam (PUF) insulation',
      'High thermal efficiency Borosilicate 3.3 triple-target ALN/SS/Cu selective coated tubes',
      'Hot-dip galvanized heavy-duty mounting structure engineered for coastal wind zones',
      'Provision for incoloy electric heating backup element with thermostatic safety cut-off'
    ],
    keyBenefits: [
      { title: 'Booster Pump Compatibility', desc: 'No burst risk or tank warping. Specifically designed for multi-jet shower heads and jacuzzi systems operating on high pressure.' },
      { title: 'Zero Fuel & Zero Power Bills', desc: 'Heats water up to 85°C purely through solar radiation, saving thousands of rupees in gas geyser and electric immersion bills.' },
      { title: '72 Hours Overnight Heat Retention', desc: 'Machine-injected 50mm PUF insulation maintains boiling-hot water even during cloudy winter mornings.' },
      { title: 'Food-Grade Safe Water', desc: 'SS-304L stainless steel ensures hot water remains pure, odor-free, non-toxic, and safe for kitchen and bath usage.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Solar Absorption', desc: 'Evacuated tubes absorb solar radiation, transferring heat to the water inside via natural thermosiphon circulation.' },
      { step: '02', title: 'Pressure Storage', desc: 'The heated water is stored in the 5-Bar certified insulated stainless steel vessel without losing pressure or heat.' },
      { step: '03', title: 'Pressurized Delivery', desc: 'When hot taps open, hydro-pneumatic booster pumps push constant high-pressure hot water directly to rain showers.' }
    ],
    applications: [
      { title: 'Luxury Villas & Bungalows', desc: 'Powers multiple rain showers and Jacuzzis simultaneously without dropping water pressure.' },
      { title: 'Hotels, Resorts & Guest Houses', desc: 'Reliable high-pressure hot water supply for demanding hospitality guests in Somnath, Dwarka, and Gir.' },
      { title: 'Hospitals & Nursing Homes', desc: 'Hygienic food-grade sterile hot water for patient sanitation, laundry, and surgical preparation.' },
      { title: 'Hostels & Residential Academies', desc: 'Centralized high-capacity hot water systems serving hundreds of students seamlessly.' }
    ],
    galleryImages: [
      '/media/images/pressurized-solar-water-heater.png',
      '/media/images/hospital-solar-water-heater.jpg',
      '/media/images/luxury-residential-villa.jpg',
      '/media/images/modern-home-gujarat.jpg'
    ],
    specsTable: [
      { capacity: '100 LPD', tubesCount: '10 Tubes', tubesSize: '58 x 1800 mm', members: '2 - 3 Persons', dimensions: '1900 x 950 x 1250 mm' },
      { capacity: '150 LPD', tubesCount: '15 Tubes', tubesSize: '58 x 1800 mm', members: '3 - 4 Persons', dimensions: '1900 x 1350 x 1250 mm' },
      { capacity: '200 LPD', tubesCount: '20 Tubes', tubesSize: '58 x 1800 mm', members: '4 - 6 Persons', dimensions: '1900 x 1750 x 1250 mm' },
      { capacity: '250 LPD', tubesCount: '25 Tubes', tubesSize: '58 x 1800 mm', members: '5 - 7 Persons', dimensions: '1900 x 2150 x 1250 mm' },
      { capacity: '300 LPD', tubesCount: '30 Tubes', tubesSize: '58 x 1800 mm', members: '6 - 9 Persons', dimensions: '1900 x 2550 x 1250 mm' },
      { capacity: '500 LPD', tubesCount: '50 Tubes', tubesSize: '58 x 1800 mm', members: '10 - 15 Persons', dimensions: '1900 x 4150 x 1250 mm' }
    ],
    technicalDetails: {
      innerTank: 'Food-Grade SS-304 / SS-316L (2.0mm Thickness, Argon-Arc Welded)',
      outerTank: 'Rust-Proof Stucco Embossed Aluminum / Pre-Coated Galvanized Steel',
      insulation: '50mm High-Density Machine Injected Polyurethane Foam (PUF)',
      tubes: 'Borosilicate 3.3 Glass, Triple-Target Cu/SS-ALN Coating (58mm x 1800mm)',
      structure: 'Hot-Dip Galvanized Heavy Steel Section (2.0mm), 38° Optimized Tilt',
      pressure: 'Tested to 5.0 Bar Working Pressure (Max Burst 8.0 Bar)',
      coating: 'Multi-layer Optical Absorption (Absorptance > 94%, Emittance < 6%)',
      electricalBackup: 'Optional 2.0 kW / 3.0 kW Incoloy Heating Element with Auto Thermostat',
      warranty: '5 Years Manufacturer Guarantee on Inner Tank'
    },
    brochureUrl: '/media/images/pressurized-solar-water-heater.png',
    capacityRange: '100 to 500 LPD (Expandable to 50,000 LPD)',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about the Pressurized ETC Solar Water Heater Series.',
    faqs: [
      { question: 'Why do I need a pressurized solar water heater?', answer: 'If your home or hotel uses a booster pump to enhance water pressure, standard non-pressurized tanks will rupture. Pressurized tanks can safely handle up to 5 Bar of pressure.' },
      { question: 'Will it work during cloudy or winter days?', answer: 'Yes, evacuated tubes absorb diffused ultraviolet and infrared light even on overcast days. An optional electrical backup element is also installed for prolonged monsoon periods.' },
      { question: 'Is the hot water safe for cooking?', answer: 'Yes, our inner tank is fabricated from food-grade SS-304 stainless steel, ensuring zero chemical toxicity, rust, or odor.' }
    ]
  },
  {
    id: 'diamond',
    slug: 'diamond',
    name: 'Eco Green Diamond',
    category: 'Solar Water Heater',
    categorySlug: 'solar-water-heater',
    tagline: 'Heavy-Duty Domestic Bestseller with Reinforced SS-304 Stainless Steel Vessel',
    badge: 'Domestic Bestseller',
    image: '/media/images/diamond-solar.png',
    shortDesc: 'Argon-arc welded SS-304 grade solar water heater with 50mm injected PUF insulation, corrosion-resistant frame, and 72-hour thermal retention.',
    fullDesc: 'The Eco Green Diamond Series is our flagship domestic solar water heater, installed in more than 25,000 households across Gujarat and Western India. Crafted with precision argon-arc welding from high-purity SS-304 grade stainless steel and insulated with automated 50mm machine-injected PUF, the Diamond Series delivers scalding hot water by 10:30 AM every sunny morning with negligible heat loss overnight.',
    heroPoster: '/media/images/diamond-solar.png',
    heroFallbackImage: '/media/images/diamond-solar.png',
    heroTheme: 'amber',
    heroHeadline: 'Generational Reliability For Indian Households',
    heroSubheadline: 'Tested and trusted across Saurashtra since 2007. SS-304 inner tank, aerodynamic wind-resistant frame, and 5-year replacement guarantee.',
    heroStats: [
      { label: 'Installed Base', value: '25,000+ Homes' },
      { label: 'Inner Vessel', value: 'SS-304 Grade' },
      { label: 'Daily Delivery', value: '60°C – 85°C' }
    ],
    salientFeatures: [
      'High-grade SS-304 food-grade stainless steel inner vessel',
      'Machine-injected 50mm PUF insulation ensuring minimal overnight temperature loss (< 4°C)',
      'High-performance three-target evacuated tubes with absorption efficiency above 94%',
      'Galvanized steel mounting structure powder-coated for corrosion resistance',
      'Zero maintenance gravity-fed thermosiphon operation with no electric power needed',
      '5-Year Comprehensive Manufacturer Guarantee directly backed by Metoda factory'
    ],
    keyBenefits: [
      { title: 'Save ₹15,000+ Every Year', desc: 'Replaces LPG gas cylinders and electric geysers, paying for its entire capital cost within 2 years.' },
      { title: 'Generational Lifespan', desc: 'Durable SS-304 stainless steel with double passivation resists rust and mineral scaling.' },
      { title: 'Rapid Morning Heating', desc: 'Three-target selective coating captures morning solar radiation to deliver hot water early in the day.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Sunlight Capture', desc: 'Evacuated glass tubes convert solar photons into heat energy inside the inner tube channel.' },
      { step: '02', title: 'Thermosiphon Flow', desc: 'Hot water naturally rises into the insulated tank while cooler water sinks down into the tubes.' },
      { step: '03', title: 'Hot Tap Supply', desc: 'Gravity flows hot water directly to bathrooms and kitchen taps without running electric pumps.' }
    ],
    applications: [
      { title: 'Individual Bungalows & Villas', desc: 'Ideal for 3 to 10 family members needing continuous hot water for bathing and cleaning.' },
      { title: 'Apartment Top Floors', desc: 'Gravity-fed installation on rooftop slabs serving domestic household hot water taps.' },
      { title: 'Farmhouses & Rural Residences', desc: 'Operates completely off-grid with zero reliance on electricity or LPG supply.' }
    ],
    galleryImages: [
      '/media/images/diamond-solar.png',
      '/media/images/modern-home-gujarat.jpg',
      '/media/images/luxury-residential-villa.jpg'
    ],
    specsTable: [
      { capacity: '100 LPD', tubesCount: '10 Tubes', tubesSize: '58 x 1800 mm', members: '2 - 3 Persons', dimensions: '1900 x 950 x 1250 mm' },
      { capacity: '150 LPD', tubesCount: '15 Tubes', tubesSize: '58 x 1800 mm', members: '3 - 4 Persons', dimensions: '1900 x 1350 x 1250 mm' },
      { capacity: '200 LPD', tubesCount: '20 Tubes', tubesSize: '58 x 1800 mm', members: '4 - 6 Persons', dimensions: '1900 x 1750 x 1250 mm' },
      { capacity: '250 LPD', tubesCount: '25 Tubes', tubesSize: '58 x 1800 mm', members: '5 - 7 Persons', dimensions: '1900 x 2150 x 1250 mm' },
      { capacity: '300 LPD', tubesCount: '30 Tubes', tubesSize: '58 x 1800 mm', members: '6 - 9 Persons', dimensions: '1900 x 2550 x 1250 mm' }
    ],
    technicalDetails: {
      innerTank: 'Argon-Arc Welded SS-304 Grade Stainless Steel (1.2mm – 1.5mm)',
      outerTank: 'Powder-Coated Rust-Proof Mild Steel / Aluminum Cladding',
      insulation: '50mm High-Density Polyurethane Foam (PUF)',
      tubes: 'Borosilicate 3.3 High Absorption Triple Target Evacuated Tubes',
      structure: 'Heavy Galvanized MS Section with Anti-Corrosive Powder Coating',
      pressure: 'Designed for Gravity Head Pressure (Tested to 0.5 Bar)',
      warranty: '5 Years Manufacturer Warranty'
    },
    brochureUrl: '/media/images/diamond-solar.png',
    capacityRange: '100 to 300 LPD',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about the Eco Green Diamond Solar Water Heater.',
    faqs: [
      { question: 'What is the daily temperature achieved by the Diamond Series?', answer: 'Under clear Gujarat sunlight, the Diamond series achieves water temperatures between 65°C and 85°C.' },
      { question: 'Can it be installed on a sloped roof?', answer: 'Yes, we manufacture custom sloped-roof mounting brackets engineered specifically for mangalore tile and metal sheds.' }
    ]
  },
  {
    id: 'glass-line',
    slug: 'eco-green-glass-line',
    name: 'Eco Green Glass Line',
    category: 'Solar Water Heater',
    categorySlug: 'solar-water-heater',
    tagline: '850°C Vitreous Enamel Coated Inner Tank for Extreme Hard Water & High TDS',
    badge: 'TDS & Hard Water Specialist',
    image: '/media/images/glassline-solar.png',
    shortDesc: 'Vitreous enamel glass-lined inner tank fused at 850°C to create an impervious ceramic barrier against chloride corrosion, hard water, and scaling.',
    fullDesc: 'In geographical zones with severe groundwater hardness (TDS exceeding 1,500 ppm and elevated chlorides), traditional stainless steel can suffer from crevice corrosion and pitting. The Eco Green Glass Line solves this challenge by fusing specialized vitreous ceramic enamel to a heavy-gauge steel vessel at 850°C. The resulting glass-lined surface is 100% rust-proof, impervious to hard water minerals, and backed by a sacrificial magnesium anode for lifelong cathodic protection.',
    heroPoster: '/media/images/glassline-solar.png',
    heroFallbackImage: '/media/images/glassline-solar.png',
    heroTheme: 'teal',
    heroHeadline: 'The Ultimate Weapon Against Hard Water Corrosion',
    heroSubheadline: '850°C vitreous enamel coating. Complete protection against high TDS, borewell groundwater, and chloride scaling across Saurashtra.',
    heroStats: [
      { label: 'Fusion Temperature', value: '850°C Enamel' },
      { label: 'Water Suitability', value: 'TDS up to 3000 PPM' },
      { label: 'Cathodic Protection', value: 'Magnesium Anode' }
    ],
    salientFeatures: [
      'Heavy-duty carbon steel vessel coated with imported vitreous enamel baked at 850°C',
      'Sacrificial magnesium anode rod provides active cathodic rust protection',
      'Completely impervious to calcium deposits, scaling, chloride pitting, and hard water',
      'Automated PUF insulation ensures zero heat loss during cold nights',
      'Available in both gravity-fed and pressure-rated variants for booster pumps',
      '7-Year Extended Factory Warranty on vitreous enamel inner vessel'
    ],
    keyBenefits: [
      { title: 'Tolerates High Borewell TDS', desc: 'Engineered specifically for Rajkot, Morbi, Jamnagar, and Mehsana regions with aggressive groundwater.' },
      { title: 'Scale-Repellent Glass Finish', desc: 'Ultra-smooth vitreous glass lining prevents limescale buildup from adhering to the tank walls.' },
      { title: 'Double Corrosion Defense', desc: 'Enamel barrier combined with replaceable magnesium anode guarantees decades of trouble-free heating.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Solar Absorption', desc: 'Evacuated glass tubes absorb solar heat and circulate water into the enamel-lined cylinder.' },
      { step: '02', title: 'Ceramic Enamel Barrier', desc: 'Water only touches the non-reactive 850°C vitreous glass layer, preventing any chemical reaction with the metal.' },
      { step: '03', title: 'Magnesium Cathodic Guard', desc: 'The magnesium anode sacrifices itself to neutralize any trace electrolytic corrosion in hard water.' }
    ],
    applications: [
      { title: 'Borewell & Hard Water Zones', desc: 'Villas, bungalows, and farmhouses where tap water has high TDS or mineral hardness.' },
      { title: 'Hotels & Coastal Establishments', desc: 'Properties in Somnath, Veraval, and Porbandar exposed to saline water conditions.' },
      { title: 'Industrial Units with Untreated Water', desc: 'Provides hot process water without premature tank breakdown from aggressive water chemistry.' }
    ],
    galleryImages: [
      '/media/images/glassline-solar.png',
      '/media/images/modern-home-gujarat.jpg',
      '/media/images/luxury-residential-villa.jpg'
    ],
    specsTable: [
      { capacity: '100 LPD', tubesCount: '10 Tubes', tubesSize: '58 x 1800 mm', members: '2 - 3 Persons', dimensions: '1900 x 950 x 1250 mm' },
      { capacity: '150 LPD', tubesCount: '15 Tubes', tubesSize: '58 x 1800 mm', members: '3 - 4 Persons', dimensions: '1900 x 1350 x 1250 mm' },
      { capacity: '200 LPD', tubesCount: '20 Tubes', tubesSize: '58 x 1800 mm', members: '4 - 6 Persons', dimensions: '1900 x 1750 x 1250 mm' },
      { capacity: '250 LPD', tubesCount: '25 Tubes', tubesSize: '58 x 1800 mm', members: '5 - 7 Persons', dimensions: '1900 x 2150 x 1250 mm' },
      { capacity: '300 LPD', tubesCount: '30 Tubes', tubesSize: '58 x 1800 mm', members: '6 - 9 Persons', dimensions: '1900 x 2550 x 1250 mm' },
      { capacity: '500 LPD', tubesCount: '50 Tubes', tubesSize: '58 x 1800 mm', members: '10 - 15 Persons', dimensions: '1900 x 4150 x 1250 mm' }
    ],
    technicalDetails: {
      innerTank: 'Vitreous Enamel Glass-Lined Carbon Steel (2.0mm – 2.5mm, 850°C Baked)',
      outerTank: 'Powder-Coated High Weather-Resistant Galvanized Steel',
      insulation: '50mm High-Density Injected Polyurethane Foam',
      tubes: 'Borosilicate 3.3 High Efficiency Vacuum Tubes with Multi-Target Absorber',
      structure: 'Heavy Galvanized Angle Structure (2.0mm Thickness)',
      pressure: 'Available in Standard (0.5 Bar) and Pressurized (4.0 Bar) Variants',
      coating: 'Vitreous Ceramic Glass Enamel + Magnesium Sacrificial Anode',
      warranty: '7 Years Inner Tank Guarantee'
    },
    brochureUrl: '/media/images/glassline-solar.png',
    capacityRange: '100 to 500 LPD',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about the Glass Line Solar Water Heater for hard water.',
    faqs: [
      { question: 'What is the advantage of Glass Line over Stainless Steel?', answer: 'Stainless steel can corrode if water has high chloride or TDS over 1,500 ppm. Vitreous glass enamel creates an inert glass shield that cannot rust or react with minerals.' },
      { question: 'How often does the magnesium anode need replacement?', answer: 'Depending on groundwater hardness, the sacrificial magnesium anode typically lasts 3 to 5 years and can be replaced easily during routine servicing.' }
    ]
  },
  {
    id: 'pearl',
    slug: 'pearl',
    name: 'Eco Green Pearl',
    category: 'Solar Water Heater',
    categorySlug: 'solar-water-heater',
    tagline: 'High Thermal Yield Solar Water Heater for Value-Conscious Homes',
    badge: 'High Thermal Yield',
    image: '/media/images/pearl-solar.png',
    shortDesc: 'Passivated stainless steel tank with triple-layer vacuum tubes delivering rapid thermal heating and reliable long-term domestic service.',
    fullDesc: 'The Eco Green Pearl Series is engineered to provide premium renewable water heating at an accessible domestic price point. Utilizing passivated stainless steel tanks and high-yield borosilicate vacuum tubes, the Pearl Series ensures maximum daily solar radiation conversion, delivering boiling-hot water by mid-morning for families seeking dependable, eco-friendly energy independence.',
    heroPoster: '/media/images/pearl-solar.png',
    heroFallbackImage: '/media/images/pearl-solar.png',
    heroTheme: 'slate',
    heroHeadline: 'Smart Energy Independence For Every Household',
    heroSubheadline: 'Engineered for high daily yield and trouble-free maintenance. Delivered and serviced directly by Eco Green Solar engineers.',
    heroStats: [
      { label: 'Thermal Recovery', value: 'Rapid Heating' },
      { label: 'Inner Vessel', value: 'Passivated SS' },
      { label: 'Daily Output', value: 'Up to 80°C' }
    ],
    salientFeatures: [
      'Passivated stainless steel inner tank preventing oxidation',
      'High absorption borosilicate 3.3 three-target evacuated tubes',
      '50mm dense PUF thermal insulation with zero CFC blowing agents',
      'Lightweight and aerodynamic galvanized steel mounting frame',
      'Natural gravity thermosiphon flow requiring zero grid electricity',
      '5-Year Manufacturer Warranty with genuine spare parts support'
    ],
    keyBenefits: [
      { title: 'Budget-Friendly Green Living', desc: 'Brings high-efficiency solar water heating within reach of every budget without compromising on materials.' },
      { title: 'Zero Electrical Reliance', desc: 'Functions 100% independently of electricity bills or grid load shedding.' },
      { title: 'Quick & Clean Installation', desc: 'Can be installed on standard residential terrace slabs within 4 to 6 hours.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Direct Solar Capture', desc: 'Solar vacuum tubes collect UV and infrared rays, directly warming water inside the tube channel.' },
      { step: '02', title: 'Internal Tank Rising', desc: 'Hot water naturally rises up into the insulated storage tank via gravity thermosiphon circulation.' },
      { step: '03', title: 'Domestic Tap Distribution', desc: 'Supplies piping directly to domestic bathroom and wash basins.' }
    ],
    applications: [
      { title: 'Residential Households', desc: 'Standard 2 to 4 member households desiring clean, free hot water every morning.' },
      { title: 'Small Row Houses & Tenements', desc: 'Fits easily on small terrace slabs with minimal structural footprint.' }
    ],
    galleryImages: [
      '/media/images/pearl-solar.png',
      '/media/images/modern-home-gujarat.jpg'
    ],
    specsTable: [
      { capacity: '100 LPD', tubesCount: '10 Tubes', tubesSize: '58 x 1800 mm', members: '2 - 3 Persons', dimensions: '1900 x 950 x 1250 mm' },
      { capacity: '150 LPD', tubesCount: '15 Tubes', tubesSize: '58 x 1800 mm', members: '3 - 4 Persons', dimensions: '1900 x 1350 x 1250 mm' },
      { capacity: '200 LPD', tubesCount: '20 Tubes', tubesSize: '58 x 1800 mm', members: '4 - 6 Persons', dimensions: '1900 x 1750 x 1250 mm' },
      { capacity: '250 LPD', tubesCount: '25 Tubes', tubesSize: '58 x 1800 mm', members: '5 - 7 Persons', dimensions: '1900 x 2150 x 1250 mm' }
    ],
    technicalDetails: {
      innerTank: 'Passivated Stainless Steel Vessel (1.2mm Thickness)',
      outerTank: 'Pre-Painted Galvanized Sheet',
      insulation: '50mm Polyurethane Foam (PUF)',
      tubes: 'Borosilicate 3.3 Vacuum Tubes (58mm x 1800mm)',
      structure: 'Galvanized Steel Powder Coated Frame',
      pressure: 'Gravity Fed (0.5 Bar)',
      warranty: '5 Years Manufacturer Guarantee'
    },
    brochureUrl: '/media/images/pearl-solar.png',
    capacityRange: '100 to 250 LPD',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about the Eco Green Pearl Solar Water Heater.',
    faqs: [
      { question: 'What is the difference between Pearl and Diamond?', answer: 'The Diamond series features a thicker reinforced SS-304 vessel with heavy-duty coastal wind frame, while Pearl is optimized for standard domestic residential use.' }
    ]
  },
  {
    id: 'copper',
    slug: 'copper',
    name: 'Eco Green Copper',
    category: 'Solar Water Heater',
    categorySlug: 'solar-water-heater',
    tagline: 'High-Purity Copper Coil Heat Exchanger for Pressurized Hard Water Performance',
    badge: 'Copper Coil Heat Exchanger',
    image: '/media/images/copper-solar-heater.png',
    shortDesc: 'Closed-loop heat exchanger system with internal seamless copper coil. Cold pressurized water passes through the coil and heats instantly without tank pressure.',
    fullDesc: 'The Eco Green Copper Coil Series utilizes advanced indirect heat exchanger engineering. The primary tank acts as an unpressurized solar heat battery. A continuous seamless high-grade copper coil is immersed inside this hot water reservoir. Fresh cold water enters through the copper coil under full municipal or booster pump pressure, heating instantly as it flows through. Because the main tank remains under zero pressure, it offers lifetime longevity while delivering unlimited high-pressure hot water.',
    heroVideo: '/media/videos/fluid-dynamics-reel.webm',
    heroPoster: '/media/images/copper-solar-heater.png',
    heroFallbackImage: '/media/images/copper-solar-heater.png',
    heroTheme: 'amber',
    heroHeadline: 'Instant Pressurized Hot Water via Pure Copper Exchanger',
    heroSubheadline: 'Main tank remains pressure-free while delivering instant pressurized hot water through continuous high-grade copper coil.',
    heroStats: [
      { label: 'Exchanger Material', value: '99.9% Pure Copper' },
      { label: 'Thermal Conductivity', value: '400 W/m·K' },
      { label: 'Working Pressure', value: 'Up to 6 Bar in Coil' }
    ],
    salientFeatures: [
      'High-purity seamless red copper coil with exceptional 400 W/m·K thermal conductivity',
      'Fresh instant hot water heating — eliminates stagnant storage water odor',
      'Main solar vessel stays unpressurized, eliminating tank burst and weld fatigue risks',
      'Can handle high pump pressure up to 6 Bar inside the copper coil channel',
      'Superior resistance to scale buildup due to high-velocity water movement through copper',
      '7-Year Warranty on internal copper heat exchanger system'
    ],
    keyBenefits: [
      { title: 'Fresh & Hygienic Flow', desc: 'Water is heated on-demand as it passes through the copper coil, ensuring fresh, uncontaminated drinking-grade hot water.' },
      { title: 'High Pressure with Zero Tank Stress', desc: 'Allows direct connection to multi-stage booster pumps without requiring an expensive pressurized tank structure.' },
      { title: 'Copper Antimicrobial Properties', desc: 'Natural copper surfaces inhibit bacteria and biofilm growth inside the water channel.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Solar Heat Reservoir', desc: 'Evacuated tubes heat the stationary water inside the main insulated storage cylinder.' },
      { step: '02', title: 'High-Speed Heat Transfer', desc: 'When hot taps open, pressurized cold water flows through the immersed copper coil and absorbs thermal energy instantaneously.' },
      { step: '03', title: 'Pressurized Delivery', desc: 'Water exits the copper coil at high pressure and boiling temperature straight to luxury shower heads.' }
    ],
    applications: [
      { title: 'Multi-Storey Luxury Residences', desc: 'Provides pressurized hot water across 3 to 4 floors with zero tank rupture danger.' },
      { title: 'Boutique Hotels & Homestays', desc: 'Instantaneous hot water flow meeting modern guest shower standards with zero scale clogs.' },
      { title: 'Hard Water & Mineral Regions', desc: 'Copper heat exchange isolates the pressure system from aggressive groundwater deposits.' }
    ],
    galleryImages: [
      '/media/images/copper-solar-heater.png',
      '/media/images/luxury-residential-villa.jpg',
      '/media/images/modern-home-gujarat.jpg'
    ],
    specsTable: [
      { capacity: '150 LPD', tubesCount: '15 Tubes', tubesSize: '58 x 1800 mm', members: '3 - 4 Persons', dimensions: '1900 x 1350 x 1250 mm' },
      { capacity: '200 LPD', tubesCount: '20 Tubes', tubesSize: '58 x 1800 mm', members: '4 - 6 Persons', dimensions: '1900 x 1750 x 1250 mm' },
      { capacity: '250 LPD', tubesCount: '25 Tubes', tubesSize: '58 x 1800 mm', members: '5 - 7 Persons', dimensions: '1900 x 2150 x 1250 mm' },
      { capacity: '300 LPD', tubesCount: '30 Tubes', tubesSize: '58 x 1800 mm', members: '6 - 9 Persons', dimensions: '1900 x 2550 x 1250 mm' },
      { capacity: '500 LPD', tubesCount: '50 Tubes', tubesSize: '58 x 1800 mm', members: '10 - 15 Persons', dimensions: '1900 x 4150 x 1250 mm' }
    ],
    technicalDetails: {
      innerTank: 'SS-304 Stainless Steel Stationary Heat Reservoir with Internal Seamless Copper Coil',
      outerTank: 'Aluminum Alloy Stucco Sheet / Rust-Proof Pre-Painted Steel',
      insulation: '50mm High-Density Machine-Injected PUF',
      tubes: 'Borosilicate 3.3 High-Absorption Three-Target Evacuated Tubes',
      structure: 'Galvanized 2.0mm Heavy Steel Frame with Protective Coating',
      pressure: 'Zero Pressure in Main Tank; Up to 6.0 Bar Inside Copper Coil',
      warranty: '7 Years Heat Exchanger & Tank Warranty'
    },
    brochureUrl: '/media/images/copper-solar-heater.png',
    capacityRange: '150 to 500 LPD',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about the Copper Coil Solar Water Heater.',
    faqs: [
      { question: 'How does the copper coil deliver pressurized water without a pressurized tank?', answer: 'The main tank holds hot water at atmospheric pressure. The copper coil inside carries the pressurized cold water, which gets heated in real-time as it flows through.' }
    ]
  },
  {
    id: 'heat-pump',
    slug: 'heat-pump',
    name: 'Air-Source Heat Pump',
    category: 'Thermodynamic Water Heating',
    categorySlug: 'heat-pump',
    tagline: 'Save Up to 75% on Commercial & Domestic Water Heating Electricity',
    badge: 'COP 4.2+ High Efficiency',
    image: '/media/images/heat-pump-hero.jpg',
    shortDesc: 'Thermodynamic air-source heat pump extracting ambient atmospheric heat to deliver 60°C hot water day, night, and rain with up to 75% power savings.',
    fullDesc: 'The Eco Green Thermodynamic Air-Source Heat Pump represents the state-of-the-art in energy-efficient water heating. Unlike traditional electric geysers that convert electricity directly into heat (1 kW in = 1 kW heat), our heat pump absorbs renewable thermal energy from the ambient air, achieving a Coefficient of Performance (COP) up to 4.2 (1 kW in = 4.2 kW heat output). This reduces water heating power bills by 70% to 75%, making it the ideal solution for luxury hotels, hospitals, and bungalows.',
    heroVideo: '/media/videos/energy-reel.mp4',
    heroPoster: '/media/images/heat-pump-hero.jpg',
    heroFallbackImage: '/media/images/heat-pump-hero.jpg',
    heroTheme: 'green',
    heroHeadline: '75% Less Electricity. 24x7 Reliable Hot Water.',
    heroSubheadline: 'Harnesses thermodynamic air heat to heat water day and night. Operates flawlessly in winter, monsoon, and coastal Gujarat climates.',
    heroStats: [
      { label: 'Electricity Savings', value: 'Up to 75%' },
      { label: 'Efficiency Rating', value: 'COP 4.2+' },
      { label: 'Operating Range', value: '-7°C to 45°C' }
    ],
    salientFeatures: [
      'High Coefficient of Performance (COP > 4.2) delivering 4.2 kW heat for every 1 kW power consumed',
      'Eco-friendly R410A / R134a refrigerant with zero ozone depletion potential',
      'Smart micro-processor digital controller with programmable timers and water temperature presets',
      'Works seamlessly 24 hours a day, 365 days a year — completely independent of sunshine or clouds',
      'High-efficiency titanium / tube-in-shell heat exchanger resistant to scaling and corrosion',
      'Modular commercial configurations scalable from 200 LPD up to 100,000 LPD for hotels and hospitals'
    ],
    keyBenefits: [
      { title: '75% Lower Operational Cost', desc: 'Slashes electric water heating power bills by three-quarters compared to traditional industrial geysers.' },
      { title: '24/7 Weather-Proof Supply', desc: 'Unlike solar systems that depend on daylight, heat pumps operate 24 hours a day in monsoon, winter, and night.' },
      { title: 'Compact Footprint', desc: 'Requires a fraction of the terrace area required by traditional solar collector arrays.' },
      { title: 'Smart Automated Scheduling', desc: 'Program desired bath temperatures and heating cycles directly from a digital control console.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Air Heat Extraction', desc: 'Fan draws ambient atmospheric air over the evaporator coil where liquid refrigerant absorbs low-grade heat.' },
      { step: '02', title: 'Refrigerant Compression', desc: 'Scroll compressor pressurizes the warmed refrigerant vapor, elevating its temperature up to 85°C.' },
      { step: '03', title: 'High-Yield Heat Transfer', desc: 'Hot refrigerant passes through a heat exchanger, transferring thermal energy directly to cold water, which flows into the storage tank.' }
    ],
    applications: [
      { title: 'Hotels, Resorts & Clubs', desc: 'Delivers thousands of liters of hot water for guest bathrooms, commercial kitchens, and guest laundries.' },
      { title: 'Hospitals & Medical Centers', desc: 'Sterile continuous hot water for patient wards, OT sanitization, and laundry facilities.' },
      { title: 'Luxury Residential Bungalows', desc: 'Centralized hot water plant connected to multi-jet showers and jacuzzis with smart touch controls.' },
      { title: 'Swimming Pool Heating', desc: 'Maintains ideal 28°C to 30°C pool temperatures throughout chilly winter months at a fraction of boiler costs.' }
    ],
    galleryImages: [
      '/media/images/heat-pump-hero.jpg',
      '/media/images/heat-pump-engineering.jpg',
      '/media/images/commercial-heatpump.webp',
      '/media/images/hospital-solar-water-heater.jpg'
    ],
    specsTable: [
      { capacity: '200 LPD', members: 'Villas (3-5 Person)', dimensions: 'COP 4.0 | 0.8 kW Input', tubesCount: '3.2 kW Heating Capacity' },
      { capacity: '300 LPD', members: 'Large Villa (6-8 Person)', dimensions: 'COP 4.2 | 1.1 kW Input', tubesCount: '4.6 kW Heating Capacity' },
      { capacity: '500 LPD', members: 'Bungalow / Clinic', dimensions: 'COP 4.2 | 1.8 kW Input', tubesCount: '7.5 kW Heating Capacity' },
      { capacity: '1000 LPD', members: 'Hotel (10-15 Rooms)', dimensions: 'COP 4.3 | 3.5 kW Input', tubesCount: '15.0 kW Heating Capacity' },
      { capacity: '3000 LPD+', members: 'Commercial & Hospital', dimensions: 'Custom Engineering', tubesCount: 'Modular Cascade Systems' }
    ],
    technicalDetails: {
      innerTank: 'High-Grade SS-304 / Dual Coated Enamel Vessel with 50mm Injected PUF',
      outerTank: 'Powder-Coated Weatherproof Acoustic Sound-Dampening Metal Casing',
      insulation: 'High-Density Closed Cell Polyurethane Foam',
      tubes: 'High Efficiency Rotary / Scroll Compressor with R410A Eco Refrigerant',
      structure: 'Anti-Vibration Floor Mounting Rubber Bushing Section',
      pressure: 'Rated up to 5.0 Bar Working Water Pressure',
      efficiency: 'COP 4.2+ (Heat Output / Power Input Ratio)',
      warranty: '2 Years Comprehensive, 5 Years Compressor Warranty'
    },
    brochureUrl: '/media/images/heat-pump-hero.jpg',
    capacityRange: '200 to 10,000+ LPD',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about Air-Source Heat Pump water heating systems.',
    faqs: [
      { question: 'How can a heat pump produce heat from cold air?', answer: 'Heat pumps use thermodynamic refrigerant cycles similar to a reverse air conditioner. Even at 10°C ambient air, there is substantial heat energy that the refrigerant absorbs and concentrates into hot water.' },
      { question: 'Can it be combined with a solar water heater?', answer: 'Yes! Hybrid Solar + Heat Pump installations use solar as primary during daylight, and heat pumps as seamless backup during nighttime or rain, maximizing energy savings.' }
    ]
  },
  {
    id: 'pressure-pump',
    slug: 'pressure-pump',
    name: 'Pressure Booster Pump',
    category: 'Hydro-Pneumatic Systems',
    categorySlug: 'pressure-pump',
    tagline: 'Automated Multi-Stage Hydro-Pneumatic Constant Water Pressure for Luxury Living',
    badge: 'Hydro-Pneumatic System',
    image: '/media/images/pressure-pump.png',
    shortDesc: 'Automated multistage stainless steel centrifugal booster pump with smart flow-switch pressure controller for constant multi-point water pressure.',
    fullDesc: 'Modern residences and luxury bathrooms demand robust water pressure for rain showers, body jets, jacuzzis, and modern thermostatic mixing valves. Gravity water tanks on terrace slabs frequently provide inadequate head pressure. Eco Green Pressure Booster Pumps incorporate multi-stage stainless steel impellers, intelligent pressure controllers, and diaphragm pressure tanks to ensure silent, automated, and continuous high-pressure water delivery across every tap in your property.',
    heroPoster: '/media/images/hydro-pressure-water.jpg',
    heroFallbackImage: '/media/images/pressure-pump.png',
    heroTheme: 'blue',
    heroHeadline: 'Transform Every Shower Into A Luxury Experience',
    heroSubheadline: 'Silent multi-stage stainless steel impellers and smart pressure sensing. Eliminates low-pressure trickles across all bathrooms simultaneously.',
    heroStats: [
      { label: 'Working Pressure', value: '2.5 to 5.0 Bar' },
      { label: 'Impeller Material', value: 'SS-304 Multistage' },
      { label: 'Automation', value: 'Flow & Pressure Switch' }
    ],
    salientFeatures: [
      'Multi-stage centrifugal design crafted with SS-304 stainless steel impellers and diffuser stages',
      'Automatic digital flow and pressure switch starts pump when taps open, stops when taps close',
      'Built-in dry-run protection prevents motor burnout if overhead tank water runs out',
      'Ultra-silent operation with water-cooled / TEFC thermal overload protected motor',
      'Pre-charged butyl diaphragm hydro-pneumatic pressure vessel prevents pipe hammer shocks',
      'Energy efficient motor with low power consumption and continuous duty capability'
    ],
    keyBenefits: [
      { title: 'Constant High Pressure', desc: 'Maintains uniform 3 to 4.5 Bar water pressure even when 4 rain showers and kitchen taps run simultaneously.' },
      { title: 'Whisper-Quiet Operation', desc: 'Advanced hydraulic engineering ensures negligible operational noise inside living spaces.' },
      { title: 'Dry-Run Safety Shutoff', desc: 'Automatically senses empty supply tanks and shuts down safely to avoid impeller overheating.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Pressure Monitoring', desc: 'The digital sensor continuously monitors pipeline hydraulic pressure against preset limits.' },
      { step: '02', title: 'Automated Kick-In', desc: 'When any bathroom shower or faucet opens, pressure drops and the pump starts smoothly within milliseconds.' },
      { step: '03', title: 'Automatic Standby', desc: 'When all taps are shut, the system re-pressurizes the diaphragm vessel and returns to low-power standby.' }
    ],
    applications: [
      { title: 'Multi-Bathroom Luxury Villas', desc: 'Powers multiple rain showers, diverters, and body sprays with equal force.' },
      { title: 'Hotels, Clubs & Resorts', desc: 'Maintains hotel-standard high water pressure for demanding guests on top floors.' },
      { title: 'Drip Irrigation & Greenhouses', desc: 'Supplies uniform pressurized water for micro-sprinklers and misting systems.' }
    ],
    galleryImages: [
      '/media/images/pressure-pump.png',
      '/media/images/hydro-pressure-water.jpg',
      '/media/images/luxury-residential-villa.jpg'
    ],
    specsTable: [
      { capacity: '0.5 HP (1-2 Baths)', members: '2 Bathrooms', dimensions: 'Flow: 35 LPM | 2.5 Bar', tubesCount: 'Single Phase 230V' },
      { capacity: '1.0 HP (2-4 Baths)', members: '4 Bathrooms', dimensions: 'Flow: 60 LPM | 3.5 Bar', tubesCount: 'Single Phase 230V' },
      { capacity: '1.5 HP (4-6 Baths)', members: '6 Bathrooms', dimensions: 'Flow: 90 LPM | 4.2 Bar', tubesCount: 'Single Phase 230V' },
      { capacity: '2.0 HP (6-10 Baths)', members: '8+ Bathrooms', dimensions: 'Flow: 120 LPM | 5.0 Bar', tubesCount: 'Three Phase / 1-Phase' },
      { capacity: 'Commercial Dual Pump', members: 'Hotels & Hospitals', dimensions: 'Duplex Automated System', tubesCount: 'Duty / Standby Alternator' }
    ],
    technicalDetails: {
      innerTank: 'Multi-Stage Centrifugal SS-304 Impellers and Stainless Shaft',
      outerTank: 'Cast Iron Pump Body with Electro-Coating / SS Housing',
      insulation: 'Class F Insulation, IP55 Water Ingress Protection',
      tubes: 'Butyl Rubber Diaphragm Pressure Vessel (24L / 50L)',
      structure: 'Rigid Vibration-Absorbing Base Mounting Plate',
      pressure: 'Working Pressure 2.5 Bar – 5.0 Bar (Max Shutoff Head 55m)',
      warranty: '2 Years Manufacturer Warranty'
    },
    brochureUrl: '/media/images/pressure-pump.png',
    capacityRange: '0.5 HP to 5.0 HP',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about Automatic Pressure Booster Pumps.',
    faqs: [
      { question: 'Will the pump run continuously when taps are closed?', answer: 'No, the intelligent pressure switch stops the motor completely once pipeline pressure is restored. It only runs when water is actively drawn.' },
      { question: 'Can it be installed with a solar water heater?', answer: 'Yes! When installed with our Pressurized ETC Series or Copper Coil Series solar water heaters, it provides constant high-pressure hot and cold water.' }
    ]
  },
  {
    id: 'cleanx-nozzles',
    slug: 'cleanx-nozzles',
    name: 'CleanX Automatic Cleaning Nozzles',
    category: 'Solar Maintenance',
    categorySlug: 'solar-maintenance',
    tagline: 'Automated Solar Panel Water Spray Cleaning System — Recover Up to 35% Generation Loss',
    badge: 'Solar Generation Booster',
    image: '/media/images/cleanx-nozzles.png',
    shortDesc: 'Automated precision water spray nozzles mounted on solar modules for scheduled daily dust removal without manual labor or panel micro-cracks.',
    fullDesc: 'Dust, industrial soot, bird droppings, and agricultural pollen accumulate rapidly on rooftop solar panels across Gujarat, causing generation losses between 15% to 35%. Manual cleaning using wipers and ladders is hazardous, damages glass with micro-cracks, and consumes excessive time. CleanX Automatic Cleaning Nozzles deliver an engineered automated spray wash across each module using optimized water jets, keeping panels spotless and maximizing clean electricity generation.',
    heroVideo: '/media/videos/solar-hero-scroll.mp4',
    heroPoster: '/media/images/cleanx-nozzles.png',
    heroFallbackImage: '/media/images/cleanx-nozzles.png',
    heroTheme: 'teal',
    heroHeadline: 'Recover 35% Generation Loss With Automated Panel Washing',
    heroSubheadline: 'Scheduled daily morning water wash. Zero ladder climbing, zero labor costs, and zero risk of micro-cracks on your solar investment.',
    heroStats: [
      { label: 'Generation Recovery', value: 'Up to 35%' },
      { label: 'Labor Elimination', value: '100% Automated' },
      { label: 'Water Conservation', value: 'Low Volume Mist' }
    ],
    salientFeatures: [
      'Precision brass and engineered polymer fan nozzles calibrated for uniform solar glass coverage',
      'Programmable timer controller activates cleaning cycle early morning before sunrise',
      'Consumes 70% less water than manual hose pipe washing through calibrated misting jets',
      'Eliminates safety risks of technicians climbing slippery high-slope industrial roofs',
      'Prevents module micro-cracks and hotspots caused by workers walking on panel frames',
      'Compatible with residential rooftop setups, commercial sheds, and ground-mounted MW plants'
    ],
    keyBenefits: [
      { title: 'Maintain Peak Solar Yield', desc: 'Prevents dust buildup from diminishing daily kilowatt-hour generation, paying for itself in added electricity credits.' },
      { title: 'Zero Labor Overhead', desc: 'No need to hire cleaning contractors or risk employee falls on steep factory sheds.' },
      { title: 'Protects Panel Warranties', desc: 'Gentle water spray prevents abrasive micro-scratches caused by dusty dry wipe cloths.' }
    ],
    howItWorksSteps: [
      { step: '01', title: 'Automated Timer Signal', desc: 'At scheduled morning hours (e.g. 6:00 AM before panel heat-up), the smart controller triggers the booster valve.' },
      { step: '02', title: 'High-Velocity Fan Spray', desc: 'CleanX nozzles spray a calibrated fan of pressurized water across the top edge of each solar module.' },
      { step: '03', title: 'Gravity Washdown', desc: 'Water sheets down the 15°–25° panel incline, carrying away dust, bird droppings, and soot into gutters.' }
    ],
    applications: [
      { title: 'Industrial Rooftops in GIDC Zones', desc: 'Essential for factories in Rajkot, Morbi, and Ahmedabad exposed to airborne industrial dust.' },
      { title: 'High Residential Bungalows', desc: 'Safely cleans panels installed on elevated roof structures with zero ladder climbing.' },
      { title: 'Commercial & Institutional Solar Sheds', desc: 'Automates maintenance across large multi-row installations with centralized control.' }
    ],
    galleryImages: [
      '/media/images/cleanx-nozzles.png',
      '/media/images/solar-panels-roof-hero.jpg',
      '/media/images/solar-commercial-rooftop.jpg'
    ],
    specsTable: [
      { capacity: '3 kW to 5 kW (6-10 Panels)', members: 'Residential Roof', dimensions: '1 Nozzle per Panel', tubesCount: '0.5 HP Pump + Timer' },
      { capacity: '10 kW to 25 kW (20-50 Panels)', members: 'Commercial Shed', dimensions: 'High Pressure Pipe Grid', tubesCount: '1.0 HP Pump + Solenoid' },
      { capacity: '50 kW to 100 kW+ (100+ Panels)', members: 'Industrial Plant', dimensions: 'Zoned Automated Flushing', tubesCount: 'Multi-Valve Controller' }
    ],
    technicalDetails: {
      innerTank: 'Precision Engineered Polymer / Brass Core Spray Nozzles',
      outerTank: 'UV-Stabilized High Pressure Food-Grade Piping',
      insulation: 'Automated Digital Timer Controller with Rain Sensor Support',
      tubes: '120° Wide Angle Flat Fan Spray Pattern',
      structure: 'Stainless Steel Non-Penetrative Panel Clamp Mountings',
      pressure: 'Operating Water Pressure 2.0 Bar to 3.5 Bar',
      warranty: '2 Years Manufacturer Warranty'
    },
    brochureUrl: '/media/images/cleanx-nozzles.png',
    capacityRange: 'Custom Fitted for 1 kW to 1 MW+ Installations',
    whatsappQuery: 'Hello Eco Green Solar! I would like to inquire about CleanX Automatic Solar Panel Cleaning Nozzles.',
    faqs: [
      { question: 'Will spraying cold water crack hot solar panels?', answer: 'No, CleanX systems are programmed to run automatically at dawn before the sun heats the panels, preventing thermal shock.' },
      { question: 'How much water does one cleaning cycle use?', answer: 'CleanX uses only approximately 1 to 1.5 liters of water per panel per wash cycle — far less than manual hose washing.' }
    ]
  }
];
