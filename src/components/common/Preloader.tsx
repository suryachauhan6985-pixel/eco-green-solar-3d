import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = { val: 0 };
    gsap.to(timer, {
      val: 100,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(timer.val));
      },
      onComplete: () => {
        gsap.to('.preloader-container', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          },
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      className="preloader-container fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem 5vw',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-green)' }} />
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-green)', fontWeight: 700 }}>
            ECO GREEN SOLAR • GUJARAT
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: 600 }}>
          ESTD. 2007
        </span>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'var(--brand-green)',
            letterSpacing: '-0.03em',
          }}
        >
          {progress}%
        </div>
        <div style={{ marginTop: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.92rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
          Power Your Home With The Sun
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          PM Surya Ghar Empanelled Vendor
        </span>
        <div style={{ width: '140px', height: '3px', backgroundColor: '#E2E8F0', position: 'relative', borderRadius: '2px' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress}%`,
              backgroundColor: 'var(--brand-green)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
