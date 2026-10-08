import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Download,
  Check,
  ChevronDown,
  Layers,
  Wrench,
  Building2,
  Star,
  Camera,
  RotateCw,
} from 'lucide-react';
import { productsData, ProductItem, ProductSpec } from '../data/products';
import { ProductHero } from '../components/common/ProductHero';
import { SEO } from '../components/common/SEO';

interface ProductDetailPageProps {
  forcedId?: string;
}

interface AlternatingVariantRowProps {
  product: ProductItem;
  spec: ProductSpec;
  index: number;
}

const AlternatingVariantRow: React.FC<AlternatingVariantRowProps> = ({
  product,
  spec,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isReversed = index % 2 === 1;

  const modelTitle = `${product.name} - ${spec.capacity}`;
  const isSolarPV = product.id === 'solar-rooftop';

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
            height: '380px',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* FRONT FACE OF CARD */}
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
              padding: '1.75rem',
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
                Model 0{index + 1}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 750,
                  color: '#008F4F',
                  backgroundColor: '#F1F5F9',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                }}
              >
                {spec.capacity}
              </span>
            </div>

            {/* Product Center Render */}
            <div
              style={{
                height: '210px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
              }}
            >
              <img
                src={product.heroFallbackImage || product.image}
                alt={modelTitle}
                style={{
                  maxHeight: '190px',
                  maxWidth: '90%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 22px rgba(0, 0, 0, 0.12))',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Bottom Flip Hint */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '0.75rem',
              }}
            >
              <span style={{ fontSize: '0.84rem', fontWeight: 750, color: '#0F172A' }}>
                {spec.members ? `Ideal for ${spec.members}` : product.capacityRange}
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

          {/* BACK FACE OF CARD (Flips on Hover with Engineering Blueprint) */}
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
                  GIDC Metoda Factory
                </span>
              </div>

              <h4
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 850,
                  color: '#FFFFFF',
                  margin: '0 0 1rem',
                  lineHeight: 1.25,
                }}
              >
                {modelTitle}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#A7F3D0' }}>Capacity:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{spec.capacity}</span>
                </div>
                {spec.tubesCount && (
                  <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#A7F3D0' }}>Tubes Array:</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{spec.tubesCount} Tubes</span>
                  </div>
                )}
                {spec.members && (
                  <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#A7F3D0' }}>Recommended:</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{spec.members}</span>
                  </div>
                )}
                {spec.dimensions && (
                  <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#A7F3D0' }}>Installation Space:</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{spec.dimensions}</span>
                  </div>
                )}
                <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#A7F3D0' }}>Inner Vessel:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>
                    {product.technicalDetails?.innerTank || 'SS-304L Food Grade'}
                  </span>
                </div>
                <div style={{ fontSize: '0.86rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#A7F3D0' }}>Factory Warranty:</span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>
                    {product.technicalDetails?.warranty || '5 Years Complete'}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/917878444414?text=${encodeURIComponent(
                `Hello! I want an official quote for ${modelTitle}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#00E676',
                color: '#064E3B',
                padding: '0.8rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0, 230, 118, 0.4)',
              }}
            >
              <span>Instant WhatsApp Quote</span>
              <ArrowRight size={16} />
            </a>
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
              {spec.capacity} Configuration
            </span>
          </div>

          {/* Large Clean Product Headline */}
          <h3
            style={{
              fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
              fontWeight: 850,
              color: '#0F172A',
              margin: '0 0 0.8rem',
              lineHeight: 1.2,
            }}
          >
            {modelTitle}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '1.4rem',
            }}
          >
            {isSolarPV
              ? `Engineered for residential rooftop solar independence with Tier-1 bifacial panels, smart inverter, and direct ₹78,000 DBT subsidy under PM Surya Ghar.`
              : `Manufactured at GIDC Metoda with food-grade SS-304L stainless steel, 50mm high-density PUF insulation, and high-yield borosilicate ETC tubes delivering up to 85°C hot water.`}
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
            {spec.members && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
                  }}
                >
                  <Check size={12} color="#008F4F" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 650 }}>
                  Recommended For: {spec.members}
                </span>
              </div>
            )}
            {spec.dimensions && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
                  }}
                >
                  <Check size={12} color="#008F4F" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 650 }}>
                  Installation Space: {spec.dimensions}
                </span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
                }}
              >
                <Check size={12} color="#008F4F" strokeWidth={3} />
              </div>
              <span style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 650 }}>
                {product.technicalDetails?.warranty || '5-Year Factory Warranty & GIDC Metoda Support'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            <a
              href={`https://wa.me/917878444414?text=${encodeURIComponent(
                `Hello Eco Green Solar! I would like to get a quote for ${modelTitle}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
              <span>Instant WhatsApp Quote</span>
              <ArrowRight size={16} />
            </a>

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
      </div>
    </div>
  );
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ forcedId }) => {
  const { productId } = useParams<{ productId: string }>();
  const idToFind = forcedId || productId || 'pressurized';

  // Find product by id or slug
  const product =
    productsData.find((p) => p.id === idToFind || p.slug === idToFind) ||
    productsData.find((p) => p.id === 'pressurized') ||
    productsData[0];

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Other products for related recommendations
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 3);

  // Capacity configurations to show in alternating rows
  const displaySpecs =
    product.specsTable && product.specsTable.length > 0
      ? product.specsTable
      : [
          {
            capacity: product.capacityRange || 'Standard Model',
            members: '4-6 Members',
            dimensions: 'Standard Terrace Footprint',
          },
        ];

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title={`${product.name} | ${product.category} | Eco Green Solar`}
        description={`${product.name} - ${product.shortDesc}. Manufactured by Eco Green Solar at GIDC Metoda, Rajkot, Gujarat.`}
      />

      {/* 1. Hykon-Style Dedicated Product Hero (Showcase Banner + Light Breadcrumb + Light Overview Card) */}
      <ProductHero product={product} />

      {/* 2. Alternating Zig-Zag Showcase with 3D Flip Card & Wide Side Details */}
      <section
        style={{
          padding: '5rem 5vw 4rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              CAPACITY CONFIGURATIONS & ENGINEERING
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
              {product.name} Model Lineup
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Explore available capacity models. Hover over the card to reveal the technical engineering blueprint.
            </p>
          </div>

          <div>
            {displaySpecs.map((spec, sIdx) => (
              <AlternatingVariantRow
                key={sIdx}
                product={product}
                spec={spec}
                index={sIdx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Curated Product & Installation Photo Gallery (Only This Product) */}
      {product.galleryImages && product.galleryImages.length > 0 && (
        <section style={{ padding: '4rem 5vw', backgroundColor: '#F8FAF8', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
            <div
              style={{
                marginBottom: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#008F4F',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  REAL INSTALLATIONS & DETAIL VIEWS
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0' }}>
                  {product.name} In Action
                </h2>
              </div>
              <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>
                GIDC Metoda Manufactured • Deployed Across Saurashtra
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {product.galleryImages.map((imgUrl, gIdx) => (
                <div
                  key={gIdx}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    aspectRatio: '16/11',
                    position: 'relative',
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} photo ${gIdx + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Certified Full Specifications Table */}
      {product.specsTable && product.specsTable.length > 0 && (
        <section
          id="technical-specifications"
          style={{ padding: '5rem 5vw', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#008F4F',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                CERTIFIED SPECIFICATIONS
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
                Full Technical Specifications
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.96rem' }}>
                Manufactured in accordance with MNRE guidelines and Bureau of Indian Standards at GIDC Metoda.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#F8FAF8',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                overflowX: 'auto',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F1F5F9', borderBottom: '2px solid #E2E8F0' }}>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>
                      Model Capacity
                    </th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>
                      Tubes / Collector
                    </th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>
                      Recommended Family
                    </th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>
                      Installation Space
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specsTable.map((spec, sIdx) => (
                    <tr
                      key={sIdx}
                      style={{
                        borderBottom: '1px solid #E2E8F0',
                        backgroundColor: sIdx % 2 === 0 ? '#FFFFFF' : '#F8FAF8',
                      }}
                    >
                      <td style={{ padding: '1.1rem 1.5rem', fontWeight: 750, color: '#008F4F', fontSize: '0.92rem' }}>
                        {spec.capacity}
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', color: '#334155', fontSize: '0.9rem' }}>
                        {spec.tubesCount ? `${spec.tubesCount} Tubes` : spec.tubesSize || 'Standard Array'}
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', color: '#334155', fontSize: '0.9rem' }}>
                        {spec.members || '4-6 Members'}
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', color: '#64748B', fontSize: '0.9rem' }}>
                        {spec.dimensions || 'Standard Rooftop'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. Frequently Asked Questions Accordion */}
      {product.faqs && product.faqs.length > 0 && (
        <section style={{ padding: '5rem 5vw', backgroundColor: '#F8FAF8', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#008F4F',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                COMMON QUESTIONS
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 850, color: '#0F172A', margin: '0.4rem 0 0.8rem' }}>
                FAQs About {product.name}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {product.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIdx === fIdx;
                return (
                  <div
                    key={fIdx}
                    style={{
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      backgroundColor: isOpen ? '#FFFFFF' : '#F8FAFC',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      boxShadow: isOpen ? '0 4px 15px rgba(0, 0, 0, 0.03)' : 'none',
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      style={{
                        width: '100%',
                        padding: '1.35rem 1.6rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: '1rem',
                      }}
                    >
                      <span style={{ fontSize: '1.02rem', fontWeight: 750, color: '#0F172A' }}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        color="#64748B"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.25s ease',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.6rem 1.4rem',
                          color: '#475569',
                          fontSize: '0.94rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '1rem',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. Other Related Products */}
      <section style={{ padding: '4.5rem 5vw', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              EXPLORE OUR RANGE
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 850, color: '#0F172A', margin: '0.3rem 0' }}>
              Other Eco Green Solar Systems
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {relatedProducts.map((relP) => (
              <Link
                key={relP.id}
                to={`/products/${relP.id}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <img
                    src={relP.image}
                    alt={relP.name}
                    style={{
                      maxHeight: '160px',
                      maxWidth: '90%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    color: '#008F4F',
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                  }}
                >
                  {relP.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.5rem' }}>
                  {relP.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 1rem' }}>
                  {relP.shortDesc}
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.86rem',
                    fontWeight: 750,
                    color: '#008F4F',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  View Details <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Clean Consultation CTA Banner */}
      <section
        style={{
          padding: '4.5rem 5vw',
          backgroundColor: '#F8FAF8',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            padding: '3.5rem 2.5rem',
            boxShadow: '0 10px 40px rgba(0, 143, 79, 0.05)',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              color: '#008F4F',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            FREE EXPERT CONSULTATION
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 850, color: '#0F172A', margin: '0.5rem 0 1rem' }}>
            Need Custom Sizing for {product.name}?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Speak directly with our senior factory engineers in Rajkot for capacity calculation, site feasibility, and official GST quotation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`https://wa.me/917878444414?text=${encodeURIComponent(
                `Hello! I need an expert site consultation for ${product.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 750,
                backgroundColor: '#008F4F',
                color: '#FFFFFF',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 143, 79, 0.3)',
              }}
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight size={17} />
            </a>
            <a
              href="tel:+917878444414"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                borderRadius: '12px',
                border: '1.5px solid #CBD5E1',
                textDecoration: 'none',
              }}
            >
              <Phone size={17} color="#008F4F" />
              <span>Call +91 78784 44414</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
