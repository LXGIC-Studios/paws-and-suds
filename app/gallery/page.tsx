import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";

const images = [
  { src: "/images/hero.jpg", alt: "Happy dog smiling" },
  { src: "/images/dog-bath.jpg", alt: "Dog enjoying a bath" },
  { src: "/images/poodle.jpg", alt: "Freshly groomed poodle" },
  { src: "/images/fluffy-dog.jpg", alt: "Fluffy dog portrait" },
  { src: "/images/golden.jpg", alt: "Golden retriever looking fresh" },
  { src: "/images/labrador.jpg", alt: "Labrador after grooming" },
  { src: "/images/corgi.jpg", alt: "Happy corgi" },
  { src: "/images/small-dog.jpg", alt: "Small dog after grooming" },
  { src: "/images/portrait.jpg", alt: "Dog portrait" },
  { src: "/images/schnauzer.jpg", alt: "Schnauzer looking sharp" },
  { src: "/images/puppy.jpg", alt: "Adorable puppy" },
  { src: "/images/closeup.jpg", alt: "Dog closeup" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-lavender-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label mb-3">See Our Work</p>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-5">Our Gallery</h1>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Check out some of our happiest clients! Every pup leaves looking (and feeling) like a star.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28">
        <PhotoGallery images={images} columns={4} />
      </section>

      <section className="text-center pb-28">
        <p className="text-dark/50 mb-6 text-lg">Want your pup to be featured?</p>
        <Link href="/book" className="bg-coral text-white font-heading font-bold px-10 py-4 rounded-2xl hover:bg-coral-dark hover:scale-[1.03] hover:shadow-xl transition-all text-lg inline-block shadow-lg">
          Book a Groom
        </Link>
      </section>
    </>
  );
}
