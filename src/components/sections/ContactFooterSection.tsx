import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { content } from '../../content';

export const ContactFooterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Rajkot',
    bill: '₹3,000 – ₹6,000',
    solution: 'Rooftop Solar PV',
  });
  const [submitted, setSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `*New Solar Survey Request - Eco Green Solar Website*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*City:* ${encodeURIComponent(
      formData.city
    )}%0A*Monthly Bill:* ${encodeURIComponent(formData.bill)}%0A*Solution Interested:* ${encodeURIComponent(
      formData.solution
    )}`;

    window.open(`https://wa.me/917878444414?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-section site-section-subtle" style={{ paddingBottom: '3rem' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Contact Hero Container */}
        <div
          className="pro-card"
          style={{
            borderRadius: '28px',
            padding: '4rem 4vw',
            marginBottom: '5.5rem',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Contact Info & Address */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
                {content.contact.tag}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                  lineHeight: 1.1,
                  marginBottom: '1.2rem',
                  color: 'var(--text-primary)',
                }}
              >
                <TextReveal>{content.contact.headline}</TextReveal>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                {content.contact.subheadline}
              </p>

              {/* Direct Touchpoints with Professional SVG Icons (No Emojis) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <a
                  href={`tel:${content.contact.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.1rem',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                  }}
                  data-cursor="Call"
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--brand-green-light)',
                      color: 'var(--brand-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid var(--brand-green-tint)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Customer Hotline (24/7)
                    </div>
                    {content.contact.phoneDisplay}
                  </div>
                </a>

                <a
                  href={content.hero.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.1rem',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                  }}
                  data-cursor="WhatsApp"
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#E7FCEE',
                      color: '#008F4F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid #C4F2D6',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Official WhatsApp Channel
                    </div>
                    Chat with Senior Engineer
                  </div>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.1rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--sun-light)',
                      color: 'var(--sun-warm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid #FDE68A',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Factory & Head Office
                    </div>
                    <div style={{ marginTop: '0.25rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                      {content.contact.address}
                    </div>
                    <a
                      href={content.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--brand-green)',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        marginTop: '0.45rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span>Open in Google Maps</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean White Consultation Form */}
            <div style={{ gridColumn: 'span 6' }} className="col-span-12 md:col-span-6">
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: '20px',
                  padding: '2.5rem 2.2rem',
                  border: '1px solid var(--border-light)',
                }}
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ marginBottom: '0.4rem' }}>
                      <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                        Request Free Site Feasibility Survey
                      </h3>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Our Rajkot engineers will inspect terrace shading with zero charge.
                      </p>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Patel"
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.1rem',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--border-light)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.1rem',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--border-light)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                          City / District
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 0.9rem',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid var(--border-light)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            outline: 'none',
                          }}
                        >
                          <option value="Rajkot">Rajkot</option>
                          <option value="Jamnagar">Jamnagar</option>
                          <option value="Junagadh">Junagadh</option>
                          <option value="Morbi">Morbi</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Other Gujarat">Other Gujarat</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                          Monthly Power Bill
                        </label>
                        <select
                          value={formData.bill}
                          onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.85rem 0.9rem',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid var(--border-light)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            outline: 'none',
                          }}
                        >
                          <option value="₹1,000 – ₹3,000">₹1,000 – ₹3,000</option>
                          <option value="₹3,000 – ₹6,000">₹3,000 – ₹6,000</option>
                          <option value="₹6,000 – ₹10,000">₹6,000 – ₹10,000</option>
                          <option value="₹10,000+">₹10,000+ / mo</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', marginTop: '0.6rem' }}
                      data-cursor="Submit"
                    >
                      Submit & Open Direct WhatsApp Chat
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>🎉</div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--brand-green)', marginBottom: '0.6rem' }}>
                      Survey Request Submitted!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Thank you, {formData.name}. Our senior solar engineer has received your request and will contact you at {formData.phone} within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                      style={{ padding: '0.7rem 1.4rem' }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Full-Width Custom Interactive Google Map with Hover Zoom & Location Pin */}
          <div
            style={{
              marginTop: '3.5rem',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 12px 35px rgba(15, 23, 42, 0.08)',
              position: 'relative',
            }}
          >
            {/* Header Toolbar */}
            <div
              style={{
                padding: '1.2rem 2rem',
                backgroundColor: '#F8FAF8',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-green)',
                    boxShadow: '0 0 0 4px rgba(0, 143, 79, 0.2)',
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Eco Green Solar Factory & Regional Operations HQ
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    22.2127° N, 70.6044° E • Gajanand Industrial Area, Lodhika, Rajkot - 360021
                  </div>
                </div>
              </div>

              <a
                href={content.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
                data-cursor="Map"
              >
                <span>Open Direct in Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Interactive Map Frame with Instant Visual Backdrop & Seamless Eager Load */}
            <div
              style={{
                position: 'relative',
                height: '420px',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#E8F1EC',
              }}
            >
              {/* Instant High-Tech Map Canvas Background (Visible 0ms without waiting for iframe network) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#EDF5F0',
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(0, 143, 79, 0.08) 0%, transparent 60%),
                    linear-gradient(rgba(0, 143, 79, 0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 143, 79, 0.06) 1px, transparent 1px)
                  `,
                  backgroundSize: '100% 100%, 32px 32px, 32px 32px',
                  zIndex: 1,
                  opacity: mapLoaded ? 0 : 1,
                  transition: 'opacity 0.6s ease',
                  pointerEvents: mapLoaded ? 'none' : 'auto',
                }}
              >
                {/* Center Pin & Radar Beacon */}
                <div style={{ textAlign: 'center', position: 'relative' }}>
                  {/* Pulsing Radar Ring */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 143, 79, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.8rem',
                      boxShadow: '0 0 0 12px rgba(0, 143, 79, 0.08)',
                      animation: 'pulse 2s infinite',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--brand-green)',
                        boxShadow: '0 4px 12px rgba(0, 143, 79, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                      }}
                    >
                      📍
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: '0.7rem 1.4rem',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(15, 23, 42, 0.12)',
                      border: '1px solid var(--border-light)',
                      maxWidth: '320px',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--brand-green-dark)' }}>
                      Eco Green Solar Plant
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Plot No. G-1929, Almighty Gate, GIDC Metoda, Rajkot
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Google Map Iframe (Eagerly fetched, smoothly fades in when ready) */}
              <iframe
                title="Eco Green Solar Factory - Rajkot Gujarat"
                src="https://maps.google.com/maps?q=22.21273267178387,70.60438963429085&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: 2,
                  opacity: mapLoaded ? 1 : 0.85,
                  transition: 'opacity 0.5s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: 'scale(1.0)',
                }}
                onLoad={() => setMapLoaded(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1.0)';
                }}
                allowFullScreen={false}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Minimal Luxury Footer Brand, Social Media Icons & Back to Top */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src="/assets/logo.png"
                alt="Eco Green Solar"
                style={{
                  height: '56px',
                  width: 'auto',
                  maxHeight: '56px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 2px 10px rgba(0, 143, 79, 0.15))',
                }}
              />
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.6rem', maxWidth: '480px' }}>
              {content.footer.disclaimer}
            </p>
          </div>

          {/* Social Media Links & Back to Top Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.2rem' }}>
            {/* Social Media Channels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.3rem' }}>
                Follow Us:
              </span>
              
              {/* WhatsApp */}
              <a
                href={content.hero.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Channel"
                aria-label="Eco Green Solar on WhatsApp"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={content.footer.socialLinks?.[2]?.url || "https://www.instagram.com/"}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                aria-label="Eco Green Solar on Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E1306C';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#E1306C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(225, 48, 108, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={content.footer.socialLinks?.[1]?.url || "https://www.facebook.com/"}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Page"
                aria-label="Eco Green Solar on Facebook"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877F2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 119, 242, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={content.footer.socialLinks?.[3]?.url || "https://www.linkedin.com/"}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="Eco Green Solar on LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A66C2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#0A66C2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(10, 102, 194, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={content.footer.socialLinks?.[4]?.url || "https://www.youtube.com/"}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Channel"
                aria-label="Eco Green Solar on YouTube"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF0000';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              data-cursor="Top"
            >
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1.5rem',
          }}
        >
          {content.footer.copyright} • {content.footer.rajkotCoordinates}
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;
