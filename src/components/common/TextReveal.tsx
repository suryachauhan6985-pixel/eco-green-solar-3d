import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextRevealProps {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.035,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>('.word-inner');
    if (!words.length) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(words, { y: '0%', opacity: 1 });
      return;
    }

    // Initial state: hidden slightly below baseline
    gsap.set(words, { y: '100%', opacity: 0 });

    const animateIn = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      gsap.to(words, {
        y: '0%',
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        stagger,
        delay,
        overwrite: 'auto',
        onComplete: () => {
          gsap.set(words, { clearProps: 'transform,willChange' });
        },
      });
    };

    if (!triggerOnScroll) {
      animateIn();
      return;
    }

    // Native IntersectionObserver: 100% reliable across all devices and layout shifts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);

    // Safety fallback: ensure text is NEVER stuck if already in view or after scroll
    const fallbackTimer = setTimeout(() => {
      if (!animatedRef.current && el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animateIn();
        }
      }
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [children, delay, stagger, triggerOnScroll]);

  const words = children ? children.trim().split(/\s+/) : [];
  const Tag = tag as any;

  return (
    <Tag
      ref={containerRef as any}
      className={className}
      style={{ display: 'block' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word-mask"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'baseline',
            paddingBottom: '0.14em',
            marginBottom: '-0.14em',
            marginRight: '0.28em',
          }}
        >
          <span
            className="word-inner"
            style={{
              display: 'inline-block',
              transform: 'translateY(100%)',
              opacity: 0,
              willChange: 'transform, opacity',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
