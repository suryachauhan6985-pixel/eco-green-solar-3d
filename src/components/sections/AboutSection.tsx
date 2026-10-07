import React, { useRef } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { ParallaxImage } from '../media/MediaComponents.tsx';
import { CountUpNumber } from '../common/CountUpNumber.tsx';
import { content } from '../../content';

export const AboutSection: React.FC = () => {
  const stats = [
    { target: 19, suffix: '+', label: 'Years Experience', desc: 'Pioneering green energy since 2007' },
    { target: 40, suffix: '+ MW', label: 'EPC Projects', desc: 'Utility-scale & commercial rooftop solar' },
    { target: 2500, suffix: '+', label: 'Happy Customers', desc: 'Residential villas & industrial sites' },
    { target: 24, suffix: ' Hrs', label: 'Rapid Resolution', desc: 'Guaranteed Rajkot technician turnaround' },
  ];

  return (
    <section id="about" className="site-section site-section-subtle">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '850px' }}>
          <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
            {content.about.tag}
          </span>
          <h2
            style={{
              fontSize: 'var(--text-title)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            <TextReveal>{content.about.headline}</TextReveal>
          </h2>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.2rem',
            }}
          >
            {content.about.storyP1}
          </p>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            {content.about.storyP2}
          </p>
        </div>

        {/* Editorial Parallax Image Collage */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.8rem',
            marginBottom: '5.5rem',
            alignItems: 'center',
          }}
        >
          {/* Main Large Image */}
          <div style={{ gridColumn: 'span 7' }} className="col-span-12 md:col-span-7">
            <ParallaxImage
              src="/media/images/solar-sunset-farm.jpg"
              alt="Eco Green Solar Saurashtra Rooftop Array"
              speed={15}
              aspectRatio="4/3"
              style={{ borderRadius: '24px' }}
            />
          </div>

          {/* Right Column: 2 Staggered Images */}
          <div
            style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}
            className="col-span-12 md:col-span-5"
          >
            <ParallaxImage
              src="/media/images/project-site-2.jpg"
              alt="GIDC Metoda Solar Factory & Installation Site"
              speed={-10}
              aspectRatio="16/10"
              style={{ borderRadius: '20px' }}
            />
            <ParallaxImage
              src="/media/images/modern-home-gujarat.jpg"
              alt="Zero Bill Residential Solar Villa"
              speed={12}
              aspectRatio="16/10"
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        {/* Key Numbers with Growing Incremental Count-Up Animation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '6rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="pro-card"
              style={{
                padding: '2.5rem 1.8rem',
                textAlign: 'center',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--brand-green)',
                  lineHeight: 1,
                  marginBottom: '0.6rem',
                }}
              >
                <CountUpNumber end={stat.target} suffix={stat.suffix} duration={1800} />
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.3rem',
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '24px',
            backgroundColor: 'var(--brand-green-dark)',
            color: '#FFFFFF',
            padding: '4rem 3vw',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                color: '#A3D9BD',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              19 YEARS OF EXCELLENCE
            </span>
            <blockquote
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                lineHeight: 1.35,
                color: '#FFFFFF',
                marginBottom: '1.2rem',
              }}
            >
              "{content.about.pinnedStatement}"
            </blockquote>
            <p style={{ fontSize: '0.92rem', color: '#D6EFE1' }}>
              Headquartered at GIDC Metoda, Rajkot • Empanelled Partner under PM Surya Ghar Yojana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
