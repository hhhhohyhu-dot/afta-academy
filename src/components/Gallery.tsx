"use client";

import Image from "next/image";

interface GalleryProps {
  lang: "ar" | "en";
}

const photos = [
  "/images/aviation.jpg",
  "/images/classroom.jpg",
  "/images/maritime.jpg",
  "/images/im3.jpg",
  "/images/im4.jpg",
  "/images/aviation1.jpg",
];

export default function Gallery({ lang }: GalleryProps) {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-12">
          {lang === "ar" ? "معرض الصور" : "Gallery"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-2xl"
            >
              <Image
                src={photo}
                alt="Gallery"
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}