"use client";
import React from 'react';

interface AboutAcademyProps {
  lang: 'en' | 'ar';
}

export default function AboutAcademy({ lang }: AboutAcademyProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* العنوان الرئيسي */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
            {lang === 'ar' ? 'عن الأكاديمية' : 'About the Academy'}
          </h2>
          
          {/* خط ليموني تزييني تحت العنوان للمسة احترافية */}
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          
          {/* فقرة تعريفية قصيرة تعمر المساحة */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            {lang === 'ar' 
              ? 'تعلم اليوم، لتقُد غداً. نلتزم بتقديم أعلى معايير التدريب في مجالات الطيران والضيافة لتأهيلك لمستقبل مهني واعد.' 
              : 'Learn Today, Lead Tomorrow. We are committed to providing the highest standards of training in aviation and hospitality to prepare you for a promising career.'}
          </p>

        </div>
      </div>
    </section>
  );
}