import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, X } from 'lucide-react';
import { content } from '../content';
import { SEO } from '../components/common/SEO';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalImg, setActiveModalImg] = useState<{ title: string; src: string; tag: string } | null>(null);

  const filters = ['All', 'Utility', 'Industrial', 'Residential', 'Commercial'];
  const images = content.galleryImages;

  const filteredImages =
    activeFilter === 'All'
      ? images
      : images.filter((img) => img.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="Installation Gallery | Eco Green Solar"
        description="Browse through real photographs of residential rooftops, industrial solar plants, and commercial installations across Gujarat."
      />

      {/* 1. Cinematic Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 5vw 5.5rem',
          backgroundImage: `linear-gradient(135deg, rgba(6, 78, 59, 0.90) 0%, rgba(6, 95, 70, 0.82) 50%, rgba(2, 44, 34, 0.93) 100%), url('/assets/curated/solar-commercial-rooftop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            <span style={{ color: '#FFFFFF', fontWeight: 750 }}>Media & Gallery</span>
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
              VISUAL SHOWCASE
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
              Our Gallery & On-Site Installations
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
              Browse through real photographs of residential rooftops, industrial arrays, and commercial solar water heaters across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Pills */}
      <section style={{ maxWidth: '1280px', margin: '-2rem auto 3.5rem', padding: '0 5vw', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '0.85rem 1.25rem',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.06)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {filters.map((fil) => {
            const isActive = activeFilter === fil;
            return (
              <button
                key={fil}
                onClick={() => setActiveFilter(fil)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 750 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backgroundColor: isActive ? '#008F4F' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(0, 143, 79, 0.3)' : 'none',
                }}
              >
                {fil}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Photo Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveModalImg(img)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/media/images/project-site-2.jpg';
                  }}
                />
              </div>

              <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#008F4F', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {img.tag}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 750, color: '#0F172A', margin: '0.2rem 0 0' }}>
                    {img.title}
                  </h3>
                </div>
                <Search size={18} color="#94A3B8" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal View */}
      {activeModalImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
          }}
          onClick={() => setActiveModalImg(null)}
        >
          <div
            style={{
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImg(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <X size={20} color="#0F172A" />
            </button>
            <img
              src={activeModalImg.src}
              alt={activeModalImg.title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#0F172A', display: 'block' }}
            />
            <div style={{ padding: '1.25rem 1.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#008F4F', textTransform: 'uppercase' }}>
                {activeModalImg.tag}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', margin: '0.2rem 0 0' }}>
                {activeModalImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
