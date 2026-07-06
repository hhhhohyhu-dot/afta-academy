"use client";
import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RequirementsPage() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const isAr = lang === "ar";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar lang={lang} setLang={setLang} />

      {/* المحتوى الرئيسي */}
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full" dir={isAr ? "rtl" : "ltr"}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            {isAr ? "شروط التسجيل" : "Admission Requirements"}
          </h1>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100"
        >
          <ul className="space-y-6 text-slate-700 text-lg">
            {/* الشرط 1 */}
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
              </span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{isAr ? "المستوى الدراسي" : "Education Level"}</h3>
                <p className="text-slate-600 text-base">{isAr ? "شهادة الباكالوريا أو ما يعادلها فما فوق." : "Baccalaureate degree or equivalent and above."}</p>
              </div>
            </li>

            {/* الشرط 2 */}
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{isAr ? "العمر" : "Age Requirement"}</h3>
                <p className="text-slate-600 text-base">{isAr ? "أن يتراوح عمر المتقدم بين 18 و 30 سنة." : "Applicants must be between 18 and 30 years old."}</p>
              </div>
            </li>

            {/* الشرط 3 (الصحة والمظهر - حيدنا اللغات لي كان قبل منو) */}
            <li className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{isAr ? "الصحة والمظهر" : "Health & Appearance"}</h3>
                <p className="text-slate-600 text-base">{isAr ? "التمتع بصحة جيدة وبنية بدنية متناسقة مع مظهر لائق." : "Good health, proportional physical build, and professional appearance."}</p>
              </div>
            </li>
          </ul>

          {/* زر التسجيل */}
          <div className="mt-12 text-center">
            <Link 
              href="/register" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1"
            >
              {isAr ? "استوفي الشروط؟ سجل الآن" : "Meet the criteria? Apply Now"}
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer lang={lang} />
    </main>
  );
}