import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollCameraController } from './ScrollCameraController.tsx';
import * as THREE from 'three';

interface SceneCanvasProps {
  reducedMotion?: boolean;
}

// Test Sun Sphere for Step 0 foundation
const TestSunSphere: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Sun Core */}
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#FFB800" />
      </mesh>

      {/* Radiant Glowing Corona */}
      <mesh scale={[1.25, 1.25, 1.25]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#FF7A00"
          transparent
          opacity={0.35}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer Halo */}
      <mesh scale={[1.6, 1.6, 1.6]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#19E68C"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Floating Dust Particles */}
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[2.5, 4.2, 64]} />
        <meshBasicMaterial
          color="#0B3A6B"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Cinematic Lights */}
      <ambientLight intensity={0.4} color="#0B3A6B" />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#FFD15C" />
      <pointLight position={[0, 0, 2]} intensity={2.0} color="#FFB800" distance={20} />
    </group>
  );
};

export const SceneCanvas: React.FC<SceneCanvasProps> = ({ reducedMotion = false }) => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    // 2D Fallback if WebGL fails
    return (
      <div
        className="webgl-container fallback-2d"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(255, 184, 0, 0.2) 0%, rgba(11, 58, 107, 0.3) 40%, #050B14 85%)',
        }}
      />
    );
  }

  return (
    <div className="webgl-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.2, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <ScrollCameraController reducedMotion={reducedMotion} />
          <TestSunSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
