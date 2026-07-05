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
    title: "أكاديمية AFTA",
    subtitle: "نصنع قادة الطيران ومستقبل الملاحة الجوية بالمغرب",
    cta: "اكتشف شروط التسجيل",
  },
  en: {
    title: "AFTA Academy",
    subtitle: "Shaping the Leaders of Aviation & Flight Operations",
    cta: "Explore Admission Requirements",
  },
};

export default function Hero({ lang }: HeroProps) {
  const currentContent = content[lang] || content.ar;
  const isAr = lang === "ar";

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
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
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div
          className={`max-w-xl ${
            isAr ? "ml-auto text-right" : "mr-auto text-left"
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl"
          >
            {currentContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-2xl text-white/90 leading-relaxed drop-shadow-lg"
          >
            {currentContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <Link href="/requirements">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                {currentContent.cta}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}