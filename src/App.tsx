import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/common/Navbar';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SiteFooter } from './components/common/SiteFooter';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolarRooftopPage } from './pages/SolarRooftopPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CataloguePage } from './pages/CataloguePage';
import { ContactPage } from './pages/ContactPage';

import { content } from './content';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isButtonSunk, setIsButtonSunk] = React.useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleButtonScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 40) {
            setIsButtonSunk(false);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
            setIsButtonSunk(true);
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 10) {
            setIsButtonSunk(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleButtonScroll, { passive: true });

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener('scroll', handleButtonScroll);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", overflowX: "hidden", position: "relative" }} className="app-root-layout">
        {/* Custom Minimal Cursor */}
        <CustomCursor />

        {/* Top Navbar with Multi-Page Navigation and Dropdowns */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main style={{ flex: "1 0 auto", width: "100%", display: "block" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Direct Solar Rooftop Route matching live website */}
            <Route path="/solar-rooftop" element={<SolarRooftopPage />} />
            <Route path="/solar" element={<SolarRooftopPage />} />
            <Route path="/solar-rooftop-2" element={<SolarRooftopPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-services" element={<ServicesPage />} />
            
            {/* Product Routes */}
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/diamond" element={<ProductDetailPage forcedId="diamond" />} />
            <Route path="/eco-green-glass-line" element={<ProductDetailPage forcedId="glass-line" />} />
            <Route path="/pearl" element={<ProductDetailPage forcedId="pearl" />} />
            <Route path="/pressurized" element={<ProductDetailPage forcedId="pressurized" />} />
            <Route path="/copper" element={<ProductDetailPage forcedId="copper" />} />
            <Route path="/heat-pump" element={<ProductDetailPage forcedId="heat-pump" />} />
            <Route path="/pressure-pump" element={<ProductDetailPage forcedId="pressure-pump" />} />
            <Route path="/emerald" element={<ProductDetailPage forcedId="cleanx-nozzles" />} />
            
            {/* Project Routes matching live website slugs */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/our-projects" element={<ProjectsPage />} />
            <Route path="/projects/:category" element={<ProjectsPage />} />
            <Route path="/ground-mounted" element={<ProjectsPage />} />
            <Route path="/industrial" element={<ProjectsPage />} />
            <Route path="/residential" element={<ProjectsPage />} />
            <Route path="/solar-water-heater" element={<ProjectsPage />} />
            <Route path="/heat-pump-2" element={<ProjectsPage />} />
            <Route path="/pressure-pump-2" element={<ProjectsPage />} />
            <Route path="/cleanx-nozzles" element={<ProjectsPage />} />

            {/* Gallery Route */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-gallery" element={<GalleryPage />} />

            {/* Catalogue Route */}
            <Route path="/catalogue" element={<CataloguePage />} />

            {/* Contact Route */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Official Multi-Page Site Footer */}
        <SiteFooter />

        {/* Floating WhatsApp Quick Action Button */}
        <a
          href={content.hero.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-whatsapp ${isButtonSunk ? 'sunk' : ''}`}
          data-cursor="Chat"
          aria-label="Direct WhatsApp Consultation"
          title="Instant WhatsApp Quote"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="btn-text">Instant WhatsApp Quote</span>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
