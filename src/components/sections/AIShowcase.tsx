import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { disasterAITools } from '../../data/research';
import { Brain, Map, CloudRain, ArrowRight } from 'lucide-react';

const toolIcons = [Brain, Map, CloudRain];

export default function AIShowcase() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wku-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          overline="Disaster AI"
          title="AI-Powered Tools"
          subtitle="Purpose-driven tools built by the DSOC AI Laboratory to improve forecasting, tracking, and community resilience."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {disasterAITools.map((tool, index) => {
            const Icon = toolIcons[index];
            return (
              <motion.div key={tool.slug} variants={fadeInUp}>
                <GlassCard className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wku-red/20 to-wku-red-light/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-wku-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-4">
                    {tool.name}
                  </h3>
                  <p className="text-text-secondary mt-2 text-sm flex-grow">
                    {tool.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-wku-red text-sm font-medium cursor-pointer hover:underline">
                      Launch App <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            href="/research"
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Research
          </Button>
        </div>
      </div>
    </section>
  );
}
