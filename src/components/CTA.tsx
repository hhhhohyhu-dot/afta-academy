/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link"; // ضروري نزيدو هاد السطر

interface CTAProps {
  lang: 'en' | 'ar';
}

export default function CTA({ lang }: CTAProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden flex items-center justify-center border-t border-slate-800">
      
      {/* تأثير إضاءة خفيف في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-3 block"
        >
          {isAr ? "التحق بنا الآن" : "Take the Next Step"}
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight"
        >
          {isAr ? "ابدأ رحلتك في عالم الطيران معنا" : "Shape the Future of Global Aviation"}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          {isAr 
            ? "نحن نبحث عن الكفاءات الشغوفة للانضمام إلى فريق عملنا المتميز في أكاديمية AFTA." 
            : "Join a community of elite professionals and industry leaders at AFTA Academy. Discover open pathways for careers and advanced training."
          }
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* حولنا button لـ Link وزدنا text-center باش يبقاو مقادين في التليفون */}
          <Link 
            href="/register" 
            className="text-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-md rounded-full transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto inline-block"
          >
            {isAr ? "قدّم طلبك الآن" : "Apply Now"}
          </Link>
          
          <Link 
            href="/requirements" 
            className="text-center px-8 py-4 bg-transparent border border-slate-700 hover:border-white hover:bg-white hover:text-slate-950 text-slate-300 font-bold text-md rounded-full transition-all w-full sm:w-auto inline-block"
          >
            {isAr ? "اكتشف المزيد" : "Explore Careers"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}