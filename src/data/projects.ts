export interface ProjectCategory {
  slug: string;
  name: string;
  desc: string;
}

export const projectCategories: ProjectCategory[] = [
  { slug: "all", name: "All Projects", desc: "Complete installation portfolio across Gujarat" },
  { slug: "ground-mounted", name: "Ground Mounted", desc: "Utility-scale & captive MW ground mounted solar plants" },
  { slug: "industrial", name: "Industrial", desc: "Factory shed & commercial rooftop solar PV arrays" },
  { slug: "residential", name: "Residential", desc: "Housing societies, bungalows & villa rooftop systems" },
  { slug: "solar-water-heater", name: "Solar Water Heater", desc: "Commercial & multi-unit ETC solar thermal systems" },
  { slug: "heat-pump", name: "Heat Pump", desc: "Centralized thermodynamic heat pump installations" },
  { slug: "pressure-pump", name: "Pressure Pump", desc: "Hydro-pneumatic booster pump water systems" },
  { slug: "cleanx-nozzles", name: "Cleanx Nozzles", desc: "Automated solar panel spray cleaning systems" }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  capacity?: string;
  image: string;
  desc: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "electrotherm",
    title: "Electrotherm Ground-Mounted Solar Plant",
    category: "Ground Mounted",
    categorySlug: "ground-mounted",
    location: "Gujarat, India",
    capacity: "MW Scale",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Electrotherm-1.jpg?fit=504%2C360&ssl=1",
    desc: "Turnkey utility-scale ground mounted solar photovoltaic plant with high-yield tracking and centralized substation connectivity."
  },
  {
    id: "konarch-appliances",
    title: "Konarch Appliances Industrial Setup",
    category: "Ground Mounted",
    categorySlug: "ground-mounted",
    location: "Gujarat Industrial Belt",
    capacity: "Industrial MW",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Konarch-Applainces-1.jpg?fit=504%2C360&ssl=1",
    desc: "Heavy industrial captive ground mounted solar engineering installation reducing peak factory tariff demands."
  },
  {
    id: "charanka-park",
    title: "Charanka Solar Park EPC Works",
    category: "Ground Mounted",
    categorySlug: "ground-mounted",
    location: "Patan, Gujarat",
    capacity: "40+ MW",
    image: "/media/images/solar-farm-aerial.jpg",
    desc: "Landmark 40+ MW utility scale EPC execution carried out by Green Energy for national companies at Charanka Solar Park."
  },
  {
    id: "industrial-gidc-1",
    title: "GIDC Industrial Shed Rooftop Array",
    category: "Industrial",
    categorySlug: "industrial",
    location: "GIDC Metoda, Rajkot",
    capacity: "250 kW",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/1-12.png?fit=504%2C360&ssl=1",
    desc: "High-capacity on-grid solar installation over curved industrial corrugated shed with specialized clamp fixtures."
  },
  {
    id: "industrial-morbi-2",
    title: "Ceramic Manufacturing Plant Solar",
    category: "Industrial",
    categorySlug: "industrial",
    location: "Morbi, Gujarat",
    capacity: "500 kW",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/2-12.png?fit=504%2C360&ssl=1",
    desc: "Extensive industrial rooftop solar deployment utilizing N-Type TOPCon panels for maximum daytime peak displacement."
  },
  {
    id: "bb-chemicals",
    title: "B.B. Chemicals Industrial Solar Setup",
    category: "Industrial",
    categorySlug: "industrial",
    location: "Shapar-Veraval, Rajkot",
    capacity: "150 kW",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2023/11/B-B-Chemicals.jpg?fit=542%2C383&ssl=1",
    desc: "Chemical manufacturing plant powered by Eco Green Solar arrays with zero disruption to active batch operations."
  },
  {
    id: "kasturi-apartment",
    title: "Kasturi Apartment Residential Solar",
    category: "Residential",
    categorySlug: "residential",
    location: "Rajkot, Gujarat",
    capacity: "Residential Society",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Kasturi-Apartment.jpg?fit=2339%2C1654&ssl=1",
    desc: "Community rooftop solar PV project powering common society lighting, lifts, water pumps, and domestic meters."
  },
  {
    id: "nand-gaun",
    title: "Nand Gaun Housing Complex",
    category: "Residential",
    categorySlug: "residential",
    location: "Rajkot, Gujarat",
    capacity: "Multi-Unit Society",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Nand-Gaun.jpg?fit=2339%2C1654&ssl=1",
    desc: "Turnkey residential solar project bringing zero-bill electricity to multiple families under PM Surya Ghar Yojana."
  },
  {
    id: "savan-symphony",
    title: "Savan Symphony Luxury High-Rise",
    category: "Residential",
    categorySlug: "residential",
    location: "Rajkot, Gujarat",
    capacity: "Residential High-Rise",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Savan-Symphony.jpg?fit=2339%2C1654&ssl=1",
    desc: "Elevated aerodynamic solar array constructed with elevated walkways for unhindered terrace recreation."
  },
  {
    id: "tulsi-heights",
    title: "Tulsi Heights Residential Complex",
    category: "Residential",
    categorySlug: "residential",
    location: "Rajkot, Gujarat",
    capacity: "Apartment Scheme",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Tulsi-Heights.jpg?fit=2339%2C1654&ssl=1",
    desc: "Comprehensive rooftop solar system integrated with bi-directional net metering and lightning arrestors."
  },
  {
    id: "vasant-malhar",
    title: "Vasant Malhar Luxury Villas",
    category: "Residential",
    categorySlug: "residential",
    location: "Jamnagar Road, Rajkot",
    capacity: "Luxury Bungalow Scheme",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Vasant-Malhar.jpg?fit=2339%2C1654&ssl=1",
    desc: "Individual residential villa solar rooftop systems combined with pressurized solar water heaters."
  },
  {
    id: "manav-mandir-morbi",
    title: "Manav Mandir Trust 1000 LPD Heat Pump",
    category: "Heat Pump",
    categorySlug: "heat-pump",
    location: "Morbi, Gujarat",
    capacity: "1000 LPD",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/1000-LPD-1-MANAV-MANDIR-MORBI-2.jpg?fit=504%2C360&ssl=1",
    desc: "Commercial 1000 LPD centralized thermodynamic heat pump installation delivering round-the-clock hot water with 75% power savings."
  },
  {
    id: "dikpalsinh-zala-residence",
    title: "Dikpalsinh Zala Residence 200 LPD Heat Pump",
    category: "Heat Pump",
    categorySlug: "heat-pump",
    location: "Saurashtra, Gujarat",
    capacity: "200 LPD Domestic",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/200-LPD-DIKPALSINH-ZALA-1.jpg?fit=504%2C360&ssl=1",
    desc: "Ultra-quiet luxury villa thermodynamic heat pump system paired with high-pressure internal water circulation."
  },
  {
    id: "swh-hospital-project",
    title: "New Life Hospital Solar Water Heating",
    category: "Solar Water Heater",
    categorySlug: "solar-water-heater",
    location: "Rajkot, Gujarat",
    capacity: "Commercial Centralized",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2023/11/New-Life-Hospital.jpg?fit=542%2C383&ssl=1",
    desc: "High capacity multi-manifold solar water heating installation supplying sterile hot water to operating suites and patient wards."
  },
  {
    id: "swh-ss-white",
    title: "SS White Commercial Manifold Array",
    category: "Solar Water Heater",
    categorySlug: "solar-water-heater",
    location: "Gujarat Industrial Zone",
    capacity: "5000+ LPD",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2023/11/SS-WHITE-scaled.jpg?fit=2560%2C1920&ssl=1",
    desc: "Large scale manifold solar water heating system providing industrial wash and process water."
  },
  {
    id: "cleanx-vintage-apartment",
    title: "Vertical Vintage Apartment CleanX Installation",
    category: "Cleanx Nozzles",
    categorySlug: "cleanx-nozzles",
    location: "Rajkot, Gujarat",
    capacity: "Automated Cleaning System",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/VERTICLE-VINTAGE-APPARTMENT-1-1.jpeg?fit=504%2C360&ssl=1",
    desc: "Permanent CleanX automatic nozzle installation cleaning 50+ rooftop solar panels automatically every morning."
  },
  {
    id: "pressure-pump-installation-1",
    title: "Multi-Stage Pressure Booster Setup",
    category: "Pressure Pump",
    categorySlug: "pressure-pump",
    location: "Rajkot, Gujarat",
    capacity: "High Pressure Booster",
    image: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/1-2.jpg?fit=504%2C360&ssl=1",
    desc: "Automatic hydro-pneumatic booster pump setup with Danfoss pressure regulation, supplying uniform pressure to 6 bathrooms."
  }
];

