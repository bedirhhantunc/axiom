"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Shape, ExtrudeGeometry } from "three";

// Geometry'yi bir kez oluştur, tekrar kullanılacak
const createBoxGeometry = () => {
  const shape = new Shape();
  const angleStep = Math.PI * 0.5;
  const radius = 1;

  shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
  shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
  shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
  shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 8,
    curveSegments: 12,
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  return geometry;
};

// Geometry'yi modül seviyesinde bir kez oluştur
const sharedGeometry = createBoxGeometry();

const Box = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  return (
    <mesh geometry={sharedGeometry} position={position} rotation={rotation}>
      <meshStandardMaterial
        color="#2C3E50"
        metalness={0.8}
        roughness={0.3}
        emissive="#FF6B35"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

const AnimatedBoxes = ({ isVisible }: { isVisible: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Sadece ekranda görünüyorsa animasyonu çalıştır
    if (groupRef.current && isVisible) {
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  const boxes = Array.from({ length: 40 }, (_, index) => ({
    position: [(index - 20) * 0.75, 0, 0] as [number, number, number],
    rotation: [(index - 10) * 0.1, Math.PI / 2, 0] as [number, number, number],
    id: index,
  }));

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  );
};

export const Scene = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // %10 görünür olduğunda tetikle
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [5, 5, 20], fov: 40 }}>
        <ambientLight intensity={10} />
        <directionalLight position={[10, 10, 5]} intensity={12} />
        <directionalLight position={[-10, -10, -5]} intensity={5} color="#FF6B35" />
        <AnimatedBoxes isVisible={isVisible} />
      </Canvas>
    </div>
  );
};

export default Scene;
