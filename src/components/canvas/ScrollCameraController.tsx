import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollCameraControllerProps {
  reducedMotion?: boolean;
}

export const ScrollCameraController: React.FC<ScrollCameraControllerProps> = ({
  reducedMotion = false,
}) => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollProgress = useRef(0);

  // Default camera path coordinates across scroll (0 to 1)
  const cameraPath = useRef([
    { progress: 0.0, pos: new THREE.Vector3(0, 1.2, 10), look: new THREE.Vector3(0, 0, 0) },
    { progress: 0.15, pos: new THREE.Vector3(0, 3.5, 7.5), look: new THREE.Vector3(0, 1.0, 0) },
    { progress: 0.35, pos: new THREE.Vector3(4, 4.5, 5), look: new THREE.Vector3(0, 1.5, 0) },
    { progress: 0.55, pos: new THREE.Vector3(2.5, 1.2, 3), look: new THREE.Vector3(0, 0.5, 0) },
    { progress: 0.75, pos: new THREE.Vector3(0, 5, 8), look: new THREE.Vector3(0, 0.5, 0) },
    { progress: 1.0, pos: new THREE.Vector3(0, 16, 20), look: new THREE.Vector3(0, 0, 0) },
  ]);

  useEffect(() => {
    // Mouse listener for subtle camera parallax
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouse.current.targetY = (e.clientY / window.innerHeight - 0.5) * 1.0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ScrollTrigger to scrub scrollProgress continuously
    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      trigger.kill();
    };
  }, []);

  useFrame((_, delta) => {
    // Smooth mouse dampening
    mouse.current.x = THREE.MathUtils.damp(
      mouse.current.x,
      mouse.current.targetX,
      4,
      delta
    );
    mouse.current.y = THREE.MathUtils.damp(
      mouse.current.y,
      mouse.current.targetY,
      4,
      delta
    );

    const p = scrollProgress.current;

    // Find bounding keyframes
    const path = cameraPath.current;
    let kf1 = path[0];
    let kf2 = path[path.length - 1];

    for (let i = 0; i < path.length - 1; i++) {
      if (p >= path[i].progress && p <= path[i + 1].progress) {
        kf1 = path[i];
        kf2 = path[i + 1];
        break;
      }
    }

    const segmentRange = kf2.progress - kf1.progress || 1;
    const localT = (p - kf1.progress) / segmentRange;
    const easeT = THREE.MathUtils.smoothstep(localT, 0, 1);

    const targetPos = new THREE.Vector3().lerpVectors(kf1.pos, kf2.pos, easeT);
    const targetLook = new THREE.Vector3().lerpVectors(kf1.look, kf2.look, easeT);

    if (!reducedMotion) {
      targetPos.x += mouse.current.x;
      targetPos.y += -mouse.current.y * 0.5;
    }

    camera.position.lerp(targetPos, 0.08);
    camera.lookAt(targetLook);
  });

  return null;
};

export default ScrollCameraController;
