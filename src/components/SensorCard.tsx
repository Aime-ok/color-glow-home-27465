import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SensorCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  variant: 'temperature' | 'humidity';
}

const SensorCard = ({ title, value, unit, icon: Icon, variant }: SensorCardProps) => {
  const gradientClass = variant === 'temperature' ? 'bg-gradient-temperature' : 'bg-gradient-humidity';

  return (
    <Card className={`${gradientClass} shadow-card hover:shadow-float transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up border-0 p-6 relative overflow-hidden group`}>
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      
      <div className="flex items-center justify-between text-white relative z-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{title}</p>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-bold tracking-tight">{value}</span>
            <span className="text-xl font-semibold opacity-80">{unit}</span>
          </div>
        </div>
        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner-glow group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </Card>
  );
};

export default SensorCard;