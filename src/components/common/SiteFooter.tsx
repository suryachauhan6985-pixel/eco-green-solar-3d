import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, ArrowRight, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { content } from '../../content';

export const SiteFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#F8FAF8',
        color: '#334155',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        zIndex: 10,
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Top CTA Banner Strip (Light Architectural Green Surface) */}
      <div
        style={{
          borderBottom: '1px solid var(--border-light)',
          padding: '3rem 5vw',
          background: 'linear-gradient(135deg, #E6F4EC 0%, #DDF0E4 50%, #D4EBDC 100%)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--brand-green)',
                padding: '0.35rem 0.95rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 750,
                letterSpacing: '0.04em',
                marginBottom: '0.8rem',
                border: '1px solid #A3D9BD',
                boxShadow: '0 2px 8px rgba(0, 143, 79, 0.08)',
              }}
            >
              <Sun size={14} color="#008F4F" />
              <span>PM SURYA GHAR EMPANELLED VENDOR</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 2.05rem)',
                color: '#0F172A',
                fontWeight: 750,
                fontFamily: 'var(--font-display)',
                lineHeight: 1.2,
              }}
            >
              Ready to generate zero-bill electricity & hot water?
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '0.4rem', maxWidth: '640px', lineHeight: 1.55 }}>
              Schedule a free terrace inspection with Rajkot engineers or claim up to ₹78,000 direct bank subsidy.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'var(--brand-green)',
                color: '#FFFFFF',
                padding: '0.85rem 1.8rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0, 143, 79, 0.28)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-green-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-green)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Request Free Survey</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20would%20like%20to%20consult%20regarding%20solar%20rooftop%20and%20water%20heater."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#006D3B',
                padding: '0.85rem 1.6rem',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid #A3D9BD',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F0FAF4';
                e.currentTarget.style.borderColor = 'var(--brand-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#A3D9BD';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>WhatsApp: +91 78 78 44 44 14</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Area (Light Clean Background) */}
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '4.5rem 5vw 3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Col 1: Brand & Heritage */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.25rem' }}>
              <img
                src="/assets/logo-transparent.png"
                alt="Eco Green Solar"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#475569', marginBottom: '1.25rem' }}>
              Founded in 2007 by the Bhimani & Javia families in Rajkot, Gujarat. Pioneers in Evacuated Tube Collector (ETC) solar thermal heating and turnkey solar rooftop EPC.
            </p>
            
          </div>

          {/* Col 2: Our Products */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 750,
                color: '#0F172A',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Our Products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Solar Rooftop System', path: '/solar-rooftop' },
                { label: 'Eco Green Diamond (ETC)', path: '/products/diamond' },
                { label: 'Glass Line Ceramic (Hard Water)', path: '/products/glass-line' },
                { label: 'Pearl Domestic Series', path: '/products/pearl' },
                { label: 'Pressurized (5 Bar High Pressure)', path: '/products/pressurized' },
                { label: 'Copper Coil Series', path: '/products/copper' },
                { label: 'Air-Source Heat Pump', path: '/products/heat-pump' },
                { label: 'Pressure Booster Pump', path: '/products/pressure-pump' },
                { label: 'CleanX Cleaning Nozzles', path: '/products/cleanx-nozzles' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--brand-green)';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--brand-green)', fontWeight: 700 }}>›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Projects */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 750,
                color: '#0F172A',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Company & Media
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Ground-Mounted Projects', path: '/ground-mounted' },
                { label: 'Industrial Solar Plants', path: '/industrial' },
                { label: 'Residential Rooftops', path: '/residential' },
                { label: 'Installation Gallery', path: '/gallery' },
                { label: 'Download Catalogues (PDF)', path: '/catalogue' },
                { label: 'Contact & Survey Request', path: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--brand-green)';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--brand-green)', fontWeight: 700 }}>›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Factory & Contact Details */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 750,
                color: '#0F172A',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Factory & Operations HQ
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#008F4F" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', fontWeight: 750, textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                    Manufacturing Plant
                  </div>
                  <div style={{ color: '#334155', lineHeight: 1.55 }}>
                    Plot No. 4-5-6, Gajanand Industrial Area, Rev. Survey No. 183, Opp. Chhapra Gam, Lodhika, Rajkot – 360021, Gujarat
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <Phone size={18} color="#008F4F" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', fontWeight: 750, textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                    Customer Care (24/7)
                  </div>
                  <a
                    href="tel:+917878444414"
                    style={{ color: 'var(--brand-green)', textDecoration: 'none', fontWeight: 750, fontSize: '0.95rem' }}
                  >
                    +91 78 78 44 44 14
                  </a>
                  <div style={{ marginTop: '0.2rem' }}>
                    <a
                      href="tel:+918306683067"
                      style={{ color: '#475569', textDecoration: 'none', fontSize: '0.86rem' }}
                    >
                      Office: +91 83066 83067
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <Mail size={18} color="#008F4F" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', fontWeight: 750, textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                    Support Email
                  </div>
                  <a
                    href="mailto:greenenergy123@gmail.com"
                    style={{ color: '#334155', textDecoration: 'none', fontWeight: 550 }}
                  >
                    greenenergy123@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar (Crisp Light Border & Clean Typography) */}
      <div
        style={{
          borderTop: '1px solid var(--border-light)',
          padding: '1.6rem 5vw',
          backgroundColor: '#EFF5F0',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.2rem',
            fontSize: '0.85rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} GREEN ENERGY / ECO GREEN VENTURES. All rights reserved.
            <span style={{ marginLeft: '0.8rem', color: '#94A3B8' }}>• Estd. 2007, Rajkot, Gujarat</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="https://wa.me/917878444414"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-green)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/maps?q=22.21273267178387,70.60438963429085"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-green)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              Google Maps
            </a>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid var(--border-light)',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 650,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-green)';
                e.currentTarget.style.color = 'var(--brand-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
