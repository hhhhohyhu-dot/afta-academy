/** @jsxImportSource react */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface GalleryProps {
  lang: 'en' | 'ar';
}

const photos = [
  { src: "/images/aviation.jpg", width: 800, height: 600 },
  { src: "/images/classroom.jpg", width: 800, height: 1200 },
  { src: "/images/maritime.jpg", width: 1200, height: 800 },
];

export default function Gallery({ lang }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-20 px-6 bg-slate-950">
      <h2 className="text-4xl font-black text-white text-center mb-12">
        {lang === 'ar' ? 'معرض الصور' : 'Academy Gallery'}
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 600) return 1;
            if (containerWidth < 900) return 2;
            return 3;
          }}
          spacing={20}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={({ photo, imageProps: { alt, style, ref } }) => (
            <div 
              className="relative group overflow-hidden rounded-2xl cursor-pointer" 
              style={{ ...style, width: "100%" }} 
              ref={ref}
            >
              <Image
                src={photo.src}
                alt={alt || "Academy Image"}
                width={photo.width}
                height={photo.height}
                className="transition-transform duration-700 group-hover:scale-110 object-cover w-full h-auto"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        />
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </section>
  );
}