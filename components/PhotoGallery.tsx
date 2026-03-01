import Image from "next/image";

interface PhotoGalleryProps {
  images: { src: string; alt: string }[];
  columns?: number;
}

export default function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  const gridCols = columns === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3";
  return (
    <div className={`grid ${gridCols} gap-5`}>
      {images.map((img, i) => (
        <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
