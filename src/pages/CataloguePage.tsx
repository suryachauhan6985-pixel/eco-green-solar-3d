import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, ArrowRight, ShieldCheck, RotateCw, CheckCircle2 } from 'lucide-react';
import { content } from '../content';
import { BookCatalog } from '../components/sections/BookCatalog';
import { SEO } from '../components/common/SEO';

interface CatalogueItem {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  desc: string;
  pdfUrl: string;
  coverImage: string;
}

const FlipCatalogueCard: React.FC<{ cat: CatalogueItem }> = ({ cat }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: '1200px',
        minHeight: '450px',
        height: '100%',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '450px',
          transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          borderRadius: '24px',
        }}
      >
        {/* FRONT FACE OF CARD (No Download Button) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '1.75rem',
            border: '1px solid #E2E8F0',
            boxShadow: isFlipped
              ? '0 20px 45px rgba(0, 0, 0, 0.08)'
              : '0 10px 30px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: isFlipped ? 1 : 2,
          }}
        >
          <div>
            {/* Cover Image Container */}
            <div
              style={{
                height: '190px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F8FAF8',
                borderRadius: '16px',
                marginBottom: '1.25rem',
                padding: '1rem',
                border: '1px solid #F1F5F9',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={cat.coverImage}
                alt={cat.title}
                style={{
                  maxHeight: '160px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Category & File Size Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.6rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: '#008F4F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {cat.category}
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 750,
                  color: '#475569',
                  backgroundColor: '#F1F5F9',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                }}
              >
                {cat.fileSize}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '0.6rem',
                lineHeight: 1.3,
              }}
            >
              {cat.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.88rem',
                color: '#64748B',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {cat.desc}
            </p>
          </div>

          {/* Interactive Flip Hint at Bottom (No download button here!) */}
          <div
            style={{
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#008F4F',
              fontSize: '0.84rem',
              fontWeight: 750,
            }}
          >
            <RotateCw size={15} style={{ animation: 'spin 6s linear infinite' }} />
            <span>Hover to View & Download Brochure</span>
          </div>
        </div>

        {/* BACK FACE OF CARD (Flips on Hover with Download Options) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #064E3B 0%, #047857 55%, #065F46 100%)',
            borderRadius: '24px',
            padding: '2rem 1.75rem',
            color: '#FFFFFF',
            boxShadow: '0 20px 45px rgba(6, 78, 59, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid rgba(52, 211, 153, 0.3)',
            zIndex: isFlipped ? 2 : 1,
          }}
        >
          <div>
            {/* Top Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#A7F3D0',
                }}
              >
                <FileText size={13} />
                <span>OFFICIAL BROCHURE</span>
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 750,
                  color: '#A7F3D0',
                }}
              >
                {cat.fileSize}
              </span>
            </div>

            {/* Document Title */}
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 850,
                color: '#FFFFFF',
                marginBottom: '0.75rem',
                lineHeight: 1.25,
              }}
            >
              {cat.title}
            </h3>

            {/* Quick Spec Highlights included in PDF */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginTop: '1.25rem',
                fontSize: '0.86rem',
                color: '#ECFDF5',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#34D399" />
                <span>Full Technical Sizing Tables</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#34D399" />
                <span>Piping & Electrical Wiring Layouts</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#34D399" />
                <span>BIS & MNRE Compliance Certificates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#34D399" />
                <span>Manufacturer Warranty Terms</span>
              </div>
            </div>
          </div>

          {/* Download CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
            <a
              href={cat.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                backgroundColor: '#00E676',
                color: '#064E3B',
                padding: '0.9rem',
                borderRadius: '12px',
                fontWeight: 850,
                fontSize: '0.96rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0, 230, 118, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Download size={18} strokeWidth={2.8} />
              <span>Download PDF Brochure</span>
            </a>

            <a
              href={`https://wa.me/917878444414?text=${encodeURIComponent(
                `Hello Eco Green Solar, please send me the official PDF brochure for: ${cat.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                padding: '0.65rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.84rem',
                textDecoration: 'none',
              }}
            >
              <span>Get PDF on WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CataloguePage: React.FC = () => {
  const catalogues = content.cataloguesList;

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="Download Product Catalogues | Eco Green Solar"
        description="Access official engineering specifications, capacity sizing tables, and installation manuals for all Eco Green Solar models."
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
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Download Catalogue</span>
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
              OFFICIAL PRODUCT BROCHURES
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
              Download Eco Green Product Catalogues
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
              Access full engineering specifications, capacity sizing tables, and installation manuals for all Eco Green Solar models.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Catalog 3D Flip Card Download Grid */}
      <section style={{ maxWidth: '1280px', margin: '-2.5rem auto 4.5rem', padding: '0 5vw', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {catalogues.map((cat) => (
            <FlipCatalogueCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>

      {/* 3. Interactive 3D Digital Flip-Book Viewer Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto 2.5rem', padding: '0 5vw', textAlign: 'center' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#008F4F',
              textTransform: 'uppercase',
            }}
          >
            INTERACTIVE EXPERIENCE
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 850, color: '#0F172A', marginTop: '0.4rem' }}>
            Interactive 3D Digital Catalog Viewer
          </h2>
          <p style={{ color: '#64748B', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1rem', lineHeight: 1.6 }}>
            Flip through our digital engineering brochure directly in your browser with real-time 3D page curl dynamics.
          </p>
        </div>

        <BookCatalog />
      </section>
    </div>
  );
};

export default CataloguePage;
