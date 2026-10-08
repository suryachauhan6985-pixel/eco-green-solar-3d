import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../../data/products';

interface ProductHeroProps {
  product: ProductItem;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const isSolarPV = product.id === 'solar-rooftop';

  const scrollToSpecs = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('technical-specifications');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solarPVSpecs = [
    { label: 'Module Technology', value: 'DCR Mono PERC / TOPCon (MNRE ALMM Listed)' },
    { label: 'Smart Inverter', value: 'On-Grid Smart MPPT Inverter (Wi-Fi Enabled)' },
    { label: 'Daily Generation', value: '~4-5 Units / Units per kW / Day' },
    { label: 'Grid Interconnection', value: 'Bi-Directional Net Metering (DISCOM Approved)' },
    { label: 'Subsidy Benefit', value: 'Up to ₹78,000 Direct DBT (PM Surya Ghar)' },
    { label: 'Factory Warranty', value: '25 Years Linear Performance Warranty' },
  ];

  const thermalSpecs = [
    { label: 'Inner Tank Material', value: product.technicalDetails?.innerTank || 'SS-304L Food Grade Stainless Steel' },
    { label: 'Insulation', value: product.technicalDetails?.insulation || '50mm High-Density PUF (94% Heat Retention)' },
    { label: 'Collector / Tubes', value: product.technicalDetails?.tubes || 'Triple Layer Borosilicate 58x1800mm' },
    { label: 'Pressure Rating', value: product.technicalDetails?.pressure || 'Gravity / 5 Bar (Pressurized Model)' },
    { label: 'Peak Temperature', value: 'Up to 85°C Solar Thermal Peak' },
    { label: 'Factory Warranty', value: product.technicalDetails?.warranty || '5 Years Complete Factory Warranty' },
  ];

  const specsList = isSolarPV ? solarPVSpecs : thermalSpecs;

  const solarPVCapacities = [
    '3 kW (Residential)',
    '5 kW (Bungalow)',
    '10 kW (Commercial)',
    '15 kW',
    '25 kW',
    '50 kW+ (Industrial EPC)',
  ];

  const thermalCapacities = ['100 LPD', '150 LPD', '200 LPD', '250 LPD', '300 LPD', '500 LPD'];
  const capacities = isSolarPV ? solarPVCapacities : thermalCapacities;

  return (
    <div>
      {/* 1. Panoramic Showcase Banner (~380px height, Not 100vh) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '380px',
          maxHeight: '430px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isSolarPV
            ? 'linear-gradient(135deg, #1E3A8A 0%, #0284C7 60%, #38BDF8 100%)'
            : 'linear-gradient(180deg, #3B82F6 0%, #93C5FD 55%, #E0F2FE 100%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        {isSolarPV ? (
          /* Solar Power / Rooftop Panoramic Banner */
          <div
            style={{
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              padding: '2.5rem 5vw',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Left: Bold Category Headline & Accent Underline */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <h1
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  margin: 0,
                  textShadow: '0 4px 20px rgba(0,0,0,0.25)',
                }}
              >
                SOLAR POWER PLANTS
              </h1>
              {/* Stylish colored accent underline bar */}
              <div
                style={{
                  width: '90px',
                  height: '5px',
                  backgroundColor: '#00E676',
                  borderRadius: '3px',
                  margin: '1rem 0 1.2rem',
                }}
              />
              <p
                style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                  fontWeight: 700,
                  color: '#F0FDF4',
                  lineHeight: 1.3,
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}
              >
                Clean Energy, Endless Possibilities.
              </p>
            </div>

            {/* Right: High-Resolution Solar Array Visual */}
            <div
              style={{
                gridColumn: 'span 6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
              className="col-span-12 md:col-span-6"
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 30, 80, 0.35)',
                  border: '3px solid rgba(255, 255, 255, 0.4)',
                  aspectRatio: '16/9',
                }}
              >
                <img
                  src="/assets/curated/solar-array-cinematic.jpg"
                  alt="Eco Green Solar Rooftop Power Plant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Solar Water Heater / Thermal / Pumps Showcase Stage */
          <div
            style={{
              width: '100%',
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '2rem 4vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Centered Product Stage / Podium Presentation */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxHeight: '270px',
              }}
            >
              <img
                src={product.heroFallbackImage || product.image}
                alt={product.name}
                style={{
                  maxHeight: '250px',
                  maxWidth: '85%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.22))',
                  position: 'relative',
                  zIndex: 3,
                }}
              />
            </div>

