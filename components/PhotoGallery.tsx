import Image from "next/image";

interface PhotoGalleryProps {
  images: { src: string; alt: string }[];
  columns?: number;
}

export default function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  const gridCols = columns === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3";
  return (
    <div className={`grid ${gridCols} gap-4`}>
      {images.map((img, i) => (
        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
        </div>
      ))}
    </div>
  );
}
