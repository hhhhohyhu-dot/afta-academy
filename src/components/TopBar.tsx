/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium py-2.5 px-4 relative z-50 flex justify-center items-center shadow-md"
        >
          <div className="flex items-center gap-2 text-center px-6">
            <span className="animate-pulse text-lg">🎉</span>
            <p className="tracking-wide">
              <span className="font-bold">التسجيل مفتوح الآن للموسم الدراسي 2026/2027</span> — الأماكن محدودة بادر بالتسجيل! 
              <span className="hidden md:inline ml-2 text-orange-200">| Registration is now open - Limited seats!</span>
            </p>
            <span className="animate-pulse text-lg hidden md:inline">✈️</span>
          </div>
          
          {/* زر الإغلاق */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:text-slate-200 hover:rotate-90 transition-all duration-300 p-1"
            aria-label="Close announcement"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}