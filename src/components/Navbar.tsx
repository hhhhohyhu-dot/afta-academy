"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === "ar";

  const toggleLang = () => {
    setLang(isAr ? "en" : "ar");
  };

  // وظيفة باش يرجع للـ Top قبل ما يسد الموبايل مينيو
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center bg-white/95 hover:bg-white px-4 py-2 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300"
        >
          <Image
            src="/images/logo.jpg"
            alt="AFTA Academy"
            width={260}
            height={90}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" dir={isAr ? "rtl" : "ltr"}>
          <Link href="/" className="text-white hover:text-orange-500 font-semibold transition">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <Link href="/requirements" className="text-white hover:text-orange-500 font-semibold transition">
            {isAr ? "شروط التسجيل" : "Requirements"}
          </Link>
          
          {/* هاد الرابط دابا خدام لـ Contact Section */}
          <Link href="/#contact" className="text-white hover:text-orange-500 font-semibold transition">
            {isAr ? "اتصل بنا" : "Contact"}
          </Link>

          <button onClick={toggleLang} className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/80 backdrop-blur-md text-white hover:bg-slate-700 transition">
            {isAr ? "English" : "العربية"}
          </button>

          <Link href="/register" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:-translate-y-0.5">
            {isAr ? "سجل الآن" : "Register Now"}
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-orange-500 transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6" dir={isAr ? "rtl" : "ltr"}>
              <Link href="/" onClick={closeMenu} className="text-white hover:text-orange-500 font-medium transition-colors">
                {isAr ? "الرئيسية" : "Home"}
              </Link>
              <Link href="/requirements" onClick={closeMenu} className="text-white hover:text-orange-500 font-medium transition-colors">
                {isAr ? "شروط التسجيل" : "Requirements"}
              </Link>
              {/* الاتصال فالموبايل */}
              <Link href="/#contact" onClick={closeMenu} className="text-white hover:text-orange-500 font-medium transition-colors">
                {isAr ? "اتصل بنا" : "Contact"}
              </Link>
              <Link href="/register" onClick={closeMenu} className="text-white hover:text-orange-500 font-medium transition-colors">
                {isAr ? "سجل الآن" : "Register Now"}
              </Link>
              <button onClick={() => { toggleLang(); closeMenu(); }} className="text-orange-500 text-left font-medium mt-2">
                {isAr ? "English" : "العربية"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}