export interface GalleryImage {
  title: string;
  src: string;
  tag: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: "Electrotherm Ground-Mounted Solar Plant",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Electrotherm-1.jpg?fit=504%2C360&ssl=1",
    tag: "Utility"
  },
  {
    title: "Konarch Appliances Industrial Setup",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Konarch-Applainces-1.jpg?fit=504%2C360&ssl=1",
    tag: "Utility"
  },
  {
    title: "Charanka Solar Park Utility Landmark",
    src: "/media/images/solar-farm-aerial.jpg",
    tag: "Utility"
  },
  {
    title: "GIDC Industrial Shed Rooftop Array",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/1-12.png?fit=504%2C360&ssl=1",
    tag: "Industrial"
  },
  {
    title: "SS White Industrial Array",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2023/11/SS-WHITE-scaled.jpg?fit=2560%2C1920&ssl=1",
    tag: "Industrial"
  },
  {
    title: "Gajanand Industrial Solar Plant",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/3-11.png?fit=504%2C360&ssl=1",
    tag: "Industrial"
  },
  {
    title: "Kasturi Residential Bungalow Installation",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Kasturi-1.jpg?fit=504%2C360&ssl=1",
    tag: "Residential"
  },
  {
    title: "Manav Mandir Residential Solar Rooftop",
    src: "https://i0.wp.com/www.ecogreensolar.co.in/wp-content/uploads/2025/03/Manav-mandir-1.jpg?fit=504%2C360&ssl=1",
    tag: "Residential"
  },
  {
    title: "Kalawad Road Luxury Villa (5 kW)",
    src: "/media/images/modern-home-gujarat.jpg",
    tag: "Residential"
  },
  {
    title: "Pressurized Solar Hot Water System - 500 LPD",
    src: "/media/images/pressurized-solar-water-heater.png",
    tag: "Commercial"
  },
  {
    title: "Commercial Air-Source Heat Pump Cascade",
    src: "/media/images/heat-pump-hero.jpg",
    tag: "Commercial"
  },
  {
    title: "Hydro-Pneumatic Multi-Stage Booster System",
    src: "/media/images/pressure-pump.png",
    tag: "Commercial"
  }
];
