import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from '../common/TextReveal';
import { content } from '../../content';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  proj: any;
  idx: number;
  onClick: () => void;
}

const ProjectParallaxCard: React.FC<ProjectCardProps> = ({ proj, idx, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -16, scale: 1.15 },
        {
          yPercent: 16,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="pro-card"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
      }}
      data-cursor="View"
    >
      {/* Media Container with Real Scroll Parallax Window */}
      <div
        style={{
          position: 'relative',
          aspectRatio: idx % 3 === 0 ? '16/11' : '4/3',
          overflow: 'hidden',
          backgroundColor: '#F1F5F9',
        }}
      >
        <img
          ref={imgRef}
          src={proj.image}
          alt={proj.title}
          loading="lazy"
          style={{
            position: 'absolute',
            top: '-20%',
            left: 0,
            width: '100%',
            height: '140%',
            objectFit: 'cover',
            willChange: 'transform',
            transition: 'filter 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(1.0)';
          }}
        />

        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: 'var(--brand-green)',
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
            zIndex: 2,
          }}
        >
          {proj.badge}
        </div>
      </div>

      {/* Card Meta Details */}
      <div style={{ padding: '1.6rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--sun-warm)', fontWeight: 600, marginBottom: '0.3rem' }}>
          {proj.category}
        </div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
          {proj.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          <span>📍</span>
          {proj.location}
        </div>
      </div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = content.gallery.projects;

  return (
    <section id="gallery" className="site-section site-section-subtle">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '850px' }}>
          <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
            {content.gallery.tag}
          </span>
          <h2
            style={{
              fontSize: 'var(--text-title)',
              marginBottom: '1.2rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            <TextReveal>{content.gallery.headline}</TextReveal>
          </h2>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {content.gallery.subheadline}
          </p>
        </div>

        {/* Staggered Grid with Real Card Parallax */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((proj, idx) => (
            <ProjectParallaxCard
              key={idx}
              proj={proj}
              idx={idx}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                maxWidth: '720px',
                width: '100%',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div>
                    <span className="badge-green" style={{ marginBottom: '0.5rem' }}>
                      {selectedProject.badge}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      border: 'none',
                      backgroundColor: 'var(--bg-subtle)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    ✕
                  </button>
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                  📍 {selectedProject.location} • {selectedProject.category}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                  Commissioned engineering project by Eco Green Solar. Demonstrating maximum solar thermal efficiency, robust GIDC Metoda mounting, and zero-defect lifetime performance.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary"
                    style={{ padding: '0.6rem 1.4rem' }}
                  >
                    Close
                  </button>
                  <a
                    href="https://wa.me/917878444414?text=Hello%20Eco%20Green%20Solar!%20I%20am%20interested%20in%20a%20project%20similar%20to%20your%20installation%20in%20Rajkot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.4rem', textDecoration: 'none' }}
                  >
                    Inquire Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
