/** @jsxImportSource react */
"use client";
import React from 'react';

interface AdmissionInfoProps {
  lang: 'en' | 'ar';
}

export default function AdmissionInfo({ lang }: AdmissionInfoProps) {
  // الترجمة الديناميكية للنصوص
  const t = {
    title: lang === 'ar' ? "شروط التسجيل والمصاريف" : "Admission Requirements & Fees",
    conditions: lang === 'ar' ? "شروط الولوج:" : "Entry Requirements:",
    age: lang === 'ar' ? "العمر: بين 17 و 29 سنة" : "Age: 17 to 29 years old",
    level: lang === 'ar' ? "المستوى: Niveau Bac أو Bac" : "Education: High school level (Bac or Niveau Bac)",
    height: lang === 'ar' ? "الطول: 1.57م (إناث) و 1.60م (ذكور)" : "Height: 1.57m (Female) / 1.60m (Male)",
    fees: lang === 'ar' ? "المصاريف:" : "Fees:",
    reg: lang === 'ar' ? "التسجيل والتأمين:" : "Registration & Insurance:",
    cabin: lang === 'ar' ? "مضيف طيران:" : "Cabin Crew:",
    agent: lang === 'ar' ? "وكلاء الأسفار:" : "Travel Agents:",
    perMonth: lang === 'ar' ? "درهم/شهرياً" : "MAD/month"
  };

  return (
    <section className="py-24 bg-white w-full" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-50 p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 inline-block border-b-4 border-blue-600 pb-4">
              {t.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* قسم شروط الولوج */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
                {t.conditions}
              </h3>
              <ul className="space-y-6 text-xl text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span>{t.age}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span>{t.level}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></span>
                  <span>{t.height}</span>
                </li>
              </ul>
            </div>

            {/* قسم المصاريف */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
                {t.fees}
              </h3>
              <ul className="space-y-6 text-xl text-slate-700">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-2">
                  <span className="font-medium">{t.reg}</span>
                  <span className="font-black text-blue-700 bg-blue-50 px-4 py-1 rounded-lg">3000 - 4000 MAD</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-2">
                  <span className="font-medium">{t.cabin}</span>
                  <span className="font-black text-slate-900">2200 {t.perMonth}</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="font-medium">{t.agent}</span>
                  <span className="font-black text-slate-900">1700 {t.perMonth}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}