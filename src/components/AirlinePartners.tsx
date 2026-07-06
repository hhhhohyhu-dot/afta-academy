/** @jsxImportSource react */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AirlinePartnersProps {
  lang: "en" | "ar";
}

// هنا قادينا الصيغ على حساب التصاور لي عندك فالمجلد بالضبط
const airlines = [
  { name: "Royal Air Maroc", logo: "/images/ram.webp" },
  { name: "Air Arabia", logo: "/images/airarabia.jpg" },
  { name: "Emirates", logo: "/images/emirates.jpg" },
  { name: "Ryanair", logo: "/images/ryanair.jpg" },
  { name: "Qatar Airways", logo: "/images/qatar.jpg" },
  { name: "Turkish Airlines", logo: "/images/turkish.jpg" },
];

export default function AirlinePartners({ lang }: AirlinePartnersProps) {
  const t = {
    title:
      lang === "ar"
        ? "شركات في القطاع الجوي"
        : "Airline Industry Partners",

    desc:
      lang === "ar"
        ? "نفتح لكم أبواب المستقبل للعمل مع كبرى الشركات العالمية فور تخرجكم من أكاديميتنا."
        : "We open the doors to the future for you to work with major global companies upon your graduation from our academy.",
  };

  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {t.title}
        </h2>

        <p className="text-slate-600 text-lg">{t.desc}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...airlines, ...airlines].map((airline, index) => (
            <div
              key={`${airline.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={airline.logo}
                alt={airline.name}
                width={180}
                height={90}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" // زدت mix-blend-multiply باش الخلفية البيضاء ديال jpg تندمج مع الخلفية ديال الموقع
                sizes="(max-width:768px) 128px, 180px"
                unoptimized
                priority={index < 4}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}