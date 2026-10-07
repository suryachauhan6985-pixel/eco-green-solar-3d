import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/common/Navbar.tsx';
import { CustomCursor } from './components/common/CustomCursor.tsx';

import { HeroSection } from './components/sections/HeroSection.tsx';
import { AboutSection } from './components/sections/AboutSection.tsx';
import { ProductsSection } from './components/sections/ProductsSection.tsx';
import { BookCatalog } from './components/sections/BookCatalog.tsx';
import { ServicesSection } from './components/sections/ServicesSection.tsx';
import { SubsidySection } from './components/sections/SubsidySection.tsx';
import { GallerySection } from './components/sections/GallerySection.tsx';
import { TestimonialsFaqSection } from './components/sections/TestimonialsFaqSection.tsx';
import { ContactFooterSection } from './components/sections/ContactFooterSection.tsx';
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

          // When near very top, keep full button
          if (currentScrollY <= 40) {
            setIsButtonSunk(false);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
            // Scrolling DOWN -> Sink button and show only icon
            setIsButtonSunk(true);
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 10) {
            // Scrolling UP (Reverse scroll) -> Return to normal full button
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
      duration: 1.1,
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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      {/* Custom Minimal Cursor */}
      <CustomCursor />

      {/* Sticky Top Navigation with Official Eco Green Solar Logo */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        {/* SECTION 1: HERO (Dynamic Carousel with Rotating Scenes) */}
        <HeroSection />

        {/* SECTION 2: ABOUT THE COMPANY (With Growing Incremental Stats) */}
        <AboutSection />

        {/* SECTION 3: PRODUCTS */}
        <ProductsSection />

        {/* SECTION 3B: INTERACTIVE 3D PAGE-FLIP PRODUCT CATALOG */}
        <BookCatalog />

        {/* SECTION 4: SERVICES */}
        <ServicesSection />

        {/* SECTION 5: WHY CHOOSE US + PM SURYA GHAR SUBSIDY & GROWING INCREMENTAL CALCULATOR */}
        <SubsidySection />

        {/* SECTION 6: GALLERY / PROJECTS */}
        <GallerySection />

        {/* SECTION 7: TESTIMONIALS + FAQ */}
        <TestimonialsFaqSection />

        {/* SECTION 8: CONTACT + FOOTER */}
        <ContactFooterSection />
      </main>

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
  );
};

export default App;
