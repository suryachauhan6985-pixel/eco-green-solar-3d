import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, MapPin, Zap, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { content } from '../content';
import { ProjectItem } from '../data/projects';
import { SEO } from '../components/common/SEO';

export const ProjectsPage: React.FC = () => {
  const { category: paramCategory } = useParams<{ category: string }>();

  // Default to ground-mounted (premier MW category), never show 'all'
  const [activeTab, setActiveTab] = useState<string>(
    paramCategory && paramCategory !== 'all' ? paramCategory : 'ground-mounted'
  );
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (paramCategory && paramCategory !== 'all') {
      setActiveTab(paramCategory);
    }
  }, [paramCategory]);

  // Exclude 'all' so projects are strictly category-wise
  const categories = content.projectCategories.filter((c) => c.slug !== 'all');

  // Filter strictly by the active category slug
  const filteredProjects = content.projectsList.filter((p) => p.categorySlug === activeTab);

  const currentCategoryObj = categories.find((c) => c.slug === activeTab) || categories[0];

  return (
    <div style={{ paddingTop: '82px', backgroundColor: '#F8FAF8', minHeight: '100vh' }}>
      <SEO
        title={`${currentCategoryObj.name} Projects | Eco Green Solar Portfolio`}
        description={`Explore ${currentCategoryObj.name} solar installations engineered and commissioned by Eco Green Solar across Saurashtra & Gujarat.`}
      />

      {/* 1. Cinematic Hero Header with Relevant High-Resolution Project Image */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 5vw 5.5rem',
          backgroundImage: `linear-gradient(135deg, rgba(6, 78, 59, 0.90) 0%, rgba(6, 95, 70, 0.82) 50%, rgba(2, 44, 34, 0.93) 100%), url('/assets/curated/solar-commercial-rooftop.jpg')`,
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
            <Link to="/projects/ground-mounted" style={{ color: '#E6F4EC', textDecoration: 'none' }}>
              Projects
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 750 }}>{currentCategoryObj.name}</span>
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
              COMMISSIONED PORTFOLIO
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
              {currentCategoryObj.name} Installations
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
              {currentCategoryObj.desc || 'Explore landmark utility solar installations, industrial rooftop plants, and residential schemes engineered by Eco Green Solar.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Tabs (No 'All' Pill, Category Wise Only) */}
      <section style={{ maxWidth: '1280px', margin: '-2rem auto 3.5rem', padding: '0 5vw', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '0.85rem 1.25rem',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.06)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.slug)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 750 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backgroundColor: isActive ? '#008F4F' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#475569',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(0, 143, 79, 0.3)' : 'none',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Category Projects Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 5rem', padding: '0 5vw' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Showing {currentCategoryObj.name} Projects ({filteredProjects.length})
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#64748B', margin: '0.2rem 0 0' }}>
              Engineered with MNRE approved Tier-1 components at GIDC Metoda.
            </p>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#64748B', margin: 0 }}>
              No projects found in this category currently.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    height: '240px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#F1F5F9',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedImage(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/media/images/project-site-2.jpg';
                    }}
                  />

                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#008F4F',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      border: '1px solid #A7F3D0',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    {proj.capacity || proj.category}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.84rem', marginBottom: '0.5rem' }}>
                    <MapPin size={14} color="#008F4F" />
                    <span>{proj.location || 'Gujarat, India'}</span>
                  </div>

                  <h3 style={{ fontSize: '1.22rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {proj.desc || `Engineered and commissioned by Eco Green Solar, delivering clean power and maximum energy yield.`}
                  </p>

                  <a
                    href={`https://wa.me/917878444414?text=${encodeURIComponent(`Hello Eco Green Solar, I am interested in learning more about your project: ${proj.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '10px',
                      backgroundColor: '#E6F4EC',
                      color: '#008F4F',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#008F4F';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E6F4EC';
                      e.currentTarget.style.color = '#008F4F';
                    }}
                  >
                    <span>Inquire About Similar Setup</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Light Image Zoom Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                color: '#0F172A',
              }}
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                backgroundColor: '#0F172A',
                display: 'block',
              }}
            />

            <div style={{ padding: '1.5rem 2rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#008F4F', textTransform: 'uppercase' }}>
                {selectedImage.capacity || selectedImage.category}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', margin: '0.3rem 0 0.5rem' }}>
                {selectedImage.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                {selectedImage.desc || 'Engineered and commissioned by Eco Green Solar.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
