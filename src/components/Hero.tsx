/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from "framer-motion";

interface HeroProps {
  lang: 'en' | 'ar';
}

// النصوص باللغتين لضمان التناسق العالمي للموقع
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
  }
};

export default function Hero({ lang }: HeroProps) {
  const currentContent = content[lang] || content.ar;
  const isAr = lang === 'ar';

  return (
    <section 
      className="relative h-[85vh] md:h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      
      {/* خلفية الفيديو المحسنة */}
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
      
      {/* Overlay متدرج فخم (مهم جداً لحل مشكلة التباين ووضوح النصوص الكبيرة) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50 z-10" />

      {/* المحتوى المركزي المتناسب هندسياً مع أبعاد الفيديو */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 mt-12">
        
        {/* العنوان الرئيسي الفخم - حجم كبير ومتناسق */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight drop-shadow-xl"
        >
          {currentContent.title}
        </motion.h1>

        {/* العنوان الفرعي - حل مشكلة الخطوط الصغيرة */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 max-w-2xl drop-shadow-md leading-relaxed"
        >
          {currentContent.subtitle}
        </motion.p>

        {/* زر تفاعلي يربط الوزن البصري للفيديو بالقسم الموالي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-black text-lg md:text-xl px-10 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
            {currentContent.cta}
          </button>
        </motion.div>

      </div>
    </section>
  );
}