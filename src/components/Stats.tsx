"use client";
import React from 'react';
import { motion } from "framer-motion";

interface StatsProps {
  lang: 'en' | 'ar' | 'fr';
}

export default function Stats({ lang }: StatsProps) {
  const isAr = lang === 'ar';

  return (
    // py-28 كتعطي مساحة بيضاء ملكية وفخمة باش تفصل تماماً على الفيديو
    <section className="py-28 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* الجزء العلوي: المضمون الجذاب والتصميم الفخم */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* جهة العنوان الكبير بتصميم بريميوم خطير */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-blue-600 font-extrabold tracking-widest text-xs uppercase mb-4 block bg-blue-50 px-3 py-1 rounded-full w-fit">
              {isAr ? "شراكات استراتيجية عالمية" : "Elite Aviation Pathways"}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter">
              {isAr ? (
                <>بوابتك نحو <br /><span className="text-blue-600">كبريات الشركات</span></>
              ) : (
                <>Your Gate to <br /><span className="text-blue-600">Global Skies</span></>
              )}
            </h2>
          </motion.div>

          {/* جهة المضمون التسويقي الجذاب جداً */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-8 border-l-4 border-blue-600"
          >
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-6">
              {isAr 
                ? "نحن لا نقدم مجرد تدريب، بل نصنع النخبة التي تقود ضيافة الطيران العالمي في كبريات الخطوط الجوية."
                : "We don't just train cabin crew; we sculpt the elite professionals who define luxury hospitality for the world’s leading airlines."
              }
            </p>
            <p className="text-base text-slate-600 font-light leading-loose">
              {isAr
                ? "تم تصميم برامجنا في مقصورة الطائرة بدقة لتتوافق مع معايير الجودة العالمية المعتمدة لدى شركات عملاقة مثل طيران الإمارات، القطرية، والاتحاد. نضمن لك تكويناً احترافياً يفتح لك أبواب المهنة على الصعيد الدولي فور التخرج."
                : "Our intensive cabin crew programs are rigorously aligned with the premium service and safety standards demanded by global giants like Emirates, Qatar Airways, and Etihad. Step into a career of global prestige, unparalleled travel, and world-class professionalism."
              }
            </p>
          </motion.div>

        </div>

        {/* الجزء السفلي: شبكة الإحصائيات الفخمة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-100">
          {[
            { number: "98%", label: isAr ? "نسبة التوظيف" : "Employment Rate" },
            { number: "15+", label: isAr ? "شريك عالمي" : "Airline Partners" },
            { number: "1,200+", label: isAr ? "خريج متميز" : "Elite Graduates" },
            { number: "Top #1", label: isAr ? "أكاديمية طيران" : "Training Center" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                {stat.number}
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}