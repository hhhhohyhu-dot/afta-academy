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
  metadataBase: new URL("https://afta-academy.vercel.app"),

  title: {
    default: "AFTA Academy Meknes",
    template: "%s | AFTA Academy Meknes",
  },

  description:
    "AFTA Academy Meknes is a leading aviation academy in Morocco offering Cabin Crew, Flight Attendant, Travel & Tourism and Hospitality training.",

  keywords: [
    "AFTA Academy",
    "AFTA Academy Meknes",
    "Aviation Academy Morocco",
    "Cabin Crew Morocco",
    "Flight Attendant Morocco",
    "Travel and Tourism",
    "Hospitality",
    "Meknes",
    "Morocco",
    "Formation Hôtesse de l'air",
    "École d'aviation",
    "وكيل سفر وطيران",
    "مضيفات الطيران",
    "أكاديمية الطيران",
    "معهد الطيران بالمغرب",
  ],

  openGraph: {
    title: "AFTA Academy Meknes",
    description:
      "Professional Aviation & Cabin Crew Training in Morocco",
    url: "https://afta-academy.vercel.app",
    siteName: "AFTA Academy Meknes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aviation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AFTA Academy Meknes",
    description: "Professional Aviation Training in Morocco",
    images: ["/images/aviation.jpg"],
  },
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