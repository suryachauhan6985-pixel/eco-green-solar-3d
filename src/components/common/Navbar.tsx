import React, { useState, useEffect } from 'react';
import { content } from '../../content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect background change threshold
      setIsScrolled(currentScrollY > 30);

      // Scroll direction handling
      // Always show when near top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        // Scrolling DOWN -> Hide Navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        // Scrolling UP -> Show Navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Catalog', href: '#catalog' },
    { label: 'Services', href: '#services' },
    { label: 'Subsidy & Sizing', href: '#subsidy' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transform: isVisible || mobileMenuOpen ? 'translateY(0)' : 'translateY(-105%)',
        backgroundColor: isScrolled ? 'rgba(244, 250, 246, 0.88)' : 'rgba(246, 252, 248, 0.78)',
        backdropFilter: 'blur(20px) saturate(170%)',
        WebkitBackdropFilter: 'blur(20px) saturate(170%)',
        borderBottom: '1px solid rgba(0, 143, 79, 0.12)',
        boxShadow: isScrolled
          ? '0 12px 35px rgba(0, 143, 79, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04)'
          : '0 4px 20px rgba(0, 143, 79, 0.03)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0.45rem 4vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.2rem',
        }}
      >
        {/* Left: Prominent Authentic Eco Green Solar Logo */}
        <a
          href="#hero"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            transition: 'transform 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          data-cursor="Home"
        >
          <img
            src="/assets/logo.png"
            alt="Eco Green Solar"
            className="navbar-brand-logo"
            style={{
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 3px 12px rgba(0, 143, 79, 0.18))',
            }}
          />
        </a>

        {/* Center: Desktop Navigation Bar Links with Professional Glass Pill Styling (Single line, no wrap) */}
        <nav
          className="hidden xl:flex"
          style={{
            alignItems: 'center',
            gap: '0.2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            padding: '0.35rem 0.6rem',
            borderRadius: '999px',
            border: '1px solid rgba(0, 143, 79, 0.12)',
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 10px rgba(0, 143, 79, 0.04)',
            whiteSpace: 'nowrap',
            flexWrap: 'nowrap',
            flexShrink: 0,
          }}
        >
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleLinkClick(link.href)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#1E293B',
                fontSize: '0.88rem',
                fontWeight: 650,
                cursor: 'pointer',
                padding: '0.45rem 0.8rem',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#008F4F';
                e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1E293B';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Phone CTA & Consultation Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          <a
            href={`tel:${content.contact.phone}`}
            className="hidden sm:inline-flex"
            style={{
              alignItems: 'center',
              gap: '0.55rem',
              color: '#0F172A',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              padding: '0.6rem 1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(0, 143, 79, 0.2)',
              borderRadius: '999px',
              boxShadow: '0 2px 8px rgba(0, 143, 79, 0.05)',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#008F4F';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 143, 79, 0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
            }}
            data-cursor="Call"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{content.contact.phoneDisplay}</span>
          </a>

          <a
            href={content.hero.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.92rem' }}
            data-cursor="Quote"
          >
            <span>Get Quote</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle Navigation"
            style={{
              padding: '0.6rem',
              background: mobileMenuOpen ? 'rgba(0, 143, 79, 0.12)' : 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(0, 143, 79, 0.18)',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008F4F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Smooth Mobile Drawer */}
      <div
        style={{
          maxHeight: mobileMenuOpen ? '480px' : '0px',
          opacity: mobileMenuOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderTop: mobileMenuOpen ? '1px solid rgba(0, 143, 79, 0.1)' : 'none',
          backgroundColor: 'rgba(246, 252, 248, 0.98)',
          backdropFilter: 'blur(20px)',
        }}
        className="lg:hidden"
      >
        <div
          style={{
            padding: '1.5rem 6vw 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleLinkClick(link.href)}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                fontSize: '1.05rem',
                fontWeight: 650,
                color: '#0F172A',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-15px)',
                transitionDelay: `${idx * 0.03}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.08)';
                e.currentTarget.style.color = '#008F4F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: '#008F4F', fontSize: '0.9rem' }}>→</span>
            </button>
          ))}

          {/* Quick Call Button inside Mobile Menu */}
          <div style={{ marginTop: '0.8rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
            <a
              href={`tel:${content.contact.phone}`}
              className="btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                padding: '0.85rem',
                fontSize: '0.95rem',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Hotline: {content.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
