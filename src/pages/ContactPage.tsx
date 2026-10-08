import { MapPin, Phone, Building2, Mail, CheckCircle2 } from 'lucide-react';
﻿import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export const ContactPage: React.FC = () => {
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Rajkot',
    product: 'Solar Rooftop System',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hello Eco Green Solar!\n*New Inquiry from Website:*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• City: ${formData.city}\n• Interested in: ${formData.product}\n• Message: ${formData.message || 'I would like a free site survey and quote.'}`;
    const waUrl = `https://wa.me/917878444414?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Hero Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #064E3B 100%)',
          color: '#FFFFFF',
          padding: '4rem 5vw 4.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#34D399', fontWeight: 600 }}>Contact Us</span>
          </div>

          <span style={{ fontSize: '0.8rem', fontWeight: 750, letterSpacing: '0.12em', color: '#34D399', textTransform: 'uppercase' }}>
            GET IN TOUCH
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, margin: '0.5rem 0 1rem', fontFamily: "var(--font-display)" }}>
            Reach Eco Green Solar Engineers
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', maxWidth: '800px', lineHeight: 1.6 }}>
            Speak directly with our technical team in Rajkot for free site survey, PM Surya Ghar subsidy application, and project estimation.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Info Cards & Form) */}
      <section style={{ maxWidth: '1280px', margin: '-30px auto 4rem', padding: '0 5vw', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Corporate Details Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 750, color: '#008F4F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                CORPORATE HEADQUARTERS & WORKS
              </span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 750, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.8rem' }}>
                {contact.companyName}
              </h2>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#008F4F', marginBottom: '0.8rem' }}>
                {contact.subName}
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.5rem', color: '#334155', fontSize: '0.92rem', lineHeight: 1.6 }}>
                <MapPin size={20} color="#008F4F" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>{contact.fullAddress}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Phone size={20} color="#008F4F" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Customer Care Helpline</div>
                    <a href={`tel:${contact.customerCare}`} style={{ fontSize: '1.15rem', fontWeight: 800, color: '#008F4F', textDecoration: 'none' }}>
                      {contact.customerCareDisplay}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Building2 size={20} color="#008F4F" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Office Contact</div>
                    <a href={`tel:${contact.officePhone}`} style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', textDecoration: 'none' }}>
                      {contact.officePhoneDisplay}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Mail size={20} color="#008F4F" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Email Support</div>
                    <a href={`mailto:${contact.email}`} style={{ fontSize: '0.95rem', fontWeight: 650, color: '#0F172A', textDecoration: 'none' }}>
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>⏰</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Working Hours</div>
                    <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>{contact.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Connect */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Chat Directly on WhatsApp</div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.9 }}>Get instant quotes and technician callback</div>
                </div>
              </div>
              <span style={{ fontSize: '1.4rem' }}>→</span>
            </a>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(0, 143, 79, 0.15)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.06)',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#008F4F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              DIRECT INQUIRY FORM
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 750, color: '#0F172A', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
              Request Free Site Survey
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.75rem' }}>
              Fill in your details below and our technical supervisor will visit your site within 24 hours.
            </p>

            {isSubmitted ? (
              <div style={{ padding: '2rem', backgroundColor: '#F0FDF4', borderRadius: '16px', border: '1px solid #86EFAC', textAlign: 'center' }}>
                <div style={{ marginBottom: "0.5rem" }}><CheckCircle2 size={44} color="#008F4F" style={{ margin: "0 auto" }} /></div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 750, color: '#166534', marginBottom: '0.5rem' }}>
                  Thank you for your message!
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#15803D' }}>
                  Your inquiry has been submitted and opened on WhatsApp. Our engineer will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#008F4F', fontWeight: 700, cursor: 'pointer' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajkot, Jamnagar, Morbi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Product Interested In
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="Solar Rooftop System (PM Surya Ghar)">Solar Rooftop System (PM Surya Ghar Subsidy)</option>
                    <option value="Diamond Solar Water Heater">Eco Green Diamond Solar Water Heater</option>
                    <option value="Glass Line Solar Water Heater">Eco Green Glass Line (Hard Water Specialist)</option>
                    <option value="Pearl Solar Water Heater">Eco Green Pearl Solar Water Heater</option>
                    <option value="Pressurized Solar Water Heater">Eco Green Pressurized (5 Bar Booster Safe)</option>
                    <option value="Copper Solar Water Heater">Eco Green Copper Solar Water Heater</option>
                    <option value="Thermodynamic Heat Pump">Thermodynamic Air-Source Heat Pump</option>
                    <option value="Pressure Booster Pump">Hydro-Pneumatic Pressure Booster Pump</option>
                    <option value="CleanX Nozzles">CleanX Automatic Solar Cleaning Nozzles</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Site Details / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide your roof area, average electricity bill, or number of family members..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: '0.9rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span>Submit Inquiry via WhatsApp</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Location Embed */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #F1F5F9' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: '#0F172A', margin: 0 }}>
              Location Map: Gajanand Industrial Area, Rajkot
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#64748B', margin: '0.2rem 0 0' }}>
              Opp. Chhapra Gam, Village Chhapra, Taluka Lodhika, Rajkot, Gujarat
            </p>
          </div>
          <div style={{ width: '100%', height: '420px', border: 0 }}>
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eco Green Solar Factory Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
