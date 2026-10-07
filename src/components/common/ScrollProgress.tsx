import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hidden md:flex flex-col items-center gap-2"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-display)',
          color: 'var(--brand-green)',
          fontWeight: 700,
        }}
      >
        {Math.round(progress * 100)}%
      </span>

      <div
        style={{
          width: '3px',
          height: '140px',
          backgroundColor: '#E2E8F0',
          borderRadius: '999px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${progress * 100}%`,
            backgroundColor: 'var(--brand-green)',
            borderRadius: '999px',
            transition: 'height 0.1s linear',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: `${progress * 100}%`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'var(--brand-green)',
            boxShadow: '0 2px 6px rgba(0, 143, 79, 0.4)',
            transition: 'top 0.1s linear',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
