import Link from "next/link";
import Image from "next/image";
import { Scissors, Droplets, Heart, Wind, Baby } from "lucide-react";
import PawPrint from "@/components/PawPrint";

const services = [
  {
    icon: <Droplets size={20} />,
    name: "Bath & Brush",
    desc: "Full wash, blow dry, and brush out",
    price: "Starting at $35",
  },
  {
    icon: <Scissors size={20} />,
    name: "Full Groom",
    desc: "Bath plus haircut, nail trim, ear cleaning",
    price: "Starting at $55",
  },
  {
    icon: <Heart size={20} />,
    name: "Nail Trim",
    desc: "Quick and gentle nail trimming",
    price: "$15",
  },
  {
    icon: <Wind size={20} />,
    name: "De-shedding Treatment",
    desc: "Reduce shedding with specialized tools",
    price: "Starting at $45",
  },
  {
    icon: <Baby size={20} />,
    name: "Puppy's First Groom",
    desc: "Gentle introduction for puppies under 6 months",
    price: "Starting at $30",
  },
];

const pricing = [
  { size: "Small Dogs", weight: "Under 25 lbs", price: "$35", badge: null },
  {
    size: "Medium Dogs",
    weight: "25-50 lbs",
    price: "$50",
    badge: "Most Popular",
  },
  { size: "Large Dogs", weight: "50+ lbs", price: "$65", badge: null },
];

const galleryImages = [
  { src: "/images/dog1.jpg", alt: "Happy golden retriever", tall: true },
  { src: "/images/dog2.jpg", alt: "Well-groomed poodle", tall: false },
  { src: "/images/dog3.jpg", alt: "Adorable french bulldog", tall: false },
  { src: "/images/dog4.jpg", alt: "Fluffy white dog", tall: true },
  { src: "/images/dog5.jpg", alt: "Dog enjoying bath time", tall: false },
  { src: "/images/dog6.jpg", alt: "Two dogs playing", tall: true },
  { src: "/images/dog7.jpg", alt: "Golden retriever portrait", tall: false },
  { src: "/images/dog8.jpg", alt: "French bulldog puppy", tall: false },
];

const testimonials = [
  {
    quote:
      "My golden retriever has never looked so good. They were so gentle with him!",
    name: "Megan C.",
    pet: "Cooper (Golden Retriever)",
  },
  {
    quote:
      "Paws & Suds is the only groomer my picky poodle will tolerate. That says everything.",
    name: "Andre J.",
    pet: "Bella (Standard Poodle)",
  },
  {
    quote:
      "The puppy first groom package was perfect. My little guy was nervous but they handled it beautifully.",
    name: "Stephanie H.",
    pet: "Milo (French Bulldog)",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero - Contained image card, NOT full-width */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-16">
        <div className="rounded-3xl overflow-hidden mx-4 md:mx-8">
          <Image
            src="/images/dog1.jpg"
            alt="Happy groomed dog"
            width={900}
            height={550}
            className="w-full h-[360px] md:h-[440px] object-cover"
            priority
          />
        </div>
        <div className="text-center mt-10">
          <h2 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-bold text-dark leading-tight">
            Your Pup Deserves a Spa Day
          </h2>
          <p className="mt-4 text-dark/60 text-lg max-w-md mx-auto">
            Professional grooming in a stress-free, loving environment
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/book"
              className="px-8 py-3 bg-coral text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Book an Appointment
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-3 border-2 border-lavender text-dark/70 font-medium rounded-full hover:bg-lavender transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services - Vertical menu list */}
      <section className="bg-lavender py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
            Our Services
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-8">
            {services.map((s, i) => (
              <div key={s.name}>
                <div className="flex items-center gap-4 py-4">
                  <span className="text-coral shrink-0">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-nunito)] font-bold text-dark">
                      {s.name}
                    </h3>
                    <p className="text-sm text-dark/50 mt-0.5">{s.desc}</p>
                  </div>
                  <span className="text-sm text-dark/50 whitespace-nowrap shrink-0">
                    {s.price}
                  </span>
                </div>
                {i < services.length - 1 && (
                  <div className="border-b border-dark/8" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-sm text-coral hover:underline transition-colors duration-300"
            >
              View full menu & pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing - Three rounded cards */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {pricing.map((p) => (
            <div
              key={p.size}
              className={`rounded-2xl p-8 text-center transition-all duration-300 ${
                p.badge
                  ? "bg-lavender shadow-lg scale-105 relative"
                  : "bg-white border border-dark/10 hover:shadow-md"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-white bg-coral rounded-full px-4 py-1">
                  {p.badge}
                </span>
              )}
              <h3 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-dark">
                {p.size}
              </h3>
              <p className="text-sm text-dark/50 mt-1">{p.weight}</p>
              <p className="text-3xl font-bold text-dark mt-4">
                from {p.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery - Masonry grid */}
      <section className="bg-lavender py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
            Gallery
          </h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={img.tall ? 500 : 300}
                  className={`w-full object-cover ${
                    img.tall ? "h-[320px]" : "h-[220px]"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="text-sm text-coral hover:underline transition-colors duration-300"
            >
              See more photos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-14">
          Kind Words
        </h2>
        {testimonials.map((t, i) => (
          <div key={i}>
            <div className="text-center">
              <p className="text-lg text-dark/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm text-dark/50">
                - {t.name}, {t.pet}
              </p>
            </div>
            {i < testimonials.length - 1 && (
              <div className="flex justify-center my-10">
                <PawPrint className="text-coral/40" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-lavender rounded-3xl p-12 md:p-16 text-center">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-bold text-dark">
            Ready to Pamper Your Pup?
          </h2>
          <Link
            href="/book"
            className="inline-block mt-8 px-10 py-3.5 bg-coral text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
