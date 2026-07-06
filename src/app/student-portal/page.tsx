/** @jsxImportSource react */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StudentPortal() {
  // بيانات افتراضية باش نعمرو الصفحة
  const student = {
    name: "ياسين العمراني",
    id: "AFTA-2026-045",
    program: "وكيل عمليات الطيران",
    status: "قيد المراجعة", // تقدر تبدلها لـ "مقبول"
    progress: 25,
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12" dir="rtl">
      
      {/* Navbar مصغر خاص بالطالب */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-slate-800">
            AFTA <span className="text-orange-500">Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-left" dir="ltr">
              <p className="text-sm font-bold text-slate-800">{student.name}</p>
              <p className="text-xs text-slate-500">{student.id}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              {student.name.charAt(0)}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900">مرحباً بك، {student.name.split(' ')[0]} 👋</h1>
          <p className="text-slate-500 mt-1">تتبع حالة تسجيلك ومعلومات مسارك التدريبي.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* كارت الحالة */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              حالة الملف
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-4 rounded-xl">
              <div className="shrink-0 relative">
                <svg className="w-16 h-16 text-slate-200" viewBox="0 0 36 36"><path className="text-slate-200" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="text-orange-500" strokeDasharray={`${student.progress}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-orange-600">{student.progress}%</div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-bold rounded-full mb-2">{student.status}</span>
                <p className="text-slate-600 text-sm">ملفك الآن قيد المراجعة من طرف الإدارة. سيتم التواصل معك قريباً لتحديد موعد المقابلة الشفوية.</p>
              </div>
            </div>
          </motion.div>

          {/* كارت المعلومات */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="col-span-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-800 mb-4">تفاصيل التسجيل</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-slate-500 font-medium">التخصص المختار</p>
                <p className="font-bold text-slate-800">{student.program}</p>
              </li>
              <li>
                <p className="text-xs text-slate-500 font-medium">رقم التسجيل</p>
                <p className="font-mono text-sm text-slate-700 bg-slate-100 px-2 py-1 rounded inline-block mt-1">{student.id}</p>
              </li>
              <li>
                <p className="text-xs text-slate-500 font-medium">تاريخ التسجيل</p>
                <p className="font-medium text-slate-800" dir="ltr">06 / 07 / 2026</p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}