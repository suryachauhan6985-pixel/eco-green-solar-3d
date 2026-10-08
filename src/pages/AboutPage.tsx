import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Scale, Target, ShieldCheck, Factory, Phone, ArrowRight } from 'lucide-react';
import { content } from '../content';
import { SEO } from '../components/common/SEO';

export const AboutPage: React.FC = () => {
  const { about, contact } = content;

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="About Us | Eco Green Solar | 19 Years Saurashtra Renewable Energy Pioneer"
        description="Founded in 2007 in Rajkot, Gujarat. Eco Green Solar has installed over 40+ MW solar projects and 25,000+ solar water heaters across Gujarat."
      />

      {/* 1. Cinematic Hero Banner with High Quality Solar Image (No flat solid color) */}
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
            <Link to="/" style={{ color: '#E6F4EC', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>About Us</span>
          </div>

          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#34D399',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}
            >
              {about.tag}
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 850,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                maxWidth: '920px',
                fontFamily: "var(--font-display)",
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              }}
            >
              {about.headline}
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
              {about.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip (Floating Clean Light Card) */}
      <section style={{ maxWidth: '1280px', margin: '-2.5rem auto 4.5rem', padding: '0 5vw', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 50, 20, 0.08)',
            border: '1px solid #E2E8F0',
            padding: '2rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {about.stats.map((stat, i) => (
            <div key={i} style={{ borderRight: i < about.stats.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                  fontWeight: 850,
                  color: '#008F4F',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: "var(--font-display)",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.25rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Company Genesis & Heritage */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', color: '#008F4F', textTransform: 'uppercase' }}>
              COMPANY GENESIS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 850, color: '#0F172A', margin: '0.5rem 0 1.25rem', lineHeight: 1.2 }}>
              About Green Energy & Eco Green Ventures
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '1.25rem' }}>
              {about.storyP1}
            </p>
            <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '1.5rem' }}>
              {about.storyP2}
            </p>

            {about.pinnedStatement && (
              <div
                style={{
                  backgroundColor: '#E6F4EC',
                  borderLeft: '4px solid #008F4F',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '2rem',
                }}
              >
                <p style={{ margin: 0, fontStyle: 'italic', fontWeight: 650, color: '#065F46', lineHeight: 1.6 }}>
                  "{about.pinnedStatement}"
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <Factory size={20} color="#008F4F" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E293B' }}>GIDC Metoda Factory</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <ShieldCheck size={20} color="#008F4F" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1E293B' }}>MNRE / BIS Certified</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                border: '1px solid #E2E8F0',
                aspectRatio: '4/3',
              }}
            >
              <img
                src="/assets/curated/hero-solar-architecture.jpg"
                alt="Eco Green Solar Engineering in Rajkot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Competence & Customer Care */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            padding: '3rem 3.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', color: '#008F4F', textTransform: 'uppercase' }}>
              SERVICE EXCELLENCE
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 850, color: '#0F172A', margin: '0.5rem 0 1.25rem', lineHeight: 1.25 }}>
              {about.coreCompetence.headline}
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.02rem', marginBottom: '1.75rem' }}>
              {about.coreCompetence.text}
            </p>

            <div
              style={{
                backgroundColor: '#F8FAF8',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#E6F4EC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#008F4F',
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 750, color: '#64748B', textTransform: 'uppercase' }}>
                  CUSTOMER CARE CALL CENTER
                </div>
                <a
                  href={`tel:${contact.customerCare}`}
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#008F4F',
                    textDecoration: 'none',
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {contact.customerCareDisplay}
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {about.coreCompetence.points.map((pt, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#F8FAF8',
                  padding: '1.1rem 1.35rem',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#008F4F',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  <Check size={14} color="#FFFFFF" strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 650, color: '#1E293B' }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Corporate Ethics & Quality Policy */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Ethics Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ marginBottom: "1rem" }}><Scale size={32} color="#008F4F" /></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
              {about.ethics.headline}
            </h3>
            <blockquote
              style={{
                fontStyle: 'italic',
                color: '#334155',
                lineHeight: 1.7,
                fontSize: '0.98rem',
                borderLeft: '3px solid #008F4F',
                paddingLeft: '1.25rem',
                margin: '0 0 1.25rem 0',
              }}
            >
              {about.ethics.quote}
            </blockquote>
            <p style={{ color: '#64748B', lineHeight: 1.6, fontSize: '0.92rem' }}>
              {about.ethics.policy}
            </p>
          </div>

          {/* Vision & Mission */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ marginBottom: "1rem" }}><Target size={32} color="#008F4F" /></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
              Our Vision & Mission
            </h3>
            <p style={{ color: '#008F4F', fontWeight: 700, fontSize: '0.96rem', marginBottom: '1.25rem' }}>
              {about.visionMission.vision}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {about.visionMission.mission.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                  <span style={{ color: '#008F4F', fontWeight: 800, marginTop: '2px' }}>•</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Clean, Light Themed CTA Section (No Dark UI) */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: '4.5rem 5vw',
          textAlign: 'center',
          borderTop: '1px solid #E2E8F0',
        }}
      >
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            backgroundColor: '#F8FAF8',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            padding: '3.5rem 2.5rem',
            boxShadow: '0 10px 40px rgba(0, 143, 79, 0.05)',
          }}
        >
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#008F4F',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            START YOUR SOLAR JOURNEY
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 850, color: '#0F172A', margin: '0.5rem 0 1rem' }}>
            Ready to Power Your Home With The Sun?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Schedule a free site feasibility survey in Rajkot or anywhere in Gujarat under PM Surya Ghar Muft Bijli Yojana.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to="/contact"
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
              <span>Get Free Site Survey</span>
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/catalogue"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #CBD5E1',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              Download Brochures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
