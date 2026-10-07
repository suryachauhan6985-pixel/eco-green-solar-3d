import React, { useState } from 'react';
import { content } from '../../content';

export const BookCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Authentic catalog pages designed from ecogreensolar.co.in
  const pages = [
    {
      id: 0,
      title: 'PRODUCT CATALOGUE 2026',
      subtitle: 'Eco Green Solar • Green Energy Rajkot',
      type: 'cover',
      content: {
        badge: 'Official Factory Catalog',
        heading: 'Pioneering Green Energy Since 2007',
        sub: 'Solar Water Heaters • Heat Pumps • Pressure Pumps • Rooftop Solar PV',
        factory: 'Manufactured at Plot No. G-1929, GIDC Metoda, Rajkot',
        logo: '/media/images/logo.png',
        image: '/media/images/pressurized-solar-water-heater.png',
      },
    },
    {
      id: 1,
      title: 'Pressurized ETC Solar Water Heater',
      subtitle: 'Engineered for High-Pressure Modern Bathrooms',
      type: 'product',
      content: {
        badge: 'Best Seller Series',
        image: '/media/images/pressurized-solar-water-heater.png',
        features: [
          'Food-grade inner tank: SS-304 / SS-316L alloy',
          'Withstands up to 5 Bar water pressure from booster pumps',
          'High-density 50mm injected PUF insulation for 72hr heat retention',
          'Borosilicate 3.3 triple-target vacuum tubes with ALN/SS/Cu coating',
          'Capacity options: 100 LPD, 150 LPD, 200 LPD, 250 LPD, 300 LPD, 500 LPD',
        ],
        applications: 'Luxury Villas, Bungalows with Rain Showers, Multi-Bathroom Homes',
        warranty: '5 Years Manufacturer Guarantee',
      },
    },
    {
      id: 2,
      title: 'Copper Coil & Glass Line Series',
      subtitle: 'Corrosion-Resistant Solar Water Heating',
      type: 'product',
      content: {
        badge: 'Hard Water Specialists',
        image: '/media/images/copper-solar-heater.png',
        features: [
          'Internal copper heat-exchanger coil for instantaneous pressurized hot water',
          'Glass-lined enamel coating preventing scaling and hard water corrosion',
          'Ideal for high-TDS groundwater areas across Saurashtra & Kutch',
          'Outer cladding: Rust-proof coated aluminum stucco sheet',
          'Tested to withstand thermal shocks from 5°C to 95°C',
        ],
        applications: 'Hotels, Hostels, Hospitals, Saurashtra Hard Water Belts',
        warranty: '7 Years Inner Tank Warranty',
      },
    },
    {
      id: 3,
      title: 'Diamond & Pearl ETC Series',
      subtitle: 'Non-Pressurized High-Performance Domestic Range',
      type: 'product',
      content: {
        badge: 'Household Choice',
        image: '/media/images/diamond-solar.png',
        features: [
          'High efficiency direct thermosiphon natural circulation',
          'Reinforced hot-dip galvanized mounting structure (2.0mm thickness)',
          'Operates reliably even in cold Saurashtra winter mornings',
          'Eco-friendly electrical backup heater element provision included',
          'Available in 100, 150, 200, 250, 300, and 500 Litres per day',
        ],
        applications: 'Residential Bungalows, Rural & Urban Domestic Residences',
        warranty: '5 Years Comprehensive Warranty',
      },
    },
    {
      id: 4,
      title: 'Commercial Air-Source Heat Pumps',
      subtitle: '75% Lower Electricity Consumption than Geysers',
      type: 'product',
      content: {
        badge: 'Commercial Thermodynamic',
        image: '/media/images/heat-pump-hero.jpg',
        features: [
          'Extracts latent ambient heat from surrounding air to heat water',
          'High Coefficient of Performance (COP > 4.2) for maximum power savings',
          'Works in all weather conditions, day and night (24x7 operation)',
          'Quiet Japanese rotary compressor with intelligent micro-controller',
          'Capacity range: 200 LPD to 5,000 LPD centralized units',
        ],
        applications: 'Hotels, Resorts, Clubs, Hospitals, Large Residential Villas',
        warranty: '3 Years Compressor Warranty',
      },
    },
    {
      id: 5,
      title: 'Hydro-Pneumatic Pressure Booster Pumps',
      subtitle: 'Constant Luxuriously High Water Pressure',
      type: 'product',
      content: {
        badge: 'Hydro Dynamic System',
        image: '/media/images/pressure-pump.png',
        features: [
          'Automatic pressure controller: senses tap turn-on and starts instantly',
          'Diaphragm pressure tank ensures steady pulsation-free water stream',
          'Built-in dry-run protection protects motor if overhead tank empties',
          'High grade stainless steel shaft and brass impeller assemblies',
          'Ratings: 0.5 HP, 0.8 HP, 1.0 HP, 1.5 HP, 2.0 HP, 3.0 HP',
        ],
        applications: 'Multi-Floor Villas, Rain Showers, Body Jets, Jacuzzis',
        warranty: '2 Years Factory Guarantee',
      },
    },
    {
      id: 6,
      title: 'Monocrystalline Rooftop Solar PV',
      subtitle: 'PM Surya Ghar Approved • On-Grid Net Metering',
      type: 'product',
      content: {
        badge: 'Clean Energy PV',
        image: '/media/images/solar-rooftop.png',
        features: [
          'Tier-1 Monocrystalline N-Type TOPCon bifacial modules (550Wp+)',
          '22.8% conversion efficiency with superior low-light generation',
          'Bi-directional net metering approval with PGVCL / GUVNL',
          'Central government direct bank transfer subsidy up to ₹78,000',
          'Generates zero-bill electricity for 25+ years',
        ],
        applications: 'Homes, Factories, Warehouses, Schools, Agricultural Pumps',
        warranty: '25 Years Linear Performance Warranty',
      },
    },
    {
      id: 7,
      title: 'Factory Specifications & Service Network',
      subtitle: 'GIDC Metoda, Rajkot Hub',
      type: 'backcover',
      content: {
        badge: 'Support & Engineering',
        factory: 'Plot No. G-1929, Almighty Gate, Main Road, GIDC Metoda, Rajkot - 360021',
        hotline: '+91 78 78 44 44 14',
        email: 'greenenergy123@gmail.com',
        web: 'ecogreensolar.co.in',
        features: [
          '19 Years of Green Energy Experience (Estd. 2007)',
          'Empanelled vendor under PGVCL & MNRE',
          '24-Hour emergency technician response guarantee in Saurashtra',
          'Genuine factory replacement tubes, gaskets, and spare parts',
        ],
        image: '/media/images/factory-installation.jpg',
      },
    },
  ];

  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const activePage = pages[currentPage];

  return (
    <section id="catalog" className="site-section site-section-subtle">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
          <span className="badge-green" style={{ marginBottom: '1rem' }}>
            OFFICIAL PRODUCT BROCHURE
          </span>
          <h2 style={{ fontSize: 'var(--text-title)', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Interactive Product Catalog
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Browse through our authentic Rajkot factory catalog with an interactive book page-turn experience.
          </p>
        </div>

        {/* 3D Book Experience Container */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Catalog Toolbar */}
          <div
            style={{
              padding: '1.2rem 2.2rem',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F8FAF8',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src="/assets/logo.png"
                alt="Eco Green Solar Logo"
                style={{ height: '36px', width: 'auto', maxHeight: '36px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', borderLeft: '1px solid #CBD5E1', paddingLeft: '0.9rem' }}>
                Official Factory Catalog
              </span>
            </div>

            {/* Page Navigation & Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Page {currentPage + 1} of {totalPages}
              </span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="btn-secondary"
                  style={{
                    padding: '0.55rem 1.1rem',
                    fontSize: '0.85rem',
                    opacity: currentPage === 0 ? 0.35 : 1,
                    cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  data-cursor="Prev"
                >
                  <span style={{ fontSize: '1rem' }}>‹</span> Turn Left
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="btn-primary"
                  style={{
                    padding: '0.55rem 1.3rem',
                    fontSize: '0.85rem',
                    opacity: currentPage === totalPages - 1 ? 0.35 : 1,
                    cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  data-cursor="Next"
                >
                  Turn Right <span style={{ fontSize: '1rem' }}>›</span>
                </button>
              </div>
            </div>
          </div>

          {/* Catalog Content Presentation Area (Clean Architectural Presentation, No Book Spine Line) */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              overflow: 'hidden',
            }}
          >
            <div
              key={currentPage}
              style={{
                padding: '3.5rem 4vw',
                minHeight: '520px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                animation: 'catalogSlideIn 0.95s cubic-bezier(0.22, 1, 0.36, 1)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <style>{`
                @keyframes catalogSlideIn {
                  0% {
                    opacity: 0;
                    transform: translateX(40px) scale(0.97);
                    filter: blur(4px);
                  }
                  40% {
                    opacity: 0.7;
                    filter: blur(1px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(0px) scale(1);
                    filter: blur(0px);
                  }
                }
              `}</style>

            {/* COVER PAGE */}
            {activePage.type === 'cover' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
                  <span className="badge-green" style={{ marginBottom: '1rem' }}>
                    {activePage.content.badge}
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                      marginBottom: '1rem',
                    }}
                  >
                    {activePage.content.heading}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {activePage.content.sub}
                  </p>
                  <div
                    style={{
                      padding: '1.2rem 1.6rem',
                      backgroundColor: 'var(--brand-green-light)',
                      border: '1px solid var(--brand-green-tint)',
                      borderRadius: '14px',
                      fontSize: '0.88rem',
                      color: 'var(--brand-green-dark)',
                      fontWeight: 600,
                    }}
                  >
                    📍 {activePage.content.factory}
                  </div>
                </div>

                <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
                  <div
                    style={{
                      backgroundColor: '#F8FAF8',
                      borderRadius: '20px',
                      padding: '2rem',
                      textAlign: 'center',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <img
                      src={activePage.content.image}
                      alt={activePage.title}
                      style={{ maxHeight: '240px', maxWidth: '100%', objectFit: 'contain', margin: '0 auto' }}
                    />
                    <div style={{ marginTop: '1.5rem', fontWeight: 700, color: 'var(--brand-green)' }}>
                      Pressurized ETC Solar Water Heater
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PRODUCT PAGE SPREAD */}
            {activePage.type === 'product' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                {/* Left: Product Image in Book Frame */}
                <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
                  <div
                    style={{
                      backgroundColor: '#F8FAF8',
                      borderRadius: '20px',
                      padding: '2.5rem 1.5rem',
                      textAlign: 'center',
                      border: '1px solid #E2E8F0',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
                    }}
                  >
                    <img
                      src={activePage.content.image}
                      alt={activePage.title}
                      style={{
                        maxHeight: '260px',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        margin: '0 auto',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <div style={{ marginTop: '1.2rem' }}>
                      <span className="badge-green">{activePage.content.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Features & Applications */}
                <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {activePage.subtitle}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: 'var(--text-primary)', marginTop: '0.2rem', marginBottom: '1.2rem' }}>
                    {activePage.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.8rem' }}>
                    {activePage.content.features?.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--brand-green)', fontWeight: 800, marginTop: '2px' }}>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      paddingTop: '1.2rem',
                      borderTop: '1px solid #E2E8F0',
                    }}
                  >
                    <div style={{ fontSize: '0.84rem' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Best For: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{activePage.content.applications}</span>
                    </div>
                    <div style={{ fontSize: '0.84rem' }}>
                      <strong style={{ color: 'var(--brand-green)' }}>Warranty: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{activePage.content.warranty}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BACK COVER / SPECIFICATIONS */}
            {activePage.type === 'backcover' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
                  <span className="badge-amber" style={{ marginBottom: '1rem' }}>
                    FACTORY BACKED QUALITY
                  </span>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Rajkot Manufacturing Facility
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
                    {activePage.content.features?.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--brand-green)', fontWeight: 800 }}>★</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>Direct Hotline: </strong> {activePage.content.hotline}<br />
                    <strong>Email: </strong> {activePage.content.email}<br />
                    <strong>Website: </strong> {activePage.content.web}
                  </div>
                </div>

                <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
                  <img
                    src={activePage.content.image}
                    alt="Factory"
                    style={{ width: '100%', borderRadius: '18px', objectFit: 'cover', maxHeight: '260px' }}
                  />
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Bottom Interactive Page Jumper Tabs */}
          <div
            style={{
              padding: '1.2rem 2rem',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.6rem',
              backgroundColor: '#F8FAF8',
            }}
          >
            {pages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentPage(idx)}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: currentPage === idx ? 'var(--brand-green)' : '#CBD5E1',
                  backgroundColor: currentPage === idx ? 'var(--brand-green)' : '#FFFFFF',
                  color: currentPage === idx ? '#FFFFFF' : 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {idx === 0 ? 'Cover' : idx === totalPages - 1 ? 'Back Specs' : `Page ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCatalog;
