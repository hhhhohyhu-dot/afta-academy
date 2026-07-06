/** @jsxImportSource react */
"use client";
import React from 'react';

interface FooterProps {
  lang: 'en' | 'ar';
}

export default function Footer({ lang }: FooterProps) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-gray-50 pt-8 pb-8 border-t border-gray-200" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* حقوق النشر فقط (تم حذف قسم التواصل لتجنب التكرار) */}
        <div className="text-center flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-blue-900 tracking-tighter">AFTA</span>
            <span className="text-xl font-medium text-orange-500">ACADEMY</span>
          </div>

          <p className="text-gray-500 font-medium text-sm md:text-base">
            {isAr 
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()}` 
              : `All rights reserved © ${new Date().getFullYear()}`}
          </p>

        </div>
        
      </div>
    </footer>
  );
}