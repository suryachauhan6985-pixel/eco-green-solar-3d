import React from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { ParallaxImage } from '../media/MediaComponents.tsx';
import { content } from '../../content';

export const ServicesSection: React.FC = () => {
  const services = content.services.items;

  return (
    <section id="services" className="site-section">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '4.5rem', maxWidth: '850px' }}>
          <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
            {content.services.tag}
          </span>
          <h2
            style={{
              fontSize: 'var(--text-title)',
              marginBottom: '1.2rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            <TextReveal>{content.services.headline}</TextReveal>
          </h2>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {content.services.subheadline}
          </p>
        </div>

        {/* Alternating Service Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
          {services.map((srv, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={srv.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                {/* Visual Column */}
                <div
                  style={{
                    gridColumn: isEven ? '7 / span 6' : '1 / span 6',
                    order: isEven ? 2 : 1,
                  }}
                  className="col-span-12 md:col-span-6"
                >
                  <ParallaxImage
                    src={srv.image}
                    alt={srv.title}
                    speed={12}
                    aspectRatio="16/10"
                    style={{ borderRadius: '24px', boxShadow: 'var(--shadow-card)' }}
                  />
                </div>

                {/* Text Content Column */}
                <div
                  style={{
                    gridColumn: isEven ? '1 / span 5' : '8 / span 5',
                    order: isEven ? 1 : 2,
                  }}
                  className="col-span-12 md:col-span-6"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: 'var(--brand-green)',
                        lineHeight: 1,
                      }}
                    >
                      {srv.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--sun-warm)',
                        fontWeight: 700,
                      }}
                    >
                      {srv.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                      marginBottom: '1rem',
                      lineHeight: 1.25,
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 'var(--text-body)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.8rem',
                    }}
                  >
                    {srv.desc}
                  </p>

                  {/* Benefit Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2.2rem' }}>
                    {srv.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.8rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-green-light)',
                            color: 'var(--brand-green)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        ><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                        {pt}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
                      srv.title
                    )}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    data-cursor="Survey"
                  >
                    Request Technical Survey
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
