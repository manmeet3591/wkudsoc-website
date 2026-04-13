import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import ServiceCard from '../components/shared/ServiceCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '../lib/animations';
import { services } from '../data/services';

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services - WKU DSOC';
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive weather intelligence and disaster support for communities, events, and industry."
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
