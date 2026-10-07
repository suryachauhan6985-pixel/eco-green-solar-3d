import React, { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  opacity?: number;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster,
  opacity = 0.25,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset state if source changes
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      {/* Dynamic Animated Ambient Gradient Fallback */}
      <div
        className="absolute inset-0"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 30%, rgba(11, 58, 107, 0.3) 0%, rgba(5, 11, 20, 0.8) 70%)',
          opacity: hasError ? 0.8 : 0.4,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
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
            opacity: isLoaded ? opacity : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: 'brightness(0.85) contrast(1.1)',
          }}
        />
      )}

      {/* Dark Scrim / Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(5,11,20,0.4) 0%, transparent 40%, rgba(5,11,20,0.85) 100%)',
        }}
      />
    </div>
  );
};

export default VideoBackground;
