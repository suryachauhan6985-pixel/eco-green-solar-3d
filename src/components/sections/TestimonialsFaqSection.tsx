import React, { useState } from 'react';
import { TextReveal } from '../common/TextReveal.tsx';
import { content } from '../../content';

export const TestimonialsFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = content.testimonials.items;
  const faqs = content.faq.items;

  return (
    <section id="testimonials" className="site-section">
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {/* Testimonials Block */}
        <div style={{ marginBottom: '7rem' }}>
          <div style={{ marginBottom: '3.5rem', maxWidth: '850px' }}>
            <span className="badge-green" style={{ marginBottom: '1.2rem' }}>
              {content.testimonials.tag}
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
              <TextReveal>{content.testimonials.headline}</TextReveal>
            </h2>
          </div>

          {/* Testimonial Cards Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
            data-cursor="Review"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="pro-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
                    <div style={{ color: '#EAB308', fontSize: '1.1rem', letterSpacing: '0.1em' }}>
                      ★★★★★
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        padding: '0.3rem 0.8rem',
                        backgroundColor: 'var(--brand-green-light)',
                        color: 'var(--brand-green)',
                        borderRadius: '999px',
                        fontWeight: 700,
                      }}
                    >
                      {t.system}
                    </span>
                  </div>

                  <blockquote
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.8rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.4rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {t.author}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {t.role} • {t.location}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-green)' }}>
                    {t.saving}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-amber" style={{ marginBottom: '1rem' }}>
              {content.faq.tag}
            </span>
            <h2 style={{ fontSize: 'var(--text-title)', lineHeight: 1.15, marginTop: '0.4rem', color: 'var(--text-primary)' }}>
              <TextReveal>{content.faq.headline}</TextReveal>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;

              return (
                <div
                  key={fIdx}
                  className="pro-card"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    borderColor: isOpen ? 'var(--brand-green)' : 'var(--border-light)',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.6rem 2rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                    }}
                    data-cursor="Toggle"
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        fontSize: '1.4rem',
                        color: isOpen ? 'var(--brand-green)' : 'var(--text-muted)',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s ease, color 0.25s ease',
                        marginLeft: '1rem',
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 2rem 1.8rem 2rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.94rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFaqSection;
