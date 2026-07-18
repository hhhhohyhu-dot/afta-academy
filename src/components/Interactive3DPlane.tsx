"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, ContactShadows, useGLTF, Stage } from "@react-three/drei";

function Airplane() {
  // Use a well-known public GLTF airplane model from pmndrs market
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/airplane/model.gltf");
  return <primitive object={scene} scale={1.5} />;
}

export default function Interactive3DPlane({ lang }: { lang: "en" | "ar" }) {
  return (
    <section className="relative w-full h-[600px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-20">
        <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Floating animation wrapper */}
          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={1.5} 
            floatingRange={[-0.5, 0.5]}
          >
            <Suspense fallback={null}>
              <Airplane />
            </Suspense>
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
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4} />
        </Canvas>
      </div>
    </section>
  );
}
