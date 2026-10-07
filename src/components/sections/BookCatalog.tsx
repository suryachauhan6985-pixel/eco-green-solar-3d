import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal';

interface CatalogProduct {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  image: string;
  specs: { label: string; val: string }[];
  capacities: string[];
  pdfName: string;
}

const PRODUCTS: CatalogProduct[] = [
  {
    id: 'pressurized',
    name: 'Pressurized ETC Series',
    badge: '5 Bar Pressure Rated',
    tagline: 'Engineered for luxury villas, rain showers, and booster pump water systems.',
    image: '/assets/company/pressurized-solar-water-heater.png',
    specs: [
      { label: 'Inner Tank', val: 'Food-Grade SS-304L' },
      { label: 'Pressure', val: 'Up to 5.0 Bar' },
      { label: 'Insulation', val: '50mm Injected PUF' },
      { label: 'Warranty', val: '5 Years Guarantee' },
    ],
    capacities: ['100 L', '150 L', '200 L', '300 L', '500 L'],
    pdfName: 'Pressurized-ETC-Brochure.pdf',
  },
  {
    id: 'copper',
    name: 'Copper Coil & Glass-Line',
    badge: 'Hard Water Specialist',
    tagline: 'Instant heat exchanger coil immune to scaling in high-TDS borewell water.',
    image: '/assets/company/copper-solar-heater.png',
    specs: [
      { label: 'Heat Exchanger', val: '99.9% Pure Copper' },
      { label: 'Tank Lining', val: 'Vitreous Enamel' },
      { label: 'Hard Water', val: 'TDS up to 2500 PPM' },
      { label: 'Warranty', val: '7 Years Tank' },
    ],
    capacities: ['150 L', '200 L', '300 L', '500 L'],
    pdfName: 'CopperCoil-Catalogue.pdf',
  },
  {
    id: 'diamond',
    name: 'Diamond ETC Series',
    badge: 'Household Bestseller',
    tagline: 'Heavy-duty natural thermosiphon circulation trusted by 20,000+ Gujarati homes.',
    image: '/assets/company/diamond-solar.png',
    specs: [
      { label: 'Circulation', val: 'Thermosiphon Flow' },
      { label: 'Mounting', val: '2.0mm Heavy Steel' },
      { label: 'Inner Vessel', val: 'Argon Welded SS-304' },
      { label: 'Warranty', val: '5 Years Full System' },
    ],
    capacities: ['100 L', '150 L', '200 L', '250 L'],
    pdfName: 'Diamond-ETC-Catalogue.pdf',
  },
  {
    id: 'glassline',
    name: 'Glass-Line Ceramic Series',
    badge: 'Anti-Corrosion Armor',
    tagline: '850°C fused ceramic lining protecting against acidic & salty coastal groundwater.',
    image: '/assets/company/glassline-solar.png',
    specs: [
      { label: 'Coating', val: '850°C Glass Ceramic' },
      { label: 'Protection', val: 'Magnesium Anode Rod' },
      { label: 'Test Pressure', val: '10.0 Bar Tested' },
      { label: 'Warranty', val: '7 Years Replacement' },
    ],
    capacities: ['150 L', '200 L', '300 L', '500 L'],
    pdfName: 'GlassLine-Specsheet.pdf',
  },
  {
    id: 'pearl',
    name: 'Pearl Domestic Series',
    badge: 'Best Value Home',
    tagline: 'Compact, high-efficiency solar water heating tailored for domestic urban roofs.',
    image: '/assets/company/pearl-solar.png',
    specs: [
      { label: 'Daily Yield', val: 'Up to 85°C Water' },
      { label: 'Structure', val: 'Galvanized Base' },
      { label: 'Tubes', val: 'Triple Target 58mm' },
      { label: 'Warranty', val: '5 Years Guarantee' },
    ],
    capacities: ['100 L', '150 L', '200 L'],
    pdfName: 'Pearl-Series-Brochure.pdf',
  },
  {
    id: 'heatpump',
    name: 'Commercial Air-Source Heat Pump',
    badge: '75% Power Saving',
    tagline: 'Extracts atmospheric heat for continuous 24/7 central hot water in hotels & hospitals.',
    image: '/assets/company/heat-pump-hero.jpg',
    specs: [
      { label: 'COP Ratio', val: 'COP > 4.2' },
      { label: 'Operation', val: '24/7 All-Weather' },
      { label: 'Compressor', val: 'Japanese Rotary' },
      { label: 'Warranty', val: '3 Yrs Compressor' },
    ],
    capacities: ['200 L', '500 L', '1000 L', '3000 L+'],
    pdfName: 'HeatPump-Catalogue.pdf',
  },
  {
    id: 'pressurepump',
    name: 'Hydro-Pneumatic Pressure Booster',
    badge: 'Rain Shower Booster',
    tagline: 'Automatic electronic pressure sensing for steady, pulsation-free luxury showers.',
    image: '/assets/company/pressure-pump.png',
    specs: [
      { label: 'Pressure Range', val: '2.5 to 5.0 Bar' },
      { label: 'Controller', val: 'Smart Flow Sensor' },
      { label: 'Motor Body', val: 'Stainless Steel' },
      { label: 'Warranty', val: '2 Years Guarantee' },
    ],
    capacities: ['0.5 HP', '0.8 HP', '1.0 HP', '1.5 HP'],
    pdfName: 'PressurePump-Brochure.pdf',
  },
  {
    id: 'rooftop',
    name: 'Monocrystalline Rooftop Solar PV',
    badge: 'PM Surya Ghar Approved',
    tagline: 'Tier-1 TOPCon bifacial modules with PGVCL on-grid net-metering & ₹78k subsidy.',
    image: '/assets/company/solar-rooftop.png',
    specs: [
      { label: 'Efficiency', val: '22.8% TOPCon' },
      { label: 'Govt Subsidy', val: 'Up to ₹78,000 DBT' },
      { label: 'Net-Metering', val: 'PGVCL Empanelled' },
      { label: 'Warranty', val: '25 Yrs Performance' },
    ],
    capacities: ['3 kW', '5 kW', '10 kW', '25 kW+'],
    pdfName: 'Rooftop-Solar-Catalogue.pdf',
  },
];

