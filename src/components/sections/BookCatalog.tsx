import React, { useState, useEffect } from 'react';
import { content } from '../../content';

export const BookCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

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
      setDirection('forward');
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection('backward');
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const activePage = pages[currentPage];

  return (
    <section id="catalog" className="site-section site-section-subtle">
      <style>{`
        /* Book Canvas Sheet */
        .book-canvas-sheet {
          background-color: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.07);
          border: 1px solid #E2E8F0;
          overflow: hidden;
          position: relative;
        }

        /* Center Spine Subtle Line */
        .book-spine-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 24px;
          transform: translateX(-50%);
          background: linear-gradient(
            to right,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.02) 20%,
            rgba(0,0,0,0.05) 50%,
            rgba(0,0,0,0.02) 80%,
            rgba(0,0,0,0) 100%
          );
          pointer-events: none;
          z-index: 5;
        }

        /* Editorial Image Transitions (Directional Slide + Depth Scale + Soft Fade) */
        @keyframes imageSlideForward {
          0% {
            opacity: 0;
            transform: translateX(45px) scale(0.94);
            filter: blur(4px) drop-shadow(0 10px 18px rgba(0,0,0,0.06));
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) drop-shadow(0 18px 32px rgba(0,0,0,0.12));
          }
        }

        @keyframes imageSlideBackward {
          0% {
            opacity: 0;
            transform: translateX(-45px) scale(0.94);
            filter: blur(4px) drop-shadow(0 10px 18px rgba(0,0,0,0.06));
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0) drop-shadow(0 18px 32px rgba(0,0,0,0.12));
          }
        }

        .anim-image-forward {
          animation: imageSlideForward 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .anim-image-backward {
          animation: imageSlideBackward 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Staggered Text Revelations */
        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-text-badge {
          animation: textSlideUp 0.38s cubic-bezier(0.16, 1, 0.3, 1) 0.04s both;
        }

        .anim-text-title {
          animation: textSlideUp 0.44s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .anim-text-desc {
          animation: textSlideUp 0.48s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
        }

        .anim-text-list {
          animation: textSlideUp 0.52s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
        }

        .anim-text-meta {
          animation: textSlideUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
      `}</style>

      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.8rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.8rem' }}>
          <span className="badge-green" style={{ marginBottom: '1rem' }}>
            OFFICIAL PRODUCT BROCHURE
          </span>
          <h2 style={{ fontSize: 'var(--text-title)', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '0.7rem', fontWeight: 800 }}>
            Interactive Product Catalog
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
            Browse through our authentic Rajkot factory catalog with smooth interactive page navigation.
          </p>
        </div>

        {/* Clean Book Container */}
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div className="book-canvas-sheet">
            {/* Center Spine Shadow for book depth */}
            <div className="book-spine-line" />

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
                position: 'relative',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src="/assets/logo-transparent.png"
                  alt="Eco Green Solar Logo"
                  style={{ height: '42px', width: 'auto', maxHeight: '42px', objectFit: 'contain' }}
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
                      borderRadius: '999px',
                    }}
                    title="Previous page (Left Arrow)"
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
                      borderRadius: '999px',
                    }}
                    title="Next page (Right Arrow)"
                  >
                    Turn Right <span style={{ fontSize: '1rem' }}>›</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Book Page Content Body with key for fresh transitions */}
            <div
              key={currentPage}
              style={{
                padding: 'clamp(2rem, 3.8vw, 3.5rem)',
                minHeight: '490px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* COVER PAGE SPREAD */}
              {activePage.type === 'cover' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '2.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Left: Cover Text */}
                  <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
                    <span className="badge-green anim-text-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                      {activePage.content.badge}
                    </span>
                    <h3 className="anim-text-title" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)', color: 'var(--text-primary)', marginBottom: '0.8rem', lineHeight: 1.2, fontWeight: 800 }}>
                      {activePage.content.heading}
                    </h3>
                    <p className="anim-text-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.6rem', lineHeight: 1.6 }}>
                      {activePage.content.sub}
                    </p>
                    <div
                      className="anim-text-meta"
                      style={{
                        padding: '1rem 1.4rem',
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        color: 'var(--brand-green-dark)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{activePage.content.factory}</span>
                    </div>
                  </div>

                  {/* Right: Large Product Image (NO GREY BOX) */}
                  <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
                    <div style={{ textAlign: 'center' }}>
                      <img
                        src={activePage.content.image}
                        alt={activePage.title}
                        className={direction === 'forward' ? 'anim-image-forward' : 'anim-image-backward'}
                        style={{
                          maxHeight: '360px',
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          margin: '0 auto',
                          display: 'block',
                        }}
                      />
                      <div
                        className="anim-text-meta"
                        style={{ marginTop: '1.2rem', fontWeight: 700, fontSize: '1rem', color: 'var(--brand-green)' }}
                      >
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
                    gap: '2.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Left: Product Image (NO GREY BOX - Clean, Large & Natural) */}
                  <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
                    <div style={{ textAlign: 'center' }}>
                      <img
                        src={activePage.content.image}
                        alt={activePage.title}
                        className={direction === 'forward' ? 'anim-image-forward' : 'anim-image-backward'}
                        style={{
                          maxHeight: '360px',
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          margin: '0 auto',
                          display: 'block',
                        }}
                      />
                      <div className="anim-text-meta" style={{ marginTop: '1rem' }}>
                        <span className="badge-green">{activePage.content.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Features & Applications */}
                  <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
                    <span className="anim-text-badge" style={{ fontSize: '0.8rem', color: 'var(--brand-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                      {activePage.subtitle}
                    </span>
                    <h3 className="anim-text-title" style={{ fontSize: 'clamp(1.35rem, 2vw, 1.75rem)', color: 'var(--text-primary)', marginTop: '0.2rem', marginBottom: '1rem', fontWeight: 800 }}>
                      {activePage.title}
                    </h3>

                    <div className="anim-text-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.6rem' }}>
                      {activePage.content.features?.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="anim-text-meta"
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

              {/* BACK COVER / SPECIFICATIONS SPREAD */}
              {activePage.type === 'backcover' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '2.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Left: Info */}
                  <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
                    <span className="badge-amber anim-text-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                      FACTORY BACKED QUALITY
                    </span>
                    <h3 className="anim-text-title" style={{ fontSize: '1.7rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 800 }}>
                      Rajkot Manufacturing Facility
                    </h3>
                    <div className="anim-text-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.8rem' }}>
                      {activePage.content.features?.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="anim-text-meta" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <strong>Direct Hotline: </strong> {activePage.content.hotline}<br />
                      <strong>Email: </strong> {activePage.content.email}<br />
                      <strong>Website: </strong> {activePage.content.web}
                    </div>
                  </div>

                  {/* Right: Factory Image (NO GREY BOX) */}
                  <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
                    <img
                      src={activePage.content.image}
                      alt="Factory"
                      className={direction === 'forward' ? 'anim-image-forward' : 'anim-image-backward'}
                      style={{ width: '100%', borderRadius: '18px', objectFit: 'cover', maxHeight: '320px', display: 'block' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCatalog;
