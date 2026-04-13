import GlassCard from '../ui/GlassCard';
import type { Service } from '../../data/services';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import {
  Calendar,
  CloudLightning,
  ShieldAlert,
  BarChart3,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  CloudLightning,
  ShieldAlert,
  BarChart3,
  GraduationCap,
  Briefcase,
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard className="p-4 sm:p-6 lg:p-8 h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-wku-red/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-wku-red" />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-white mt-4">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mt-2">{service.description}</p>

        {/* Key Points */}
        <ul className="mt-4 space-y-2">
          {service.keyPoints.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-wku-red-light flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="mt-6">
          <span className="text-wku-red text-sm font-medium cursor-pointer hover:underline">
            Learn more &rarr;
          </span>
        </div>
      </GlassCard>
    </motion.div>
  );
}
