/** @jsxImportSource react */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  lang: "en" | "ar";
}

const content = {
  ar: {
    cta: "اكتشف شروط التسجيل",
  },
  en: {
    cta: "Explore Admission Requirements",
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="/requirements">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
            {currentContent.cta}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}