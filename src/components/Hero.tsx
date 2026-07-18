/** @jsxImportSource react */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  lang: "en" | "ar";
}

// تحديث المحتوى باش يدعم الزرين بجوج باللغتين
const content = {
  ar: {
    ctaPrimary: "قدّم طلبك الآن",
    ctaSecondary: "اكتشف المزيد",
  },
  en: {
    ctaPrimary: "Apply Now",
    ctaSecondary: "Discover More",
  },
};

export default function Hero({ lang }: HeroProps) {
  const currentContent = content[lang] || content.ar;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/new-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for better contrast and premium look */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 z-10"></div>

      {/* Buttons Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4"
      >
        {/* زر قدّم طلبك الآن (Primary Button) - Amber/Gold for premium look */}
        <Link 
          href="/register" 
          className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-8 py-3 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 inline-block"
        >
          {currentContent.ctaPrimary}
        </Link>

        {/* زر اكتشف المزيد (Secondary Button) */}
        <Link 
          href="/requirements" 
          className="w-full sm:w-auto text-center bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white backdrop-blur-md font-medium text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-block"
        >
          {currentContent.ctaSecondary}
        </Link>
      </motion.div>
    </section>
  );
}