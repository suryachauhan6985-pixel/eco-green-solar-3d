import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxImage: Image with smooth vertical parallax translation on scroll
 */
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // e.g. -25 to 25 percentage
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 16,
  className = '',
  style = {},
  aspectRatio = '16/9',
  objectFit = 'cover',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const anim = gsap.fromTo(
      img,
      { yPercent: -speed, scale: 1.12 },
      {
        yPercent: speed,
        scale: 1.03,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative rounded-2xl ${className}`}
      style={{
        overflow: 'hidden',
        position: 'relative',
        aspectRatio,
        ...style,
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          position: 'absolute',
          top: '-15%',
          left: 0,
          width: '100%',
          height: '130%',
          objectFit: objectFit,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

/**
 * ScrollZoomImage: Large full-bleed or framed image that zooms (scale 1.0 to 1.18) on scroll
 */
interface ScrollZoomImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ScrollZoomImage: React.FC<ScrollZoomImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const anim = gsap.fromTo(
      img,
      { scale: 1.0 },
      {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          willChange: 'transform',
        }}
      />
      {children}
    </div>
  );
};

/**
 * ScrubVideo: Video element whose currentTime is scrubbed smoothly by GSAP ScrollTrigger
 */
interface ScrubVideoProps {
  src: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrubVideo: React.FC<ScrubVideoProps> = ({
  src,
  poster,
  className = '',
  style = {},
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const onLoaded = () => {
      setIsLoaded(true);
      const duration = video.duration || 6;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          if (video && !isNaN(duration)) {
            video.currentTime = self.progress * duration;
          }
        },
      });

      return () => {
        trigger.kill();
      };
    };

    video.addEventListener('loadedmetadata', onLoaded);
    return () => video.removeEventListener('loadedmetadata', onLoaded);
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
      {/* Fallback image if video fails */}
      {hasError && (
        <img
          src={poster}
          alt="Video Poster Fallback"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

/**
 * LoopVideo: Muted looping video with poster and graceful fallback
 */
interface LoopVideoProps {
  src: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
}

export const LoopVideo: React.FC<LoopVideoProps> = ({
  src,
  poster,
  className = '',
  style = {},
  opacity = 0.35,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`overflow-hidden pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {!hasError ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setHasError(true)}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            opacity,
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
      ) : (
        <img
          src={poster}
          alt="Loop Fallback"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity,
          }}
        />
      )}
      {/* Gradient Scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(7, 16, 24, 0.5) 0%, rgba(7, 16, 24, 0.8) 100%)',
        }}
      />
    </div>
  );
};
