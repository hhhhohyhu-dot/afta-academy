/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // هادي غير محاكاة (Simulation) للـ Login باش نبينو الأنيميشن
    setTimeout(() => {
      // من بعد غنوجهوه لصفحة الطالب
      window.location.href = "/student-portal";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6" dir="rtl">
      
      {/* تأثيرات الإضاءة فـ الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-black text-slate-800 tracking-tight mb-2">
            AFTA <span className="text-orange-500">Academy</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-700">تسجيل الدخول للطالب</h1>
          <p className="text-slate-500 text-sm mt-1">أدخل بياناتك للولوج إلى البوابة الخاصة بك</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
            <input 
              required 
              type="email" 
              placeholder="student@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-left" 
              dir="ltr"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-slate-700">كلمة المرور</label>
              <a href="#" className="text-xs font-medium text-blue-600 hover:underline">نسيت كلمة المرور؟</a>
            </div>
            <input 
              required 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-left" 
              dir="ltr"
            />
          </div>

          <button 
            disabled={status === 'loading'}
            type="submit" 
            className="w-full py-3.5 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all flex justify-center items-center"
          >
            {status === 'loading' ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "دخول"}
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          ليس لديك حساب؟ <Link href="/register" className="font-bold text-orange-500 hover:underline">سجل الآن</Link>
        </div>
      </motion.div>
    </div>
  );
}