import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  { icon: "bath", title: "Bath & Brush", description: "A refreshing bath with premium shampoo, blow-dry, and brush-out.", price: "From $35" },
  { icon: "groom", title: "Full Groom", description: "Complete grooming including haircut, bath, nail trim, and ear cleaning.", price: "From $55" },
  { icon: "nail", title: "Nail Trim", description: "Quick and gentle nail trimming to keep paws healthy.", price: "From $15" },
  { icon: "deshed", title: "De-shedding", description: "Specialized treatment to reduce shedding up to 80%.", price: "From $45" },
  { icon: "puppy", title: "Puppy's First Groom", description: "A gentle introduction to grooming for puppies under 6 months.", price: "From $30" },
];

const galleryImages = [
  { src: "/images/hero.jpg", alt: "Happy dog" },
  { src: "/images/dog-bath.jpg", alt: "Dog getting a bath" },
  { src: "/images/poodle.jpg", alt: "Groomed poodle" },
  { src: "/images/fluffy-dog.jpg", alt: "Fluffy dog smiling" },
  { src: "/images/golden.jpg", alt: "Golden retriever" },
  { src: "/images/labrador.jpg", alt: "Labrador looking fresh" },
];

const testimonials = [
  { name: "Megan C.", pet: "Cooper, Golden Retriever", text: "My golden retriever has never looked so good. They were so gentle with him!", stars: 5 },
  { name: "Andre J.", pet: "Bella, Standard Poodle", text: "Paws & Suds is the only groomer my picky poodle will tolerate. That says everything.", stars: 5 },
  { name: "Stephanie H.", pet: "Milo, French Bulldog", text: "The puppy first groom package was perfect. My little guy was nervous but they handled it beautifully.", stars: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Happy dog at spa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-dark/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <p className="section-label mb-4 text-yellow-pop tracking-[0.2em]">Premium Pet Grooming</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white max-w-2xl">
            Your Pup Deserves a <span className="text-coral">Spa Day</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg mt-6 leading-relaxed">
            Professional dog grooming in a stress-free, loving environment. Because every good boy (and girl) deserves to look and feel their best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/book" className="bg-coral text-white font-heading font-bold px-10 py-4 rounded-2xl hover:bg-coral-dark hover:scale-[1.03] hover:shadow-xl transition-all text-lg inline-block text-center shadow-lg">
              Book an Appointment
            </Link>
            <Link href="/services" className="border-2 border-white/60 text-white font-heading font-bold px-10 py-4 rounded-2xl hover:bg-white hover:text-dark transition-all text-lg inline-block text-center backdrop-blur-sm">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold">Our Services</h2>
          <p className="text-dark/60 mt-4 max-w-xl mx-auto text-lg">From a quick nail trim to a full spa experience, we&apos;ve got your pup covered.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-lavender-light py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Transparent Pricing</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-14">Simple, Honest Pricing</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { size: "Small Dogs", weight: "Under 25 lbs", price: "$35+", label: "S", featured: false },
              { size: "Medium Dogs", weight: "25-50 lbs", price: "$50+", label: "M", featured: true },
              { size: "Large Dogs", weight: "50+ lbs", price: "$65+", label: "L", featured: false },
            ].map((p) => (
              <div key={p.size} className={`bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${p.featured ? "shadow-xl ring-2 ring-coral scale-[1.04]" : "shadow-md"}`}>
                {p.featured && <p className="text-xs font-heading font-bold text-coral uppercase tracking-wider mb-3">Most Popular</p>}
                <div className="w-14 h-14 rounded-full bg-coral/10 text-coral font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">{p.label}</div>
                <h3 className="font-heading text-xl font-bold">{p.size}</h3>
                <p className="text-sm text-dark/50 mb-4">{p.weight}</p>
                <p className="font-heading text-4xl font-extrabold text-coral">{p.price}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-block mt-12 text-coral font-heading font-bold text-lg hover:underline underline-offset-4">
            See full pricing
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Our Work</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold">Happy Pups Gallery</h2>
          <p className="text-dark/60 mt-4 text-lg">Some of our favorite furry clients looking their best!</p>
        </div>
        <PhotoGallery images={galleryImages} />
      </section>

      {/* Testimonials */}
      <section className="bg-lavender-light py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold">What Pet Parents Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Get Started</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">Ready to Pamper Your Pup?</h2>
          <p className="text-dark/60 mb-10 text-lg max-w-xl mx-auto">Book your appointment today and give your furry friend the spa day they deserve!</p>
          <Link href="/book" className="bg-coral text-white font-heading font-bold px-12 py-5 rounded-2xl hover:bg-coral-dark hover:scale-[1.03] hover:shadow-xl transition-all text-xl inline-block shadow-lg">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
