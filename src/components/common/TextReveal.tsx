import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  stagger = 0.04,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.word-inner');
    if (!words.length) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(words, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(words, { y: '115%', opacity: 0 });

    if (triggerOnScroll) {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        end: 'bottom 10%',
        onEnter: () => {
          gsap.to(words, {
            y: '0%',
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            stagger,
            delay,
            overwrite: 'auto',
          });
        },
        onEnterBack: () => {
          gsap.to(words, {
            y: '0%',
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger,
            overwrite: 'auto',
          });
        },
        onLeaveBack: () => {
          gsap.to(words, {
            y: '115%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            overwrite: 'auto',
          });
        },
      });

      return () => {
        trigger.kill();
      };
    } else {
      gsap.to(words, {
        y: '0%',
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        stagger,
        delay,
      });
    }
  }, [children, delay, stagger, triggerOnScroll]);

  const words = children.split(' ');

  const Tag = tag as any;

  return (
    <Tag
      ref={containerRef as any}
      className={`inline-block ${className}`}
      style={{ overflow: 'hidden' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word-mask inline-block"
          style={{
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '0.28em',
          }}
        >
          <span
            className="word-inner inline-block"
            style={{
              display: 'inline-block',
              transform: 'translateY(115%)',
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
