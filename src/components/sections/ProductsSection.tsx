import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Flame,
  Droplets,
  RotateCw,
  Phone,
  Check,
  Sun,
  Sparkles,
  Layers,
} from 'lucide-react';
import { productsData, ProductItem } from '../../data/products';

interface ProductShowcaseRowProps {
  product: ProductItem;
  isReversed: boolean;
  itemNumber: number;
}

const ProductShowcaseRow: React.FC<ProductShowcaseRowProps> = ({
  product,
  isReversed,
  itemNumber,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const routeUrl =
    product.slug === 'solar-rooftop' ? '/solar-rooftop' : `/products/${product.slug}`;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center',
        padding: '3rem 0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      {/* 1. 3D FLIP CARD (Placed Left on Even, Right on Odd) */}
      <div
        style={{
          gridColumn: isReversed ? '7 / span 6' : '1 / span 6',
          order: isReversed ? 2 : 1,
          perspective: '1200px',
        }}
        className="col-span-12 lg:col-span-6"
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* CARD FRONT FACE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.8rem',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAF8 100%)',
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#008F4F',
                  backgroundColor: '#E6F4EC',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  border: '1px solid #A7F3D0',
                }}
              >
                {product.badge}
              </span>
              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: '#64748B',
                  backgroundColor: '#F1F5F9',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                }}
              >
                0{itemNumber} • {product.category}
              </span>
            </div>

            {/* Product Center Image with Podium Shadow */}
            <div
              style={{
                height: '240px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: '0.5rem',
              }}
            >
              <img
                src={product.heroFallbackImage || product.image}
                alt={product.name}
                style={{
                  maxHeight: '220px',
                  maxWidth: '90%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 16px 25px rgba(0, 0, 0, 0.12))',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Card Front Footer: Interactive Flip Hint */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '0.85rem',
              }}
            >
              <span style={{ fontSize: '0.84rem', fontWeight: 750, color: '#0F172A' }}>
                {product.capacityRange || 'Standard Configurations'}
              </span>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#008F4F',
                  fontSize: '0.82rem',
                  fontWeight: 750,
                }}
              >
                <RotateCw size={14} style={{ animation: 'spin 6s linear infinite' }} />
                <span>Hover to Flip</span>
              </div>
            </div>
          </div>

          {/* CARD BACK FACE (Revealed on Hover) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(145deg, #064E3B 0%, #047857 55%, #065F46 100%)',
              borderRadius: '24px',
              padding: '2rem',
              color: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(6, 78, 59, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '2px solid rgba(52, 211, 153, 0.3)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#A7F3D0',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                  }}
                >
                  ENGINEERING BLUEPRINT
                </span>
                <span style={{ fontSize: '0.78rem', color: '#A7F3D0', fontWeight: 650 }}>
                  GIDC Metoda Certified
                </span>
              </div>

              <h4
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 850,
                  color: '#FFFFFF',
                  margin: '0 0 1rem',
                  lineHeight: 1.25,
                }}
              >
                {product.name}
              </h4>

              {/* Technical Specifications Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {product.technicalDetails ? (
                  <>
                    {product.technicalDetails.innerTank && (
                      <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#A7F3D0' }}>Inner Vessel:</span>
                        <span style={{ fontWeight: 700, color: '#FFFFFF', textAlign: 'right' }}>
                          {product.technicalDetails.innerTank}
                        </span>
                      </div>
                    )}
                    {product.technicalDetails.insulation && (
                      <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#A7F3D0' }}>Insulation:</span>
                        <span style={{ fontWeight: 700, color: '#FFFFFF', textAlign: 'right' }}>
                          {product.technicalDetails.insulation}
                        </span>
                      </div>
                    )}
                    {product.technicalDetails.tubes && (
                      <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#A7F3D0' }}>Collector / Tubes:</span>
                        <span style={{ fontWeight: 700, color: '#FFFFFF', textAlign: 'right' }}>
                          {product.technicalDetails.tubes}
                        </span>
                      </div>
                    )}
                    {product.technicalDetails.pressure && (
                      <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#A7F3D0' }}>Pressure Rating:</span>
                        <span style={{ fontWeight: 700, color: '#FFFFFF', textAlign: 'right' }}>
                          {product.technicalDetails.pressure}
                        </span>
                      </div>
                    )}
                    {product.technicalDetails.warranty && (
                      <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#A7F3D0' }}>Factory Warranty:</span>
                        <span style={{ fontWeight: 700, color: '#FFFFFF', textAlign: 'right' }}>
                          {product.technicalDetails.warranty}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#A7F3D0' }}>Solar Cell Type:</span>
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>DCR Mono PERC / TOPCon</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#A7F3D0' }}>Subsidy Benefit:</span>
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Up to ₹78,000 Direct DBT</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#A7F3D0' }}>Net-Metering:</span>
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>PGVCL / GUVNL Approved</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#A7F3D0' }}>Linear Warranty:</span>
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>25 Years Performance</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Link
              to={routeUrl}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#00E676',
                color: '#064E3B',
                padding: '0.85rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.94rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0, 230, 118, 0.4)',
              }}
            >
              <span>Explore Dedicated Page</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. SIDE PRODUCT DETAILS (Placed Right on Even, Left on Odd) */}
      <div
        style={{
          gridColumn: isReversed ? '1 / span 6' : '7 / span 6',
          order: isReversed ? 1 : 2,
        }}
        className="col-span-12 lg:col-span-6"
      >
        <div style={{ padding: '0.5rem' }}>
          {/* Category Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {product.category}
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
              GIDC Metoda Factory
            </span>
          </div>

          {/* Large Clean Product Headline */}
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)',
              fontWeight: 850,
              color: '#0F172A',
              margin: '0 0 0.8rem',
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '1.02rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}
          >
            {product.fullDesc || product.shortDesc}
          </p>

          {/* Key Salient Points */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.8rem',
            }}
          >
            {product.salientFeatures &&
              product.salientFeatures.slice(0, 3).map((feat, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#E6F4EC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} color="#008F4F" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 600, lineHeight: 1.45 }}>
                    {feat}
                  </span>
                </div>
              ))}
          </div>

          {/* Specifications Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {product.capacityRange && (
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#008F4F',
                  backgroundColor: '#E6F4EC',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #A7F3D0',
                }}
              >
                Capacity: {product.capacityRange}
              </span>
            )}
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 650,
                color: '#334155',
                backgroundColor: '#F1F5F9',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
              }}
            >
              5-Year Factory Warranty
            </span>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 650,
                color: '#334155',
                backgroundColor: '#F1F5F9',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
              }}
            >
              MNRE Approved
            </span>
          </div>

          {/* Direct CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            <Link
              to={routeUrl}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.6rem',
                fontSize: '0.94rem',
                fontWeight: 750,
                backgroundColor: '#008F4F',
                color: '#FFFFFF',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(0, 143, 79, 0.3)',
              }}
            >
              <span>Explore Dedicated Page</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/917878444414?text=${encodeURIComponent(
                `Hello Eco Green Solar! I would like to inquire about ${product.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                fontSize: '0.94rem',
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                borderRadius: '12px',
                border: '1.5px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <Phone size={15} color="#008F4F" />
              <span>Get Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductsSection: React.FC = () => {
  // Categorized products
  const solarPVProducts = productsData.filter((p) => p.categorySlug === 'solar-pv');
  const solarWaterHeaters = productsData.filter((p) => p.categorySlug === 'solar-water-heater');
  const heatPumpAndBooster = productsData.filter(
    (p) => p.categorySlug === 'heat-pump' || p.categorySlug === 'pressure-pump'
  );
  const cleaningSystems = productsData.filter((p) => p.categorySlug === 'solar-maintenance');

  return (
    <section
      id="products"
      style={{
        padding: '5rem 5vw 6rem',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Master Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#008F4F',
              backgroundColor: '#E6F4EC',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              border: '1px solid rgba(0, 143, 79, 0.2)',
              marginBottom: '0.9rem',
            }}
          >
            <ShieldCheck size={14} />
            ENGINEERED PRODUCT PORTFOLIO
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 850,
              color: '#0F172A',
              lineHeight: 1.15,
              margin: '0 0 1rem',
              fontFamily: 'var(--font-display, inherit)',
            }}
          >
            Complete Clean Energy & Thermal Systems Built in Gujarat
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
            Browse our complete manufacturing portfolio. Hover over any product card to reveal its technical engineering blueprint.
          </p>
        </div>

        {/* ========================================================
            CATEGORY SECTION 1: SOLAR ROOFTOP PHOTOVOLTAIC
        ======================================================== */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #008F4F',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#E6F4EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#008F4F',
              }}
            >
              <Sun size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 850, color: '#0F172A', margin: 0 }}>
                Solar Rooftop Photovoltaic Systems
              </h3>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>
                PM Surya Ghar Muft Bijli Yojana Empanelled • 3 kW to 100 kW+ Industrial EPC
              </span>
            </div>
          </div>

          <div>
            {solarPVProducts.map((p, idx) => (
              <ProductShowcaseRow
                key={p.id}
                product={p}
                isReversed={idx % 2 === 1}
                itemNumber={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            CATEGORY SECTION 2: SOLAR WATER HEATERS (THERMAL)
        ======================================================== */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #008F4F',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#E6F4EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#008F4F',
              }}
            >
              <Flame size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 850, color: '#0F172A', margin: 0 }}>
                Solar Water Heaters & Thermal Systems
              </h3>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>
                Evacuated Tube Collector (ETC) • Food-Grade SS-304L • Hard Water & High-Pressure Rated
              </span>
            </div>
          </div>

          <div>
            {solarWaterHeaters.map((p, idx) => (
              <ProductShowcaseRow
                key={p.id}
                product={p}
                isReversed={idx % 2 === 1}
                itemNumber={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            CATEGORY SECTION 3: HEAT PUMPS & PRESSURE BOOSTERS
        ======================================================== */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #008F4F',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#E6F4EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#008F4F',
              }}
            >
              <Zap size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 850, color: '#0F172A', margin: 0 }}>
                Thermodynamic Heat Pumps & Booster Systems
              </h3>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>
                75% Energy Reduction Air-Source Systems & Multistory Water Pressure Boosters
              </span>
            </div>
          </div>

          <div>
            {heatPumpAndBooster.map((p, idx) => (
              <ProductShowcaseRow
                key={p.id}
                product={p}
                isReversed={idx % 2 === 1}
                itemNumber={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            CATEGORY SECTION 4: AUTOMATIC PANEL CLEANING NOZZLES
        ======================================================== */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #008F4F',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#E6F4EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#008F4F',
              }}
            >
              <Droplets size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 850, color: '#0F172A', margin: 0 }}>
                Automated Solar Maintenance Technologies
              </h3>
              <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>
                CleanX Micro-Sprinkler Nozzles with 35% Higher Annual Generation
              </span>
            </div>
          </div>

          <div>
            {cleaningSystems.map((p, idx) => (
              <ProductShowcaseRow
                key={p.id}
                product={p}
                isReversed={idx % 2 === 1}
                itemNumber={idx + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
