"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  { src: "/images/dog1.jpg", caption: "Cooper after his spa day" },
  { src: "/images/dog2.jpg", caption: "Bella looking fabulous" },
  { src: "/images/dog3.jpg", caption: "Milo's first groom" },
  { src: "/images/dog4.jpg", caption: "Fresh and fluffy" },
  { src: "/images/dog5.jpg", caption: "Bath time bliss" },
  { src: "/images/dog6.jpg", caption: "Best friends, freshly groomed" },
  { src: "/images/dog7.jpg", caption: "Ready for the runway" },
  { src: "/images/dog8.jpg", caption: "Puppy perfection" },
  { src: "/images/dog9.jpg", caption: "Living the spa life" },
  { src: "/images/dog10.jpg", caption: "All smiles after grooming" },
  { src: "/images/dog11.jpg", caption: "Looking dapper" },
  { src: "/images/dog12.jpg", caption: "Cuddle-ready clean" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-dark text-center mb-4">
        Gallery
      </h1>
      <p className="text-center text-dark/50 mb-12">
        Some of our favorite transformations
      </p>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setSelected(i)}
          >
            <div className="overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-300">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={400}
                height={300 + (i % 4) * 60}
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs text-dark/40 mt-2 text-center group-hover:text-dark/60 transition-colors duration-300">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[selected].src}
              alt={photos[selected].caption}
              width={900}
              height={600}
              className="w-full rounded-2xl object-cover"
            />
            <p className="text-center text-white/60 text-sm mt-4">
              {photos[selected].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
