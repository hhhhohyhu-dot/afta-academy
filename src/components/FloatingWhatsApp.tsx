/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  // هنا حط النمرة ديال الأكاديمية (بدون +)
  const phoneNumber = "212600000000"; 
  // رسالة افتراضية ملي يبرك على الزر
  const message = "مرحباً، أود الاستفسار عن التسجيل في أكاديمية AFTA.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25d366]/50 hover:shadow-2xl hover:scale-110 transition-all duration-300 group relative"
      >
        {/* هاد اللعيبة كتبان ملي كتحط لا سوري على البوطونة */}
        <span className="absolute -top-12 right-0 bg-white text-slate-800 text-sm font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
          تواصل معنا
        </span>
        
        {/* أيقونة الواتساب (SVG) */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 0h-.004C7.164 0 0 7.164 0 16.002c0 2.81 2.215 5.922 2.215 5.922L.374 31.09l9.38-2.61s2.983 1.05 5.867 1.05c8.835 0 16-7.166 16-16.004C31.621 7.164 24.456 0 16.002 0zm0 27.027c-2.456 0-4.856-.653-6.953-1.892l-4.945 1.378 1.4-4.814a13.385 13.385 0 0 1-2.023-7.185c0-7.447 6.06-13.507 13.52-13.507s13.52 6.06 13.52 13.507c0 7.446-6.06 13.513-13.52 13.513zm7.397-9.98c-.407-.203-2.404-1.186-2.776-1.32-.37-.137-.643-.203-.912.203-.27.407-1.047 1.32-1.282 1.593-.236.27-.474.305-.88.102-.406-.205-1.716-.632-3.268-2.018-1.208-1.08-2.023-2.416-2.26-2.822-.235-.407-.025-.626.178-.83.183-.183.406-.474.61-.71.203-.238.27-.408.406-.677.135-.27.067-.508-.035-.71-.102-.205-.913-2.203-1.25-3.016-.33-.79-.667-.682-.914-.694-.236-.013-.508-.013-.778-.013-.27 0-.71.102-1.083.508-.37.406-1.42 1.39-1.42 3.386 0 1.998 1.455 3.928 1.657 4.2.203.27 2.868 4.382 6.945 6.14.972.418 1.73.668 2.322.856.974.31 1.86.266 2.556.16.783-.118 2.404-.982 2.742-1.928.337-.947.337-1.758.236-1.928-.103-.173-.37-.275-.777-.48z"/>
        </svg>
      </a>
    </motion.div>
  );
}