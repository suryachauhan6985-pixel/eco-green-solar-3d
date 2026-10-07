import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HouseCutawayProps {
  scrollProgress: number;
}

export const HouseCutaway: React.FC<HouseCutawayProps> = ({ scrollProgress }) => {
  const houseGroupRef = useRef<THREE.Group>(null);
  const meterWheelRef = useRef<THREE.Mesh>(null);
  const inverterLedRef = useRef<THREE.Mesh>(null);

  // House cutaway visibility / opacity transitions
  const isCutawayStage = scrollProgress >= 0.28;
  const cutawayOpacity = Math.min(Math.max((scrollProgress - 0.28) / 0.1, 0), 1);

  useFrame((state, delta) => {
    // Meter wheel spinning backwards (negative direction!) when solar generates
    if (meterWheelRef.current && isCutawayStage) {
      meterWheelRef.current.rotation.z -= delta * 5.5; // Reverse rotation = net export!
    }

    // Inverter LED pulse (active solar harvest)
    if (inverterLedRef.current) {
      const pulse = 0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 6);
      (inverterLedRef.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + pulse * 0.6;
    }
  });

  return (
    <group ref={houseGroupRef} position={[0, -2.8, 0]}>
      {/* Foundation & Ground Terrace */}
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <boxGeometry args={[12, 0.4, 14]} />
        <meshStandardMaterial color="#070E1A" roughness={0.9} />
      </mesh>

      {/* Main Structural Villa Walls (Cutaway design) */}
      {/* Back Wall */}
      <mesh position={[0, 2.5, -4.5]}>
        <boxGeometry args={[8.8, 5, 0.3]} />
        <meshStandardMaterial color="#0E1A2C" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-4.3, 2.5, 0]}>
        <boxGeometry args={[0.3, 5, 9]} />
        <meshStandardMaterial color="#0A1524" roughness={0.7} />
      </mesh>

      {/* Interior Floor Divider (2-story villa) */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[8.5, 0.2, 8.8]} />
        <meshStandardMaterial color="#12233B" roughness={0.5} />
      </mesh>

      {/* Architectural Glass Facade (Frosted modern glass) */}
      <mesh position={[4.3, 2.5, 0]}>
        <boxGeometry args={[0.1, 4.8, 8.8]} />
        <meshPhysicalMaterial
          color="#3A6D8C"
          transparent
          opacity={0.18}
          roughness={0.1}
          metalness={0.1}
          transmission={0.8}
        />
      </mesh>

      {/* Warm Interior Lighting reflecting off modern rooms */}
      <pointLight position={[0, 1.2, 0]} color="#FFDF9E" intensity={1.2} distance={8} />
      <pointLight position={[0, 3.8, 0]} color="#FFDF9E" intensity={1.0} distance={8} />

      {/* Exterior Inverter Unit (High-efficiency On-Grid Inverter) */}
      <group position={[4.45, 1.8, 1.8]}>
        {/* Inverter Chassis */}
        <mesh>
          <boxGeometry args={[0.25, 0.9, 0.6]} />
          <meshStandardMaterial color="#E2E8F0" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Heat Sink Fins on side */}
        <mesh position={[-0.1, 0, 0]}>
          <boxGeometry args={[0.06, 0.85, 0.55]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Inverter Display Screen */}
        <mesh position={[0.13, 0.15, 0]}>
          <boxGeometry args={[0.01, 0.2, 0.3]} />
          <meshBasicMaterial color="#062414" />
        </mesh>
        {/* Green Generation Status LED */}
        <mesh ref={inverterLedRef} position={[0.13, -0.15, 0.15]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#19E68C" transparent opacity={0.9} />
        </mesh>
      </group>

      {/* PGVCL Bi-Directional Net Meter Unit (Mounted lower on wall) */}
      <group position={[4.45, 0.6, 2.8]}>
        {/* Meter Enclosure */}
        <mesh>
          <boxGeometry args={[0.2, 0.65, 0.45]} />
          <meshStandardMaterial color="#0F172A" roughness={0.4} metalness={0.4} />
        </mesh>
        {/* Glass Cover */}
        <mesh position={[0.11, 0, 0]}>
          <boxGeometry args={[0.02, 0.55, 0.38]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transparent
            opacity={0.3}
            roughness={0.1}
          />
        </mesh>
        {/* Rotating Net Meter Disc (Spinning backwards!) */}
        <mesh ref={meterWheelRef} position={[0.1, -0.05, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.01, 24]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Red Reference Notch on Disc */}
        <mesh position={[0.11, -0.05, 0.08]}>
          <boxGeometry args={[0.005, 0.02, 0.04]} />
          <meshBasicMaterial color="#EF4444" />
        </mesh>
        {/* Digital LCD Counter */}
        <mesh position={[0.1, 0.16, 0]}>
          <boxGeometry args={[0.01, 0.1, 0.24]} />
          <meshBasicMaterial color="#00E575" />
        </mesh>
      </group>
    </group>
  );
};
