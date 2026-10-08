import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Check,
  Wrench,
  Clock,
  Compass,
  FileText,
  Flame,
  Award,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ServicesPage: React.FC = () => {
  const servicesList = [
    {
      id: 'site-survey',
      icon: <Compass size={28} color="#008F4F" />,
      tag: 'PRECISION AUDIT',
      title: 'Free Solar Terrace Feasibility Survey',
      shortDesc:
        'On-site technical evaluation using drone shadow mapping and digital structural analysis to maximize your generation yield.',
      points: [
        '3D Shadow Simulation accounting for neighboring trees, parapet walls, and high-rise buildings',
        'Structural load capacity assessment of terrace slab and industrial metal shed purlins',
        'Optimal azimuth angle and tilt calculation calibrated for Gujarat coordinates (22°N)',
        'Detailed generation estimation report with accurate monthly electricity savings figures',
      ],
      whatsappMsg: 'I want to schedule a Free Solar Terrace Feasibility Survey.',
    },
    {
      id: 'epc-installation',
      icon: <Zap size={28} color="#008F4F" />,
      tag: 'TURNKEY EPC',
      title: 'Turnkey Solar PV Engineering & Commissioning',
      shortDesc:
        'End-to-end solar plant design, procurement of Tier-1 equipment, hot-dip galvanized mounting, and seamless electrical grid synchronization.',
      points: [
        'Tier-1 DCR ALMM-compliant monocrystalline bifacial panels for highest solar yield',
        'German-engineered on-grid string inverters with built-in surge protection & MPPT tracking',
        'Hot-dip galvanized (80+ microns) structural framework resisting Saurashtra coastal winds',
        'Safe DC isolators, Class-II surge arrestors, and independent chemical earthing pits',
      ],
      whatsappMsg: 'I would like to discuss Turnkey Solar PV EPC installation.',
    },
    {
      id: 'subsidy-liaisoning',
      icon: <FileText size={28} color="#008F4F" />,
      tag: 'SUBSIDY FACILITATION',
      title: 'PM Surya Ghar Net-Metering & Government Liaisoning',
      shortDesc:
        'Hassle-free DISCOM documentation, CEIG approval, bi-directional net-meter synchronization, and direct DBT subsidy credited to your bank account.',
      points: [
        'Official empanelled vendor documentation with PGVCL, DGVCL, MGVCL, and UGVCL',
        'Complete registration and verification on the National Portal for PM Surya Ghar',
        'Bi-directional solar net-meter installation and transformer capacity allotment',
        'Direct Benefit Transfer (DBT) subsidy of up to ₹78,000 processed into your bank account',
      ],
      whatsappMsg: 'I need assistance with PM Surya Ghar subsidy and net-metering liaisoning.',
    },
    {
      id: 'solar-water-heating',
      icon: <Flame size={28} color="#008F4F" />,
      tag: 'THERMAL SPECIALISTS',
      title: 'Solar Water Heater Installation & Custom Industrial Piping',
      shortDesc:
        'Factory direct supply and precision plumbing for residential pressurized systems, commercial hotels, hospitals, and hostel boiler integrations.',
      points: [
        'Food-grade SS-304L stainless steel inner tanks with 50mm high-density PUF insulation',
        'High-pressure booster pump compatible systems engineered for multistory luxury villas',
        'Centralized solar thermal manifolds delivering thousands of liters hot water per day',
        'Thermostatic mixing valves and backup ceramic heating elements for monsoon resilience',
      ],
      whatsappMsg: 'I want to install or service a Solar Water Heater system.',
    },
    {
      id: 'amc-maintenance',
      icon: <Wrench size={28} color="#008F4F" />,
      tag: 'RAPID RESPONSE',
      title: 'Annual Maintenance Contracts (AMC) & 24-Hr Service Turnaround',
      shortDesc:
        'Direct factory technician support from our GIDC Metoda headquarters with guaranteed 24-hour service turnaround across Saurashtra.',
      points: [
        'Scheduled preventative maintenance visits inspecting electrical terminals and inverters',
        'Thermal imaging drone scans to detect solar module micro-cracks and hotspots',
        'CleanX automatic nozzle system maintenance and solar glass descaling',
        'Genuine factory spare parts replacement directly backed by our manufacturing plant',
      ],
      whatsappMsg: 'I would like to inquire about Solar AMC and service contracts.',
    },
  ];

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title="Solar Engineering Services & EPC | Eco Green Solar"
        description="Comprehensive solar engineering services by Eco Green Solar: Free terrace surveys, Turnkey EPC, PM Surya Ghar net-metering liaisoning, and 24-hr service support in Gujarat."
      />

      {/* 1. Cinematic Hero Header with Relevant High-Resolution Image */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 5vw 5.5rem',
          backgroundImage: `linear-gradient(135deg, rgba(6, 78, 59, 0.90) 0%, rgba(6, 95, 70, 0.82) 50%, rgba(2, 44, 34, 0.93) 100%), url('/assets/curated/solar-engineer-inspect.jpg')`,
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
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Services</span>
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
              ENGINEERING & LIFETIME SUPPORT
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
              End-to-End Renewable Energy Services
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
              From initial rooftop shadow analysis to DISCOM net-metering synchronization and decade-long AMC support, our factory engineers manage every stage with uncompromised precision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Engineering Service Pillars (Floating Clean Light Card) */}
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
          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 850, color: '#008F4F', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              100% Free
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.2rem' }}>
              On-Site Feasibility Survey
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
              Drone shadow simulation & structural check
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 850, color: '#008F4F', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              Tier-1 DCR
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.2rem' }}>
              ALMM Listed Equipment
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
              Certified for PM Surya Ghar subsidy
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 850, color: '#008F4F', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              100% Turnkey
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.2rem' }}>
              DISCOM Liaisoning
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
              Net-metering & CEIG approval handled
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 850, color: '#008F4F', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              24 Hours
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.2rem' }}>
              Service Turnaround
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
              Direct factory engineers in Saurashtra
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Breakdown */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5vw 5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                padding: '2.5rem 2.5rem',
                boxShadow: '0 6px 22px rgba(0,0,0,0.03)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      backgroundColor: '#E6F4EC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      color: '#008F4F',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      backgroundColor: '#F8FAF8',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 850, color: '#0F172A', margin: '0 0 0.8rem', lineHeight: 1.25 }}>
                  {service.title}
                </h2>

                <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  {service.shortDesc}
                </p>

                <a
                  href={`https://wa.me/917878444414?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                  }}
                >
                  <span>Book This Service</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Service Highlights List */}
              <div
                style={{
                  backgroundColor: '#F8FAF8',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '1.8rem',
                }}
              >
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                  What's Included:
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {service.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#E6F4EC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={12} color="#008F4F" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.5, fontWeight: 550 }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 24-Hour Service Guarantee Trust Banner */}
        <div
          style={{
            marginTop: '4.5rem',
            padding: '3rem 5vw',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #E6F4EC 0%, #DDF0E4 50%, #D4EBDC 100%)',
            border: '1px solid #C4E2CF',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.8rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#008F4F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              LOCAL FACTORY ADVANTAGE
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 850, color: '#0F172A', margin: '0.3rem 0 0.5rem' }}>
              Guaranteed 24-Hour Service Turnaround
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', margin: 0, maxWidth: '600px', lineHeight: 1.6 }}>
              Because our manufacturing plant is based at GIDC Metoda in Rajkot, our mobile service engineers provide genuine spare parts and rapid on-site technician response across Saurashtra.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href="tel:+917878444414"
              className="btn-primary"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem', fontWeight: 700, borderRadius: '12px' }}
            >
              <Phone size={17} />
              <span>Call Service Hotline</span>
            </a>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.4rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.96rem',
                textDecoration: 'none',
              }}
            >
              <span>Visit Metoda Unit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
