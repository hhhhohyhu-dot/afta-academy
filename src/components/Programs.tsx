/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center text-slate-900 dark:text-white">
          {lang === 'ar' ? 'برامجنا التكوينية المعتمدة' : 'Our Accredited Programs'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02} 
                transitionSpeed={2500} 
                className="h-full"
              >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col justify-between h-full transition-colors duration-300">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{prog.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{prog.description}</p>
                    <div className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full font-bold text-sm mb-6">
                      {prog.duration}
                    </div>
                  </div>
                  
                  <a 
                    href="/register" 
                    className="w-full text-center bg-slate-900 dark:bg-slate-700 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    {lang === 'ar' ? 'سجل الآن' : 'Register Now'}
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}