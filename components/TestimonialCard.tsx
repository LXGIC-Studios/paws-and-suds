interface TestimonialCardProps {
  name: string;
  pet: string;
  text: string;
  stars?: number;
}

export default function TestimonialCard({ name, pet, text, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-lavender/20 rounded-2xl p-6 shadow-sm">
      <div className="text-yellow-pop text-lg mb-2">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
      <p className="text-dark/80 italic mb-4">&ldquo;{text}&rdquo;</p>
      <p className="font-heading font-bold">{name}</p>
      <p className="text-sm text-dark/60">Pet: {pet}</p>
    </div>
  );
}
