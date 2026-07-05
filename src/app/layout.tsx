import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFTA Academy Meknes | Aviation & Cabin Crew Training in Morocco",
  description:
    "AFTA Academy Meknes is a leading aviation academy in Morocco specializing in Cabin Crew, Flight Attendant, Travel & Tourism, Hospitality, and Aviation training.",
  keywords: [
    "AFTA Academy",
    "AFTA Academy Meknes",
    "Aviation Academy Morocco",
    "Cabin Crew Morocco",
    "Flight Attendant Morocco",
    "Air Hostess Morocco",
    "Steward Morocco",
    "Travel and Tourism",
    "Hospitality Training",
    "Aviation School Meknes",
    "Morocco Aviation Academy",
    "Cabin Crew Training",
    "Formation Hôtesse de l'air Maroc",
    "École d'aviation Maroc",
    "معهد الطيران",
    "أكاديمية الطيران",
    "مضيفات الطيران",
    "مضيفي الطيران",
    "التسجيل في أكاديمية الطيران",
    "مكناس",
  ],
  authors: [{ name: "AFTA Academy Meknes" }],
  creator: "AFTA Academy Meknes",
  publisher: "AFTA Academy Meknes",
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
        {children}
      </body>
    </html>
  );
}