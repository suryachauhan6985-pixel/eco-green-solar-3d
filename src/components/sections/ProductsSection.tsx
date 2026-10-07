import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { ParallaxImage } from '../media/MediaComponents.tsx';
import { content } from '../../content';

export const ProductsSection: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };
  // Detailed authentic specifications for each of the 6 specialized factory series
  const flipProducts = [
    {
      id: 'pressurized',
      name: 'Pressurized ETC Series',
      type: 'Solar Water Heater',
      badge: 'High Pressure • 5 Bar',
      image: '/media/images/pressurized-solar-water-heater.png',
      specs: [
        { label: 'Inner Tank', value: 'Food-grade SS-304 / SS-316L (2.0mm)' },
        { label: 'Pressure Test', value: 'Tested up to 5 Bar (Booster Pump Safe)' },
        { label: 'Insulation', value: '50mm High-Density Injected PUF' },
        { label: 'Tube Glass', value: 'Borosilicate 3.3 Triple-Target ALN/SS/Cu' },
        { label: 'Available Sizes', value: '100, 150, 200, 250, 300, 500 LPD' },
        { label: 'Warranty', value: '5 Years Manufacturer Guarantee' },
      ],
      whatsappMsg: 'I want technical details on Pressurized ETC Series',
    },
    {
      id: 'copper',
      name: 'Copper Coil Series',
      type: 'Solar Water Heater',
      badge: 'Hard Water Specialist',
      image: '/media/images/copper-solar-heater.png',
      specs: [
        { label: 'Heat Exchanger', value: 'Seamless High-Grade Copper Coil' },
        { label: 'Water Quality', value: 'Engineered for High-TDS Groundwater' },
        { label: 'Heat Retention', value: 'Up to 72 Hours Zero Heat Loss' },
        { label: 'Outer Cladding', value: 'Rust-proof Stucco Aluminum Sheet' },
        { label: 'Available Sizes', value: '150, 200, 300, 500 LPD' },
        { label: 'Warranty', value: '7 Years Inner Tank Warranty' },
      ],
      whatsappMsg: 'I want technical details on Copper Coil Series',
    },
    {
      id: 'diamond',
      name: 'Diamond ETC Series',
      type: 'Solar Water Heater',
      badge: 'Heavy-Duty Domestic',
      image: '/media/images/diamond-solar.png',
      specs: [
        { label: 'Inner Vessel', value: 'Argon-Arc Welded SS-304 Grade' },
        { label: 'Mounting Rack', value: 'Hot-Dip Galvanized 2.0mm Heavy Steel' },
        { label: 'Backup Heater', value: 'Provision for Incoloy Electrical Element' },
        { label: 'Thermal Loss', value: '< 4°C Overnight Temperature Drop' },
        { label: 'Available Sizes', value: '100, 150, 200, 250, 300 LPD' },
        { label: 'Warranty', value: '5 Years Full System Guarantee' },
      ],
      whatsappMsg: 'I want technical details on Diamond ETC Series',
    },
    {
      id: 'pearl',
      name: 'Pearl ETC Series',
      type: 'Solar Water Heater',
      badge: 'Best Value Home',
      image: '/media/images/pearl-solar.png',
      specs: [
        { label: 'Thermosiphon', value: 'Natural High-Speed Gravity Circulation' },
        { label: 'Tank Lining', value: 'Double Passivated Stainless Steel' },
        { label: 'Wind Resistance', value: 'Tested for Saurashtra Coastal Winds' },
        { label: 'Daily Yield', value: 'Delivers 60°C – 85°C Water by 11:00 AM' },
        { label: 'Available Sizes', value: '100, 150, 200, 250 LPD' },
        { label: 'Warranty', value: '5 Years Factory Warranty' },
      ],
      whatsappMsg: 'I want technical details on Pearl ETC Series',
    },
    {
      id: 'glassline',
      name: 'Glassline Series',
      type: 'Solar Water Heater',
      badge: 'Zero Corrosion Coating',
      image: '/media/images/glassline-solar.png',
      specs: [
        { label: 'Tank Technology', value: 'Vitreous Enamel Glass Coating (850°C Fired)' },
        { label: 'Corrosion Shield', value: 'Sacrificial Magnesium Anode Rod Included' },
        { label: 'Hard Water TDS', value: 'Withstands TDS Levels up to 2,000+ PPM' },
        { label: 'Structure', value: 'Anti-Rust Powder-Coated Steel Chassis' },
        { label: 'Available Sizes', value: '150, 200, 300, 500 LPD' },
        { label: 'Warranty', value: '7 Years Tank Replacement Warranty' },
      ],
      whatsappMsg: 'I want technical details on Glassline Series',
    },
    {
      id: 'cleanx',
      name: 'Cleanx Nozzle Systems',
      type: 'Hydro Water Care',
      badge: 'High-Pressure Cleaning',
      image: '/media/images/cleanx-nozzles.png',
      specs: [
        { label: 'Body Material', value: 'Marine-Grade CNC Machined Solid Brass' },
        { label: 'Pressure Range', value: '2 Bar to 12 Bar Operating Pressure' },
        { label: 'Spray Pattern', value: 'Adjustable Precision Conical to Jet Stream' },
        { label: 'Application', value: 'Solar Panel Washing, Terrace Cleaning, Fleet' },
        { label: 'Connection', value: 'Standard 1/2" & 3/4" Quick-Lock Couplers' },
        { label: 'Life Expectancy', value: '10+ Years Maintenance-Free Operation' },
      ],
      whatsappMsg: 'I want details on Cleanx High-Pressure Nozzles',
    },
  ];

  return (
    <section id="products" className="site-section site-section-subtle">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '850px' }}>
          <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
            {content.products.tag}
          </span>
          <h2
            style={{
              fontSize: 'var(--text-title)',
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            <TextReveal>{content.products.headline}</TextReveal>
          </h2>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {content.products.subheadline}
          </p>
        </div>

        {/* 4 Flagship Engineering Categories */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '6rem',
          }}
        >
          {content.products.categories.map((product) => (
            <div
              key={product.id}
              className="pro-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
              }}
              data-cursor="Product"
            >
              {/* Product Visual Container with Silky Scroll Parallax */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#F8FAF8',
                }}
              >
                <ParallaxImage
                  src={product.image}
                  alt={product.name}
                  speed={12}
                  aspectRatio="16/11"
                  objectFit={product.image.endsWith('.png') ? 'contain' : 'cover'}
                  style={{
                    padding: product.image.endsWith('.png') ? '1.2rem' : '0',
                    borderRadius: 0,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'var(--brand-green)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '999px',
                    zIndex: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  }}
                >
                  {product.badge}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '1.4rem',
                    }}
                  >
                    {product.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.8rem' }}>
                    {product.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)',
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-green)',
                            flexShrink: 0,
                          }}
                        />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid #E2E8F0',
                  }}
                >
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-green)' }}>
                    {product.capacity}
                  </span>
                  <a
                    href={`https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(
                      product.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-green)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Factory Series: LARGE 3D FLIP CARDS ON HOVER WITH FULL SPECS */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '3.5rem 3vw',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--border-light)',
          }}
        >
          <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-green)', fontWeight: 700 }}>
                GIDC METODA FACTORY RANGE
              </span>
              <h3 style={{ fontSize: 'clamp(1.35rem, 2vw, 1.7rem)', color: 'var(--text-primary)', marginTop: '0.3rem', fontWeight: 800 }}>
                Specialized Solar Water Heater Series
              </h3>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--brand-green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
              <span>Hover or tap any card to flip & view engineering specs</span>
            </div>
          </div>

          {/* Large 3D Flip Card Grid: Desktop 3-column luxury grid, responsive on tablets & mobile */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2.2rem',
            }}
          >
            {flipProducts.map((card) => {
              const isFlipped = flippedCardId === card.id;
              return (
                <div
                  key={card.id}
                  className={`flip-card-wrapper ${isFlipped ? 'is-flipped' : ''}`}
                  onClick={(e) => {
                    // Prevent link clicks inside back card from re-toggling flip
                    if ((e.target as HTMLElement).closest('a')) return;
                    toggleFlip(card.id);
                  }}
                  style={{
                    perspective: '1200px',
                    height: '510px',
                    cursor: 'pointer',
                  }}
                  data-cursor="Flip"
                >
                  <div
                    className="flip-card-inner"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      textAlign: 'center',
                      transition: 'transform 0.85s cubic-bezier(0.25, 1, 0.35, 1)',
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                  {/* FRONT SIDE OF CARD (Large, Crisp Image + Info) */}
                  <div
                    className="flip-card-front"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      backgroundColor: '#F8FAF8',
                      borderRadius: '24px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                      padding: '2.2rem 1.8rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="badge-green">{card.badge}</span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>Tap / Hover to Flip</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                        </svg>
                      </span>
                    </div>

                    {/* Large Product Visual */}
                    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0.8rem 0' }}>
                      <img
                        src={card.image}
                        alt={card.name}
                        loading="lazy"
                        style={{
                          maxHeight: '230px',
                          maxWidth: '90%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>

                    <div style={{ width: '100%' }}>
                      <h4
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {card.name}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {card.type}
                      </p>
                    </div>
                  </div>

                  {/* BACK SIDE OF CARD (Full Engineering Specs + WhatsApp CTA) */}
                  <div
                    className="flip-card-back"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '24px',
                      border: '2px solid var(--brand-green)',
                      boxShadow: '0 16px 40px rgba(0, 143, 79, 0.15)',
                      padding: '1.8rem 1.6rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                        <span style={{ fontSize: '0.76rem', color: 'var(--brand-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          TECHNICAL SPECIFICATIONS
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Eco Green Solar
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        {card.name}
                      </h4>

                      {/* Specs List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {card.specs.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.8rem',
                              borderBottom: '1px solid #F1F5F9',
                              paddingBottom: '0.28rem',
                              gap: '0.5rem',
                            }}
                          >
                            <span style={{ color: 'var(--text-muted)', fontWeight: 600, flexShrink: 0 }}>{item.label}:</span>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Action */}
                    <a
                      href={`https://wa.me/917878444414?text=${encodeURIComponent(card.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        fontSize: '0.88rem',
                        marginTop: '0.8rem',
                        textAlign: 'center',
                        boxSizing: 'border-box',
                      }}
                      data-cursor="WhatsApp"
                    >
                      Enquire on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          </div>

          {/* CSS for 3D Card Flip: On Desktop with Hover, hover flips; on touch devices, tap flips back & forth */}
          <style>{`
            @media (hover: hover) and (pointer: fine) {
              .flip-card-wrapper:hover .flip-card-inner {
                transform: rotateY(180deg) !important;
              }
            }
            .flip-card-wrapper.is-flipped .flip-card-inner {
              transform: rotateY(180deg) !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
