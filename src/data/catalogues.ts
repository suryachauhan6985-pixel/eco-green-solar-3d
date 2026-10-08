export interface CatalogItem {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  pdfUrl: string;
  coverImage: string;
  desc: string;
}

export const cataloguesData: CatalogItem[] = [
  {
    id: "cleanx-nozzle",
    title: "CleanX Nozzle Catalog",
    category: "Solar Panel Cleaning",
    fileSize: "2.4 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2023/10/CleanX-NOZZLE-CATALOG.pdf",
    coverImage: "/media/images/cleanx-nozzles.png",
    desc: "Complete technical brochure for CleanX automated solar panel spray cleaning nozzle systems."
  },
  {
    id: "solar-rooftop",
    title: "Solar Roof Top Brochure",
    category: "Solar Photovoltaic",
    fileSize: "4.1 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/1.-SOLAR-ROOF-TOP-ENG.pdf",
    coverImage: "/media/images/solar-panels-roof-hero.jpg",
    desc: "Comprehensive engineering guide to On-Grid Solar Rooftop systems, PM Surya Ghar subsidy, and net-metering."
  },
  {
    id: "diamond",
    title: "Diamond Solar Heater",
    category: "Solar Water Heater",
    fileSize: "2.8 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/2.-DIAMOND-ENG.pdf",
    coverImage: "/media/images/diamond-solar.png",
    desc: "Specifications, capacity sizing tables, and manifold options for Diamond SS-304L ETC series."
  },
  {
    id: "glassline",
    title: "Glass Line Solar Heater",
    category: "Solar Water Heater",
    fileSize: "3.2 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/3.-GLASS-LINE-ENG.pdf",
    coverImage: "/media/images/glassline-solar.png",
    desc: "Hard water specialist solar water heater with 850°C fused glass line enamel coating up to 3000 PPM."
  },
  {
    id: "pearl",
    title: "Pearl Solar Heater",
    category: "Solar Water Heater",
    fileSize: "2.5 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/4.-PEARL-ENG.pdf",
    coverImage: "/media/images/pearl-solar.png",
    desc: "Reliable domestic evacuated tube solar water heater specifications and dimensions."
  },
  {
    id: "pressurized",
    title: "Pressurized Solar Heater",
    category: "Solar Water Heater",
    fileSize: "3.6 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/5.-PRESSURIZED-ENG.pdf",
    coverImage: "/media/images/pressurized-solar-water-heater.png",
    desc: "High pressure heat exchanger coil systems engineered for booster pump equipped luxury homes."
  },
  {
    id: "copper",
    title: "Eco Green Copper",
    category: "Solar Water Heater",
    fileSize: "2.9 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/6.-COPPER-ENG.pdf",
    coverImage: "/media/images/copper-solar-heater.png",
    desc: "99.9% Pure oxygen-free copper solar water heater with antimicrobial and rapid thermal transfer."
  },
  {
    id: "heat-pump",
    title: "Thermodynamic Heat Pump",
    category: "Thermodynamic Heating",
    fileSize: "4.8 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/7.-HEAT-PUMP-ENG.pdf",
    coverImage: "/media/images/heat-pump-hero.jpg",
    desc: "Air-to-water thermodynamic heat pump systems with 75% electricity saving and Japanese rotary compressor."
  },
  {
    id: "pressure-pump",
    title: "Pressure Booster Pump",
    category: "Hydro-Pneumatics",
    fileSize: "3.1 MB",
    pdfUrl: "https://ecogreensolar.co.in/wp-content/uploads/2024/09/8.-PRESSURE-PUMP-ENG.pdf",
    coverImage: "/media/images/pressure-pump.png",
    desc: "Automatic multi-stage booster pumps with SS-304 impellers and Danfoss pressure switch technology."
  }
];
