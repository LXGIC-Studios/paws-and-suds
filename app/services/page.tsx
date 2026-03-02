import Link from "next/link";
import { Scissors, Heart, Dog, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Dog size={20} />,
    name: "Bath & Brush",
    price: "Starting at $35",
    desc: "Full wash with premium shampoo and conditioner, blow dry, and thorough brush out. Includes ear cleaning and paw pad moisturizing.",
  },
  {
    icon: <Scissors size={20} />,
    name: "Full Groom",
    price: "Starting at $55",
    desc: "Everything in Bath & Brush, plus a breed-appropriate haircut, nail trim, ear cleaning, and sanitary trim. Your pup leaves looking their absolute best.",
  },
  {
    icon: <span className="inline-block w-5 h-5"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2C6 2 3 5 3 8c0 2 1 3 2 4l5 6 5-6c1-1 2-2 2-4 0-3-3-6-7-6z"/></svg></span>,
    name: "Nail Trim",
    price: "$15",
    desc: "Quick, gentle nail trimming with precision clippers. We go at your pup's pace to keep them comfortable.",
  },
  {
    icon: <span className="inline-block w-5 h-5"><svg viewBox="0 0 20 20" fill="currentColor"><rect x="3" y="6" width="2" height="10" rx="1"/><rect x="7" y="3" width="2" height="13" rx="1"/><rect x="11" y="5" width="2" height="11" rx="1"/><rect x="15" y="7" width="2" height="9" rx="1"/></svg></span>,
    name: "De-shedding Treatment",
    price: "Starting at $45",
    desc: "Specialized de-shedding shampoo and conditioner, followed by high-velocity blow dry and thorough brush out with de-shedding tools. Dramatically reduces loose fur.",
  },
  {
    icon: <Heart size={20} />,
    name: "Puppy's First Groom",
    price: "Starting at $30",
    desc: "A gentle, positive introduction to grooming for puppies under 6 months. We take it slow, use lots of treats, and make sure their first experience is a great one.",
  },
];

const addons = [
  { name: "Teeth Brushing", price: "$10" },
  { name: "Flea Treatment", price: "$15" },
  { name: "Nail Grinding", price: "$8" },
  { name: "Blueberry Facial", price: "$12" },
  { name: "Cologne Spritz", price: "$5" },
];

const packages = [
  {
    name: "The Essentials",
    desc: "Bath & Brush + Nail Trim + Teeth Brushing",
    price: "from $50",
    note: "Save $10",
  },
  {
    name: "The Full Pampering",
    desc: "Full Groom + Blueberry Facial + Cologne Spritz",
    price: "from $65",
    note: "Save $12",
  },
  {
    name: "Puppy Welcome Package",
    desc: "Puppy's First Groom + Nail Grinding + Cologne Spritz",
    price: "from $38",
    note: "Save $10",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-[family-name:var(--font-nunito)] text-4xl font-bold text-dark text-center mb-4">
        Services & Pricing
      </h1>
      <p className="text-center text-dark/50 mb-12">
        Every pup gets our full attention and care
      </p>

      {/* Services List */}
      <div className="divide-y divide-dark/10">
        {services.map((s) => (
          <div
            key={s.name}
            className="py-6 flex items-start gap-4 group hover:pl-3 hover:border-l-2 hover:border-coral transition-all duration-300"
          >
            <span className="text-coral mt-0.5 shrink-0">{s.icon}</span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-[family-name:var(--font-nunito)] font-bold text-dark text-lg">
                  {s.name}
                </h3>
                <span className="text-sm text-dark/50 whitespace-nowrap">
                  {s.price}
                </span>
              </div>
              <p className="text-sm text-dark/50 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-16">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-dark text-center mb-8">
          Add-Ons
        </h2>
        <div className="bg-lavender rounded-2xl p-6">
          <div className="divide-y divide-dark/10">
            {addons.map((a) => (
              <div
                key={a.name}
                className="py-3 flex items-center justify-between"
              >
                <span className="text-dark/70 flex items-center gap-2">
                  <Sparkles size={14} className="text-coral" />
                  {a.name}
                </span>
                <span className="text-sm text-dark/50">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Package Deals */}
      <div className="mt-16">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-dark text-center mb-8">
          Package Deals
        </h2>
        <div className="space-y-4">
          {packages.map((p) => (
            <div
              key={p.name}
              className="border border-dark/10 rounded-2xl p-6 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-[family-name:var(--font-nunito)] font-bold text-dark">
                  {p.name}
                </h3>
                <div className="text-right">
                  <span className="text-dark font-medium">{p.price}</span>
                  <span className="block text-xs text-coral font-medium">
                    {p.note}
                  </span>
                </div>
              </div>
              <p className="text-sm text-dark/50 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* First Visit */}
      <div className="mt-16 bg-yellow-soft rounded-2xl p-8 text-center">
        <h3 className="font-[family-name:var(--font-nunito)] font-bold text-dark text-lg mb-2">
          First Visit?
        </h3>
        <p className="text-dark/60 text-sm leading-relaxed">
          Please arrive 10 minutes early for your first visit so we can meet
          your pup and discuss their needs.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/book"
          className="inline-block px-10 py-3.5 bg-coral text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
