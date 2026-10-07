import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { content } from '../../content';

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

        {/* Staggered Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(proj)}
              className="pro-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
              }}
              data-cursor="View"
            >
              {/* Media Container with Zoom */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: idx % 3 === 0 ? '16/11' : '4/3',
                  overflow: 'hidden',
                  backgroundColor: '#F1F5F9',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
                maxWidth: '900px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span style={{ color: 'var(--brand-green)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {selectedProject.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {selectedProject.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary"
                  style={{ padding: '0.7rem 1.5rem' }}
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
