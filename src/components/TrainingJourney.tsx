/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TrainingJourneyProps {
  lang: 'en' | 'ar';
}

export default function TrainingJourney({ lang }: TrainingJourneyProps) {
  const steps = [
    { 
      title: lang === 'ar' ? "تقديم الطلب" : "Application", 
      desc: lang === 'ar' ? "تقديم الطلب وملء استمارة التسجيل القبلي" : "Submit your application and fill out the pre-registration form." 
    },
    { 
      title: lang === 'ar' ? "المقابلة" : "Interview", 
      desc: lang === 'ar' ? "إجراء مقابلات العمل واختبارات المستوى" : "Conduct job interviews and level assessment tests." 
    },
    { 
      title: lang === 'ar' ? "التكوين" : "Training", 
      desc: lang === 'ar' ? "تكوين نظري وتطبيقي عالي الجودة" : "High-quality theoretical and practical training." 
    },
    { 
      title: lang === 'ar' ? "التخرج" : "Graduation", 
      desc: lang === 'ar' ? "الحصول على شهادة معتمدة من الدولة" : "Obtain a state-accredited certificate." 
    },
    { 
      title: lang === 'ar' ? "التوظيف" : "Employment", 
      desc: lang === 'ar' ? "دعم متميز للوصول إلى فرص الشغل" : "Exceptional support to reach job opportunities." 
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          {lang === 'ar' ? "رحلة التكوين" : "Training Journey"}
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-orange-500/50 transition-all"
            >
              <div className="text-orange-500 font-black text-3xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}