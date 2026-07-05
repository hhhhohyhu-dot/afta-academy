interface TestimonialsProps { lang: "ar" | "fr" | "en"; }
export default function Testimonials({ lang }: TestimonialsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black">Our Success Stories</h2>
      </div>
    </section>
  );
}