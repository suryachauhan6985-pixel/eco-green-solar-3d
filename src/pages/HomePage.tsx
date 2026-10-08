import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  FileText,
  Building2,
  Factory,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SubsidySection } from '../components/sections/SubsidySection';
import { GallerySection } from '../components/sections/GallerySection';
import { TestimonialsFaqSection } from '../components/sections/TestimonialsFaqSection';
import { SEO } from '../components/common/SEO';

interface InteractiveCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  linkText: string;
}

const InteractiveSolutionCard: React.FC<InteractiveCardProps> = ({ to, icon, title, desc, linkText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '1.8rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: `1.5px solid ${isHovered ? '#008F4F' : 'rgba(0, 143, 79, 0.15)'}`,
        textDecoration: 'none',
        color: '#0F172A',
        boxShadow: isHovered
          ? '0 20px 35px -5px rgba(0, 143, 79, 0.18), 0 8px 16px -6px rgba(0, 0, 0, 0.05)'
          : '0 4px 15px rgba(0, 0, 0, 0.03)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '14px',
            backgroundColor: isHovered ? '#008F4F' : '#E6F4EC',
            color: isHovered ? '#FFFFFF' : '#008F4F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.2rem',
            transition: 'all 0.25s ease',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontSize: '1.22rem',
            fontWeight: 800,
            marginBottom: '0.45rem',
            color: isHovered ? '#008F4F' : '#0F172A',
            transition: 'color 0.2s ease',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
          {desc}
        </p>
      </div>

      <div
        style={{
          marginTop: '1.4rem',
          fontSize: '0.88rem',
          fontWeight: 750,
          color: '#008F4F',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span>{linkText}</span>
        <ArrowRight
          size={15}
          style={{
            transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
            transition: 'transform 0.25s ease',
          }}
        />
      </div>
    </Link>
  );
};

export const HomePage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Eco Green Solar | PM Surya Ghar Empanelled Vendor Gujarat"
        description="Gujarat's trusted solar engineering partner since 2007. PM Surya Ghar empanelled vendor with up to ₹78,000 central subsidy, pressurized solar water heaters, and heat pumps built at GIDC Metoda, Rajkot."
      />

      {/* 1. Main Architectural Hero Showcase */}
      <HeroSection />

      {/* 2. Core Interactive Solution Highlights */}
      <section
        style={{
          backgroundColor: '#F8FAF8',
          padding: '3.5rem 5vw',
          borderTop: '1px solid #E2E8F0',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <InteractiveSolutionCard
              to="/about"
              icon={<Building2 size={24} />}
              title="Our Heritage"
              desc="Founded in 2007 by Bhimani & Javia families. 19+ years of renewable engineering excellence in Saurashtra."
              linkText="Read Story"
            />

            <InteractiveSolutionCard
              to="/solar-rooftop"
              icon={<Sun size={24} />}
              title="Solar Rooftop EPC"
              desc="Zero-bill electricity with up to ₹78,000 direct bank subsidy under PM Surya Ghar Muft Bijli Yojana."
              linkText="View Subsidy & Specs"
            />

            <InteractiveSolutionCard
              to="/projects"
              icon={<Factory size={24} />}
              title="Our Projects"
              desc="40+ MW utility installations and 2,500+ residential and industrial rooftop solar arrays across Gujarat."
              linkText="Explore Portfolio"
            />

            <InteractiveSolutionCard
              to="/catalogue"
              icon={<FileText size={24} />}
              title="Download Catalogues"
              desc="Official PDF technical brochures for all 9 product models and interactive 3D flipbook viewer."
              linkText="Download PDFs"
            />
          </div>
        </div>
      </section>

      {/* 3. Why Rajkot Families Trust Eco Green Solar */}
      <AboutSection />

      {/* 4. PM Surya Ghar Subsidy Guide & Solar Savings Calculator */}
      <SubsidySection />

      {/* 5. Services Overview Teaser */}
      <ServicesSection />

      {/* 6. Landmark Project Milestones */}
      <GallerySection />

      {/* 7. Testimonials & Client Trust */}
      <TestimonialsFaqSection />

      {/* 8. High-Impact Consultation CTA Banner */}
      <section
        style={{
          padding: '5rem 5vw',
          background: 'linear-gradient(135deg, #E6F4EC 0%, #DDF0E4 50%, #D4EBDC 100%)',
          borderTop: '1px solid #C4E2CF',
          borderBottom: '1px solid #C4E2CF',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#008F4F',
              backgroundColor: '#FFFFFF',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(0, 143, 79, 0.2)',
            }}
          >
            START SAVING TODAY
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              fontWeight: 850,
              color: '#0F172A',
              margin: '0.8rem 0 1rem',
              lineHeight: 1.2,
            }}
          >
            Schedule Your Free On-Site Solar Feasibility Survey
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#475569',
              maxWidth: '650px',
              margin: '0 auto 2.2rem',
              lineHeight: 1.6,
            }}
          >
            Our factory engineers analyze your electricity bills, simulate 3D shadow mapping on your rooftop, and compute your exact government bank subsidy.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20would%20like%20to%20schedule%20a%20free%20site%20survey%20under%20PM%20Surya%20Ghar%20Yojana."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', fontWeight: 700 }}
            >
              <span>Instant WhatsApp Quote</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+917878444414"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 1.6rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.98rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={17} color="#008F4F" />
              <span>+91 7878 4444 14</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
