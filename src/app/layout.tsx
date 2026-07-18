import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp"; 
import TopBar from "@/components/TopBar"; 
import ScrollProgress from "@/components/ScrollProgress"; 
import BackToTop from "@/components/BackToTop"; // <-- استيراد الزر الجديد

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  // ... (خلي الميتا داتا ديالك كيما هي)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} h-full antialiased font-sans`}
    >
      <body className={`${tajawal.className} min-h-full flex flex-col bg-slate-50 text-slate-800`}>
        <ScrollProgress />
        <TopBar />
        
        {children}
        
        {/* زدنا الزر هنا باش يبان فالموقع كامل */}
        <BackToTop />
        <FloatingWhatsApp /> 
      </body>
    </html>
  );
}