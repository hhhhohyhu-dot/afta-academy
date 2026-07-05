"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';

  const toggleLang = () => {
    setLang(isAr ? 'en' : 'ar');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-black text-xl tracking-wider">
          <span className="text-orange-500">AFTA</span> ACADEMY
        </Link>

        {/* Desktop Navigation - تم إضافة items-center و gap محسّن */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8" dir={isAr ? "rtl" : "ltr"}>
          <Link href="/" className="text-sm font-semibold text-slate-200 hover:text-orange-500 transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <a href="#contact" className="text-sm font-semibold text-slate-200 hover:text-orange-500 transition-colors">
            {isAr ? "اتصل بنا" : "Contact"}
          </a>
          
          {/* زر اللغة - تم التأكد من الـ Flexbox هنا باش ما يدخلش فالنصوص */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-sm font-bold bg-slate-800 text-slate-200 px-4 py-2 rounded-xl hover:bg-slate-700 transition-all border border-slate-700 whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {isAr ? "English" : "العربية"}
          </button>

          {/* Register Button */}
          <Link 
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            {isAr ? "سجل الآن" : "Register Now"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-200 hover:text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-6 py-6 flex flex-col gap-4" dir={isAr ? "rtl" : "ltr"}>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-200 p-2">
                {isAr ? "الرئيسية" : "Home"}
              </Link>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-200 p-2">
                {isAr ? "اتصل بنا" : "Contact"}
              </a>
              <button onClick={() => { toggleLang(); setIsOpen(false); }} className="text-left text-lg font-bold text-orange-500 p-2">
                {isAr ? "English" : "العربية"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}