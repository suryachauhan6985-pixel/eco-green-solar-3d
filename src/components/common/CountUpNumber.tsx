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
  const hasAnimated = useRef(false);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const startAnimation = () => {
      const startValue = displayValue;
      const change = end - startValue;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Cubic ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = startValue + change * ease;
        
        setDisplayValue(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(end);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    // If intersection observer available, trigger when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      cancelAnimationFrame(animationFrameId);
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
