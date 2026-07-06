/** @jsxImportSource react */
"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBannerProps {
  lang: 'en' | 'ar';
}

export default function ParallaxBanner({ lang }: ParallaxBannerProps) {
  const isAr = lang === 'ar';
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    // زدنا bg-slate-900 كخلفية احتياطية باش النص ديما يبقى مقروء
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center bg-slate-900">
      
      {/* الصورة - درنا z-0 باش تبقى لداخل وما تخبعش مورا الموقع */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[140%] z-0"
        style={{ 
          y,
          backgroundImage: "url('/images/1.jpg')", // تأكد أن هاد التصويرة كاينا عندك فـ public/images
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* الطبقة المظلمة - درنا z-10 باش تغمق الصورة وتخلي النص يبان */}
      <div className="absolute inset-0 bg-slate-900/70 z-10" />

      {/* المحتوى النصي - درنا z-20 باش يكون هو الفوقاني كاع */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg"
        >
          {isAr ? "مستقبلك في قطاع الطيران يبدأ من هنا" : "Your Future in Aviation Starts Here"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 mb-8 drop-shadow-md"
        >
          {isAr 
            ? "انضم إلى نخبة المتدربين في أكاديمية AFTA وانطلق نحو العالمية بثقة واحترافية." 
            : "Join the elite trainees at AFTA Academy and go global with confidence and professionalism."}
        </motion.p>
      </div>
    </section>
  );
}