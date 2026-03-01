import { Droplets, Scissors, Hand, Wind, Dog } from "lucide-react";
import { type ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  bath: <Droplets className="w-7 h-7 text-coral" />,
  groom: <Scissors className="w-7 h-7 text-coral" />,
  nail: <Hand className="w-7 h-7 text-coral" />,
  deshed: <Wind className="w-7 h-7 text-coral" />,
  puppy: <Dog className="w-7 h-7 text-coral" />,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center border border-lavender/30 hover:bg-lavender-light/30">
      <div className="w-16 h-16 rounded-2xl bg-lavender-light flex items-center justify-center mx-auto mb-5">
        {iconMap[icon] || <Scissors className="w-7 h-7 text-coral" />}
      </div>
      <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark/60 mb-4 leading-relaxed">{description}</p>
      {price && <p className="font-heading font-extrabold text-coral text-xl">{price}</p>}
    </div>
  );
}
