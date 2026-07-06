/** @jsxImportSource react */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AirlinePartnersProps {
  lang: "en" | "ar";
}

// هنا فين كان المشكل: بدلنا الروابط القدام بالجداد
const airlines = [
  { name: "Partner 1", logo: "/images/1.jpg" },
  { name: "Partner 2", logo: "/images/2.jpg" },
  { name: "Partner 3", logo: "/images/3.jpg" },
  { name: "Partner 4", logo: "/images/4.jpg" },
  { name: "Partner 5", logo: "/images/5.jpg" },
  { name: "Partner 6", logo: "/images/6.jpg" },
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
          className="flex items-center gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...airlines, ...airlines].map((airline, index) => (
            <div
              key={`${airline.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={airline.logo}
                alt={airline.name}
                width={160}
                height={80}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-500 rounded-lg"
                sizes="(max-width:768px) 128px, 160px"
                unoptimized
                priority={index < 3}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}