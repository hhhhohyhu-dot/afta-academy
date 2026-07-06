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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="AFTA Academy"
            width={220}
            height={80}
            priority
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-8"
          dir={isAr ? "rtl" : "ltr"}
        >
          <Link
            href="/"
            className="text-white hover:text-orange-500 font-semibold transition"
          >
            {isAr ? "الرئيسية" : "Home"}
          </Link>

          <Link
            href="/requirements"
            className="text-white hover:text-orange-500 font-semibold transition"
          >
            {isAr ? "شروط التسجيل" : "Requirements"}
          </Link>

          <a
            href="#contact"
            className="text-white hover:text-orange-500 font-semibold transition"
          >
            {isAr ? "اتصل بنا" : "Contact"}
          </a>

          <button
            onClick={toggleLang}
            className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition"
          >
            {isAr ? "English" : "العربية"}
          </button>

          <Link
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            {isAr ? "سجل الآن" : "Register Now"}
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
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
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div
              className="flex flex-col gap-4 p-6"
              dir={isAr ? "rtl" : "ltr"}
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                {isAr ? "الرئيسية" : "Home"}
              </Link>

              <Link
                href="/requirements"
                onClick={() => setIsOpen(false)}
              >
                {isAr ? "شروط التسجيل" : "Requirements"}
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
              >
                {isAr ? "سجل الآن" : "Register Now"}
              </Link>

              <button
                onClick={() => {
                  toggleLang();
                  setIsOpen(false);
                }}
                className="text-orange-500 text-left"
              >
                {isAr ? "English" : "العربية"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}