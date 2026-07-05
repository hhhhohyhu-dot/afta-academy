/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from "framer-motion";

// استخدام تعريف النوع مباشرة كما في المكونات السابقة لضمان التوافق
interface ContactProps {
  lang: 'en' | 'ar';
}

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
          >
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </motion.h2>
          <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* بطاقات الاتصال */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
          
          {/* بطاقة البريد الإلكتروني */}
          <motion.a 
            href="mailto:contact@afta-academy.com"
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{isAr ? 'البريد الإلكتروني' : 'Email Us'}</h3>
            <p className="text-slate-500 text-sm font-medium">contact@afta-academy.com</p>
          </motion.a>

          {/* بطاقة الواتساب */}
          <motion.a 
            href="https://wa.me/2126XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{isAr ? 'واتساب' : 'WhatsApp'}</h3>
            <p className="text-slate-500 text-sm font-medium" dir="ltr">+212 6 XX-XXXXXX</p>
          </motion.a>

          {/* بطاقة الانستغرام */}
          <motion.a 
            href="https://instagram.com/afta_academy" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-purple-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{isAr ? 'انستغرام' : 'Instagram'}</h3>
            <p className="text-slate-500 text-sm font-medium">@afta_academy</p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}