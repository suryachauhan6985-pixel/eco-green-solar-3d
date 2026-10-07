import React, { useEffect, useState, useRef } from 'react';

interface CountUpNumberProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 1600,
  decimals = 0,
  className = '',
  style = {},
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const runTween = (fromVal: number, toVal: number, animDuration: number) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        setDisplayValue(toVal);
        return;
      }

      let startTime: number | null = null;
      const change = toVal - fromVal;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animDuration, 1);
        
        // Smooth cubic ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = fromVal + change * ease;
        setDisplayValue(current);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step);
        } else {
          setDisplayValue(toVal);
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersectingRef.current = true;
            // Every time the number enters the viewport, smoothly grow from 0 to target
            runTween(0, end, duration);
          } else {
            isIntersectingRef.current = false;
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }
            // Reset to 0 when scrolled out so re-entry always grows
            setDisplayValue(0);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // If already in viewport and end changed (e.g. calculator slider)
    if (isIntersectingRef.current) {
      runTween(0, end, Math.min(duration, 600));
    }

    return () => {
      observer.unobserve(el);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration]);

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString('en-IN');

  return (
    <span ref={elementRef} className={className} style={style}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUpNumber;

