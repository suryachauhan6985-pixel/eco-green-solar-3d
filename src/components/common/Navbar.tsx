import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  // Mobile drawer accordion state
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setProjectsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean product list: no badges, clean elegant names
  const productsList = [
    { label: "Solar Rooftop", path: "/solar-rooftop" },
    { label: "Diamond ETC Solar", path: "/products/diamond" },
    { label: "Glass Line Solar", path: "/products/glass-line" },
    { label: "Pearl Solar", path: "/products/pearl" },
    { label: "Pressurized Solar", path: "/products/pressurized" },
    { label: "Copper Solar", path: "/products/copper" },
    { label: "Heat Pump", path: "/products/heat-pump" },
    { label: "Pressure Pump", path: "/products/pressure-pump" },
    { label: "Cleanx Nozzles", path: "/products/cleanx-nozzles" }
  ];

  // Clean projects list: no badges
  const projectsList = [
        { label: "Ground Mounted Plants", path: "/projects/ground-mounted" },
    { label: "Industrial Rooftop Solar", path: "/projects/industrial" },
    { label: "Residential Rooftops", path: "/projects/residential" },
    { label: "Commercial Solar Water Heaters", path: "/projects/solar-water-heater" },
    { label: "Heat Pump Installations", path: "/projects/heat-pump" },
  ];

  const isProductsActive = location.pathname.startsWith('/products') || location.pathname === '/solar-rooftop';
  const isProjectsActive = location.pathname.startsWith('/projects') || location.pathname === '/ground-mounted' || location.pathname === '/industrial' || location.pathname === '/residential';

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#008F4F' : '#1E293B',
    backgroundColor: isActive ? 'rgba(0, 143, 79, 0.08)' : 'transparent',
    fontSize: '0.88rem',
    fontWeight: isActive ? 700 : 600,
    textDecoration: 'none',
    padding: '0.5rem 0.85rem',
    borderRadius: '10px',
    whiteSpace: 'nowrap' as const,
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transform: isVisible || mobileMenuOpen ? 'translateY(0)' : 'translateY(-105%)',
        // Transparent glossy glassmorphic background
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(24px) saturate(190%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: isScrolled
          ? '0 12px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)'
          : '0 4px 20px rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 4vw',
          height: '82px', // Slightly increased height for breathing room and luxury presence
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Brand Logo Only */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
          data-cursor="Home"
        >
          <img
            src="/assets/logo-transparent.png"
            alt="Eco Green Solar"
            style={{
              height: '46px',
              width: 'auto',
              maxHeight: '46px',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = '/media/images/logo-transparent.png';
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            flexWrap: 'nowrap',
          }}
          className="hidden xl:flex"
        >
          <NavLink to="/" end style={linkStyle}>
            Home
          </NavLink>

          

          {/* Products Dropdown (Ultra-Smooth Opening, No Badges) */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: isProductsActive ? '#008F4F' : '#1E293B',
                backgroundColor: isProductsActive ? 'rgba(0, 143, 79, 0.08)' : 'transparent',
                fontSize: '0.88rem',
                fontWeight: isProductsActive ? 700 : 600,
                cursor: 'pointer',
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span>Products</span>
              <span style={{ fontSize: '0.62rem', opacity: 0.65, transform: productsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', display: 'inline-block' }}>▼</span>
            </button>

            {/* Products Dropdown Menu Box - Glassmorphic, Smooth Transition */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                width: '260px',
                paddingTop: '0.65rem',
                visibility: productsDropdownOpen ? 'visible' : 'hidden',
                opacity: productsDropdownOpen ? 1 : 0,
                transform: productsDropdownOpen ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
                transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s ease',
                pointerEvents: productsDropdownOpen ? 'auto' : 'none',
                zIndex: 110,
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(28px) saturate(190%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(190%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 143, 79, 0.05)',
                  padding: '0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.15rem',
                }}
              >
                {productsList.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setProductsDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.55rem 0.85rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: location.pathname === item.path ? '#008F4F' : '#1E293B',
                      fontSize: '0.88rem',
                      fontWeight: location.pathname === item.path ? 700 : 600,
                      whiteSpace: 'nowrap',
                      transition: 'all 0.18s ease',
                      backgroundColor: location.pathname === item.path ? 'rgba(0, 143, 79, 0.08)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.08)';
                      e.currentTarget.style.color = '#008F4F';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = location.pathname === item.path ? 'rgba(0, 143, 79, 0.08)' : 'transparent';
                      e.currentTarget.style.color = location.pathname === item.path ? '#008F4F' : '#1E293B';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/services" style={linkStyle}>
            Services
          </NavLink>

          {/* Projects Dropdown (Ultra-Smooth Opening, No Badges) */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: isProjectsActive ? '#008F4F' : '#1E293B',
                backgroundColor: isProjectsActive ? 'rgba(0, 143, 79, 0.08)' : 'transparent',
                fontSize: '0.88rem',
                fontWeight: isProjectsActive ? 700 : 600,
                cursor: 'pointer',
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span>Projects</span>
              <span style={{ fontSize: '0.62rem', opacity: 0.65, transform: projectsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', display: 'inline-block' }}>▼</span>
            </button>

            {/* Projects Dropdown Menu Box - Glassmorphic, Smooth Transition */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                width: '270px',
                paddingTop: '0.65rem',
                visibility: projectsDropdownOpen ? 'visible' : 'hidden',
                opacity: projectsDropdownOpen ? 1 : 0,
                transform: projectsDropdownOpen ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
                transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s ease',
                pointerEvents: projectsDropdownOpen ? 'auto' : 'none',
                zIndex: 110,
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(28px) saturate(190%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(190%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 143, 79, 0.05)',
                  padding: '0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.15rem',
                }}
              >
                {projectsList.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setProjectsDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.55rem 0.85rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: location.pathname === item.path ? '#008F4F' : '#1E293B',
                      fontSize: '0.88rem',
                      fontWeight: location.pathname === item.path ? 700 : 600,
                      whiteSpace: 'nowrap',
                      transition: 'all 0.18s ease',
                      backgroundColor: location.pathname === item.path ? 'rgba(0, 143, 79, 0.08)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.08)';
                      e.currentTarget.style.color = '#008F4F';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = location.pathname === item.path ? 'rgba(0, 143, 79, 0.08)' : 'transparent';
                      e.currentTarget.style.color = location.pathname === item.path ? '#008F4F' : '#1E293B';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/about" style={linkStyle}>
            About Us
          </NavLink>

          

          <NavLink to="/catalogue" style={linkStyle}>
            Catalogue
          </NavLink>

          <NavLink to="/contact" style={linkStyle}>
            Contact Us
          </NavLink>
        </nav>

        {/* Right Action Area - Clean, Perfectly Aligned */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Customer Hotline Pill */}
          <a
            href="tel:+917878444414"
            className="hidden sm:inline-flex"
            style={{
              alignItems: 'center',
              padding: '0.52rem 1.05rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 143, 79, 0.08)',
              color: '#008F4F',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 700,
              border: '1px solid rgba(0, 143, 79, 0.2)',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 143, 79, 0.08)';
            }}
          >
            +91 78784 44414
          </a>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            style={{
              padding: '0.55rem 1.35rem',
              borderRadius: '999px',
              backgroundColor: '#008F4F',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '0.86rem',
              fontWeight: 700,
              boxShadow: '0 4px 16px rgba(0, 143, 79, 0.28)',
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00753F';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#008F4F';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get Quote
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0, 143, 79, 0.25)',
              borderRadius: '8px',
              padding: '0.5rem 0.75rem',
              color: '#008F4F',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.88rem',
              fontWeight: 700,
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid #E2E8F0',
            padding: '1.25rem 5vw 2rem',
            maxHeight: 'calc(100vh - 82px)',
            overflowY: 'auto',
          }}
          className="xl:hidden"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <Link
              to="/"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: '#0F172A',
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: '0.98rem',
                backgroundColor: location.pathname === '/' ? '#F0FAF4' : 'transparent',
              }}
            >
              Home
            </Link>

            

            {/* Mobile Products Accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#0F172A',
                  fontWeight: 650,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                }}
              >
                <span>Products</span>
                <span style={{ fontSize: '0.7rem' }}>{mobileProductsOpen ? '▲' : '▼'}</span>
              </button>
              {mobileProductsOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem' }}>
                  {productsList.map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.path}
                      style={{
                        padding: '0.55rem 0.8rem',
                        borderRadius: '6px',
                        color: '#475569',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/services"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: '#0F172A',
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: '0.98rem',
                backgroundColor: location.pathname === '/services' ? '#F0FAF4' : 'transparent',
              }}
            >
              Services
            </Link>

            {/* Mobile Projects Accordion */}
            <div>
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#0F172A',
                  fontWeight: 650,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                }}
              >
                <span>Projects</span>
                <span style={{ fontSize: '0.7rem' }}>{mobileProjectsOpen ? '▲' : '▼'}</span>
              </button>
              {mobileProjectsOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem' }}>
                  {projectsList.map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.path}
                      style={{
                        padding: '0.55rem 0.8rem',
                        borderRadius: '6px',
                        color: '#475569',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: '#0F172A',
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: '0.98rem',
                backgroundColor: location.pathname === '/about' ? '#F0FAF4' : 'transparent',
              }}
            >
              About Us
            </Link>

            

            <Link
              to="/catalogue"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: '#0F172A',
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: '0.98rem',
                backgroundColor: location.pathname === '/catalogue' ? '#F0FAF4' : 'transparent',
              }}
            >
              Catalogue
            </Link>

            <Link
              to="/contact"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: '#0F172A',
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: '0.98rem',
                backgroundColor: location.pathname === '/contact' ? '#F0FAF4' : 'transparent',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