            {/* Stage Pedestal Oval Base */}
            <div
              style={{
                width: 'min(750px, 90vw)',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 12px 30px rgba(0, 50, 120, 0.18)',
                marginTop: '-16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  color: '#0369A1',
                  textTransform: 'uppercase',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {product.name}
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* 2. Light, Clean Breadcrumb Bar (No Dark UI) */}
      <nav
        aria-label="Breadcrumb"
        style={{
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          padding: '0.85rem 5vw',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.85rem',
            color: '#64748B',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflowX: 'auto',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#64748B',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#008F4F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748B';
            }}
          >
            Home
          </Link>
          <span style={{ color: '#CBD5E1' }}>/</span>
          <Link
            to="/products"
            style={{
              color: '#64748B',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#008F4F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748B';
            }}
          >
            {product.category || 'Products'}
          </Link>
          <span style={{ color: '#CBD5E1' }}>/</span>
          <span style={{ color: '#008F4F', fontWeight: 700 }}>
            {product.name}
          </span>
        </div>
      </nav>

      {/* 3. Light, Premium Product Overview & Quick Specs Split Section */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          padding: '3.5rem 5vw 4rem',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Product Title, Description & Actions */}
          <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#008F4F',
                  backgroundColor: '#E6F4EC',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                }}
              >
                {product.category}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                Estd. 2007 • GIDC Metoda
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 850,
                color: '#0F172A',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              {product.name}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '1.8rem',
                maxWidth: '680px',
              }}
            >
              {product.fullDesc || product.shortDesc}
            </p>

            {/* Capacity / Variant Selection Pills */}
            <div style={{ marginBottom: '2rem' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 750,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.65rem',
                }}
              >
                {isSolarPV ? 'Available System Capacities:' : 'Available Capacity Configurations:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {capacities.map((cap, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.4rem 0.95rem',
                      borderRadius: '8px',
                      backgroundColor: idx === 0 ? '#E6F4EC' : '#F8FAFC',
                      border: idx === 0 ? '1.5px solid #008F4F' : '1px solid #E2E8F0',
                      color: idx === 0 ? '#008F4F' : '#1E293B',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a
                href={`https://wa.me/917878444414?text=${encodeURIComponent(
                  `Hello Eco Green Solar! I would like to get an official quote for ${product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  backgroundColor: '#008F4F',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(0, 143, 79, 0.3)',
                }}
              >
                <span>Instant WhatsApp Quote</span>
                <ArrowRight size={17} />
              </a>

              <button
                onClick={scrollToSpecs}
                style={{
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.94rem',
                  fontWeight: 650,
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '10px',
                  color: '#1E293B',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.borderColor = '#94A3B8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
              >
                View Specifications
              </button>

              <a
                href="tel:+917878444414"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.92rem',
                  color: '#008F4F',
                  fontWeight: 750,
                  textDecoration: 'none',
                  marginLeft: '0.5rem',
                }}
              >
                <Phone size={16} />
                <span>+91 78784 44414</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Light "AVAILABLE NOW" Quick Specs Card */}
          <div style={{ gridColumn: 'span 5' }} className="col-span-12 md:col-span-5">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                padding: '1.75rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}
            >
              {/* Header Badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #F1F5F9',
                  paddingBottom: '0.85rem',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#008F4F',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #008F4F',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#008F4F',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    AVAILABLE NOW
                  </span>
                </div>
                <span style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600 }}>
                  GIDC Metoda Factory
                </span>
              </div>

              {/* Quick Specs Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {specsList.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      fontSize: '0.86rem',
                      gap: '0.75rem',
                      paddingBottom: '0.65rem',
                      borderBottom: sIdx === specsList.length - 1 ? 'none' : '1px solid #F8FAFC',
                    }}
                  >
                    <span style={{ color: '#64748B', flexShrink: 0, fontWeight: 550 }}>
                      {spec.label}:
                    </span>
                    <span style={{ color: '#0F172A', fontWeight: 700, textAlign: 'right' }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Value Highlight */}
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <CheckCircle2 size={16} color="#008F4F" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#065F46', fontWeight: 700 }}>
                  {isSolarPV
                    ? 'Save ₹36,000 to ₹1,50,000+ electricity costs every single year.'
                    : 'Save ₹15,000+ water heating electricity cost every single year.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHero;
