import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SunDawnSceneProps {
  scrollProgress: number; // 0 to 1
}

export const SunDawnScene: React.FC<SunDawnSceneProps> = ({ scrollProgress }) => {
  const sunGroupRef = useRef<THREE.Group>(null);
  const sunCoreRef = useRef<THREE.Mesh>(null);
  const sunCoronaRef = useRef<THREE.Mesh>(null);
  const dustParticlesRef = useRef<THREE.Points>(null);

  // Generate floating atmospheric photon dust
  const particleCount = 200;
  const particlePositions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = Math.random() * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!sunGroupRef.current) return;

    // Sun rises from horizon as scroll goes from 0 to 0.25, then stays elevated
    const riseProgress = Math.min(Math.max(scrollProgress / 0.22, 0), 1);
    const targetY = -2 + riseProgress * 14;
    const targetZ = -30 + riseProgress * 10;
    
    sunGroupRef.current.position.y = THREE.MathUtils.lerp(
      sunGroupRef.current.position.y,
      targetY,
      0.08
    );
    sunGroupRef.current.position.z = THREE.MathUtils.lerp(
      sunGroupRef.current.position.z,
      targetZ,
      0.08
    );

    // Subtle sun pulse
    if (sunCoronaRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      sunCoronaRef.current.scale.set(pulse, pulse, pulse);
    }

    // Drift dust particles gently
    if (dustParticlesRef.current) {
      dustParticlesRef.current.rotation.y += delta * 0.03;
      dustParticlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Calculate sky light color based on scroll
  const dawnFactor = Math.min(Math.max(scrollProgress * 4, 0), 1);
  const sunColor = new THREE.Color().lerpColors(
    new THREE.Color('#FF7A00'),
    new THREE.Color('#FFD15C'),
    dawnFactor
  );

  return (
    <group>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.25 + dawnFactor * 0.35} color="#0B3A6B" />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2 + dawnFactor * 2.2}
        color={sunColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[0, 4, -15]} intensity={1.5} color="#FF9E2C" distance={40} />

      {/* Procedural Glowing Sun */}
      <group ref={sunGroupRef} position={[0, -2, -30]}>
        {/* Core Sphere */}
        <mesh ref={sunCoreRef}>
          <sphereGeometry args={[2.8, 32, 32]} />
          <meshBasicMaterial color="#FFF5DB" />
        </mesh>

        {/* Inner Corona */}
        <mesh ref={sunCoronaRef}>
          <sphereGeometry args={[3.6, 32, 32]} />
          <meshBasicMaterial
            color="#FFB800"
            transparent
            opacity={0.65}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Outer Radiant Glow Halo */}
        <mesh scale={[1.4, 1.4, 1.4]}>
          <sphereGeometry args={[4.5, 32, 32]} />
          <meshBasicMaterial
            color="#FF7A00"
            transparent
            opacity={0.25}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      {/* Floating Solar Dust / Photons */}
      <points ref={dustParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#FFDE8A"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
