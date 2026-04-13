import { useEffect, useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { partners, consortiumMembers } from '../data/partners';
import { MapPin, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

type FilterCategory = 'all' | 'internal' | 'emergency-response' | 'federal' | 'industry' | 'client';

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Internal', value: 'internal' },
  { label: 'Emergency', value: 'emergency-response' },
  { label: 'Federal', value: 'federal' },
  { label: 'Industry', value: 'industry' },
  { label: 'Clients', value: 'client' },
];

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'internal':
      return 'Internal Partner';
    case 'emergency-response':
      return 'Emergency Response';
    case 'federal':
      return 'Federal Agency';
    case 'industry':
      return 'Industry Partner';
    case 'client':
      return 'Client';
    default:
      return category;
  }
}

export default function Partners() {
  useEffect(() => {
    document.title = 'Our Partners - WKU DSOC';
  }, []);

  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredPartners =
    activeFilter === 'all'
      ? partners
      : partners.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <PageHero
        title="Our Partners"
        subtitle="Growing Key Partnerships is the Cornerstone of Our Success"
      />

      {/* Partners Grid */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Partnerships"
              title="Partner Organizations"
              subtitle="DSOC collaborates with organizations across government, industry, and emergency management."
            />
          </ScrollReveal>

          {/* Filter Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={clsx(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                  activeFilter === tab.value
                    ? 'bg-electric text-white'
                    : 'bg-white/5 text-text-secondary border border-white/10 hover:border-electric hover:text-electric'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeFilter}
          >
            {filteredPartners.map((partner) => (
              <motion.div key={partner.name} variants={fadeInUp}>
                <GlassCard className="p-6 h-full">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-electric/20 text-electric mb-3">
                    {getCategoryLabel(partner.category)}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {partner.name}
                  </h3>
                  {partner.description && (
                    <p className="text-sm text-text-secondary mt-2">
                      {partner.description}
                    </p>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consortium Members */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Regional Network"
              title="Emergency Management Consortium"
              subtitle="DSOC coordinates with county emergency management agencies across south-central Kentucky to build regional disaster resilience."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {consortiumMembers.map((member) => (
              <motion.div key={member.county} variants={fadeInUp}>
                <GlassCard className="p-4 h-full">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-electric flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {member.county} County
                      </p>
                      <p className="text-xs text-text-secondary">
                        Emergency Management
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Become a Partner
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Interested in collaborating with DSOC? We are always looking for new
              partners who share our commitment to community safety and disaster
              resilience.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
