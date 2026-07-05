"use client";
import React from 'react';

interface AboutAcademyProps {
  lang: 'en' | 'ar';
}

export default function AboutAcademy({ lang }: AboutAcademyProps) {
  return (
    <section className="py-10">
      {lang === 'ar' ? <h1>عن الأكاديمية</h1> : <h1>About the Academy</h1>}
    </section>
  );
}