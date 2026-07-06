"use client";

import Image from "next/image";
import { useState } from "react"; // أضفنا useState

interface GalleryProps {
  lang: "ar" | "en";
}

const photos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

export default function Gallery({ lang }: GalleryProps) {
  // حالة (State) باش نسجلو الصورة اللي بغينا نكبرو
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-12 tracking-tight">
          {lang === "ar" ? "معرض الصور" : "Gallery"}
        </h2>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-2xl group shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(photo)} // فاش يبرك المستخدم، كنسجلو الصورة
            >
              <Image
                src={photo}
                alt={`Afta Academy Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay خفيف كيبان فاش كتحط السوري */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500 z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* النافذة المنبثقة (Lightbox) لتكبير الصورة */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-opacity"
          onClick={() => setSelectedImage(null)} // سدان النافذة فاش تبرك فاي بلاصة خاوية
        >
          {/* زر الإغلاق */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-4xl md:text-5xl font-bold hover:text-orange-500 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          {/* الصورة المكبرة */}
          <div className="relative w-full max-w-5xl h-[80vh] md:h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged Gallery Image"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }} // contain باش الصورة تبان كاملة بلا ما تتقطع
              priority // باش الصورة المكبرة تحمل بالزربة
            />
          </div>
        </div>
      )}
    </section>
  );
}