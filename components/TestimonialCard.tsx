interface TestimonialCardProps {
  name: string;
  pet: string;
  text: string;
  stars?: number;
}

export default function TestimonialCard({ name, pet, text, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-yellow-pop text-xl mb-4">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
      <p className="text-dark/70 italic mb-6 leading-relaxed text-lg">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-lavender pt-4">
        <p className="font-heading font-bold text-lg">{name}</p>
        <p className="text-sm text-dark/50">{pet}</p>
      </div>
    </div>
  );
}
