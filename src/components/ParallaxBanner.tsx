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
  
  // هاد الهوك كيتبع السكرول ديال هاد القسم بالضبط
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // هنا كنقولو للصورة تحرك من -20% لـ 20% باش تعطينا تأثير Parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center">
      
      {/* خلفية الصورة المتحركة */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[140%] -z-10"
        style={{ 
          y,
          // استعملنا تصويرة من المجلد ديالك، تقدر تبدلها بـ 2.jpg ولا أي تصويرة عندك فيها جودة طالعة
          backgroundImage: "url('/images/1.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* طبقة شفافة كحلة (Overlay) باش يبان النص بوضوح وما يتخالطش مع الصورة */}
      <div className="absolute inset-0 bg-slate-900/65 -z-10" />

      {/* المحتوى النصي */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          {isAr ? "مستقبلك في قطاع الطيران يبدأ من هنا" : "Your Future in Aviation Starts Here"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 mb-8"
        >
          {isAr 
            ? "انضم إلى نخبة المتدربين في أكاديمية AFTA وانطلق نحو العالمية بثقة واحترافية." 
            : "Join the elite trainees at AFTA Academy and go global with confidence and professionalism."}
        </motion.p>
      </div>
    </section>
  );
}