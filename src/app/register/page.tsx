"use client";
import React, { useState } from 'react';
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
      <div 
        className="relative min-h-[80vh] flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: "url('/images/aviation1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* طبقة شفافة باش يبان الفورم واضح فوق الصورة */}
        <div className="absolute inset-0 bg-blue-900/60"></div>

        {/* النموذج (Form) */}
        <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            نموذج التسجيل
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
              <input type="tel" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">العمر</label>
                <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">المستوى الدراسي</label>
                <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} required className="w-full px-4 py-2 border rounded-lg bg-white">
                  <option value="" disabled>اختر...</option>
                  <option value="bac">باكالوريا</option>
                  <option value="bac_plus">دبلوم/إجازة</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">البرنامج المختار</label>
              <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} required className="w-full px-4 py-2 border rounded-lg bg-white">
                <option value="" disabled>اختر البرنامج...</option>
                <option value="aviation">وكيل سفر وطيران</option>
                <option value="hospitality">ضيافة فندقية</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition">
              تأكيد التسجيل
            </button>
          </form>
        </div>
      </div>

      <Footer lang="en" />
    </main>
  );
}