export const BookCatalog: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedCapIdx, setSelectedCapIdx] = useState(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const product = PRODUCTS[activeIdx];
  const total = PRODUCTS.length;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : total - 1));
    setSelectedCapIdx(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < total - 1 ? prev + 1 : 0));
    setSelectedCapIdx(0);
  };

  const handleDownload = () => {
    setToastMsg(`Downloaded ${product.pdfName}`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const activeCap = product.capacities[selectedCapIdx] || product.capacities[0];
  const whatsappUrl = `https://wa.me/917878444414?text=${encodeURIComponent(
    `Hello Eco Green Solar, I am interested in ${product.name} (${activeCap}). Please share quote and installation details.`
  )}`;

  return (
    <section id="catalog" className="site-section site-section-subtle" style={{ position: 'relative' }}>
      <div style={{ maxWidth: '1020px', margin: '0 auto', width: '100%' }}>
        {/* Compact Clean Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          <span className="badge-green" style={{ marginBottom: '0.8rem' }}>
            OFFICIAL FACTORY CATALOGUE
          </span>
          <h2 style={{ fontSize: 'var(--text-title)', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            <TextReveal>Product Catalogue</TextReveal>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
            Authentic Rajkot-manufactured solar equipment. Browse models, select capacities, and download specsheets.
          </p>

          {/* Quick Select Pill Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.45rem',
              marginTop: '1.4rem',
            }}
          >
            {PRODUCTS.map((p, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSelectedCapIdx(0);
                  }}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid var(--brand-green)' : '1px solid var(--border-light)',
                    backgroundColor: isActive ? 'var(--brand-green)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 143, 79, 0.2)' : 'none',
                  }}
                  data-cursor="Select"
                >
                  {p.name.replace(' Series', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Interactive Showcase Card (Centered, not spread across whole page) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-light)',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.06)',
            overflow: 'hidden',
          }}
        >
          {/* Card Content: 2-Column Responsive Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              alignItems: 'center',
            }}
          >
            {/* Left: Product Visual Pedestal */}
            <div
              style={{
                padding: '2rem',
                backgroundColor: '#F8FAF9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid var(--border-subtle)',
                position: 'relative',
                minHeight: '340px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'var(--brand-green-light)',
                  color: 'var(--brand-green-dark)',
                  border: '1px solid var(--brand-green-tint)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {product.badge}
              </div>

              {/* Pedestal Glow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18%',
                  width: '65%',
                  height: '45px',
                  background: 'radial-gradient(ellipse at center, rgba(0, 143, 79, 0.22) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(8px)',
                }}
              />

              {/* Product Image */}
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                style={{
                  maxHeight: '220px',
                  maxWidth: '85%',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              <div style={{ marginTop: '1rem', fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Model {activeIdx + 1} of {total} • GIDC Metoda Rajkot
              </div>
            </div>

            {/* Right: Key Specs & Actions */}
            <div style={{ padding: '2.2rem' }}>
              <h3
                style={{
                  fontSize: '1.55rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '1.2rem',
                }}
              >
                {product.tagline}
              </p>

              {/* 4 Mini Specs Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.65rem',
                  marginBottom: '1.4rem',
                }}
              >
                {product.specs.map((sp, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {sp.label}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 700, marginTop: '0.15rem' }}>
                      {sp.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Capacity Selector */}
              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.45rem', textTransform: 'uppercase' }}>
                  Select Capacity:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {product.capacities.map((cap, cIdx) => {
                    const isSelected = cIdx === selectedCapIdx;
                    return (
                      <button
                        key={cap}
                        onClick={() => setSelectedCapIdx(cIdx)}
                        style={{
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          border: isSelected ? '1.5px solid var(--brand-green)' : '1px solid var(--border-light)',
                          backgroundColor: isSelected ? 'var(--brand-green-light)' : '#FFFFFF',
                          color: isSelected ? 'var(--brand-green-dark)' : 'var(--text-secondary)',
                          fontSize: '0.82rem',
                          fontWeight: isSelected ? 800 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {cap}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '0.65rem 1.2rem',
                    fontSize: '0.86rem',
                    flexGrow: 1,
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  data-cursor="WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>Inquire for {activeCap}</span>
                </a>

                <button
                  onClick={handleDownload}
                  className="btn-secondary"
                  style={{
                    padding: '0.65rem 1.1rem',
                    fontSize: '0.84rem',
                    backgroundColor: '#FFFFFF',
                  }}
                  data-cursor="Download"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Specsheet PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Compact Bottom Navigation Footer */}
          <div
            style={{
              padding: '0.9rem 1.8rem',
              backgroundColor: 'var(--bg-subtle)',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={handlePrev}
              className="btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', gap: '0.35rem' }}
              data-cursor="Prev"
            >
              <span>‹</span> Previous Model
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {PRODUCTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSelectedCapIdx(0);
                  }}
                  style={{
                    width: idx === activeIdx ? '22px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    backgroundColor: idx === activeIdx ? 'var(--brand-green)' : 'var(--border-light)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem', gap: '0.35rem' }}
              data-cursor="Next"
            >
              Next Model <span>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Instant Notification Toast for PDF Download */}
      {toastMsg && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '0.75rem 1.4rem',
            borderRadius: '999px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            fontSize: '0.86rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>✓</span>
          <span>{toastMsg}</span>
        </div>
      )}
    </section>
  );
};

export default BookCatalog;
