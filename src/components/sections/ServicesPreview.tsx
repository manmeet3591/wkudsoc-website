import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { services } from '../../data/services';
import {
  Calendar,
  CloudLightning,
  ShieldAlert,
  BarChart3,
  GraduationCap,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  CloudLightning,
  ShieldAlert,
  BarChart3,
  GraduationCap,
  Briefcase,
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          overline="What We Do"
          title="Our Services"
          subtitle="From operational forecasting to AI-driven research, DSOC delivers comprehensive weather intelligence and disaster support."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <motion.div key={service.slug} variants={fadeInUp}>
                <GlassCard className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 flex-grow line-clamp-3">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            href="/services"
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
