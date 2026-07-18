"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// A stylized low-poly airplane built with Three.js primitives
function Airplane() {
  const group = useRef<THREE.Group>(null);

  // You can animate the plane locally here if needed, but <Float> handles the main hovering
  useFrame((state) => {
    if (group.current) {
      // Slight tilting for extra dynamic feel
      group.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Fuselage (Body) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.4, 4, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Nose */}
      <mesh position={[2.25, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.5, 0.5, 32]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Cockpit Window */}
      <mesh position={[1.5, 0.4, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.6, 0.3, 0.6]} />
        <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Main Wings */}
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[1.2, 0.1, 4]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Engine Left */}
      <mesh position={[0.5, -0.3, 1]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
      {/* Engine Right */}
      <mesh position={[0.5, -0.3, -1]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>

      {/* Tail Horizontal Stabilizer */}
      <mesh position={[-1.7, 0, 0]}>
        <boxGeometry args={[0.8, 0.1, 1.5]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Tail Vertical Fin */}
      <mesh position={[-1.7, 0.5, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.8, 1, 0.1]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}

export default function Interactive3DPlane({ lang }: { lang: "en" | "ar" }) {
  return (
    <section className="relative w-full h-[600px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Gradient & Text overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-between py-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {lang === "ar" ? "اكتشف أسطولنا" : "Explore Our Fleet"}
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto px-6">
            {lang === "ar" 
              ? "حرك الطائرة لترى كل التفاصيل. نحن نستخدم أحدث طائرات التدريب لضمان أفضل تجربة لك."
              : "Drag the airplane to explore every detail. We use the latest training aircraft for your experience."}
          </p>
        </div>
        <div className="text-amber-500 font-medium animate-bounce mt-auto">
          {lang === "ar" ? "اضغط واسحب للدوران 👆" : "Click & Drag to rotate 👆"}
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-20">
        <Canvas camera={{ position: [4, 2, 5], fov: 45 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <spotLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
          
          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Floating animation wrapper */}
          <Float 
            speed={2} // Animation speed
            rotationIntensity={0.5} // XYZ rotation intensity
            floatIntensity={1.5} // Up/down float intensity
            floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within
          >
            <Airplane />
          </Float>

          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          {/* Ground shadow */}
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Canvas>
      </div>
    </section>
  );
}
