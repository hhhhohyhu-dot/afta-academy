"use client";
import React, { useRef, useEffect } from 'react';
import { motion, animate, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
}

// تفكيك واستيراد الـ Hooks بشكل مباشر كي يتعرف عليها TypeScript
function Counter({ value, duration = 2 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(0, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [value, isInView, duration]);

  return <span ref={nodeRef}>0</span>;
}

export default function AnimatedStatistics({ lang = 'ar' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  const stats = [
    {
      id: 1,
      number: 1500,
      suffix: "+",
      labelAr: "خريج متميز",
      labelEn: "Graduates",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L11.25 15.857a.75.75 0 00.9 0l6.99-5.683M12 20.072v-4.215m0 0L3.75 10.25M12 15.857L20.25 10.25M12 3.75l7.5 4.5-7.5 4.5-7.5-4.5 7.5-4.5z" />
        </svg>
      )
    },
    {
      id: 2,
      number: 95,
      suffix: "%",
      labelAr: "نسبة التوظيف",
      labelEn: "Employment Rate",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      number: 12,
      suffix: "+",
      labelAr: "سنة من الخبرة",
      labelEn: "Years of Experience",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      number: 20,
      suffix: "+",
      labelAr: "شريك من شركات الطيران",
      labelEn: "Airline Partners",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" dir={isAr ? "rtl" : "ltr"}>
          
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-orange-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-orange-500 flex items-center justify-center mb-4 border border-slate-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              <div className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 flex items-center justify-center" dir="ltr">
                <Counter value={stat.number} />
                <span className="text-orange-500 font-extrabold ml-0.5">{stat.suffix}</span>
              </div>

              <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">
                {isAr ? stat.labelAr : stat.labelEn}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}