/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';

// استيراد المكونات (تم الحفاظ عليها كما هي)
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedStatistics from "@/components/AnimatedStatistics";
import JobBenefits from "@/components/JobBenefits";
import AboutAcademy from "@/components/AboutAcademy";
import AdmissionInfo from "@/components/AdmissionInfo";
import Programs from "@/components/Programs";
import TrainingJourney from "@/components/TrainingJourney";
import CampusLife from "@/components/CampusLife";
import AirlinePartners from "@/components/AirlinePartners";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// تعريف نوع اللغة
type Language = 'en' | 'ar';

export default function Home() {
  const [lang, setLang] = useState<Language>('ar'); 

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} />
      
      {/* القسم الرئيسي (Hero + Stats) */}
      <Hero lang={lang} />
      <AnimatedStatistics lang={lang} />
      
      {/* قسم المزايا والتعريف */}
      <JobBenefits lang={lang} /> 
      <AboutAcademy lang={lang} />
      
      {/* قسم البرامج والتدريب */}
      <Programs lang={lang} />
      <TrainingJourney lang={lang} />
      <AdmissionInfo lang={lang} />
      <CampusLife lang={lang} />
      
      {/* الشركاء والمعرض */}
      <AirlinePartners lang={lang} />
      <Gallery lang={lang} />
      
      {/* التذييل وتواصل */}
      <CTA lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}