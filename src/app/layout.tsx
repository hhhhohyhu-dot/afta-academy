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
      suppressHydrationWarning
    >
      <body className={`${tajawal.className} min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300`}>
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