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
    <section id="contact" className="site-section site-section-subtle" style={{ paddingBottom: '3rem' }}>
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
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.25rem)',
                  lineHeight: 1.18,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                }}
              >
                <TextReveal>{content.contact.headline}</TextReveal>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.2rem' }}>
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
                    <div style={{ marginBottom: "0.8rem" }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
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
                    ><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> </div>
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

              </div>
    </section>
  );
};

export default ContactFooterSection;
