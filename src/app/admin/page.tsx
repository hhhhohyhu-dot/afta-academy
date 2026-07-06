/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminDashboard() {
  // هادو بيانات تجريبية (Mock Data) باش نبيينو للشاري كيفاش غيخدم الموقع
  const [students] = useState([
    { id: 1, name: "ياسين العمراني", phone: "0600112233", email: "yassine@email.com", program: "مضيف طيران", date: "2026-07-06" },
    { id: 2, name: "سارة بنسعيد", phone: "0611223344", email: "sarah@email.com", program: "الضيافة الفندقية", date: "2026-07-05" },
    { id: 3, name: "مهدي التازي", phone: "0622334455", email: "mehdi@email.com", program: "وكيل أسفار", date: "2026-07-04" },
    { id: 4, name: "فاطمة الزهراء", phone: "0633445566", email: "fatima@email.com", program: "مضيف طيران", date: "2026-07-04" },
  ]);

  // هاد الدالة هي السحر لي كيحول البيانات لملف إكسيل (CSV)
  const downloadExcel = () => {
    // العناوين ديال الجدول
    const headers = ["الرقم", "الاسم الكامل", "رقم الهاتف", "البريد الإلكتروني", "التخصص المطلوب", "تاريخ التسجيل"];
    
    // تحويل البيانات لصفوف
    const rows = students.map(s => [s.id, s.name, s.phone, s.email, s.program, s.date]);
    
    // تجميع البيانات مع دعم الحروف العربية (\uFEFF) باش مايخرجوش مخربقين فإكسيل
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    // إنشاء الملف وتحميله
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "AFTA_Students_List.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12" dir="rtl">
      
      {/* رأس الصفحة (Header) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">لوحة التحكم الإدارية</h1>
          <p className="text-slate-500 mt-2">إدارة تسجيلات الطلبة وتصدير البيانات</p>
        </div>
        
        <div className="flex gap-4">
          <Link href="/" className="px-6 py-2.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
            العودة للموقع
          </Link>
          
          {/* بوطونة التحميل لي كتقنع الشاري */}
          <button 
            onClick={downloadExcel}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-green-600/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            تصدير إلى Excel
          </button>
        </div>
      </div>

      {/* جدول البيانات (Data Table) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 text-slate-600 font-semibold">#</th>
                <th className="p-4 text-slate-600 font-semibold">الاسم الكامل</th>
                <th className="p-4 text-slate-600 font-semibold">رقم الهاتف</th>
                <th className="p-4 text-slate-600 font-semibold">البريد الإلكتروني</th>
                <th className="p-4 text-slate-600 font-semibold">التخصص المطلوب</th>
                <th className="p-4 text-slate-600 font-semibold">تاريخ التسجيل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-slate-500">{index + 1}</td>
                  <td className="p-4 font-medium text-slate-900">{student.name}</td>
                  <td className="p-4 text-slate-600" dir="ltr">{student.phone}</td>
                  <td className="p-4 text-slate-600">{student.email}</td>
                  <td className="p-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      {student.program}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 text-sm">{student.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      
    </div>
  );
}