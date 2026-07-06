import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp"; 
import TopBar from "@/components/TopBar"; 
import ScrollProgress from "@/components/ScrollProgress"; 
import BackToTop from "@/components/BackToTop"; // <-- استيراد الزر الجديد

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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