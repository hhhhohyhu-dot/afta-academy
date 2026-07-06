/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialsProps {
  lang: 'en' | 'ar';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isAr = lang === 'ar';

  // معلومات الخريجين باللغتين العربية والإنجليزية
  const testimonialsData = [
    {
      name: isAr ? "ياسين بنسعيد" : "Yassine Bensaid",
      role: isAr ? "وكيل عمليات الطيران - الخطوط الملكية المغربية" : "Flight Operations Agent - Royal Air Maroc",
      quote: isAr 
        ? "بفضل التكوين الاحترافي في أكاديمية AFTA، تمكنت من تحقيق حلمي والولوج إلى سوق الشغل بسرعة. الأساتذة كانوا في المستوى والدراسة كانت تطبيقية وعملية 100%."
        : "Thanks to the professional training at AFTA Academy, I was able to achieve my dream and enter the job market quickly. The instructors were excellent and the training was 100% practical.",
      initials: "YB",
      color: "bg-blue-500"
    },
    {
      name: isAr ? "سارة العلمي" : "Sarah Alami",
      role: isAr ? "مضيفة طيران - طيران العربية" : "Cabin Crew - Air Arabia",
      quote: isAr 
        ? "تجربتي في الأكاديمية كانت نقطة تحول في حياتي. الدعم اللي لقيناه من الإدارة وتوجيهات الخبراء هما اللي خلاني ندوز مقابلات العمل بكل ثقة ونجاح."
        : "My experience at the academy was a turning point in my life. The support from the management and expert guidance gave me the confidence to pass my job interviews successfully.",
      initials: "SA",
      color: "bg-orange-500"
    },
    {
      name: isAr ? "مهدي التازي" : "Mehdi Tazi",
      role: isAr ? "مسؤول استقبال - فندق 5 نجوم" : "Front Desk Manager - 5 Star Hotel",
      quote: isAr 
        ? "تخصص الضيافة الفندقية في AFTA عطاني كاع المهارات اللي كنحتاجها باش نتميز في خدمتي. اللغات، التواصل، وبروتوكول الاستقبال.. كلشي كان ممتاز."
        : "The hospitality management program at AFTA gave me all the skills I needed to excel in my job. Languages, communication, and reception protocol... everything was perfect.",
      initials: "MT",
      color: "bg-slate-700"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* تأثيرات الإضاءة في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* العناوين */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-3 block"
          >
            {isAr ? "قصص نجاح" : "Success Stories"}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            {isAr ? "ماذا يقول خريجونا؟" : "What Our Graduates Say"}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* البطاقات (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir={isAr ? "rtl" : "ltr"}>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors relative group flex flex-col h-full"
            >
              {/* أيقونة الاقتباس */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* نص الرأي */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* معلومات الشخص */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-700/50 pt-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}