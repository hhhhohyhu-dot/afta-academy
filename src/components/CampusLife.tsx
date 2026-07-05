/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

// إضافة الـ Interface لتحديد نوع الـ Props
interface CampusLifeProps {
  lang: 'en' | 'ar';
}

export default function CampusLife({ lang }: CampusLifeProps) {
  // الترجمة للنصوص
  const t = {
    title: lang === 'ar' ? 'الحياة داخل الأكاديمية' : 'Academy Life',
    desc: lang === 'ar' ? 'تجربة تدريبية تحاكي الواقع لضمان أفضل تكوين.' : 'Experience real-world training environments.'
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] flex items-center"
        >
          {/* خلفية الفيديو مع poster لسرعة التحميل */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/images/video-placeholder.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* طبقة العتمة مع تأثير زجاجي خفيف */}
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px] transition-all duration-700" />
          
          {/* المحتوى مع ترتيب احترافي */}
          <div className="relative z-10 p-10 md:p-16 text-white max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              {t.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-slate-200 font-medium"
            >
              {t.desc}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}