/** @jsxImportSource react */
"use client";
import React from 'react';

interface FooterProps {
  lang: 'en' | 'ar';
}

export default function Footer({ lang }: FooterProps) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* قسم التواصل */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            
            {/* Email */}
            <a href="mailto:contact@afta-academy.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="font-medium text-lg">contact@afta-academy.com</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/2126XXXXXXXX" className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <span className="font-medium text-lg">+212 6 XX-XXXXXX</span>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/afta_academy" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-colors group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7 21h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4z"></path></svg>
              </div>
              <span className="font-medium text-lg">@afta_academy</span>
            </a>

          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 font-medium">
            {isAr 
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} أكاديمية AFTA` 
              : `All rights reserved © ${new Date().getFullYear()} AFTA Academy`}
          </p>
        </div>
        
      </div>
    </footer>
  );
}