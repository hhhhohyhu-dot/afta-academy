"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RegisterPage() {
  // الحالات (States)
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتسجيلك!');
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang="en" setLang={() => {}} />

      {/* الحاوية اللي فيها الصورة الجديدة كخلفية */}
      <div className="relative min-h-[80vh] flex items-center justify-center py-12 px-4 overflow-hidden pt-32">
        
        {/* استخدام Next.js Image */}
        <Image 
          src="/images/1.jpg"
          alt="AFTA Academy Registration Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="z-0"
        />

        {/* طبقة شفافة باش يبان الفورم واضح فوق الصورة */}
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>

        {/* النموذج (Form) */}
        <div className="relative z-20 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)] w-full max-w-lg border border-gray-100 mt-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            نموذج التسجيل
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">الاسم الكامل</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">رقم الهاتف</label>
              <input type="tel" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow text-left" dir="ltr" placeholder="+212 6..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">العمر</label>
                <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">المستوى الدراسي</label>
                <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow">
                  <option value="" disabled>اختر...</option>
                  <option value="bac">باكالوريا</option>
                  <option value="bac_plus">دبلوم/إجازة</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">البرنامج المختار</label>
              <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow">
                <option value="" disabled>اختر البرنامج...</option>
                <option value="aviation">وكيل سفر وطيران</option>
                <option value="hospitality">ضيافة فندقية</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4">
              تأكيد التسجيل
            </button>
          </form>
        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}