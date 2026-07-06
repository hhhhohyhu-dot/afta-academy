/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  // هاد الهوك (Hook) كيحسب شحال هبطتي فالموقع
  const { scrollYProgress } = useScroll();
  
  // هاد الهوك كيعطي واحد النعومة (Spring) للحركة باش ماتجيش قاصحة
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}