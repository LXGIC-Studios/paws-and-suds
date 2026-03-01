import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";

const images = [
  { src: "/images/hero.jpg", alt: "Happy dog smiling" },
  { src: "/images/dog-bath.jpg", alt: "Dog enjoying a bath" },
  { src: "/images/poodle.jpg", alt: "Freshly groomed poodle" },
  { src: "/images/puppy.jpg", alt: "Adorable puppy" },
  { src: "/images/portrait.jpg", alt: "Dog portrait" },
  { src: "/images/golden.jpg", alt: "Golden retriever looking fresh" },
  { src: "/images/small-dog.jpg", alt: "Small dog after grooming" },
  { src: "/images/closeup.jpg", alt: "Dog closeup" },
  { src: "/images/poodle.jpg", alt: "Poodle looking fabulous" },
  { src: "/images/puppy.jpg", alt: "Happy puppy after first groom" },
  { src: "/images/portrait.jpg", alt: "Best boy portrait" },
  { src: "/images/golden.jpg", alt: "Golden retriever spa day" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-lavender/30 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Check out some of our happiest clients! Every pup leaves looking (and feeling) like a star.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <PhotoGallery images={images} columns={4} />
      </section>

      <section className="text-center pb-16">
        <p className="text-dark/60 mb-4">Want your pup to be featured?</p>
        <Link href="/book" className="bg-coral text-white font-heading font-bold px-8 py-3 rounded-xl hover:bg-coral/90 transition-colors inline-block">
          Book a Groom
        </Link>
      </section>
    </>
  );
}
