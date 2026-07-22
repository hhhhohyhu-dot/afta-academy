"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

// Advanced procedural airplane
function Airplane() {
  const group = useRef<THREE.Group>(null);
  const propeller = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.02;
    }
    if (propeller.current) {
      propeller.current.rotation.x += 0.5; // spin propeller
    }
  });

  return (
    <group ref={group} scale={1.2}>
      {/* Fuselage - Main Body (Rounded) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.4, 3, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.4, 0.8, 32]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Propeller hub */}
      <mesh position={[2.45, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Propeller blades */}
      <mesh ref={propeller} position={[2.4, 0, 0]}>
        <boxGeometry args={[0.05, 1.6, 0.1]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cockpit canopy */}
      <mesh position={[0.5, 0.35, 0]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.25, 0.6, 16, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.0} metalness={1.0} envMapIntensity={2} />
      </mesh>

      {/* Main Wings (Swept back) */}
      <mesh position={[0.2, 0, 0]} rotation={[0, -0.1, 0]}>
        <boxGeometry args={[1.2, 0.08, 4.5]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Wingtip engines */}
      <mesh position={[0.1, -0.1, 2.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
      </mesh>
      <mesh position={[0.1, -0.1, -2.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
      </mesh>

      {/* Tail section (Vertical stabilizer) */}
      <mesh position={[-1.7, 0.4, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.6, 1.2, 0.08]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Tail section (Horizontal stabilizer) */}
      <mesh position={[-1.8, 0, 0]}>
        <boxGeometry args={[0.6, 0.08, 1.8]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.4} />
      </mesh>
    </group>
  );
}

function ErrorFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white">
      <p>3D Experience unavailable.</p>
    </div>
  );
}

export default function Interactive3DPlane({ lang }: { lang: "en" | "ar" }) {
  const isArabic = lang === "ar";

  return (
    <section 
      className="relative w-full h-[600px] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Overlay Title & Interactive Badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none px-4 w-full max-w-xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/40 rounded-full text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
          {isArabic ? "تجربة ثلاثية الأبعاد 360°" : "360° Interactive 3D Experience"}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
          {isArabic ? "اسحب لتدوير واستكشاف طائرة الأكاديمية" : "Drag to Rotate & Explore Academy Aircraft"}
        </h3>
        <p className="text-slate-300 text-xs md:text-sm mt-1 font-medium">
          {isArabic ? "استعمل الماوس أو اللمس للتدوير والتكبير والتصغير" : "Use mouse or touch to rotate, zoom in and out"}
        </p>
      </div>

      {/* 3D Canvas with Error Boundary */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="absolute inset-0 z-20">
          <Canvas camera={{ position: [5, 3, 6], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
            <directionalLight position={[-10, -10, -5]} intensity={0.6} />
            <pointLight position={[0, 5, 0]} intensity={0.5} />

            {/* Floating animation wrapper */}
            <Float 
              speed={2.5} 
              rotationIntensity={0.5} 
              floatIntensity={1.5} 
              floatingRange={[-0.5, 0.5]}
            >
              <Airplane />
            </Float>

            {/* Controls */}
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              minDistance={3}
              maxDistance={12}
              autoRotate
              autoRotateSpeed={1}
            />
            
            {/* Ground shadow */}
            <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={15} blur={2.5} far={4} />
          </Canvas>
        </div>
      </ErrorBoundary>
    </section>
  );
}
