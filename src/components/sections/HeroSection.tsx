import React, { useState, useEffect } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { content } from '../../content';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-resolution vivid architectural solar scenes
  const slides = [
    {
      image: '/media/images/solar-panels-roof-hero.jpg',
      caption: 'High-Efficiency Monocrystalline N-Type TOPCon Rooftop System',
      tag: 'Peak Generation • 22.8% Yield',
    },
    {
      image: '/media/images/hero-solar-architecture.jpg',
      caption: 'Luxury Residential Rooftop Solar Architecture',
      tag: 'Zero Electricity Bills',
    },
    {
      image: '/media/images/solar-sunset-farm.jpg',
      caption: 'Saurashtra Golden Hour Solar Farm',
      tag: '300+ Days of Gujarat Sunshine',
    },
    {
      image: '/media/images/solar-commercial-rooftop.jpg',
      caption: 'Commercial & Industrial Turnkey Solar EPC',
      tag: '40+ MW Engineering Legacy',
    },
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="hero-responsive-section"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#F8FAF7',
        overflow: 'hidden',
      }}
    >
      {/* Background Multi-Style Luxury Cinematic Transitions (Zoom-Pan, Shutter Reveal, Depth Soft Focus) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;

          // Unique premium transition signature per slide:
          // Slide 0: Ken-Burns Deep Cinematic Zoom-In & Ambient Pan
          // Slide 1: Modern Architectural Curtain Wipe (Left-to-Right Reveal)
          // Slide 2: Depth-of-Field Scale with Golden Hour Glow Reveal
          // Slide 3: Diagonal Slanted Architectural Mask Unveil
          const getTransformStyle = () => {
            if (idx === 0) {
              return {
                transform: isActive ? 'scale(1.06) translate(0px, 0px)' : 'scale(1.18) translate(-15px, 10px)',
                filter: isActive ? 'brightness(0.96) contrast(1.04) blur(0px)' : 'brightness(0.85) contrast(1.1) blur(8px)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              };
            }
            if (idx === 1) {
              return {
                transform: isActive ? 'scale(1.04) translateX(0%)' : 'scale(1.12) translateX(4%)',
                clipPath: isActive ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                filter: 'brightness(0.96) contrast(1.04)',
              };
            }
            if (idx === 2) {
              return {
                transform: isActive ? 'scale(1.03) translateY(0%)' : 'scale(0.94) translateY(-3%)',
                filter: isActive ? 'brightness(0.96) contrast(1.04) blur(0px)' : 'brightness(1.15) contrast(0.9) blur(10px)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              };
            }
            // idx === 3:
            return {
              transform: isActive ? 'scale(1.05) rotate(0deg)' : 'scale(1.15) rotate(-1deg)',
              clipPath: isActive ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
              filter: 'brightness(0.96) contrast(1.04)',
            };
          };

          const transitionStyles = getTransformStyle();

          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: transitionStyles.transform,
                filter: transitionStyles.filter,
                clipPath: transitionStyles.clipPath,
                transition: 'opacity 1.3s cubic-bezier(0.16, 1, 0.3, 1), transform 5s cubic-bezier(0.1, 1, 0.25, 1), clip-path 1.4s cubic-bezier(0.22, 1, 0.36, 1), filter 1.3s ease',
                willChange: 'transform, opacity, clip-path, filter',
              }}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          );
        })}

        {/* Cinematic directional tint to guarantee text contrast without any box */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(255, 255, 255, 0.4) 65%, rgba(255, 255, 255, 0.15) 100%)',
          }}
        />

        {/* Smooth Seamless Bottom Blend into Next Section (About) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '140px',
            background: 'linear-gradient(to bottom, rgba(248, 250, 247, 0) 0%, rgba(248, 250, 247, 0.5) 45%, rgba(248, 250, 247, 0.9) 80%, #F8FAF7 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hero Foreground Content - Open, Full-Bleed Transparent Layout (No Box Container) */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Left Content Column */}
        <div
          style={{
            maxWidth: '740px',
            width: '100%',
          }}
        >
          {/* Headline - Bold, Sharp & Balanced */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h1
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: '#0F172A',
                fontWeight: 800,
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.8)',
              }}
            >
              <span style={{ display: 'block' }}>
                <TextReveal delay={0.1}>{content.hero.headlineLine1}</TextReveal>
              </span>
              <span style={{ display: 'block', color: 'var(--brand-green)' }}>
                <TextReveal delay={0.25}>{content.hero.headlineLine2}</TextReveal>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
              color: '#1E293B',
              marginBottom: '1.8rem',
              lineHeight: 1.55,
              fontWeight: 500,
              maxWidth: '560px',
            }}
          >
            {content.hero.subheadline}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.8rem',
            }}
          >
            <a
              href={content.hero.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor="Quote"
              style={{
                padding: '0.8rem 1.6rem',
                fontSize: '0.96rem',
                boxShadow: '0 10px 25px rgba(0, 143, 79, 0.28)',
              }}
            >
              <span>{content.hero.ctaPrimary}</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="#catalog"
              className="btn-secondary"
              data-cursor="Book"
              style={{
                padding: '0.8rem 1.5rem',
                fontSize: '0.96rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span>Browse Catalog</span>
            </a>
          </div>

          {/* Trust Metrics Pill Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(15, 23, 42, 0.1)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 650 }}>
              <span style={{ color: 'var(--brand-green)', fontSize: '1.05rem' }}>✓</span> 19+ Years Legacy
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 650 }}>
              <span style={{ color: 'var(--brand-green)', fontSize: '1.05rem' }}>✓</span> 40+ MW Installed
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', color: '#0F172A', fontWeight: 650 }}>
              <span style={{ color: 'var(--brand-green)', fontSize: '1.05rem' }}>✓</span> 24-Hr Service Turnaround
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
