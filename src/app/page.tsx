/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';

// استيراد المكونات
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedStatistics from "@/components/AnimatedStatistics";
import JobBenefits from "@/components/JobBenefits";
import AboutAcademy from "@/components/AboutAcademy";
import Programs from "@/components/Programs";
import TrainingJourney from "@/components/TrainingJourney";
import CampusLife from "@/components/CampusLife";
import dynamic from 'next/dynamic';
import AirlinePartners from "@/components/AirlinePartners";
const Interactive3DPlane = dynamic(() => import("@/components/Interactive3DPlane"), { ssr: false });
import Testimonials from "@/components/Testimonials"; // <-- زدنا آراء الخريجين
import Gallery from "@/components/Gallery";
import ParallaxBanner from "@/components/ParallaxBanner"; // <-- زدنا البانر المتحرك
import FAQ from "@/components/FAQ";
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
      <Interactive3DPlane lang={lang} />
      <TrainingJourney lang={lang} />
      <CampusLife lang={lang} />
      
      {/* الشركاء، آراء الخريجين، والمعرض */}
      <AirlinePartners lang={lang} />
      <Testimonials lang={lang} /> {/* <-- حطيناه مورا الشركاء باش يزيد الثقة */}
      <Gallery lang={lang} />
      
      {/* البانر المتحرك (Parallax) */}
      <ParallaxBanner lang={lang} /> {/* <-- حطيناه قبل الأسئلة الشائعة باش يكسر الروتين دالصفحة */}
      
      {/* قسم الأسئلة الشائعة */}
      <FAQ lang={lang} />
      
      {/* التذييل وتواصل */}
      <CTA lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}