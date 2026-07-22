/** @jsxImportSource react */
"use client";
import React, { useSyncExternalStore } from 'react';
import { InlineWidget } from "react-calendly";
import { motion } from 'framer-motion';

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function InterviewBooking() {
  const isMounted = useIsClient();

  if (!isMounted) return <div className="h-[700px] flex items-center justify-center">جاري تحميل نظام الحجز...</div>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-bold rounded-full text-sm mb-4">
          الخطوة الأخيرة
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
          حجز موعد المقابلة الشفوية
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          اختر اليوم والتوقيت المناسب لك لزيارة مقر أكاديمية AFTA وإجراء المقابلة مع مستشاري التوجيه.
        </p>
      </motion.div>
      
      {/* الواجهة ديال Calendly */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden h-[700px]"
      >
        <InlineWidget 
          url="https://calendly.com/anazorgan/30min" 
          styles={{ height: '100%', width: '100%' }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: 'f97316', // اللون الليموني ديال الأكاديمية
            textColor: '1e293b'
          }}
        />
      </motion.div>
    </div>
  );
}