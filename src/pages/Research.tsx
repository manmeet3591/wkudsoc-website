import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import {
  disasterAITools,
  researchAreas,
  publications,
} from '../data/research';
import {
  Brain,
  Map,
  CloudRain,
  ArrowRight,
  Cpu,
  Wind,
  RadioTower,
  Leaf,
  ExternalLink,
} from 'lucide-react';

const aiToolIcons = [Brain, Map, CloudRain];

const researchAreaIcons = [Cpu, Wind, RadioTower, Leaf];

export default function Research() {
  useEffect(() => {
    document.title = 'Research & Innovation - WKU DSOC';
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="Research & Innovation"
        subtitle="Advancing disaster science through AI, data analytics, and operational meteorology research."
      />

      {/* Disaster AI Tools */}
      <section className="py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Disaster AI"
              title="AI-Powered Tools"
              subtitle="Purpose-driven tools built by the DSOC AI Laboratory to improve forecasting, tracking, and community resilience."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {disasterAITools.map((tool, index) => {
              const Icon = aiToolIcons[index];
              return (
                <motion.div key={tool.slug} variants={fadeInUp}>
                  <GlassCard className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-wku-red/20 to-wku-red-light/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-wku-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-5">
                      {tool.name}
                    </h3>
                    <p className="text-text-secondary mt-3 flex-grow leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-wku-red text-sm font-medium hover:underline"
                      >
                        Launch App{' '}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 sm:py-16 lg:py-24 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wku-red/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Focus Areas"
              title="Research Areas"
              subtitle="Core research domains driving DSOC's scientific contributions and operational capabilities."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {researchAreas.map((area, index) => {
              const Icon = researchAreaIcons[index];
              return (
                <motion.div key={area.slug} variants={fadeInUp}>
                  <GlassCard className="p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-wku-red/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-wku-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {area.name}
                    </h3>
                    <p className="text-text-secondary mt-3 leading-relaxed">
                      {area.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Published Work"
              title="Publications"
              subtitle="Peer-reviewed research from DSOC faculty and students contributing to the advancement of disaster science."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 space-y-4"
          >
            {publications.map((pub, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-wku-red/20 transition-colors duration-300">
                  <p className="text-sm text-text-secondary">
                    {pub.authors} ({pub.year})
                  </p>
                  <p className="text-white font-medium mt-1 italic">
                    {pub.title}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {pub.journal}
                  </p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-wku-red text-xs mt-2 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {pub.doi}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
