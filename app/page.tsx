import Link from "next/link";
import Image from "next/image";
import { Scissors, Heart, Dog } from "lucide-react";
import PawPrint from "@/components/PawPrint";

const services = [
  {
    icon: <Dog size={20} />,
    name: "Bath & Brush",
    price: "Starting at $35",
    desc: "Full wash, blow dry, and brush out",
  },
  {
    icon: <Scissors size={20} />,
    name: "Full Groom",
    price: "Starting at $55",
    desc: "Bath plus haircut, nail trim, ear cleaning",
  },
  {
    icon: <span className="inline-block w-5 h-5"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2C6 2 3 5 3 8c0 2 1 3 2 4l5 6 5-6c1-1 2-2 2-4 0-3-3-6-7-6z"/></svg></span>,
    name: "Nail Trim",
    price: "$15",
    desc: "Quick and gentle nail trimming",
  },
  {
    icon: <span className="inline-block w-5 h-5"><svg viewBox="0 0 20 20" fill="currentColor"><rect x="3" y="6" width="2" height="10" rx="1"/><rect x="7" y="3" width="2" height="13" rx="1"/><rect x="11" y="5" width="2" height="11" rx="1"/><rect x="15" y="7" width="2" height="9" rx="1"/></svg></span>,
    name: "De-shedding Treatment",
    price: "Starting at $45",
    desc: "Reduce shedding with specialized tools",
  },
  {
    icon: <Heart size={20} />,
    name: "Puppy's First Groom",
    price: "Starting at $30",
    desc: "Gentle introduction for puppies under 6 months",
  },
];

const testimonials = [
  {
    quote: "My golden retriever has never looked so good. They were so gentle with him!",
    name: "Megan C.",
    pet: "Cooper (Golden Retriever)",
  },
  {
    quote: "Paws & Suds is the only groomer my picky poodle will tolerate. That says everything.",
    name: "Andre J.",
    pet: "Bella (Standard Poodle)",
  },
  {
    quote: "The puppy first groom package was perfect. My little guy was nervous but they handled it beautifully.",
    name: "Stephanie H.",
    pet: "Milo (French Bulldog)",
  },
];

const galleryImages = [
  { src: "/images/dog1.jpg", alt: "Happy golden retriever" },
  { src: "/images/dog2.jpg", alt: "Well-groomed poodle" },
  { src: "/images/dog3.jpg", alt: "Adorable french bulldog" },
  { src: "/images/dog4.jpg", alt: "Fluffy white dog" },
  { src: "/images/dog5.jpg", alt: "Dog enjoying bath time" },
  { src: "/images/dog6.jpg", alt: "Two dogs playing" },
  { src: "/images/dog7.jpg", alt: "Golden retriever portrait" },
  { src: "/images/dog8.jpg", alt: "French bulldog puppy" },
];

const pricing = [
  { size: "Small", weight: "Under 25 lbs", price: "$35", badge: null },
  { size: "Medium", weight: "25-50 lbs", price: "$50", badge: "Most Popular" },
  { size: "Large", weight: "50+ lbs", price: "$65", badge: null },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-16">
        <div className="rounded-[20px] overflow-hidden mx-auto max-w-3xl">
          <Image
            src="/images/dog1.jpg"
            alt="Happy groomed dog"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover"
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
          <Link
            href="/book"
            className="inline-block mt-8 px-8 py-3 bg-coral text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-lavender py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
            Our Services
          </h2>
          <div className="divide-y divide-dark/10">
            {services.map((s) => (
              <div
                key={s.name}
                className="py-5 flex items-start gap-4 group hover:pl-3 hover:border-l-2 hover:border-coral transition-all duration-300"
              >
                <span className="text-coral mt-0.5 shrink-0">{s.icon}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-nunito)] font-bold text-dark">
                      {s.name}
                    </h3>
                    <span className="text-sm text-dark/50 whitespace-nowrap">
                      {s.price}
                    </span>
                  </div>
                  <p className="text-sm text-dark/50 mt-1">{s.desc}</p>
                </div>
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

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.size}
              className={`rounded-2xl p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md ${
                p.badge ? "bg-lavender" : "bg-white border border-dark/10"
              }`}
            >
              {p.badge && (
                <span className="inline-block text-xs font-medium text-white bg-coral rounded-full px-3 py-1 mb-3">
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

      {/* Gallery */}
      <section className="bg-lavender py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark text-center mb-10">
            Gallery
          </h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300 + (i % 3) * 80}
                  className="w-full object-cover"
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
                &mdash; {t.name}, {t.pet}
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
