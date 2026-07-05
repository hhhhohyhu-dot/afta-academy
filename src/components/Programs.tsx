/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

// إضافة الـ Interface لتجنب أخطاء TypeScript
interface ProgramsProps {
  lang: 'en' | 'ar';
}

export default function Programs({ lang }: ProgramsProps) {
  const programs = [
    {
      title: lang === 'ar' ? 'الضيافة الجوية (Cabin Crew)' : 'Cabin Crew',
      duration: lang === 'ar' ? '18 شهراً' : '18 Months',
      description: lang === 'ar' ? 'تكوين متخصص يشمل السلامة الجوية، الإسعافات الأولية، وتقنيات الخدمة المتميزة على متن الطائرة.' : 'Specialized training covering air safety, first aid, and premium cabin service techniques.'
    },
    {
      title: lang === 'ar' ? 'وكيل خدمات المطارات (Ground Handling)' : 'Ground Handling',
      duration: lang === 'ar' ? '6 أشهر' : '6 Months',
      description: lang === 'ar' ? 'تأهيل شامل لإدارة عمليات المطار، التعامل مع المسافرين، ومعالجة الأمتعة وفق المعايير الدولية.' : 'Comprehensive training for airport operations, passenger handling, and baggage processing per international standards.'
    },
    {
      title: lang === 'ar' ? 'نظم الحجز (Amadeus System)' : 'Amadeus System',
      duration: lang === 'ar' ? '3 أشهر' : '3 Months',
      description: lang === 'ar' ? 'تدريب تقني متقدم على نظام أماديوس العالمي لإصدار التذاكر وإدارة حجوزات الطيران.' : 'Advanced technical training on the global Amadeus system for ticketing and flight booking management.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center text-slate-900">
          {lang === 'ar' ? 'برامجنا التكوينية المعتمدة' : 'Our Accredited Programs'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{prog.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{prog.description}</p>
                <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full font-bold text-sm mb-6">
                  {prog.duration}
                </div>
              </div>
              
              <a 
                href="/register" 
                className="w-full text-center bg-slate-900 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all"
              >
                {lang === 'ar' ? 'سجل الآن' : 'Register Now'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}