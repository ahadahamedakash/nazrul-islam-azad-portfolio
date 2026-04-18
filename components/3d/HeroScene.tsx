"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

// Solar Panel Component - Realistic Photovoltaic Panel with thin frame
function SolarPanel() {
  const panelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (panelRef.current) {
      // Very slow Y rotation
      panelRef.current.rotation.y += delta * 0.001;

      // Gentle floating oscillation
      const time = state.clock.getElapsedTime();
      panelRef.current.position.y = Math.sin(time * Math.PI / 2) * 0.1;
    }
  });

  // Create 6x4 grid of solar cells
  const cells = useMemo(() => {
    const cellArray = [];
    const rows = 6;
    const cols = 4;
    const cellWidth = 0.615;
    const cellHeight = 0.615;
    const gap = 0.015; // Slightly larger gaps for visible grid lines

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = (j - (cols - 1) / 2) * (cellWidth + gap);
        const y = (i - (rows - 1) / 2) * (cellHeight + gap);

        cellArray.push({ x, y, z: 0 });
      }
    }
    return cellArray;
  }, []);

  // Calculate panel dimensions
  const panelWidth = 4 * 0.615 + 3 * 0.015;
  const panelHeight = 6 * 0.615 + 5 * 0.015;
  const thickness = 0.25;
  const frameThickness = 0.06;

  return (
    <group
      ref={panelRef}
      position={[1.2, 0.2, 0]}
      rotation={[-0.25, 0.35, 0.03]}
      scale={[3.0, 2.0, thickness]}
    >
      {/* Front face - solar cells */}
      <group position={[0, 0, thickness / 2]}>
        {cells.map((cell, index) => (
          <mesh key={index} position={[cell.x, cell.y, 0]}>
            <boxGeometry args={[0.615, 0.615, 0.05]} />
            <meshStandardMaterial
              color="#0a1628"
              roughness={0.15}
              metalness={0.6}
              emissive="#0a1f4d"
              emissiveIntensity={0.15}
              side={THREE.FrontSide}
            />
          </mesh>
        ))}

        {/* Cell borders - thin silver lines */}
        {cells.map((cell, index) => (
          <mesh key={`border-${index}`} position={[cell.x, cell.y, 0.026]}>
            <boxGeometry args={[0.635, 0.635, 0.002]} />
            <meshStandardMaterial
              color="#2a4a7f"
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.3}
              side={THREE.FrontSide}
            />
          </mesh>
        ))}

        {/* Top edge highlight - white line on frame */}
        <mesh position={[0, panelHeight / 2 + 0.015, 0]}>
          <boxGeometry args={[panelWidth + 0.06, 0.015, 0.025]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
            metalness={0.95}
            roughness={0.05}
            side={THREE.FrontSide}
          />
        </mesh>
      </group>

      {/* Back face - matte dark back */}
      <mesh position={[0, 0, -thickness / 2]}>
        <boxGeometry args={[panelWidth + 0.02, panelHeight + 0.02, 0.02]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.7}
          roughness={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Panel sides - thin aluminum frame */}
      {/* Top side */}
      <mesh
        position={[0, panelHeight / 2 + frameThickness / 2, 0]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[panelWidth + 0.06, frameThickness, thickness]} />
        <meshStandardMaterial
          color="#c0c8d4"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Bottom side */}
      <mesh
        position={[0, -panelHeight / 2 - frameThickness / 2, 0]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[panelWidth + 0.06, frameThickness, thickness]} />
        <meshStandardMaterial
          color="#c0c8d4"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Left side */}
      <mesh
        position={[-panelWidth / 2 - frameThickness / 2, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[frameThickness, panelHeight + 0.06, thickness]} />
        <meshStandardMaterial
          color="#c0c8d4"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Right side */}
      <mesh
        position={[panelWidth / 2 + frameThickness / 2, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[frameThickness, panelHeight + 0.06, thickness]} />
        <meshStandardMaterial
          color="#c0c8d4"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

// Energy Photon Particle Component
function PhotonParticle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const [x, y, z] = initialPos.current;

      // Very slow gentle drift
      meshRef.current.position.x = x + Math.sin(time * 0.2 + x) * 0.3;
      meshRef.current.position.y = y + Math.cos(time * 0.15 + y) * 0.3;
      meshRef.current.position.z = z + Math.sin(time * 0.25 + z) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Main Scene Component
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 25 photon particles (reduced from 50 for performance)
  const particles = useMemo(() => {
    const particlePositions: [number, number, number][] = [];
    for (let i = 0; i < 25; i++) {
      particlePositions.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
      ]);
    }
    return particlePositions;
  }, []);

  // Mouse move tilt effect - max ±8 degrees
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (groupRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Clamp rotation to max 8 degrees (0.14 radians)
        const clampedX = Math.max(-0.14, Math.min(0.14, x * 0.14));
        const clampedY = Math.max(-0.14, Math.min(0.14, y * 0.14));

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          clampedY,
          0.05
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          clampedX,
          0.05
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Realistic sunlight lighting - stronger for better reflections */}
      <directionalLight
        position={[12, 8, 6]}
        intensity={3.0}
        color="#fff5e0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light - sky bounce */}
      <pointLight
        position={[-4, -2, 3]}
        intensity={0.4}
        color="#4488ff"
      />

      {/* SpotLight on panel center */}
      <spotLight
        position={[0, 5, 3]}
        target-position={[0, 0, 0]}
        intensity={1.5}
        angle={0.4}
        color="#ffffff"
        castShadow
      />

      {/* Environment map for realistic reflections */}
      <Environment preset="sunset" />

      {/* Scene Elements */}
      <SolarPanel />

      {/* Photon particles */}
      {particles.map((position, index) => (
        <PhotonParticle key={index} position={position} />
      ))}
    </group>
  );
}

// Main Canvas Component - Full Viewport with Interaction Hint
export default function HeroScene() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 11], fov: 40 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        shadows
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.4}
          rotateSpeed={0.6}
          dampingFactor={0.08}
          enableDamping={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Scene />
      </Canvas>

      {/* Interaction hint - fades out after 3 seconds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showHint ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[var(--muted)] pointer-events-none"
      >
        <MousePointer2 size={14} />
        <span className="text-xs" style={{ fontSize: "0.72rem" }}>
          Click & drag to interact
        </span>
      </motion.div>
    </div>
  );
}
