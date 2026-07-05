"use client";
import React from 'react'; // إضافة هذا السطر ضرورية لحل مشكلة JSX

interface FeatureProps {
  lang: 'en' | 'ar';
}

export default function Features({ lang }: FeatureProps) {
  const content = [
    { 
      img: "/images/aviation.jpg",
      title: lang === 'en' ? "Registration" : "شروط التسجيل", 
      desc: lang === 'en' ? "Ages 17-29. Bac/Niveau Bac required. Height: 1.57m (F) / 1.60m (M) for Flight Attendants." : "العمر: 17-29 سنة. المستوى: بكالوريا/مستوى بكالوريا. الطول (مضيف طيران): 1.57م (إناث) / 1.60م (ذكور)."
    },
    { 
      img: "/images/classroom.jpg", 
      title: lang === 'en' ? "Training" : "التكوين والمصاريف", 
      desc: lang === 'en' ? "2-year program. Fees: 3000-4000 MAD enrollment. Monthly: 1700-2200 MAD." : "تكوين عامان. التسجيل: 3000-4000 درهم. شهرياً: 1700-2200 درهم."
    },
    { 
      img: "/images/i2.jpg", 
      title: lang === 'en' ? "Career" : "المسار والمنح", 
      desc: lang === 'en' ? "90% placement rate. 8000 MAD scholarship for Bachelor's degree holders." : "نسبة توظيف 90%. منحة 8000 درهم لحاملي البكالوريوس."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8">
          {content.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-4 gap-6 items-center border-b border-gray-100 pb-8 ${
                lang === 'ar' ? 'lg:grid-flow-col-reverse' : 'lg:grid-flow-col'
              }`}
            >
              <div className="lg:col-span-3">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="lg:col-span-1 text-center lg:text-start p-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}