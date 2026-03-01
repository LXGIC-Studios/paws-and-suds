interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-lavender/30">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-dark/70 mb-3">{description}</p>
      {price && <p className="font-heading font-bold text-coral text-lg">{price}</p>}
    </div>
  );
}
