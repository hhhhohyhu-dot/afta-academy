import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp"; 
import TopBar from "@/components/TopBar"; 
import ScrollProgress from "@/components/ScrollProgress"; 
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "أكاديمية AFTA للتدريب المطاري وضيافة الطيران | AFTA Aviation Academy",
  description: "أكاديمية AFTA المتخصصة في مهن الطيران، مضيفي ومضيفات الطيران، والخدمات المطرية والأسفار بالمغرب. تكوين احترافي وفرص عمل مضمونة.",
  keywords: ["AFTA Academy", "أكاديمية AFTA", "مضيف طيران", "طيران المغرب", "تكوين مطاري", "Flight Attendant Morocco", "Aviation Academy"],
  authors: [{ name: "AFTA Academy" }],
  openGraph: {
    title: "أكاديمية AFTA للتدريب المطاري وضيافة الطيران",
    description: "انضم إلى أقوى برنامج تكوين في مجال ضيافة الطيران والخدمات المطارية بالمغرب.",
    locale: "ar_MA",
    type: "website",
  },
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
      suppressHydrationWarning
    >
      <body 
        className={`${tajawal.className} min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LoadingScreen />
          <ScrollProgress />
          <TopBar />
          
          {children}
          
          <BackToTop />
          <FloatingWhatsApp /> 
        </ThemeProvider>
      </body>
    </html>
  );
}