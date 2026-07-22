"use client";
import React from 'react';
import { motion } from 'framer-motion';


// هنا كنزيدو الـ lang باش المكون يعرف اللغة اللي خدامين بيها
export default function JobBenefits({ lang }: { lang: 'en' | 'ar' }) {
  
  // الترجمة ديال النصوص
  const content = {
    ar: {
      title: "مميزات مهنة",
      highlight: "وكيل سفر محترف",
      desc: "اكتشف آفاقاً جديدة، بيئة عمل دولية، وتطوراً وظيفياً مستمراً مع أفضل شركات الطيران."
    },
    en: {
      title: "Benefits of a",
      highlight: "Professional Travel Agent",
      desc: "Discover new horizons, an international work environment, and continuous career growth with top airlines."
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] flex items-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Airport Terminal Professional"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-slate-900/60" />

          <div className="relative z-10 p-10 md:p-16 text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {t.title} <br />
              <span className="text-orange-500">{t.highlight}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-medium">
              {t.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}