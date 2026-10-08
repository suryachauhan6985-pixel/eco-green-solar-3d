import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { ProductsSection } from '../components/sections/ProductsSection';
import { SEO } from '../components/common/SEO';

export const ProductsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="Complete Solar Products Portfolio | Eco Green Solar"
        description="Explore Gujarat's leading range of Solar Rooftop PV, Evacuated Tube Collector (ETC) Solar Water Heaters, Heat Pumps, and CleanX automated panel cleaning systems."
      />

      {/* 1. Cinematic Hero Header with Relevant High-Resolution Image */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 5vw 5.5rem',
          backgroundImage: `linear-gradient(135deg, rgba(6, 78, 59, 0.90) 0%, rgba(6, 95, 70, 0.82) 50%, rgba(2, 44, 34, 0.93) 100%), url('/assets/curated/solar-array-cinematic.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: '#A7F3D0',
              marginBottom: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Link to="/" style={{ color: '#E6F4EC', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 750 }}>Products</span>
          </div>

          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#34D399',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}
            >
              <ShieldCheck size={16} />
              MANUFACTURING EXCELLENCE
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 850,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                maxWidth: '920px',
                fontFamily: 'var(--font-display, inherit)',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              Our Complete Solar Products Range
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: '#ECFDF5',
                maxWidth: '780px',
                lineHeight: 1.65,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                margin: 0,
              }}
            >
              Manufactured with surgical precision at GIDC Metoda in Rajkot. Each model features dedicated technical blueprints, BIS & MNRE compliance, and up to 25 years warranty.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Categorized Alternating Showcase with 3D Flip Cards & Side Details */}
      <ProductsSection />
    </div>
  );
};

export default ProductsPage;
