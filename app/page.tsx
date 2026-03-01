import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  { icon: "🛁", title: "Bath & Brush", description: "A refreshing bath with premium shampoo, blow-dry, and brush-out.", price: "From $35" },
  { icon: "✂️", title: "Full Groom", description: "Complete grooming including haircut, bath, nail trim, and ear cleaning.", price: "From $55" },
  { icon: "💅", title: "Nail Trim", description: "Quick and gentle nail trimming to keep paws healthy.", price: "From $15" },
  { icon: "🧹", title: "De-shedding", description: "Specialized treatment to reduce shedding up to 80%.", price: "From $45" },
  { icon: "🐶", title: "Puppy's First Groom", description: "A gentle introduction to grooming for puppies under 6 months.", price: "From $30" },
];

const galleryImages = [
  { src: "/images/hero.jpg", alt: "Happy dog" },
  { src: "/images/dog-bath.jpg", alt: "Dog getting a bath" },
  { src: "/images/poodle.jpg", alt: "Groomed poodle" },
  { src: "/images/puppy.jpg", alt: "Cute puppy" },
  { src: "/images/portrait.jpg", alt: "Dog portrait" },
  { src: "/images/golden.jpg", alt: "Golden retriever" },
];

const testimonials = [
  { name: "Sarah M.", pet: "Bella (Golden Retriever)", text: "Paws & Suds is the only place I trust with Bella. She comes out looking and smelling amazing every time!", stars: 5 },
  { name: "James T.", pet: "Max (French Bulldog)", text: "Max used to hate grooming, but the team here made him feel so comfortable. Now he gets excited for his appointments!", stars: 5 },
  { name: "Lisa R.", pet: "Daisy (Poodle Mix)", text: "Incredible attention to detail and such a warm, welcoming atmosphere. Daisy always looks like a show dog after her visits.", stars: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-lavender/30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Pup Deserves a <span className="text-coral">Spa Day</span> 🐾
            </h1>
            <p className="text-lg text-dark/70 max-w-lg">
              Professional dog grooming in a stress-free, loving environment. Because every good boy (and girl) deserves to look and feel their best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/book" className="bg-coral text-white font-heading font-bold px-8 py-3 rounded-xl hover:bg-coral/90 transition-colors text-lg inline-block text-center">
                Book an Appointment
              </Link>
              <Link href="/services" className="border-2 border-coral text-coral font-heading font-bold px-8 py-3 rounded-xl hover:bg-coral hover:text-white transition-colors text-lg inline-block text-center">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/hero.jpg" alt="Happy dog at spa" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-center text-dark/60 mb-10 max-w-xl mx-auto">From a quick nail trim to a full spa experience, we&apos;ve got your pup covered.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-lavender/20 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { size: "Small Dogs", weight: "Under 25 lbs", price: "$35+", emoji: "🐕" },
              { size: "Medium Dogs", weight: "25–50 lbs", price: "$50+", emoji: "🦮" },
              { size: "Large Dogs", weight: "50+ lbs", price: "$65+", emoji: "🐕‍🦺" },
            ].map((p) => (
              <div key={p.size} className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-2">{p.emoji}</div>
                <h3 className="font-heading text-xl font-bold">{p.size}</h3>
                <p className="text-sm text-dark/60 mb-3">{p.weight}</p>
                <p className="font-heading text-3xl font-bold text-coral">{p.price}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-block mt-8 text-coral font-heading font-bold hover:underline">
            See full pricing →
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">Happy Pups Gallery 📸</h2>
        <p className="text-center text-dark/60 mb-10">Some of our favorite furry clients looking their best!</p>
        <PhotoGallery images={galleryImages} />
      </section>

      {/* Testimonials */}
      <section className="bg-lavender/20 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">What Pet Parents Say 💬</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Pamper Your Pup?</h2>
        <p className="text-dark/60 mb-8 text-lg">Book your appointment today and give your furry friend the spa day they deserve!</p>
        <Link href="/book" className="bg-coral text-white font-heading font-bold px-10 py-4 rounded-xl hover:bg-coral/90 transition-colors text-xl inline-block">
          Book Now 🐾
        </Link>
      </section>
    </>
  );
}
