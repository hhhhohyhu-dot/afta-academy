/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  lang: 'en' | 'ar';
}

export default function FAQ({ lang }: FAQProps) {
  const isAr = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // لائحة الأسئلة والأجوبة الخاصة بالأكاديمية باللغتين
  const faqData = [
    {
      q: isAr ? "ما هي التخصصات المتاحة في الأكاديمية؟" : "What programs are available at the academy?",
      a: isAr 
        ? "نوفر تخصصات احترافية في القطاع الجوي والفندقي: وكيل سفر وطيران (Aviation & Travel Agent) والضيافة الفندقية (Hospitality Management)."
        : "We provide professional programs in the aviation and hospitality sectors: Aviation & Travel Agent, and Hospitality Management."
    },
    {
      q: isAr ? "كم هي مدة الدراسة والتكوين؟" : "How long is the training duration?",
      a: isAr 
        ? "تتراوح مدة التكوين بين سنة إلى سنتين حسب البرنامج المختار، وتتضمن دروساً نظرية وتطبيقية بالإضافة إلى فترات تدريبية (Internships) داخل كبرى الشركات."
        : "The training duration ranges from 1 to 2 years depending on the selected program, including theoretical and practical classes, as well as internships within major companies."
    },
    {
      q: isAr ? "هل توجد تسهيلات في أداء مصاريف التكوين؟" : "Are there payment facilities available?",
      a: isAr 
        ? "نعم، الأكاديمية توفر تسهيلات مرنة ومريحة في الأداء عبر أقساط شهرية تلائم ميزانية كل طالب لضمان متابعة الدراسة بكل أريحية."
        : "Yes, the academy provides flexible and convenient payment options through monthly installments tailored to each student's budget to ensure smooth learning."
    },
    {
      q: isAr ? "ما هي الآفاق المهنية بعد التخرج؟" : "What are the career prospects after graduation?",
      a: isAr 
        ? "نحن نربط طلبتنا بشبكة من الشركاء في قطاع الطيران والسياحة، مما يفتح لهم فرص العمل كوكلاء مطارات، مضيفين ومضيفات طيران، أو في إدارة الفنادق والوكالات العالمية."
        : "We connect our students with a network of partners in aviation and tourism, opening careers as airport agents, cabin crew (flight attendants), or in international hotel and agency management."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
          >
            {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </motion.h2>
          <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* قائمة الأسئلة */}
        <div className="space-y-4" dir={isAr ? "rtl" : "ltr"}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                {/* زر السؤال */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-right flex justify-between items-center gap-4 text-slate-900 font-bold text-lg md:text-xl transition-all"
                  style={{ textAlign: isAr ? 'right' : 'left' }}
                >
                  <span className={isOpen ? "text-blue-600" : "text-slate-900"}>
                    {item.q}
                  </span>
                  
                  {/* أيقونة السهم المتحرك */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-200/60 text-slate-600'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* جواب السؤال بالأنيميشن */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-base md:text-lg leading-relaxed border-t border-slate-100 bg-white">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}