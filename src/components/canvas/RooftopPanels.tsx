import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RooftopPanelsProps {
  scrollProgress: number;
}

interface PanelData {
  targetPos: [number, number, number];
  targetRot: [number, number, number];
  explodeOffset: [number, number, number];
  explodeRot: [number, number, number];
}

export const RooftopPanels: React.FC<RooftopPanelsProps> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const panelMeshesRef = useRef<THREE.Group[]>([]);

  // Compute assembly progress: 0 when < 0.12, 1 when > 0.35
  const assembleProgress = Math.min(
    Math.max((scrollProgress - 0.12) / 0.22, 0),
    1
  );

  // Generate 16 panels in a 4x4 array on the roof
  const rows = 4;
  const cols = 4;
  const panelWidth = 1.4;
  const panelLength = 2.2;
  const gapX = 0.15;
  const gapZ = 0.18;
  const tiltAngle = 0.38; // ~22 degrees optimal for Gujarat latitude

  const panelsData: PanelData[] = useMemo(() => {
    const list: PanelData[] = [];
    const seed = 42;
    let s = seed;
    const pseudoRandom = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * (panelWidth + gapX);
        const z = (r - (rows - 1) / 2) * (panelLength * Math.cos(tiltAngle) + gapZ);
        const y = 3.6 - r * 0.35; // stepped elevation on roof rack

        // Scattered exploded offsets
        const exX = (pseudoRandom() - 0.5) * 14;
        const exY = 6 + pseudoRandom() * 10;
        const exZ = (pseudoRandom() - 0.5) * 16;

        list.push({
          targetPos: [x, y, z],
          targetRot: [-tiltAngle, 0, 0],
          explodeOffset: [exX, exY, exZ],
          explodeRot: [
            (pseudoRandom() - 0.5) * 2,
            (pseudoRandom() - 0.5) * 2,
            (pseudoRandom() - 0.5) * 2,
          ],
        });
      }
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    // Animate each panel from exploded to assembled
    panelMeshesRef.current.forEach((mesh, index) => {
      if (!mesh) return;
      const data = panelsData[index];
      if (!data) return;

      // Cubic ease out for snap feel
      const t = assembleProgress;
      const ease = 1 - Math.pow(1 - t, 3);

      const curX = THREE.MathUtils.lerp(data.targetPos[0] + data.explodeOffset[0], data.targetPos[0], ease);
      const curY = THREE.MathUtils.lerp(data.targetPos[1] + data.explodeOffset[1], data.targetPos[1], ease);
      const curZ = THREE.MathUtils.lerp(data.targetPos[2] + data.explodeOffset[2], data.targetPos[2], ease);

      mesh.position.set(curX, curY, curZ);

      const rotX = THREE.MathUtils.lerp(data.targetRot[0] + data.explodeRot[0], data.targetRot[0], ease);
      const rotY = THREE.MathUtils.lerp(data.targetRot[1] + data.explodeRot[1], data.targetRot[1], ease);
      const rotZ = THREE.MathUtils.lerp(data.targetRot[2] + data.explodeRot[2], data.targetRot[2], ease);

      mesh.rotation.set(rotX, rotY, rotZ);
    });

    // Subtle gentle float when assembled
    if (groupRef.current && assembleProgress > 0.9) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Structural Terrace Slab */}
      <mesh position={[0, 0.4, 0]} receiveShadow>
        <boxGeometry args={[9, 0.4, 11]} />
        <meshStandardMaterial color="#0C1726" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Parapet Edge Rails */}
      <mesh position={[0, 0.8, -5.4]}>
        <boxGeometry args={[9, 0.4, 0.2]} />
        <meshStandardMaterial color="#13243C" roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[0, 0.8, 5.4]}>
        <boxGeometry args={[9, 0.4, 0.2]} />
        <meshStandardMaterial color="#13243C" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Aluminum Mounting Rails on Roof */}
      {[-3, -1, 1, 3].map((rx, idx) => (
        <mesh key={`rail-${idx}`} position={[rx, 1.2, 0]} rotation={[-tiltAngle, 0, 0]}>
          <boxGeometry args={[0.08, 0.08, 9.5]} />
          <meshStandardMaterial color="#7D93A8" metalness={0.85} roughness={0.2} />
        </mesh>
      ))}

      {/* 16 Solar Panels */}
      {panelsData.map((_, i) => (
        <group
          key={`panel-${i}`}
          ref={(el) => {
            if (el) panelMeshesRef.current[i] = el;
          }}
        >
          {/* Anodized Aluminum Outer Frame */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[panelWidth, 0.06, panelLength]} />
            <meshStandardMaterial
              color="#A3B8CC"
              metalness={0.92}
              roughness={0.25}
            />
          </mesh>

          {/* Deep Blue Monocrystalline N-Type Silicon Wafer Glass */}
          <mesh position={[0, 0.035, 0]}>
            <boxGeometry args={[panelWidth - 0.05, 0.02, panelLength - 0.05]} />
            <meshStandardMaterial
              color="#072242"
              roughness={0.12}
              metalness={0.65}
              emissive="#001830"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Silver Busbar Grid Lines */}
          {[-0.4, 0, 0.4].map((lx, lIdx) => (
            <mesh key={`busbar-${lIdx}`} position={[lx, 0.046, 0]}>
              <boxGeometry args={[0.015, 0.005, panelLength - 0.08]} />
              <meshBasicMaterial color="#E2EEF8" />
            </mesh>
          ))}

          {/* Shimmer / Specular Glint Bar */}
          <mesh position={[0, 0.048, 0]} rotation={[0, 0, 0]}>
            <planeGeometry args={[panelWidth - 0.1, panelLength - 0.1]} />
            <meshStandardMaterial
              color="#3B82F6"
              transparent
              opacity={0.08 + Math.sin(i * 0.4) * 0.04}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};
