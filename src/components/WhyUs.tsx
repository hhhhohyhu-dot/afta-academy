import { translations } from "@/i18n";
export default function WhyUs({ lang }: { lang: 'ar' | 'fr' | 'en' }) {
  return <section className="p-10 text-center text-2xl font-bold">{translations[lang].whyUs.title}</section>;
}